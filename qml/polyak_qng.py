import pennylane as qml
from pennylane import numpy as np
import matplotlib.pyplot as plt
import numpy as std_np
import json
import os

num_qubits = 6
num_layers = 3
n_steps = 50
dev = qml.device("lightning.gpu", wires=num_qubits)

h_field = 1.0
coeffs = []
observables = []
for i in range(num_qubits - 1):
    coeffs.append(-1.0)
    observables.append(qml.PauliZ(i) @ qml.PauliZ(i+1))
for i in range(num_qubits):
    coeffs.append(-h_field)
    observables.append(qml.PauliX(i))
H = qml.Hamiltonian(coeffs, observables)

h1_norm = np.sum(np.abs(coeffs))

def ansatz(params):
    for layer in range(num_layers):
        for q in range(num_qubits):
            qml.RX(params[layer, q, 0], wires=q)
            qml.RY(params[layer, q, 1], wires=q)
        for q in range(num_qubits - 1):
            qml.CNOT(wires=[q, q+1])

@qml.qnode(dev)
def cost_fn(params):
    ansatz(params)
    return qml.expval(H)

@qml.qnode(dev)
def var_fn(params):
    ansatz(params)
    return qml.var(H)

eigvals = np.linalg.eigvalsh(qml.matrix(H, wire_order=range(num_qubits)))
delta = eigvals[1] - eigvals[0]
grad_fn = qml.grad(cost_fn)
# Same metric tensor the QNGOptimizer uses by default (block-diag approximation, lam=0)
metric_fn = qml.metric_tensor(cost_fn, approx="block-diag")
n_params = num_layers * num_qubits * 2

patience = 5
all_qng_pc, all_best_qng, all_switch_qng = [], [], []

for _ in range(5):
    params = np.random.normal(0, np.pi, (num_layers, num_qubits, 2), requires_grad=True)
    initial_params = params.copy()

    ######################## Our method ##########################
    qng_pc_params = initial_params.copy()
    qng_pc_costs = []
    regimes = []
    best_cost_qng = np.inf
    best_params_qng = qng_pc_params.copy()
    no_improve_qng = 0
    refining_qng = False
    switch_qng = None
    qng_pc_opt = qml.QNGOptimizer(stepsize=0.1)

    for step in range(n_steps):
        cost = cost_fn(qng_pc_params)
        qng_pc_costs.append(cost)
        if step % 10 == 0:
          print(f"Step {step:03d}: Cost = {cost:.6f}")

        if cost < best_cost_qng:
            best_cost_qng = cost
            best_params_qng = qng_pc_params.copy()
            no_improve_qng = 0
        else:
            no_improve_qng += 1

        if not refining_qng and no_improve_qng >= patience:
            refining_qng = True
            qng_pc_params = best_params_qng.copy()
            no_improve_qng = 0
            switch_qng = step + 1

        if not refining_qng:
            # Polyak step in the metric G: lr = sigma / (g^T G^-1 g)
            # (first-order predicted decrease lr * g^T G^-1 g = sigma, same as Polyak GD)
            var = var_fn(qng_pc_params)
            std = np.sqrt(var)
            regimes.append("Temple" if std < delta else "Weinstein")
            G = np.reshape(metric_fn(qng_pc_params), (n_params, n_params))
            g = np.reshape(grad_fn(qng_pc_params), (n_params,))
            nat_grad_norm_sq = g @ np.linalg.pinv(G) @ g  # QNGOptimizer also uses pinv(G)
            qng_pc_opt.stepsize = std / (nat_grad_norm_sq + 1e-8)
            # Reuse G so the optimizer doesn't recompute the metric tensor
            qng_pc_opt.metric_tensor = G
            qng_pc_params = qng_pc_opt.step(cost_fn, qng_pc_params, recompute_tensor=False)
        else:
            regimes.append("Constant")
            qng_pc_opt.stepsize = 0.1
            qng_pc_params = qng_pc_opt.step(cost_fn, qng_pc_params)

    all_qng_pc.append([float(c) for c in qng_pc_costs])
    all_best_qng.append(std_np.minimum.accumulate(all_qng_pc[-1]))
    all_switch_qng.append(switch_qng)

best_curve_qng = std_np.mean(all_best_qng, axis=0)

print(f"Average Best cost = {best_curve_qng[-1]:.6f}  (GSE = {eigvals[0]:.6f})")

x = list(range(1, n_steps + 1))
save_path = f"/content/drive/MyDrive/DaMRL/qml_steplsize_runs/{num_qubits}q_{num_layers}l.json"

# Only replace the polyak_qng entry so the existing sgd/adam/qng/polyak_gd results are kept
if os.path.exists(save_path):
    with open(save_path) as f:
        results = json.load(f)
else:
    results = {"num_qubits": int(num_qubits), "num_layers": int(num_layers)}
results["gse"] = float(eigvals[0])
results["polyak_qng"] = {}
for r in range(5):
    i = r + 1
    results["polyak_qng"][f"x{i}"] = x
    results["polyak_qng"][f"loss{i}"] = [float(c) for c in all_qng_pc[r]]
    results["polyak_qng"][f"best_loss{i}"] = [float(c) for c in all_best_qng[r]]
    results["polyak_qng"][f"best_energy{i}"] = float(all_best_qng[r][-1])
    results["polyak_qng"][f"weinstein_vs_constant{i}"] = all_switch_qng[r]

with open(save_path, "w") as f:
    json.dump(results, f)

plt.figure(figsize=(8, 5))
plt.plot(best_curve_qng, marker='d', markersize=3, linestyle='-', color='tab:cyan', linewidth=3, label="Polyak -> QNG (best so far)")
plt.axhline(eigvals[0], color='black', linestyle=':', linewidth=4, label="GSE")
regimes = ["Weinstein" if r == "Temple" else r for r in regimes]
colors = {"Weinstein": "red", "Constant": "green"}
labeled = set()
start = 0
for i in range(1, len(regimes) + 1):
    if i == len(regimes) or regimes[i] != regimes[start]:
        r = regimes[start]
        plt.axvspan(start, i, color=colors[r], alpha=0.15,
                    label=r if r not in labeled else None)
        labeled.add(r)
        if i < len(regimes):
            plt.axvline(i, color='k', linestyle='--', linewidth=1.5)
        start = i
plt.xlabel("Optimization Step", fontsize=16)
plt.ylabel("Expectation Value (Cost)", fontsize=16)
plt.tick_params(labelsize=14)
plt.legend(fontsize=14, framealpha=1, loc='upper right')
plt.grid(True, linewidth=2.5)
plt.show()

// Work Experience
const ng_nordic = {
    company: 'NG Nordic',
    imgURL: '/nglogo.png',
    title: 'Software Engineer Intern',
    startDate: 'May 2024',
    endDate: 'August 2024',
}

const damrl = {
    company: 'DAMRL Laboratory',
    imgURL: '/daMRLLogo.png',
    title: 'Research Assistant',
    startDate: 'November 2023',
    endDate: 'Present',
}

const sintef = {
    company: 'SINTEF',
    imgURL: '/sinteflogo.jpg',
    title: 'Research Intern',
    startDate: 'May 2026',
    endDate: 'August 2026',
}

const university_washington = {
    company: 'University of Washington',
    imgURL: '/udublogo.png',
    title: 'Research Intern',
    startDate: 'August 2025',
    endDate: 'August 2025',
}

export const experiences = [sintef, university_washington, damrl, ng_nordic];

// Research papers
const course_job_pap = {
  title: "Course-Job Fit: Understanding the Contextual Relationship Between Computing Courses and Employment Opportunities",
  authors: ['Christopher Kverne', 'Federico Monteverdi', 'Agoritsa Polyzou', 'Christine Lisetti', 'Janki Bhimani'],
  conference: 'ASEE 2025 Conference (30%)',
  link: 'https://nemo.asee.org/public/conferences/365/papers/48456/view',
  isPublished: true,
  underReview: false,
  workingOn: false
}

const qnn_cp_pap = {
  title: "Quantum Neural Networks Need Checkpointing",
  authors: ['Christopher Kverne', 'Mayur Akewar', 'Yuqian Huo', 'Tirthak Patel', 'Janki Bhimani'],
  conference: 'ACM HotStorage 2025 (33%)',
  link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_yVb-LMAAAAJ&citation_for_view=_yVb-LMAAAAJ:u5HHmVD_uO8C',
  isPublished: true,
  underReview: false,
  workingOn: false
}

const quantum_transpilation = {
  title: "Revisiting Noise-adaptive Transpilation in Quantum Computing: How Much Impact Does it Have?",
  authors: ['Yuqian Huo', 'Jinbiao Wei','Christopher Kverne', 'Mayur Akewar', 'Janki Bhimani','Tirthak Patel'],
  conference: 'ICCAD 2025 (24%)',
  link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_yVb-LMAAAAJ&citation_for_view=_yVb-LMAAAAJ:9yKSN-GCB0IC',
  isPublished: true,
  underReview: false,
  workingOn: false
}

const llm_advisor_paper = {
  title: "Aurora: Neuro-Symbolic AI Driven Advising Agent",
  authors: ['Lorena Amanda Quincoso Lugones','Christopher Kverne', 'Nityam Sharadkumar Bhimani', 'Ana Carolina Oliveira' ,'Agoritsa Polyzou', 'Christine Lisetti', 'Janki Bhimani'],
  conference: 'SAC 2026 (23%)',
  link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_yVb-LMAAAAJ&citation_for_view=_yVb-LMAAAAJ:UeHWp8X0CEIC',
  isPublished: true,
  underReview: false,
  workingOn: false
}

const qnn_freezing_pap = {
  title: "WSBD: Freezing-Based Optimizer for Quantum Neural Networks",
  authors: ['Christopher Kverne', 'Mayur Akewar', 'Yuqian Huo', 'Tirthak Patel', 'Janki Bhimani'],
  conference: 'AISTATS 2026 (28%)',
  link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_yVb-LMAAAAJ&citation_for_view=_yVb-LMAAAAJ:qjMakFHDy7sC',
  isPublished: true,
  underReview: false,
  workingOn: false
}

export const papers = [qnn_freezing_pap, llm_advisor_paper, qnn_cp_pap, quantum_transpilation, course_job_pap]

// Honors and awards
export const awards = [
  { title: 'CRA Outstanding Undergraduate Researcher Award 2026', description: 'Runner up.' },
  { title: 'CRA Outstanding Undergraduate Researcher Award 2025', description: 'Honorable Mention.' },
  { title: 'Outstanding Graduate Student College of Computing', description: 'Selected as the most outstanding B.S CS student out of 350 graduates.' },
  { title: 'Outstanding Senior Design Project', description: 'Selected as the best Capstone II project out of 120 projects.' },
  { title: 'ACM SAC 2026', description: 'Best paper AI & Agents Award.' },
  { title: 'FIU OURS Research Scholarship ($8000)', description: 'One of 20 students selected for fully funded Spring-Fall research.' },
  { title: 'ACM HotStorage Travel Grant ($500)', description: 'Fully funded registration and travel to present my paper.' },
]

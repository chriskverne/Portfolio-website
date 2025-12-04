export const courseWork = [
    { 'Calculus 1 & 2': 'A' }, 
    //{ 'Physics 1': 'A-' }, 
    //{ 'Physics 1 Lab': 'A-' }, 
    //{ 'Programming 1': 'A' }, 
    //{ 'Programming 2': 'A-' }, 
    { 'Discrete Mathematics': 'A' }, 
    { 'Probability & Statistics': 'A' }, 
    // { 'Computer Architecture': 'A-' }, 
    // { 'Data Structures': 'A' }, 
    //{ 'Systems Programming': 'A' }, 
    // { 'Physics 2': 'B+' }, 
    //{ 'Physics 2 Lab': 'A' }, 
    //{ 'Technology in Global Arena': 'A' }, 
    //{ 'Machine Learning': 'A' }, 
    //{ 'Software Engineering': '' }, 
    //{ 'Capstone 1': 'A' }, 
    // { 'Operating Systems': 'A' }, 
    {'Linear Algebra': ''},
    {'Multivarible Calculus' : ''},
    {'Graph Theory': ''},
    // {'Quantum Computing' : ''},
    {'Differential Equations':''},
    {'Numerical Analysis':''},
    {'Combinatorics':''},
    {'Computational Geometry':''}
];

export const mathCourses = [
  { 'Calculus 1': 'A' }, 
  { 'Calculus 2': 'A' }, 
  { 'Physics 1': 'A-' }, 
  { 'Discrete Mathematics': 'A' }, 
  { 'Probability & Statistics': 'A' }, 
  { 'Physics 2': 'B+' }, 
  { 'Linear Algebra': 'In Progress' }, 
  { 'Multivariabel Calculus': 'In Progress' }, 
  { 'Graph Theory': 'In Progress' }, 
  { 'Theory of Algorithms': 'In Progress' }, 

];


export const awards = ['Global Scholarship ($6300)', 'Dean’s list 4x', '2X NSF Stipend ($4250)', 'CRA Undergraduate Researcher Nomination'];

// Work Experience
const experience1 = {
    company: 'NG Nordic',
    imgURL: '/nglogo.png',
    title: 'Software Engineer Intern',
    startDate: 'May 2024',
    endDate: 'August 2024',
    subSections : [
        { subTitle: '',
          description: [
            'Developed a full stack web application using Next.js, PostgreSQL, and Azure for a disposal facility, integrating authentication with NextAuth and Azure AD.', 
            'Engineered a automatic live data fetching system from a PostgreSQL database on Azure, implementing server-side caching to reduce server workload.', 
            'Implemented a chat feature, by deploying a separate PostgreSQL database on Vercel, ensuring seamless communication between users.',
            'Created multiple graphs and filters to display real-time traffic flow data, aiding onsite workers in better understanding and management, reducing traffic by 5-10% each day.'
          ]
        }
    ]
  }

  const experience2 = {
    company: 'DAMRL Laboratory',
    imgURL: '/daMRLLogo.png',
    title: 'Undergraduate Research Assistant',
    startDate: 'November 2023',
    endDate: 'Present',
    subSections : [
        { subTitle: 'Educational NLP Project:',
          description: [
            'First authored a paper that compares the alignment between classes and jobs by utilizing and fine tuning the Google SBERT transformer model.', 
            'Gathered job postings with Indeed API, cleaned them with SpaCy, vectorized text using SBERT, and calculated the cosine similarity between jobs and course embeddings.', 
            'Created metrics on average similarities and mean salaries to rank classes on their similarities to the job market, which identified top skills like teamwork and communication.',
            'Found a mismatch between 50% of the courses taught and skills needed in the industry which my university will use to re-evaluate their curriculum.'
          ]
        },
        { subTitle: 'Key-Value SSD Project:',
          description: [
            'Conducted research on Key-Value SSD storage systems by developing a new Indexing technique in Python and C that stores smaller entry values within memory.',
            'Performed multiple workload tests to get an idea of the distributions within the storage system by using data from Twitter traces, finding that 70-98% of the Data was stored within the translation pages, proving our hashing approach is optimal for intensive I/O  operations'
          ]
        }
    ]
  }

  const experience3 = {
    company: 'Florida International University',
    imgURL: '/FIULogo.png',
    title: 'Learning Assistant',
    startDate: 'January 2023',
    endDate: 'April 2023',
    subSections : [
        { subTitle: '',
          description: [
            'Tutored a class of 100+ students in calculus 1. Held weekly office hours and exam reviews to improve students’ knowledge and performance. 5 students increased their grades by 2 letters.'
          ]
        }
    ]
  }

  // const experience4 = {
  //   company: 'INIT',
  //   imgURL: '/init_fiu_logo.jpg',
  //   title: 'SGA Ambassador',
  //   startDate: 'December 2022',
  //   endDate: 'August 2023',
  //   subSections : [
  //       { subTitle: 'SGA Representative',
  //         description: [
  //           "Elected as one of FIU’s engineering senator, advocating for INIT",
  //           "Increased membership by 100 students and funding by 5000$ USD."
  //         ]
  //       }, { subTitle: 'Shellhacks Leader',
  //         description: [
  //           "Hosted Florida’s largest hackathon, lasting 3 days, with 1200 attendees, and 18 sponsors.",
  //           "Led 2 workshops, held a teambuilding activity, and a game tournament."
  //         ]
  //       }
  //   ]
  // }

const experience5 = {
    company: 'Florida International University',
    imgURL: '/FIULogo.png',
    title: 'Teaching Assistant',
    startDate: 'January 2023',
    endDate: 'December 2024',
    subSections : [
        { subTitle: '',
          description: [
            'Tutored a class of 40+ students in data structures and algorithms. Held weekly office hours and graded homework and exams.'
          ]
        }
    ]
}

const sintef = {
    company: 'SINTEF',
    imgURL: '/sinteflogo.jpg',
    title: 'Incoming Research Intern',
    startDate: 'May 2026',
    endDate: 'August 2026',
}

const university_washington =  {
    company: 'University of Washington',
    imgURL: '/udublogo.png',
    title: 'Machine Learning Research Intern',
    startDate: 'August 2025',
    endDate: 'August 2025',
}

export const experiences = [sintef, university_washington, experience2, experience1, ];

// Research papers
const kv_pap = {
  //title: "Emulating In-Storage Indexing for High Performance Key-Value Storage Devices",
  title: "KV Indexing Paper",
  description: [],
  authors: ['Manoj P. Saha', 'Christopher Kverne', 'Danlin Jia', 'Janki Bhimani', 'Ningfang Mi'],

  //conference: 'IEEE TCC',
  conference: 'IEEE TC',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

const course_job_pap = {
  title: "Course-Job Fit: Understanding the Contextual Relationship Between Computing Courses and Employment Opportunities",
  description: [],
  authors: ['Christopher Kverne', 'Federico Monteverdi', 'Agoritsa Polyzou', 'Christine Lisetti', 'Janki Bhimani'],
  conference: 'ASEE 2025 Conference (30%)',
  img: '',
  link: 'https://nemo.asee.org/public/conferences/365/papers/48456/view',
  isPublished: true,
  underReview: false,
  workingOn: false
}

const qnn_cp_pap = {
  title: "Quantum Neural Networks Need Checkpointing",
  description: [],
  authors: ['Christopher Kverne', 'Mayur Akewar', 'Yuqian Huo', 'Tirthak Patel', 'Janki Bhimani'],
  conference: 'ACM HotStorage 2025 (33%)',
  link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_yVb-LMAAAAJ&citation_for_view=_yVb-LMAAAAJ:u5HHmVD_uO8C',
  isPublished: true,
  underReview: false,
  workingOn: false
}

const quantum_transpilation = {
  title: "Revisiting Noise-adaptive Transpilation in Quantum Computing: How Much Impact Does it Have?",
  description: [],
  authors: ['Yuqian Huo', 'Jinbiao Wei','Christopher Kverne', 'Mayur Akewar', 'Janki Bhimani','Tirthak Patel'],
  conference: 'ICCAD 2025 (24%)',
  link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_yVb-LMAAAAJ&citation_for_view=_yVb-LMAAAAJ:9yKSN-GCB0IC',
  isPublished: true,
  underReview: false,
  workingOn: false
}

const llm_advisor_paper = {
  title: "LLM Avisor Paper",
  description: [],
  authors: ['Lorena Quincoso Lugones','Christopher Kverne', 'Agoritsa Polyzou', 'Christine Lisetti', 'Janki Bhimani'],
  conference: 'Anonymous Conference (name and paper disclosed until accepted)',
  img: '',
  link: '',
  isPublished: false,
  underReview: false,
  workingOn: true
}

const qnn_noise_pap = {
  title: "Convergence Guarantees in Noisy Training Enviornments",
  description: [],
  authors: ['Mayur Akewar', 'Christopher Kverne', 'Yuqian Huo', 'Tirthak Patel', 'Janki Bhimani'],
  conference: 'Sigmetrics 2026',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

const qnn_freezing_pap = {
  title: "Stochastic-Block Wise Optimization Algorithm",
  description: [],
  authors: ['Christopher Kverne', 'Mayur Akewar', 'Yuqian Huo', 'Tirthak Patel', 'Janki Bhimani'],
  conference: 'AISTATS 2026',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

const qnn_L_smoothness = {
  title: "Smoothness Guarantees and Landscape Behaviour in VQAs",
  description: [],
  authors: ['Christopher Kverne', 'Mayur Akewar', 'Nicholas S. DiBrita', 'Yuqian Huo', 'Tirthak Patel', 'Janki Bhimani'],
  conference: 'ICLR 2026',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

const second_order_first_order = {
  title: "Diagonal Newton's Method approach at First-order Cost",
  description: [],
  authors: ['Christopher Kverne'],
  conference: 'AAAI 2026',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

export const papers = [qnn_L_smoothness,qnn_freezing_pap, qnn_noise_pap, qnn_cp_pap, quantum_transpilation, course_job_pap, kv_pap,llm_advisor_paper]

// Projects:,
// export const project4 = {
//   title: 'LSM Key Value Store',
//   link: 'https://github.com/chriskverne/NoSQL-Database',
//   description: [
//     'Developed an in-memory key-value store (MemTable) with dynamica flushing to disk upon reaching capacity.',
//     'Implemented a LSM Tree to manage multi-level disk storage using tombstones for deletion management.',
//     'Designed a Skip List data structure to enhance in-memory operations with O(log⁡n) searches and O(1) updates.'
//   ]
// }

export const project2 = {
  title: 'Neural Network (From Scratch)',
  link: 'https://github.com/chriskverne/Neural-Network-from-Scratch',
  description: [
    'Implemented a neural network from scratch in python only using NumPy matrices.',
    'Designed custom ReLU and Softmax activation functions along with categorical crossentropy loss for forward and backwards propagation.',
    'Designed RMSProp, SGD, Adagrad and ADAM optimizers with learning rate decay.'
  ]
}

export const project1 = {
  title: 'Encoder-Decoder LSTM Summary Model',
  link: 'https://github.com/chriskverne/seq2seq-LSTM-Text-Summarizer',
  description: [
    'Developed an Encoder-Decoder LSTM-network for summarizing text in PyTorch.',
    'Trained model on the EdinburghNLP XSum dataset with custom data preprocessing and tokenization using the Roberta tokenizer.',
    'Utilized teacher forcing and greedy decoding methods to improve training dynamics and summary generation.'
  ]
}

export const projects = [project1, project2]
export const courseWork = [
    { 'Calculus 1': 'A' }, 
    { 'Calculus 2': 'A' }, 
    { 'Physics 1': 'A-' }, 
    { 'Physics 1 Lab': 'A-' }, 
    { 'Programming 1': 'A' }, 
    { 'Programming 2': 'A-' }, 
    { 'Discrete Mathematics': 'A' }, 
    { 'Probability & Statistics': 'A' }, 
    { 'Computer Architecture': 'A-' }, 
    { 'Data Structures': 'A' }, 
    { 'Systems Programming': 'A' }, 
    { 'Physics 2': 'B+' }, 
    { 'Physics 2 Lab': 'A' }, 
    { 'Technology in Global Arena': 'A' }, 
    { 'Machine Learning': 'A' }, 
    //{ 'Software Engineering': '' }, 
    { 'Capstone 1': 'A' }, 
    { 'Operating Systems': 'A' }, 
    {'Linear Algebra': ''},
    {'Multivarible Calculus' : ''},
    {'Graph Theory': ''},
    {'Quantum Computing' : ''}
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


export const awards = ['Global Scholarship ($6300)', 'Dean’s list 4x', 'NSF Stipend ($4250)'];

// Work Experience
const experience1 = {
    company: 'NG Group',
    imgURL: '/logo2.svg',
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
    company: 'Data Management Research Laboratory',
    imgURL: '/daMRLLogo.png',
    title: 'Research Intern',
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
    startDate: 'April 2024',
    endDate: 'December 2024',
    subSections : [
        { subTitle: '',
          description: [
            'Tutored a class of 40+ students in data structures and algorithms. Held weekly office hours and graded homework and exams.'
          ]
        }
    ]
}

export const experiences = [experience2, experience5, experience3, experience1];

// Research papers
export const kv_pap = {
  //title: "Emulating In-Storage Indexing for High Performance Key-Value Storage Devices",
  title: "KV Indexing Paper",
  description: [],
  //conference: 'IEEE TCC',
  conference: 'Anonymous Conference (until accepted)',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

export const course_job_pap = {
  title: "Course-Job Fit: Understanding the Contextual Relationship Between Computing Courses and Employment Opportunities",
  description: [],
  authors: ['Christopher Kverne, Federico Monteverdi, Agoritsa Polyzou, Christine Lisetti, Janki Bhimani'],
  conference: 'ASEE 2025 Conference',
  img: '',
  link: '',
  isPublished: true,
  underReview: false,
  workingOn: false
}

export const qnn_cp_pap = {
  title: "Quantum Neural Network Paper",
  description: [],
  conference: 'Anonymous Conference (until accepted)',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

export const papers = [qnn_cp_pap, course_job_pap, kv_pap]

// Projects:
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
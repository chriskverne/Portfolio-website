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
    { 'Machine Learning': '' }, 
    { 'Software Engineering': '' }, 
    { 'Capstone 1': '' }, 
    { 'Operating Systems': '' }, 
];

export const awards = ['Global Scholarship ($6300)', 'Dean’s list 4x', 'NSF Stipend ($4250)'];

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
    startDate: 'January 2024',
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
    startDate: 'January 2024',
    endDate: 'April 2024',
    subSections : [
        { subTitle: '',
          description: [
            'Tutored a class of 100+ students in calculus 1. Held weekly office hours and exam reviews to improve students’ knowledge and performance. 5 students increased their grades by 2 letters.'
          ]
        }
    ]
  }

  const experience4 = {
    company: 'INIT',
    imgURL: '/init_fiu_logo.jpg',
    title: 'SGA Ambassador',
    startDate: 'December 2022',
    endDate: 'August 2023',
    subSections : [
        { subTitle: 'SGA Representative',
          description: [
            "Elected as one of FIU’s engineering senator, advocating for INIT",
            "Increased membership by 100 students and funding by 5000$ USD."
          ]
        }, { subTitle: 'Shellhacks Leader',
          description: [
            "Hosted Florida’s largest hackathon, lasting 3 days, with 1200 attendees, and 18 sponsors.",
            "Led 2 workshops, held a teambuilding activity, and a game tournament."
          ]
        }
    ]
  }

  const experience5 = {
    company: 'Florida International University',
    imgURL: '/FIULogo.png',
    title: 'Teaching Assistant',
    startDate: 'August 2024',
    endDate: 'Present',
    subSections : [
        { subTitle: '',
          description: [
            'Tutored a class of 40+ students in data structures and algorithms. Held weekly office hours and graded homework and exams.'
          ]
        }
    ]
  }

export const experiences = [experience2, experience5, experience1, experience3, experience4];

export const paper1 = {
  title: "Emulating In-Storage Indexing for High Performance Key-Value Storage Devices",
  description: [],
  conference: null,
  link: null,
  isPublished: false,
  underReview: false,
  workingOn: true
}

export const paper2 = {
  title: "Course-Job Fit: Leveraging Language Models to Understand the Relevance of Computer Science Courses to Employment Opportunities",
  description: [],
  conference: 'SigCSE 2025',
  link: null,
  isPublished: false,
  underReview: true,
  workingOn: false
}

export const paper3 = {
  title: "LLM CS Advising Agent",
  description: [],
  conference: null,
  link: null,
  isPublished: false,
  underReview: false,
  workingOn: true
}

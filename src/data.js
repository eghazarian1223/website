export const portfolio = {
  name: 'Ella',
  fullName: 'Ella Ghazarian',
  initials: 'EG',
  handle: 'backend / data / maps',
  location: 'Ann Arbor, MI',
  email: 'ellaghaz@umich.edu',
  githubUrl: 'https://github.com/eghazarian1223',
  linkedinUrl: 'https://linkedin.com/in/ella',
  devpostUrl: 'https://devpost.com/ella',
  resumeUrl: '/Ella_Ghazarian_Resume.pdf',
  roles: ['backend engineer', 'data science student', 'systems debugger', 'hackathon builder'],
  intro:
    "University of Michigan data science student (go blue! 〽️) interested in backend and product engineering 🌸 Usually feeding into my café addiction ☕, rewatching early 2000s TV shows 📺, being chronically online, or building something for a hackathon every once in a while.",
  projectsIntro: '',
  about:
    "I'm studying Data Science at the University of Michigan, where my favorite problems sit between backend engineering and applied data work. I like taking unclear systems, finding the failure modes, and turning them into something a user can trust.",
  aboutExtra:
    'Recently that has meant outage data APIs at Microsoft, route-risk analysis with FastAPI and Google Routes, Firestore-backed task systems, and machine learning research for aspect-based sentiment analysis.',
};

export const projects = [
  {
    id: 'safetyfirst',
    title: 'SafetyFirst',
    tag: 'JacHacks',
    accent: 'coral',
    description:
      'A route safety analysis system that detects risky pedestrian transitions, models route segments as ordered graph pieces, and exposes API endpoints for rerouting recommendations.',
    tech: ['Python', 'FastAPI', 'Google Routes API'],
    metric: 'unsafe segment detection',
    image: '/screenshots/safetyfirst.png',
  },
  {
    id: 'productivepanda',
    title: 'ProductivePanda',
    tag: 'Mood-Aware Tasks',
    accent: 'green',
    description:
      'A mood-based task manager that uses NLP to analyze input, reorganize to-do lists, and suggest uplifting tasks while keeping mood and task data modular.',
    tech: ['Python', 'Flask', 'Firestore'],
    metric: 'sentiment-aware planning',
    image: '', // e.g. '/screenshots/productivepanda.png'
  },
  {
    id: 'dilemmai',
    title: 'DilemmAI',
    tag: '1st @ UncommonHacks',
    accent: 'violet',
    description:
      'A game theory application where users design strategies for an AI agent, run simulations, and evaluate outcomes through a dynamic Tailwind interface.',
    tech: ['JavaScript', 'TailwindCSS', 'Figma'],
    metric: 'award-winning strategy sim',
    image: '/screenshots/dilemmai.png',
  },
  {
    id: 'sentiment-lab',
    title: 'AI/ML Research',
    tag: 'AI/ML Research',
    accent: 'blue',
    description:
      'A research project applying machine learning techniques to aspect-based sentiment analysis, improving topic-specific sentiment accuracy by 20%.',
    tech: ['Python', 'ML', 'NLP'],
    metric: '20% accuracy lift',
    image: '/screenshots/aiml-research.png',
  },
  {
    id: 'retrotune',
    title: 'RetroTune',
    tag: 'Hackathon',
    accent: 'coral',
    description: 'Description coming soon.',
    tech: ['Python', 'Reflex'],
    metric: '',
    image: '/screenshots/retrotune.png',
  },
];

export const educationItems = [
  { school: 'University of Michigan – Ann Arbor', degree: 'B.S. Data Science', date: 'Expected May 2029' },
  { school: 'Mattawan High School', degree: '', date: '2018 – 2023' },
];

export const workItems = [
  { title: 'Software Engineering Intern', org: 'Microsoft', date: 'May 2025 – Aug. 2025' },
  { title: 'AI & Machine Learning Intern', org: 'University of North Texas', date: 'May 2023 – July 2023' },
];

export const experience = [
  {
    title: 'Software Engineering Intern',
    org: 'Microsoft',
    date: 'May 2025 - Aug. 2025',
    place: 'Redmond, WA',
    accent: 'blue',
    points: [
      'Engineered a C#/.NET backend API with Azure CosmosDB for real-time outage data serving an internal dashboard used by 10,000+ people.',
      'Resolved API routing failures, data model mismatches, and release-blocking dashboard bugs before deployment.',
      'Designed fault-tolerant multi-call retrieval and strengthened React Query caching for multi-identifier outage lookups.',
    ],
  },
  {
    title: 'AI & Machine Learning Intern',
    org: 'University of North Texas',
    date: 'May 2023 - July 2023',
    place: 'Denton, TX',
    accent: 'violet',
    points: [
      'Implemented machine learning techniques for aspect-based sentiment analysis.',
      'Produced a poster paper and research paper while improving topic-specific sentiment accuracy by 20%.',
    ],
  },
  {
    title: 'B.S. Data Science',
    org: 'University of Michigan',
    date: 'Expected May 2029',
    place: 'Ann Arbor, MI',
    accent: 'green',
    points: [
      'Coursework includes Intro to Computing in C++, Object-Oriented Programming, Applied Linear Algebra, and Intro to Data Science.',
      'GPA: 3.53.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', origin: 'UMich EECS coursework' },
      { name: 'C#', origin: 'Microsoft internship' },
      { name: 'Python', origin: 'RetroTune and ProductivePanda' },
      { name: 'JavaScript', origin: 'DilemmAI and ProductivePanda' },
      { name: 'HTML/CSS', origin: 'DilemmAI and ProductivePanda' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', origin: 'Portfolio and Microsoft internship' },
      { name: '.NET', origin: 'Microsoft internship' },
      { name: 'Flask', origin: 'ProductivePanda project' },
      { name: 'Reflex', origin: 'RetroTune' },
      { name: 'Tailwind CSS', origin: 'DilemmAI hackathon' },
      { name: 'Bing Maps SDK', origin: 'Microsoft internship' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', origin: 'All projects' },
      { name: 'Azure DevOps', origin: 'Microsoft internship' },
      { name: 'Azure CosmosDB', origin: 'Microsoft internship' },
      { name: 'Google Cloud Platform', origin: 'ProductivePanda' },
      { name: 'Pytest', origin: 'ProductivePanda' },
    ],
  },
];

// Add photo filenames to /public/photos/ and list their paths here
export const photos = [
  // '/photos/photo1.jpg',
  // '/photos/photo2.jpg',
  // '/photos/photo3.jpg',
];

export const interests = [
  {
    title: 'Backend Systems',
    body: 'APIs, routing, caching, data modeling, and the unglamorous reliability work that keeps products standing.',
  },
  {
    title: 'Data Science',
    body: 'Applied ML, sentiment analysis, graph logic, and using data structures to make ambiguous problems searchable.',
  },
  {
    title: 'Hackathon Energy',
    body: 'Fast prototypes, weird constraints, Figma-to-code scrambles, and turning a weekend idea into something demoable.',
  },
];

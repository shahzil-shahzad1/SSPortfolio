
type ExperienceItem = {
  title: string;
  date?: string;
  points: string[];
  company?: string;
  location?: string;
};

export const experience: ExperienceItem[] = [
  {
    title: 'IPS Technologies — Flutter Developer Intern',
    points: [
      'Developed and deployed a fully functional Marriage Bureau App on Play Store.',
      'Built with Flutter, Firebase, and Provider state management.',
      'Contributed in UI/UX, development, and testing.',
    ],
  },
  {
    title: 'AicExpert — Flutter Developer Intern ',
    points: [
      'Developing cross-platform apps for desktop, mobile, and web.',
      'Using Flutter, Supabase, REST APIs, Provider, and GetX.',
      "Contributing to UI/UX (Figma), development, testing and deployment.",
    ],
  },
{
    title: 'CENTIN Futurizm UMT — Content Writer and Social Media Management Intern',
    points: [
      'Department that provides mentorship, guidance, and incubation to startups in UMT. ',
      'Managed social media posts and content.',
      "Assisted with events organized by the department.",
    ],
  }
];

type Project = {
  title: string;
  domain: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Chat App',
    domain: 'Application Development',
    description:
      'Real-time messaging, authentication and profile management, GetX state management',
    technologies: ['Flutter', 'Supabase'],
  },
  {
    title: 'Social Media App',
    domain: 'Application Development',
    description:
      'User registration, posting, likes, comments, following.',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    title: 'IdeaSpark AI Chatbot',
    domain: 'Application Development',
    description:
      'Created an interactive two-player Tic Tac Toe game with real-time win condition checks and reset functionality using vanilla JavaScript.',
    technologies: ['Flutter', 'Cohere API', 'Hive'],
  },
  {
    title: 'Travel App',
    domain: 'Application Development',
    description:
      'Converted Figma design into responsive Flutter travel app, Booking and profile management features',
    technologies: ['Flutter', 'Figma'],
  },
  {
    title: 'E-Commerce App',
    domain: 'Application Development',
    description:
      'Full UI with cart, orders, and profile management.',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    title: 'Grocery App',
    domain: 'Application Development',
    link: 'https://friends-challenge-game.vercel.app/',
    description:
      'Full fledge grocery app with booking, account creation, payment, booking management, wishlist and cart manaement with getx and nodjs backend.',
    technologies: ['Flutter', 'NodeJs'],
  },
  {
    title: 'Marriage Buarea',
    domain: 'Application Development',
    description:
      'Full fledge app of marriage beauru with accoun creation, couple finding, filters and account management with provider and firebase.',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    title: 'Notes & To-Do App',
    domain: 'Application Development',
    description:
      'Built as a beginner project with Hive local DB.',
    technologies: ['Flutter', 'Hive'],
  },
  {
    title: 'Mini Excel',
    domain: 'C++ Development',
    description:
      'Spreadsheet functions using DSA (Doubly Linked List).',
    technologies: ['C++'],
  },
  {
    title: 'Supermarket Management System',
    domain: 'C++ Development',
    description:
      'Console app with mouse integration.',
    technologies: ['C++'],
  },
];

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

export const contactInfo: ContactItem[] = [
  {
    label: "Email",
    value: "sheharyarrana2003@gmail.com",
    href: "mailto:sheharyarrana2003@gmail.com",
    icon: "/mail.png",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Sheharyar Shahzad",
    href: "https://www.linkedin.com/in/muhammad-sheharyar-shahzad-rana-5067a4276",
    icon: "/linkedin.png",
  },
  {
    label: "Instagram",
    value: "flutter-with-sheharyar",
    href: "https://www.instagram.com/flutter_with_sheharyar/",
    icon: "/instagram.png"`,
  },
  {
    label: "GitHub",
    value: "sheharyarrana2003",
    href: "https://github.com/sheharyarrana2003",
    icon: "/github.png",
  },
  {
    label: "LeetCode",
    value: "sheharyarrana2003",
    href: "https://leetcode.com/sheharyarrana2003/",
    icon: "/leetcode.png",
  },
  {
    label: "Fiverr",
    value: "sheharyarrana2003",
    href: "https://www.fiverr.com/s/xXRyEVa",
    icon: "fiverr.png",
  },
  {
    label: "HackerRank",
    value: "sheharyarrana201",
    href: "https://www.hackerrank.com/profile/sheharyarrana201",
    icon: "/hackerrank.png",
  },
];

export const services = [
  {
    title: 'Flutter Full-Stack Development',
    description: 'End-to-end Flutter apps with Firebase/Supabase backends, authentication, databases, APIs, and deployment.',
  },
  {
    title: 'Flutter Front-End Development',
    description: 'Responsive, pixel-perfect UI with state management, API integration and performance optimization.',
  },
  {
    title: 'Flutter UI Design Only',
    description: 'Modern UI with animations, reusable components, and professional layouts converted from Figma.',
  }
];

export const teamImages: string[] = [
  'https://placehold.co/400x300/111/FFF?text=Team+1',
  'https://placehold.co/400x300/111/FFF?text=Team+2',
  'https://placehold.co/400x300/111/FFF?text=Team+3',
  'https://placehold.co/400x300/111/FFF?text=Team+4',
  'https://placehold.co/400x300/111/FFF?text=Team+5',
  'https://placehold.co/400x300/111/FFF?text=Team+6',
  'https://placehold.co/400x300/111/FFF?text=Team+7',
  'https://placehold.co/400x300/111/FFF?text=Team+8',
];

export const eventImages: string[] = [
  'https://placehold.co/400x300/111/FFF?text=Event+1',
  'https://placehold.co/400x300/111/FFF?text=Event+2',
  'https://placehold.co/400x300/111/FFF?text=Event+3',
  'https://placehold.co/400x300/111/FFF?text=Event+4',
  'https://placehold.co/400x300/111/FFF?text=Event+5',
  'https://placehold.co/400x300/111/FFF?text=Event+6',
  'https://placehold.co/400x300/111/FFF?text=Event+7',
  'https://placehold.co/400x300/111/FFF?text=Event+8',
  'https://placehold.co/400x300/111/FFF?text=Event+9',
  'https://placehold.co/400x300/111/FFF?text=Event+10',
  'https://placehold.co/400x300/111/FFF?text=Event+11',
  'https://placehold.co/400x300/111/FFF?text=Event+12',
];

export const skills = [
  { name: "Flutter & Dart", icon: "/skills/flutter.png" },
  { name: "Python", icon: "/skills/python.png" },
  { name: "Java & XML", icon: "/skills/java.png" },
  { name: "C++", icon: "/skills/c.png" },
  { name: "FlutterFlow", icon: "/skills/flutterflow.png" },
  { name: "SQL", icon: "/skills/sql.png" },
  { name: "Git & Github", icon: "/skills/github.png" },
  { name: "Firebase", icon: "/skills/firebase.png" },
  { name: "Supabase", icon: "/skills/supabase.png" }
];


export const certifications = [
  { name: "Intro to Cyber Security – Cisco", icon: "/certificates/cisco.png" },
  { name: "Python Essentials – Cisco", icon: "/certificates/PythonEssentials.JPG" },
  { name: "C++ Programming – Saylor Academy", icon: "/certificates/CPlusPlus.PNG" },
  { name: "Intro to LLMs – Google Cloud", icon: "/certificates/google1.jpg" },
  { name: "Intro to Generative AI – Google Cloud", icon: "/certificates/google2.jpg" },
  { name: "Intro to Responsible AI", icon: "/certificates/google3.jpg" },
  { name: "BlockChain Integration", icon: "/certificates/blockchain.PNG" },
  // add more with same format
];

export const badges = [
  { name: "GitHub Badge", icon: "https://placehold.co/400x300/111/FFF?text=GitHub+Badge" },
  { name: "LeetCode Badge", icon: "https://placehold.co/400x300/111/FFF?text=LeetCode+Badge" },
  { name: "HackerRank Badge", icon: "https://placehold.co/400x300/111/FFF?text=HackerRank+Badge" },
  { name: "StackOverflow Badge", icon: "https://placehold.co/400x300/111/FFF?text=StackOverflow+Badge" },
  { name: "StackOverflow Badge", icon: "https://placehold.co/400x300/111/FFF?text=StackOverflow+Badge" },
  // add more with same format
];



export type PageDef = {
  name: string;
  id: string;
  component: React.ComponentType;
};



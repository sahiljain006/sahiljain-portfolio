export interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

export interface SkillItem {
  name: string;
  desc: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  badge?: string;
  color: string;
  accentColor?: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  sub: string;
  desc: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  badge: 'ai' | 'fs' | 'web';
  mockGrad: string;
  image?: string;
  github?: string;
  demoUrl?: string;
}

export interface CertificationItem {
  title: string;
  org: string;
  short: string;
  type: string;
  desc: string;
  image?: string;
}

export interface AchievementItem {
  icon: string;
  title: string;
  desc: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export const SITE = {
  name: 'Sahil Jain',
  email: 'sahiljain0006@gmail.com',
  phone: '+91 7200123990',
  location: 'Tambaram, Chennai, India',
  github: 'https://github.com/sahiljain006',
  linkedin: 'https://linkedin.com/in/sahiljain0006',
  instagram: 'https://instagram.com/sahil.jain006',
  roles: ['Software Developer', 'Full Stack Developer', 'AI Enthusiast', 'Python Developer'],
  stats: [
    { number: 10, suffix: '+', label: 'Projects Built' },
    { number: 15, suffix: '+', label: 'Certifications' },
    { number: 5, suffix: '+', label: 'Hackathons' },
    { number: 3, suffix: '+', label: 'Internships' },
  ] as StatItem[],
  skills: [
    {
      title: 'Web Development',
      iconName: 'web',
      badge: 'Frontend & UI',
      color: 'rgba(14, 165, 233, 0.12)',
      accentColor: '#0EA5E9',
      items: [
        { name: 'HTML', desc: 'Semantic, accessible structure & modern standards' },
        { name: 'CSS', desc: 'Responsive layouts, modern animations & responsive design' },
        { name: 'JavaScript', desc: 'Modern ES6+, DOM manipulation & dynamic interactivity' },
        { name: 'React.js', desc: 'Component architecture, state management & reactive SPAs' },
      ],
    },
    {
      title: 'Backend & Database',
      iconName: 'backend',
      badge: 'Architecture & Data',
      color: 'rgba(16, 185, 129, 0.12)',
      accentColor: '#10B981',
      items: [
        { name: 'Python', desc: 'Core language for backend systems, scripting & algorithms' },
        { name: 'SQLite', desc: 'Lightweight embedded relational database management' },
        { name: 'MySQL', desc: 'Production relational databases, querying & data integrity' },
        { name: 'REST APIs', desc: 'Scalable endpoint architecture, JSON contracts & authentication' },
        { name: 'Django Framework', desc: 'Full-stack MVC framework, ORM & rapid backend delivery' },
      ],
    },
    {
      title: 'Developer Tools',
      iconName: 'tool',
      badge: 'Workflow & Collaboration',
      color: 'rgba(242, 140, 90, 0.12)',
      accentColor: '#F28C5A',
      items: [
        { name: 'Github', desc: 'Version control, repositories, collaboration & releases' },
        { name: 'VS Code', desc: 'Primary code editor, debugging & developer extensions' },
        { name: 'Canva', desc: 'Digital asset creation, social graphics & UI visual design' },
        { name: 'MS Office', desc: 'Technical documentation, spreadsheets & project presentations' },
      ],
    },
    {
      title: 'AI & Productivity Tools',
      iconName: 'sparkles',
      badge: 'Intelligent Augmentation',
      color: 'rgba(124, 92, 252, 0.12)',
      accentColor: '#7C5CFC',
      items: [
        { name: 'ChatGPT', desc: 'AI-assisted programming, debugging & architectural reasoning' },
        { name: 'Gemini', desc: 'Multimodal AI research, code synthesis & experimentation' },
        { name: 'Claude', desc: 'In-depth code reviews, logic analysis & complex problem solving' },
        { name: 'Prompt Engineering', desc: 'Structured zero/few-shot prompting & system instruction design' },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: 'futurelens',
      title: 'FutureLens',
      sub: 'AI-Powered Career Intelligence',
      desc: 'An intelligent career guidance platform that leverages multiple assessment frameworks to deliver personalized career pathways, learning roadmaps, and actionable insights for students navigating their professional journey.',
      problem: 'Students often struggle to find the right career path due to lack of personalized guidance and overwhelming options.',
      solution: 'Built an AI-driven assessment engine that analyzes user responses across multiple frameworks and generates tailored career recommendations with interactive visualizations.',
      features: ['Multi-framework assessments', 'AI-powered career matching', 'Personalized learning roadmaps', 'Interactive dashboard', 'Responsive design'],
      stack: ['Python', 'Django', 'DRF', 'SQLite', 'AI/ML', 'JavaScript'],
      badge: 'ai',
      mockGrad: 'linear-gradient(135deg,#F0EDFF,#EDE9FE)',
      image: '/assets/FUTURELENS HERO.png',
      github: 'https://github.com/sahiljain006/FutureLens',
    },
    {
      id: 'pagesofpause',
      title: 'Pages of Pause',
      sub: 'Personalised Memory Magazine Website',
      desc: 'A creative, responsive website for a personalised magazine brand that transforms cherished memories into beautifully designed keepsakes. Features an elegant editorial aesthetic, interactive magazine previews, smooth animations, Instagram integration, and WhatsApp-powered custom ordering.',
      problem: 'Transforming cherished digital moments into physical keepsake magazines demands an intimate, high-end editorial digital experience with effortless ordering.',
      solution: 'Designed an interactive showcase website with tactile magazine previews, elegant typography, fluid transitions, Instagram gallery integration, and direct WhatsApp custom ordering.',
      features: [
        'Editorial aesthetic',
        'Interactive magazine previews',
        'Smooth animations',
        'Instagram integration',
        'WhatsApp-powered custom ordering',
      ],
      stack: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
      badge: 'web',
      mockGrad: 'linear-gradient(135deg, #FFF1F2, #FDF2F8)',
      image: '/assets/PAGESOFPAUSE HERO.png',
      demoUrl: 'https://pagesofpause.vercel.app',
    },
    {
      id: 'tap',
      title: "TAP — That's A Plan",
      sub: 'Event Management Platform',
      desc: 'A full-stack event management platform with secure REST APIs, JWT authentication, role-based access control, and a clean responsive interface for seamless event lifecycle management.',
      problem: 'Event organizers need a centralized, secure platform to create, manage, and track events with proper access control.',
      solution: 'Designed a Django REST Framework backend with JWT auth and a responsive frontend for seamless event lifecycle management.',
      features: ['Secure REST APIs', 'JWT Authentication', 'Role-based access control', 'Event CRUD operations', 'Responsive UI'],
      stack: ['Python', 'Django', 'DRF', 'SQLite', 'JavaScript', 'Bootstrap'],
      badge: 'fs',
      mockGrad: 'linear-gradient(135deg,#FFF0ED,#F5F3FF)',
      image: '/assets/TAP HERO.png',
      github: 'https://github.com/sahiljain006/TAP-That-s-A-Plan',
    },
    {
      id: 'foodshare',
      title: 'FoodShare',
      sub: 'Smart Food Donation Platform',
      desc: 'A community-driven platform that connects food donors with NGOs and volunteers to reduce food waste. Features real-time donation listings, pickup management, expiry tracking, live dashboard analytics, and Google Maps integration for seamless food distribution.',
      problem: 'Millions of tons of food are wasted daily while communities nearby go hungry, with no efficient system to connect donors with those in need.',
      solution: 'Built a real-time donation platform with Maps integration, expiry tracking, and a live dashboard to streamline the food distribution workflow from donor to recipient.',
      features: ['Real-time donation listings', 'Pickup management', 'Expiry tracking', 'Live dashboard analytics', 'Google Maps integration'],
      stack: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Google Maps API'],
      badge: 'web',
      mockGrad: 'linear-gradient(135deg,#ECFDF5,#ECFEFB)',
      image: '/assets/FOODSHARE HERO.png',
      github: 'https://github.com/sahiljain006/FoodShare',
    },
    {
      id: 'sandeepjewels',
      title: 'Sri Sandeep Jewels',
      sub: 'Premium Jewellery Showcase',
      desc: 'A modern and responsive e-commerce showcase website designed for an imitation jewellery brand. Features elegant product collections, category-based filtering, interactive product cards, WhatsApp ordering, responsive layouts, and premium UI animations to deliver a seamless shopping experience for customers.',
      problem: 'A jewellery brand needs a premium online presence that showcases their collections elegantly and makes it easy for customers to browse and order.',
      solution: 'Built a responsive showcase website with category filtering, interactive product cards, and WhatsApp integration for seamless customer engagement and ordering.',
      features: ['Elegant product collections', 'Category-based filtering', 'Interactive product cards', 'WhatsApp ordering', 'Premium UI animations'],
      stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'WhatsApp API'],
      badge: 'web',
      mockGrad: 'linear-gradient(135deg,#FFF7ED,#FFFBEB)',
      image: '/assets/SANDEEP JEWELS HERO.png',
    },
  ] as ProjectItem[],
  certifications: [
    {
      title: 'Fullstack Web Development',
      org: 'Udemy',
      short: 'UD',
      type: 'Professional',
      desc: 'Comprehensive full stack web development training covering frontend, backend, databases, and deployment workflows.',
      image: '/assets/UDEMY FULLSTACK WEB DEV CERTIFICATE.jpg',
    },
    {
      title: 'Web Development Fundamentals',
      org: 'IBM',
      short: 'IBM',
      type: 'Certified',
      desc: 'Foundational web development skills covering HTML, CSS, JavaScript, and modern web architecture principles.',
      image: '/assets/IBM WEB DEV FUNDAMENTALS CERTIFICATE.jpg',
    },
    {
      title: 'Python for Data Science',
      org: 'NPTEL',
      short: 'NP',
      type: 'Elite',
      desc: 'Comprehensive Python programming for data science applications including manipulation, analysis, and visualization techniques.',
      image: '/assets/PYTHON DATA SCIENCE CERTIFICATE.jpg',
    },
    {
      title: 'Cloud Computing & Distributed Systems',
      org: 'NPTEL',
      short: 'NP',
      type: 'Certified',
      desc: 'Cloud computing architectures, distributed systems principles, and modern deployment strategies.',
      image: '/assets/NPTEL CLOUD COMPUTING CERTIFICATE.jpg',
    },
    {
      title: 'AI Tools & ChatGPT Workshop',
      org: 'Be10x',
      short: 'B10',
      type: 'Workshop',
      desc: 'Hands-on exploration of AI tools, ChatGPT capabilities, and prompt engineering for developer productivity.',
      image: '/assets/BE10X AI CERTIFICATE.jpg',
    },
    {
      title: 'Generative AI for All',
      org: 'Infosys Springboard',
      short: 'IS',
      type: 'Certified',
      desc: 'Introduction to generative AI concepts, large language models, and practical applications across industries.',
      image: '/assets/INFOSYS GEN AI CERTIFICATE.jpg',
    },
    {
      title: 'AI Powered Full Stack Workshop',
      org: 'NTech',
      short: 'NW',
      type: 'Workshop',
      desc: 'Intensive workshop on integrating AI capabilities into full stack applications using modern frameworks.',
      image: '/assets/AI FULLSTACK CERTIFICATE.jpg',
    },
    {
      title: 'Python Full Stack Internship',
      org: 'Nexila Technologies',
      short: 'NT',
      type: 'Professional',
      desc: 'Full stack development covering backend APIs, frontend integration, database management, and deployment.',
      image: '/assets/NEXILA FULL STACK CERTIFICATE.jpg',
    },
  ] as CertificationItem[],
  achievements: [
    {
      icon: '🏆',
      title: 'Smart India Hackathon',
      desc: "Participated in India's largest hackathon, building innovative solutions for real-world problems under intense 36-hour time constraints.",
    },
    {
      icon: '🎓',
      title: 'Technical Workshops',
      desc: 'Conducted and attended multiple workshops on AI tools, full stack development, and modern web technologies.',
    },
    {
      icon: '💻',
      title: 'Hackathon Projects',
      desc: 'Built and presented projects at multiple hackathons, demonstrating rapid prototyping and team collaboration skills.',
    },
    {
      icon: '📋',
      title: 'Internships',
      desc: 'Completed 3+ internships across full-stack and web development, contributing to production-ready backend systems, REST APIs, and modern interfaces.',
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      desc: 'Committed to lifelong learning through certifications, online courses, and hands-on project development.',
    },
    {
      icon: '💼',
      title: 'Freelancing',
      desc: 'Designed and delivered custom websites and digital products for real-world clients, turning brand ideas into responsive web experiences.',
    },
  ] as AchievementItem[],
  timeline: [
    { year: 'Beginnings', title: 'Started programming', desc: 'First lines of code, driven by curiosity about how software actually works.' },
    { year: 'Early builds', title: 'Built first website', desc: 'Moved from syntax to shipping — real pages, real deployments.' },
    { year: 'Foundations', title: 'Python development', desc: 'Deepened core programming skills with Python across scripting, logic and data.' },
    { year: 'Growth', title: 'Full-stack development', desc: 'Learned to connect frontend, backend and databases into complete products with Django, React and MySQL.' },
    { year: 'Competing', title: 'Hackathons & events', desc: 'Tested ideas under pressure, collaborating in fast-paced build sprints.' },
    { year: 'Applying', title: 'Internship experience', desc: 'Brought academic skill into a professional, production-facing environment.' },
    { year: 'Exploring', title: 'AI-powered projects', desc: 'Started building tools that use AI APIs and prompting to solve real problems.' },
    { year: 'Ongoing', title: 'Continuous learning', desc: 'Still a student by title — always a builder by habit.' },
  ] as TimelineItem[],
};

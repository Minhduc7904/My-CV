// CV Data - Replace with your own information

// Basic Personal Information
export const personalInfo = {
  name: "Nguyen Minh Duc",
  title: "Software Developer",
  email: "nmduc7904@gmail.com",
  phone: "+84 392932661",
  location: "Ha Noi City, Vietnam",
  facebook: "www.facebook.com/nm.duc7904",
  linkedin: "www.linkedin.com/in/đức-nguyễn-minh-624ba5306",
  photoUrl: "https://via.placeholder.com/100x120", // Placeholder image - replace with your actual photo URL
  cvUrl: "https://my-cv-ashen-seven.vercel.app/" // Online CV URL
};

// Profile Section (Professional Summary)
export const profile = {
  summary: "I am a fourth-year Computer Science student passionate about full-stack web development, with a strong focus on ReactJS and NestJS. I leverage AI tools to accelerate development while maintaining full ownership of the codebase through reviewing, structuring, and improving system design and implementation. I actively participate in competitive programming to sharpen my problem-solving skills, and I am especially interested in applying technology to education. I am continuously expanding my full-stack skill set, with a current focus on modern backend development, database design, API architecture, MongoDB, Redis, and scalable web application patterns. I am currently seeking internship opportunities to grow as a full-stack developer.",
  highlights: [

  ]
};

// Employment History (Work Experience)
export const employmentHistory = [
  {
    company: "Beacon - Safety Social Mobile Platform",
    position: "Full-stack Developer",
    period: "Apr 2026 - Jun 2026",
    description: "Built a full-stack safety-focused social platform consisting of a Flutter mobile app, a .NET 8 backend API, and a React admin dashboard. The product includes user authentication, safety check-ins, emergency contacts, friend relationships, real-time messaging, posts, reactions, reports, media uploads, notifications, and role-based administration.",
    github: "https://github.com/Minhduc7904/Beacon | https://github.com/dongvanhao/Beacon-CA | https://github.com/Minhduc7904/Beacon_admin",
    githubLinks: [
      { label: "Mobile App", url: "https://github.com/Minhduc7904/Beacon" },
      { label: "Backend API", url: "https://github.com/dongvanhao/Beacon-CA" },
      { label: "Admin Dashboard", url: "https://github.com/Minhduc7904/Beacon_admin" }
    ],
    responsibilities: [
      "Developed the Flutter mobile app using Clean Architecture, Riverpod, GoRouter, Dio, secure storage, Isar local cache, Firebase Messaging, camera, geolocation, and media handling",
      "Implemented a .NET 8 Web API with layered architecture, EF Core, SQL Server, JWT authentication, refresh tokens, validation, and centralized error handling",
      "Built core user features including registration/login, profile management, friend requests, friend presence, safety check-ins, emergency contacts, posts, reactions, post reports, and media upload flows",
      "Integrated SignalR realtime features for chat, group presence, typing indicators, seen status, unread counts, new posts, and live notifications",
      "Designed and connected the React/Vite admin dashboard with Redux Toolkit, React Router, Axios, and Tailwind CSS for user, admin, role, permission, post, report, audit-log, statistics, and health-check management",
      "Configured infrastructure and background services with Docker Compose, SQL Server, MinIO object storage, Nginx, Hangfire jobs, health checks, Firebase Cloud Messaging, and API documentation"
    ],
    technologies: "Flutter, Dart, Riverpod, Dio, Isar, Firebase Messaging, .NET 8, ASP.NET Core, EF Core, SQL Server, SignalR, Hangfire, MinIO, Docker, React, TypeScript, Redux Toolkit, Tailwind CSS"
  },
  // {
  //   company: "Beemath Website",
  //   position: "Lead Developer",
  //   period: "Oct 2025 - Present",
  //   description: "Version 2 of the ToanThayBee platform, rebuilt with NestJS and ReactJS, serving around 1,000 active students at the learning center. The system is currently in production deployment, featuring real-time exam capabilities, an AI-assisted exam upload and processing workflow, a custom CMS, and a scalable architecture optimized for VPS hosting. The platform is live at https://beeedu.vn/ and remains under active development with ongoing feature enhancements.",
  //   github: "https://github.com/Minhduc7904/admin_frontend | https://github.com/Minhduc7904/BEE | https://github.com/Minhduc7904/student-frontend",
  //   githubLinks: [
  //     { label: "Admin Frontend", url: "https://github.com/Minhduc7904/admin_frontend" },
  //     { label: "Backend", url: "https://github.com/Minhduc7904/BEE" },
  //     { label: "Student Frontend", url: "https://github.com/Minhduc7904/student-frontend" }
  //   ],
  //   responsibilities: [
  //     "Rebuilt the platform as v2 of ToanThayBee using NestJS for the backend and ReactJS (with Redux) for the frontend",
  //     "Designed and implemented RESTful APIs with NestJS",
  //     "Implemented real-time exam functionality using Socket.IO",
  //     "Used MySQL for relational data storage",
  //     "Styled UI with Tailwind CSS",
  //     "Deployed the application on a VPS with Nginx as reverse proxy",
  //     "Configured Cloudflare for DNS management, CDN, and security",
  //     "Leveraged AI tools to assist in development while managing, reviewing, and maintaining full ownership of the codebase as tech manager"
  //   ],
  //   technologies: "ReactJS, Tailwind, Redux, NestJS, Socket.io, RESTful APIs, MySQL, Nginx, Cloudflare"
  // },
  // {
    // company: "ToanThayBee Website",
    // position: "Lead Developer",
    // period: "Feb 2025 - Present",
    // description: "Educational platform for mathematics with diverse learning resources and real-time exam functionality. Live at https://toanthaybee.edu.vn",
    // github: "https://github.com/Minhduc7904/ToanThayBeeNodejsReactjs",
    // responsibilities: [
    // ],
    // technologies: "ReactJS, Tailwind, Redux, Node.js, Express, Socket.io, RESTful APIs, MySQL"
  // },
];

// Education Information
export const education = [
  {
    institution: "Hanoi University of Civil Engineering",
    degree: "Computer Science Engineer",
    period: "2022 - Present",
    description: "Currently in my fourth year, focusing on software engineering and web development.",
    achievements: [
      "Current GPA: 3.6/4.0",
      "Awarded academic scholarships for 4 consecutive semesters",
    ]
  }
];

// Details Section (Additional Information)
export const details = {
  skills: [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "C++"]
    },
    {
      name: "Tools",
      skills: ["Git", "VSCode", "Postman", "Docker"]
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "React Native", "Tailwind CSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "NestJS"]
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "Sql Server"]
    }
  ],
  languages: [
    { language: "Vietnamese", proficiency: "Native" },
    { language: "English", proficiency: "Basic" },
  ],
  awards: [
    {
      name: "Third Prize - Vietnam Student Informatics Olympiad",
      issuer: "Vietnam Student Informatics Olympiad Committee",
      year: "2025",
      description: "Received Third Prize at the National Student Informatics Olympiad 2025"
    },
    {
      name: "Consolation Prize - Vietnam Student Informatics Olympiad",
      issuer: "Vietnam Student Informatics Olympiad Committee",
      year: "2024",
      description: "Received a Consolation Prize at the National Student Informatics Olympiad 2024"
    },
    {
      name: "Top 308 - ICPC Northern Vietnam Regional Contest",
      issuer: "International Collegiate Programming Contest (ICPC)",
      year: "2024",
      description: "Ranked in the top 308 teams at the ICPC Northern Vietnam Regional Programming Contest"
    }
  ]
};

// Export all data as a single object
const cvData = {
  personalInfo,
  profile,
  employmentHistory,
  education,
  details
};

export default cvData;

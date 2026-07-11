// CV Data - Replace with your own information

// Basic Personal Information
export const personalInfo = {
  name: "Nguyen Minh Duc",
  title: "Software Developer",
  email: "nmduc7904@gmail.com",
  phone: "+84 392932661",
  dateOfBirth: "07/09/2004",
  location: "Ha Noi City, Vietnam",
  facebook: "www.facebook.com/nm.duc7904",
  linkedin: "www.linkedin.com/in/đức-nguyễn-minh-624ba5306",
  photoUrl: "https://via.placeholder.com/100x120", // Placeholder image - replace with your actual photo URL
  cvUrl: "https://my-cv-ashen-seven.vercel.app/" // Online CV URL
};

// Profile Section (Professional Summary)
export const profile = {
  summary: "Fourth-year Computer Science student focused on full-stack development with React, NestJS, .NET, Flutter, REST APIs, realtime features, and SQL databases. Strong competitive programming background and seeking a full-stack developer internship.",
  highlights: [

  ]
};

// Employment History (Work Experience)
export const employmentHistory = [
  {
    company: "Beacon - Safety Social Mobile Platform",
    position: "Lead Developer",
    period: "Apr 2026 - Jun 2026",
    description: "Safety social platform with Flutter mobile app, .NET 8 API, and React admin dashboard for authentication, safety check-ins, emergency contacts, friends, realtime chat, posts, reports, media uploads, notifications, and RBAC.",
    github: "https://github.com/Minhduc7904/Beacon | https://github.com/dongvanhao/Beacon-CA | https://github.com/Minhduc7904/Beacon_admin",
    githubLinks: [
      { label: "Mobile App", url: "https://github.com/Minhduc7904/Beacon" },
      { label: "Backend API", url: "https://github.com/dongvanhao/Beacon-CA" },
      { label: "Admin Dashboard", url: "https://github.com/Minhduc7904/Beacon_admin" }
    ],
    responsibilities: [
      "Built Flutter app with Clean Architecture, Riverpod, GoRouter, Dio, secure storage, Isar cache, FCM, camera, geolocation, and media flows",
      "Implemented layered .NET 8 APIs with EF Core, SQL Server, JWT, validation, SignalR realtime events, MinIO, Hangfire, and health checks",
      "Developed React/Vite admin dashboard for users, admins, roles, permissions, posts, reports, audit logs, statistics, and system health"
    ],
    technologies: "Flutter, Riverpod, .NET 8, EF Core, SQL Server, SignalR, MinIO, React, TypeScript"
  },
  {
    company: "Beemath Website",
    position: "Full-stack Developer",
    period: "Oct 2025 - Present",
    description: "Production education platform for a math learning center, rebuilt with NestJS and ReactJS for around 1,000 students. Includes online exams, AI-assisted exam upload, CMS workflows, and VPS deployment. Live at https://beeedu.vn/.",
    github: "https://github.com/Minhduc7904/admin_frontend | https://github.com/Minhduc7904/BEE | https://github.com/Minhduc7904/student-frontend",
    githubLinks: [
      { label: "Admin Frontend", url: "https://github.com/Minhduc7904/admin_frontend" },
      { label: "Backend", url: "https://github.com/Minhduc7904/BEE" },
      { label: "Student Frontend", url: "https://github.com/Minhduc7904/student-frontend" }
    ],
    responsibilities: [
      "Rebuilt platform with NestJS REST APIs, ReactJS/Redux frontends, MySQL schema design, and Tailwind CSS interfaces",
      "Implemented realtime exams with Socket.IO and AI-assisted workflows for uploading and processing exam content",
      "Deployed production system on VPS with Nginx reverse proxy and Cloudflare for DNS, CDN, and security"
    ],
    technologies: "ReactJS, Redux, Tailwind CSS, NestJS, Socket.IO, MySQL, Nginx, Cloudflare"
  },
];

// Education Information
export const education = [
  {
    institution: "Hanoi University of Civil Engineering",
    degree: "Computer Science Engineer",
    period: "2022 - Present",
    description: "Fourth-year student focused on software engineering and web development.",
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
      skills: ["JavaScript", "TypeScript", "Dart", "C++", "Python"]
    },
    {
      name: "Frontend & Mobile",
      skills: ["React", "Redux", "Tailwind CSS", "Flutter", "Riverpod"]
    },
    {
      name: "Backend",
      skills: ["NestJS", ".NET 8", "REST APIs", "SignalR", "Socket.IO"]
    },
    {
      name: "Database & Tools",
      skills: ["MySQL", "SQL Server", "MongoDB", "Docker", "Git"]
    }
  ],
  languages: [
    { language: "Vietnamese", proficiency: "Native" },
    { language: "English", proficiency: "700 TOEIC", note: "internal university test" },
  ],
  awards: [
    {
      name: "Third Prize - Vietnam Student Informatics Olympiad *",
      issuer: "Vietnam Student Informatics Olympiad Committee",
      year: "2025",
      description: ""
    },
    {
      name: "Second Prize - University Excellent Student Contest",
      issuer: "Hanoi University of Civil Engineering",
      year: "2024",
      description: ""
    },
    {
      name: "Consolation Prize - Vietnam Student Informatics Olympiad",
      issuer: "Vietnam Student Informatics Olympiad Committee",
      year: "2024",
      description: ""
    },
    {
      name: "Top 308 - ICPC Northern Vietnam Regional Contest",
      issuer: "International Collegiate Programming Contest (ICPC)",
      year: "2024",
      description: ""
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

// I am a fourth-year Computer Science student with hands-on experience in full-stack development through real projects such as Beacon and Beemath. I have worked with ReactJS, NestJS, .NET, Flutter, REST APIs, realtime features, SQL databases, Docker, and production deployment. I am proactive, willing to learn, and have a strong problem-solving background from competitive programming, including a Third Prize at the Vietnam Student Informatics Olympiad 2025. I am looking for an internship opportunity where I can contribute to real products and continue improving as a full-stack developer.
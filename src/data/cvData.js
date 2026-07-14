// CV Data

// Basic Personal Information
export const personalInfo = {
  name: "Nguyen Minh Duc",
  title: "Backend Developer Intern",
  email: "nmduc7904@gmail.com",
  phone: "+84 392932661",
  dateOfBirth: "07/09/2004",
  location: "Ha Noi City, Vietnam",
  github: "github.com/Minhduc7904",
  portfolio: "my-cv-ashen-seven.vercel.app"
};

// Profile Section (Professional Summary)
export const profile = {
  summary: "Fourth-year Computer Science student seeking a Backend Developer Internship. I am a fast learner with a strong work ethic, a problem-solving mindset, and a willingness to listen to feedback and continuously improve. I enjoy collaborating with others, taking ownership of assigned tasks, and learning new technologies to solve practical problems. I have hands-on experience building and deploying backend systems with NestJS, .NET 8, MySQL, SQL Server, SignalR, Socket.IO, and Docker. Third Prize winner at the Vietnam Student Informatics Olympiad 2025.",
  highlights: []
};

// Project Experience
export const employmentHistory = [
  {
    company: "BeeEdu - Education Platform for Toan Thay Bee",
    position: "Full-stack Developer",
    period: "Oct 2025 - Present",
    description: "Production education platform for a math learning center, rebuilt with NestJS and ReactJS for around 1,000 students. Supports online exams, content management, AI-assisted document processing, and VPS deployment. Live at https://beeedu.vn/.",
    github: "https://github.com/Minhduc7904/admin_frontend | https://github.com/Minhduc7904/BEE | https://github.com/Minhduc7904/student-frontend | https://github.com/Minhduc7904/seo_frontend",
    githubLinks: [
      { label: "Admin Frontend", url: "https://github.com/Minhduc7904/admin_frontend" },
      { label: "Backend", url: "https://github.com/Minhduc7904/BEE" },
      { label: "Student Frontend", url: "https://github.com/Minhduc7904/student-frontend" },
      { label: "SEO Frontend", url: "https://github.com/Minhduc7904/seo_frontend" }
    ],
    responsibilities: [
      "Built the shared NestJS backend with Clean Architecture, Prisma/MySQL, JWT, Socket.IO, media storage, and integrations for payment, email, Zalo, and AI services",
      "Developed Student/Admin React-Vite apps and the public SEO website with Next.js App Router, SSR pages, and API-driven content for courses, teachers, news, documents, and SEO media",
      "Implemented real-time online exams and AI-assisted extraction/processing of uploaded exam documents to reduce manual content-entry work",
      "Set up CI/CD and VPS deployment for four repos with GitHub Actions, smoke tests, SSH deploy, Docker service rebuild/recreate, health checks, Nginx, MySQL, MinIO, and Cloudflare"
    ],
    technologies: "NestJS, TypeScript, Prisma, MySQL, Socket.IO, JWT, MinIO, React/Vite, Redux, Next.js, Tailwind CSS, Docker, Nginx, GitHub Actions, Cloudflare"
  },
  {
    company: "Beacon - Personal Safety and Social Networking Platform",
    position: "Lead Full-stack Developer",
    period: "Apr 2026 - Jun 2026",
    description: "Personal safety and social networking platform with Flutter mobile app, .NET 8 backend API, and React admin dashboard. Includes authentication, safety check-ins, emergency contacts, friends, real-time chat, posts, reports, media uploads, notifications, and RBAC.",
    github: "https://github.com/Minhduc7904/Beacon | https://github.com/dongvanhao/Beacon-CA | https://github.com/Minhduc7904/Beacon_admin",
    githubLinks: [
      { label: "Mobile App", url: "https://github.com/Minhduc7904/Beacon" },
      { label: "Backend API", url: "https://github.com/dongvanhao/Beacon-CA" },
      { label: "Admin Dashboard", url: "https://github.com/Minhduc7904/Beacon_admin" }
    ],
    responsibilities: [
      "Led architecture and implementation across mobile, backend, and admin applications, coordinating feature boundaries and API contracts",
      "Designed and implemented layered .NET 8 APIs for authentication, safety check-ins, emergency contacts, posts, reports, media, and messaging",
      "Integrated EF Core, SQL Server, JWT, MinIO, Hangfire, health checks, and SignalR flows for chat, presence, seen status, unread counts, posts, and notifications",
      "Built Flutter mobile features and React/Vite admin modules for user, role, post, report, statistic, media, and system-health management"
    ],
    technologies: ".NET 8, C#, EF Core, SQL Server, SignalR, JWT, MinIO, Hangfire, Docker, Flutter, Riverpod, React, TypeScript"
  }
];

// Education Information
export const education = [
  {
    institution: "Hanoi University of Civil Engineering",
    degree: "Computer Science Engineer",
    period: "2022 - Present",
    description: "Fourth-year student focused on software engineering and web development.",
    achievements: [
      "GPA: 3.6/4.0; academic scholarships for 4 consecutive semesters"
    ]
  }
];

// Details Section (Additional Information)
export const details = {
  skills: [
    {
      name: "Backend",
      skills: ["NestJS", ".NET 8", "REST APIs", "JWT", "SignalR", "Socket.IO"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "SQL Server", "MongoDB", "EF Core"]
    },
    {
      name: "Infrastructure & Tools",
      skills: ["CI/CD", "Docker", "Nginx", "Cloudflare", "MinIO", "Git", "Postman"]
    },
    {
      name: "Programming Languages",
      skills: ["TypeScript", "C#", "JavaScript", "C++", "Dart", "Python"]
    },
    {
      name: "Additional",
      skills: ["React", "Redux", "Tailwind CSS", "Flutter", "Riverpod"]
    }
  ],
  languages: [
    { language: "Vietnamese", proficiency: "Native" },
    { language: "English", proficiency: "Intermediate", note: "TOEIC-equivalent 700 in university assessment" }
  ],
  awards: [
    {
      name: "Third Prize - Vietnam Student Informatics Olympiad",
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

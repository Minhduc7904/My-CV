// CV Data

// Basic Personal Information
export const personalInfo = {
  name: "Nguyen Minh Duc",
  title: "Applied AI Candidate",
  email: "nmduc7904@gmail.com",
  phone: "0392923661",
  dateOfBirth: "07/09/2004",
  location: "Ha Noi City, Vietnam",
  github: "github.com/Minhduc7904",
  portfolio: "my-cv-ashen-seven.vercel.app"
};

// Profile Section (Professional Summary)
export const profile = {
  summary:
    "Fourth-year Computer Science student with a strong interest in applied AI. I want to deepen my knowledge of Machine Learning, Deep Learning, Large Language Models, and Multi-Agent systems to solve practical problems and improve daily workflows. I am particularly interested in designing efficient AI workflows, optimizing token usage, and self-hosting open-source models to reduce costs and gain greater control over AI systems. I have basic experience with image annotation, academic AI projects, AI-assisted document processing, and integrating AI services into real-world applications. I am eager to strengthen my AI foundation, gain hands-on experience, and contribute to practical AI products.",
  highlights: [
    "Third Prize winner at the Vietnam Student Informatics Olympiad 2025",
    "Interested in Multi-Agent systems and AI workflow automation",
    "Basic experience with Machine Learning, Deep Learning, and image annotation",
    "Exploring token optimization and self-hosted open-source AI models",
    "Strong problem-solving and self-learning abilities"
  ]
};

// Project Experience
// Project Experience
export const employmentHistory = [
  {
    company: "BeeEdu - AI-Powered Education Platform",
    position: "Full-stack & Applied AI Developer",
    period: "Oct 2025 - Present",
    description:
      "Production education platform for a mathematics learning center serving approximately 1,000 students. The platform applies AI to automate question processing, support student learning, digitize examination content, and reconcile tuition payments. Live at https://beeedu.vn/.",
    github:
      "https://github.com/Minhduc7904/admin_frontend | https://github.com/Minhduc7904/BEE | https://github.com/Minhduc7904/student-frontend | https://github.com/Minhduc7904/seo_frontend",
    githubLinks: [
      {
        label: "Admin Frontend",
        url: "https://github.com/Minhduc7904/admin_frontend"
      },
      {
        label: "Backend",
        url: "https://github.com/Minhduc7904/BEE"
      },
      {
        label: "Student Frontend",
        url: "https://github.com/Minhduc7904/student-frontend"
      },
      {
        label: "SEO Frontend",
        url: "https://github.com/Minhduc7904/seo_frontend"
      }
    ],
    responsibilities: [
      "Built an AI-powered question classification workflow to automatically categorize mathematics questions by grade, topic, chapter, question type, and difficulty level",
      "Developed an AI-assisted Q&A feature that helps students submit mathematics questions and receive contextual explanations and learning support",
      "Designed an automated document-processing pipeline using Mistral OCR to extract content from uploaded exam files, followed by GPT-based parsing to split, structure, validate, and import questions into the database",
      "Implemented an AI-assisted tuition reconciliation workflow that analyzes bank-transfer descriptions, extracts payment information, searches for matching tuition records, and supports automatic payment verification",
      "Developed the platform backend with NestJS, Clean Architecture, Prisma/MySQL, Socket.IO, media storage, and integrations with AI, SePay, email, and Zalo services",
      "Deployed and maintained four applications on a VPS using Docker, GitHub Actions, Nginx, MinIO, MySQL, health checks, and Cloudflare"
    ],
    technologies:
      "NestJS, TypeScript, OpenAI GPT, Mistral OCR, Prompt Engineering, AI Classification, Document Processing, Prisma, MySQL, Socket.IO, JWT, SePay, MinIO, React/Vite, Redux, Next.js, Docker, Nginx, GitHub Actions, Cloudflare"
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
      name: "AI & Data",
      skills: [
        "OpenAI GPT",
        "Mistral OCR",
        "Prompt Engineering",
        "AI Integration",
        "Data Processing",
        "Roboflow",
        "LabelImg"
      ]
    },
    {
      name: "Backend",
      skills: [
        "NestJS",
        "Node.js",
        "REST APIs",
        "JWT",
        "Socket.IO",
        "Clean Architecture"
      ]
    },
    {
      name: "Database & Infrastructure",
      skills: [
        "MySQL",
        "Prisma",
        "Docker",
        "CI/CD",
        "Nginx",
        "MinIO"
      ]
    },
    {
      name: "Programming Languages",
      skills: ["TypeScript", "JavaScript", "Python", "C++", "C#"]
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Redux", "Flutter"]
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

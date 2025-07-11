// CV Data - Replace with your own information

// Basic Personal Information
export const personalInfo = {
  name: "Nguyen Minh Duc",
  title: "Software Developer",
  email: "nmduc7904@gmail.com",
  phone: "+84 392932661",
  location: "Ha Noi City, Vietnam",
  linkedin: "www.facebook.com/nm.duc7904",
  photoUrl: "https://via.placeholder.com/100x120", // Placeholder image - replace with your actual photo URL
  cvUrl: "https://my-cv-ashen-seven.vercel.app/" // Online CV URL
};

// Profile Section (Professional Summary)
export const profile = {
  summary: "I am a third-year Computer Science student passionate about full-stack web development, with a focus on JavaScript, ReactJS, and Node.js. I actively participate in competitive programming to sharpen my problem-solving skills. I'm especially interested in applying technology to education and am currently seeking internship opportunities to gain real-world experience and grow as a full-stack developer.",
  highlights: [

  ]
};

// Employment History (Work Experience)
export const employmentHistory = [
  {
    company: "ToanThayBee Website",
    position: "Lead Developer",
    period: "Feb 2025 - Present",
    description: "Educational platform for mathematics with diverse learning resources and real-time exam functionality. Live at https://toanthaybee.edu.vn",
    github: "https://github.com/Minhduc7904/ToanThayBeeNodejsReactjs",
    responsibilities: [
      "Built a full-stack web app using ReactJS (CRA) and Redux for the frontend",
      "Developed RESTful APIs with Node.js and Express",
      "Implemented real-time exams with Socket.IO",
      "Created CMS for classes, theory articles, and question banks",
      "Used MySQL (via Cloud SQL) for structured, relational data storage",
      "Integrated anti-cheating mechanisms during online exams",
      "Deployed on Vercel (frontend), Cloud Run (backend), Cloud SQL (MySQL), and Firebase (image storage)",
      "Launched and maintained a live platform used by students"
    ],
    technologies: "ReactJS, Tailwind, Redux, Node.js, Express, Socket.io, RESTful APIs, MySQL"
  },
  {
    company: "ToanThayBee Mobile App",
    position: "Lead Logic Developer",
    period: "Feb 2025 - Present",
    description: "Mobile application companion to the ToanThayBee website, providing on-the-go access to learning resources and real-time exam participation.",
    github: "https://github.com/b4schh/toan-thay-bee-app",
    responsibilities: [
      "Developed core application logic using React Native and Redux",
      "Integrated Socket.io for real-time exam functionality matching the website capabilities",
      "Ensured cross-platform compatibility for both iOS and Android devices",
      "Synchronized data and functionality with the main website platform"
    ],
    technologies: "React Native, Redux, Socket.io, RESTful APIs"
  }
];

// Education Information
export const education = [
  {
    institution: "Hanoi University of Civil Engineering",
    degree: "Computer Science Engineer",
    period: "2022 - Present",
    description: "Currently in my third year, focusing on software engineering and web development.",
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
      skills: ["JavaScript", "Python", "HTML5", "CSS3", "C++"]
    },
    {
      name: "Tools",
      skills: ["Git", "VSCode", "Postman", "Docker"]
    },
    {
      name: "Frontend",
      skills: ["React", "React Native", "Tailwind CSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express"]
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

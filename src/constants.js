import clogo from "./assets/clogo.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import git from "./assets/git.png";
import html from "./assets/html logo.png";
import infosysspringboard from "./assets/infosys.jpg";
import java from "./assets/java logo.png";
import jslogo from "./assets/js logo.png";
import mahak from "./assets/mahak.jpeg";
import nodejs from "./assets/nodejs.png";
import reactlogo from "./assets/react logo.png";
import tailwindcss from "./assets/tailwind css.png";
import salesforce from "./assets/salesforce.png";
import springboot from "./assets/springboot.png";
import vercel from "./assets/vercel.png";
import vscode from "./assets/vs.jpg";
import postgresql from "./assets/postgresql.png";
import soql from "./assets/soql.png";
import apex from "./assets/apex.png";
import mysql from "./assets/mysql.png";
import smartbridge from "./assets/smartbridge.jpg";
import globalIP from "./assets/globalIP.jpg";
import lnctLogo from "./assets/LNCT.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: html },
      { name: 'JavaScript', logo: jslogo },
      { name: 'React JS', logo: reactlogo },
      { name: 'Tailwind CSS', logo: tailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejs },
      { name: 'Spring Boot', logo: springboot },
      { name: 'PostgreSQL', logo: postgresql },
      { name: 'SOQL', logo: soql },
      { name: 'MySQL', logo: mysql },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: clogo },
      { name: 'Java', logo: java },
      { name: 'Apex', logo: apex },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: github },
      { name: 'VS Code', logo: vscode },
      { name: 'Vercel', logo: vercel },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: infosysspringboard,
    role: "Full Stack Developer Intern",
    company: "Infosys Springboard",
    certificateLink: "https://drive.google.com/file/d/1iPytPF4mcNNMoCIvyb0jr2rjYiqmluG_/view?usp=sharing",
    date: "2026",
    desc: "Completed a virtual internship building the Global IP Intelligence Platform — a full-stack web application designed to help innovators, law firms, and R&D teams monitor global intellectual property activity. Implemented an advanced search interface for patents and trademarks by keyword, assignee, inventor, and jurisdiction, role-based access for users/analysts/admins, secure JWT authentication, a subscription system for tracking filings and legal status, and visualizations of IP lifecycle and landscape trends. Integrated with global IP data sources (WIPO, USPTO, EPO, TMView, OpenCorporates) and built an admin dashboard for API health and usage monitoring, with a deployment-ready PostgreSQL backend.",
    skills: [
      "React JS",
      "Tailwind CSS",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "JWT",
      "REST APIs",
    ],
  },
  {
    id: 1,
    img: smartbridge,
    role: "Salesforce Developer Intern",
    company: "SmartBridge",
    certificateLink: "https://drive.google.com/file/d/1kCOb5MpL-uFbEpvQn-EnesAN6XFXmWX8/view?usp=sharing",
    date: "2025",
    desc: "Completed a virtual internship focused on Salesforce development, gaining hands-on experience with the Salesforce platform's core development tools. Built and customized Salesforce applications using Apex for backend logic and Lightning Web Components (LWC) for interactive UI, worked with custom objects, fields, and automation through Flows, and queried data using SOQL. Strengthened understanding of the Salesforce ecosystem including security models, data modeling, and platform administration.",
    skills: [
      "Salesforce",
      "Salesforce Admin",
      "Apex",
      "LWC",
      "SOQL",
      "Flows",
      "Integration",
      "Agentforce",
    ],
  },
];

export const projects = [
   {
    id: 0,
    title: "Global Intellectual Property System",
    description:
      "A full-stack web platform designed to help innovators, law firms, and R&D teams monitor global intellectual property activity. Features an advanced search interface for patents and trademarks by keyword, assignee, inventor, and jurisdiction, role-based access control, JWT-based authentication, a subscription system for tracking filings and legal status, and visualizations of IP lifecycle trends — backed by a deployment-ready PostgreSQL database.",
    image: globalIP,
    tags: ["React JS", "Spring Boot", "Java", "PostgreSQL", "JWT"],
    github: "#",
    webapp: "https://globalip-intelligence-platform-groupa.netlify.app/",
  },
  {
    id: 1,
    title: "Resume Builder",
    description:
      "A resume-building application built natively on the Salesforce platform. Used Lightning Web Components (LWC) for an interactive, dynamic UI and Apex for backend logic, allowing users to create, structure, and export professional resumes directly within Salesforce.",
    image: salesforce,
    tags: ["Salesforce", "LWC", "Apex"],
    github: "#",
    webapp: "#",
  },
  {
    id: 2,
    title: "Airlines Management System",
    description:
      "An airline operations management system built using Salesforce Admin tools. Custom objects, record types, and automated Flows handle bookings, flight schedules, and passenger records — all configured declaratively without writing Apex code.",
    image: salesforce,
    tags: ["Salesforce Admin", "Flows", "Custom Objects"],
    github: "#",
    webapp: "#",
  },
 
];

export const education = [
  {
    id: 0,
    img: lnctLogo,
    school: "LNCT University, Bhopal",
    date: "2022 - 2026",
    grade: "8.03 CGPA",
    desc: "I completed my Bachelor of Technology (B.Tech) in Computer Science Engineering from LNCT University, Bhopal. During my time there, I built a strong foundation in programming, data structures, algorithms, database management systems, and web development. I also pursued a Salesforce Platform Developer I certification alongside my degree and worked on real projects spanning both Java full-stack and Salesforce development, which strengthened my practical understanding of building scalable software systems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
  },
];
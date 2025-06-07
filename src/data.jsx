import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];

export const projects = [
  {
    title: "DressMe - Fashion Design App",
    image: project1,
    category: "App",
    description: `A mobile app that uses AI to generate custom clothing designs, suggest outfits from photos, and recommend colors based on skin tone. Designed to be simple, stylish, and personalized.`,
    video: "https://drive.google.com/file/d/1vLOH4wJvYikReuoNG0QWcaTJRDLnzhOf/view?usp=sharing",
    github: "https://github.com/SupunGamage0/Fashion_Design_App",
    stacks: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
    ],
  },
  {
    title: "Property Management Website",
    image: project2,
    category: "Web",
    description: `A responsive Single Page Application for property search and management. Built with React, JSON, and React Widgets. Features property search, responsive design, favorites list, and security measures.`,
    demo: "https://real-estate-app-plum.vercel.app/",
    github: "https://github.com/SupunGamage0/RealEstate-App",
    stacks: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JSON",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
    ],
  },
  {
    title: "greenMart Website",
    image: project3,
    category: "Web",
    description: `A responsive website focused on a UN Sustainable Development Goal (SDG), built with HTML5, CSS3, and JavaScript. Features collaborative development, accessibility compliance, and interactive elements.`,
    demo: "https://green-mart-website.vercel.app/HTML/HomePage.html",
    github: "https://github.com/SupunGamage0/greenMart-Website",
    stacks: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
  {
    title: "Ticket System Simulation",
    image: project4,
    category: "Full Stack",
    description: `Ticket System Simulation simulates a dynamic ticket vending and purchasing system, providing a visual and interactive experience through a React-based frontend, a robust Spring Boot backend, and a standalone Java command-line interface..
                   Elevate your project management experience and achieve success with ease.`,
    demo: "https://ticket-system-simulation.vercel.app/",
    github: "https://github.com/SupunGamage0/Ticket-System-Simulation",
    stacks: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        
      },

      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
  },
  {
    title: "Bookstore REST API",
    image: project5,
    category: "Backend", // or "API", "Java", or "Apps"
    description: `A RESTful API for managing books, authors, customers, carts, and orders. Built with JAX-RS (Jersey), Java, and tested with Postman.`,
    video: "https://drive.google.com/file/d/1mCv5Upq_K-Eq7gUypK-oUj1SMe0hg8x3/view?usp=sharing",
    github: "https://github.com/SupunGamage0/Bookstore-REST-API",
    stacks: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
  },
  {
    title: "NetworkFlow Algo-CW",
    image: project6,
    category: "Algorithm", // or "Backend" if you prefer
    description: `This project computes the maximum flow in a directed graph using the Ford-Fulkerson algorithm (with BFS for shortest paths).`,
    demo: "https://google.com/",
    github: "https://github.com/SupunGamage0/NetworkFlow-Algo-CW",
    stacks: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
];

export const skills = [
  {
    title: "Programming Languages",
    data: [
      {
        skill: "Java",
        level: "Experienced",
        note: "Booking systems",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        skill: "Python",
        level: "Intermediate",
        note: "Games, exam result systems",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        note: "Web and React apps",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        skill: "TypeScript",
        level: "Intermediate",
        note: "DressMe backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        skill: "HTML",
        level: "Experienced",
        note: "Responsive websites",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        skill: "CSS",
        level: "Experienced",
        note: "Responsive websites",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      {
        skill: "React",
        level: "Experienced",
        note: "Property management SPA",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        skill: "Spring Boot",
        level: "Intermediate",
        note: "Ticketing system",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        skill: "Express.js",
        level: "Intermediate",
        note: "DressMe backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        skill: "Node.js",
        level: "Intermediate",
        note: "DressMe backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
  },
  {
    title: "UI/UX Design Tools",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        note: "Healthcare App UI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      {
        skill: "MongoDB",
        level: "Intermediate",
        note: "DressMe backend",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        skill: "Git/GitHub",
        level: "Experienced",
        note: "Used in multiple projects",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        skill: "Postman",
        level: "Intermediate",
        note: "API testing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        skill: "NetBeans",
        level: "Experienced",
        note: "Java projects",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg",
      },
      {
        skill: "IntelliJ IDEA",
        level: "Experienced",
        note: "Java projects",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
      {
        skill: "VS Code",
        level: "Experienced",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "gamagesupun001@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=gamagesupun001@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  
  {
    name: "WhatsApp",
    value: "+94768516106",
    link: "https://wa.me/94768516106",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/SupunGamage0",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/supungamage0",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];

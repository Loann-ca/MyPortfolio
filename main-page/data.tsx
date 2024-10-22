import { Home, Mail, UserRound } from "lucide-react";
import Image from "next/image";

interface SkillIcons {
    [key: string]: JSX.Element;
  }

export const skillIcons: SkillIcons = {
    "HTML": <Image src="/html5.png" alt="HTML" height= {20} width={20} />,
    "JavaScript": <Image src="/javaScript.png" alt="HTML" height= {20} width={20} />,
    "Angular": <Image src="/angular.png" alt="HTML" height= {20} width={20} />,
    "CSS": <Image src="/css3.png" alt="HTML" height= {20} width={20} />,
    "TypeScript": <Image src="/ts.png" alt="HTML" height= {20} width={20} />,
    "Loopback": <Image src="/loopback.png" alt="HTML" height= {20} width={20} />,
    "ElasticSearch": <Image src="/elastic.png" alt="HTML" height= {20} width={20} />,
    "Flutter": <Image src="/flutter.png" alt="HTML" height= {20} width={20} />,
    "MongoDB": <Image src="/mongodb.png" alt="HTML" height= {20} width={20} />,
    "MySQL": <Image src="/mySQL.png" alt="HTML" height= {20} width={20} />,
    "Next.js": <Image src="/nextJs.png" alt="HTML" height= {20} width={20} />,
    "Node.js": <Image src="/nodeJS.png" alt="HTML" height= {20} width={20} />,
    "PostgreSQL": <Image src="/postgre.png" alt="HTML" height= {20} width={20} />,
    "Python": <Image src="/python.png" alt="HTML" height= {20} width={20} />,
    "React": <Image src="/react.png" alt="HTML" height= {20} width={20} />,
    "SQLLite": <Image src="/sqlLite.png" alt="HTML" height= {20} width={20} />,
    "Tailwind CSS": <Image src="/tailwindcss.png" alt="HTML" height= {20} width={20} />,

  };
export const itemsNavbar = [
    {
        id: 1,
        title: 'Home',
        icon: <Home size={20} />,
        link: "#Home"

    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Mail",
        icon: <Mail size={20} />,
        link: "#contact",
    },
]

export const skillsData = [
    {
        id: 1,
        title: "Frontend Development",
        skills: [
            {
                name: "HTML",
                subtitle: "",
            },
            {
                name: "CSS",
                subtitle: "",
            },
            {
                name: "JavaScript",
                subtitle: "",
            },
            {
                name: "Tailwind CSS",
                subtitle: "",
            },
            {
                name: "React",
                subtitle: "",
            },
            {
                name: "Angular",
                subtitle: "",
            },
            {
                name: "TypeScript",
                subtitle: "",
            },
            {
                name: "Flutter",
                subtitle: "",
            },
            {
                name: "Next.js",
                subtitle: "",
            },
            {
                name: "Python",
                subtitle: "",
            }
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        skills: [
            {
                name: "Node JS",
                subtitle: "",
            },
            {
                name: "Python",
                subtitle: "",
            }
        ],
    },
    {
        id: 3,
        title: "Database",
        skills: [
            {
                name: "",
                subtitle: "",
            }
        ],
    },
    {
        id: 4,
        title: "Cloud & Infraestructure",
        skills: [
            {
                name: "AWS",
                subtitle: "",
            },
            {
                name: "Azure",
                subtitle: "",
            }
        ],
        
    },

];


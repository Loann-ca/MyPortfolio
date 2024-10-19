import { Home, Mail, UserRound } from "lucide-react";
import Image from "next/image";

interface SkillIcons {
    [key: string]: JSX.Element;
  }

export const skillIcons: SkillIcons = {
    "HTML": <Image src="/html5.png" alt="HTML" height= {20} width={20} />,
    "JavaScript": <Image src="/javaScript.png" alt="HTML" height= {20} width={20} />,

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
        ],
        
    },

];


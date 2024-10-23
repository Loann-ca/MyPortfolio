import { Code2, Home, Inbox, Mail, Phone, SquareChartGantt, UserRound } from "lucide-react";
import Image from "next/image";



  export const skillIcons = {
    "JavaScript": <Image src="/javaScript.png" alt="JavaScript" height={20} width={20} />,
    "TypeScript": <Image src="/typeScript.png" alt="TypeScript" height={20} width={20} />,
    "HTML": <Image src="/html5.png" alt="HTML" height={20} width={20} />,
    "CSS": <Image src="/css3.png" alt="CSS" height={20} width={20} />,
    "Angular": <Image src="/angular.png" alt="Angular" height={20} width={20} />,
    "React": <Image src="/react.png" alt="React" height={20} width={20} />,
    "Next.js": <Image src="/nextJs.png" alt="Next.js" height={20} width={20} />,
    "Tailwind CSS": <Image src="/tailwindcss.png" alt="Tailwind CSS" height={20} width={20} />,
    "Flutter": <Image src="/flutter.png" alt="Flutter" height={20} width={20} />,
    "Dart": <Image src="/dart.png" alt="Dart" height={20} width={20} />,
    "PHP": <Image src="/php.png" alt="PHP" height={20} width={20} />,
    "Node.js": <Image src="/nodeJS.png" alt="Node.js" height={20} width={20} />,
    "Python": <Image src="/python.png" alt="Python" height={20} width={20} />,
    "Loopback": <Image src="/loopback.png" alt="Loopback" height={20} width={20} />,
    "Java": <Image src="/java.png" alt="Java" height={20} width={20} />,
    "C#": <Image src="/cSharp.png" alt="C#" height={20} width={20} />,
    "C++": <Image src="/c++.png" alt="C++" height={20} width={20} />,
    "PostgreSQL": <Image src="/postgresql.png" alt="PostgreSQL" height={20} width={20} />,
    "MongoDB": <Image src="/mongodb.png" alt="MongoDB" height={20} width={20} />,
    "MySQL": <Image src="/mySQL.png" alt="MySQL" height={20} width={20} />,
    "SQLite": <Image src="/sqLite.png" alt="SQLite" height={20} width={20} />,
    "ElasticSearch": <Image src="/elastic.png" alt="ElasticSearch" height={20} width={20} />,
    "AWS": <Image src="/AWS.png" alt="AWS" height={20} width={20} />,
    "Azure": <Image src="/azure.png" alt="Azure" height={20} width={20} />,
    "Docker": <Image src="/docker.png" alt="Docker" height={20} width={20} />,
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
        title: "Skills",
        icon: <SquareChartGantt size={20} />,
        link: "#skills",
    },
    {
        id: 4,
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
                name: "JavaScript",
                level: "Advanced",
            },
            {
                name: "TypeScript",
                level: "Advanced",
            },
            {
                name: "HTML",
                level: "Advanced",
            },
            {
                name: "CSS",
                level: "Advanced",
            },
            {
                name: "Angular",
                level: "Advanced",
            },
            {
                name: "React",
                level: "Intermediate",
            },
            {
                name: "Next.js",
                level: "Intermediate",
            },
            {
                name: "Tailwind CSS",
                level: "Intermediate",
            },
            {
                name: "Flutter",
                level: "Intermediate",
            },
            {
                name: "Dart",
                level: "Intermediate",
            },
            {
                name: "PHP",
                level: "Intermediate",
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        skills: [
            {
                name: "Node.js",
                level: "Advanced",
            },
            {
                name: "Python",
                level: "Advanced",
            },
            {
                name: "JavaScript",
                level: "Advanced",
            },
            {
                name: "TypeScript",
                level: "Advanced",
            },
            {
                name: "Loopback",
                level: "Advanced",
            },
            {
                name: "Java",
                level: "Intermediate",
            },
            {
                name: "C#",
                level: "Basic",
            },
            {
                name: "C++",
                level: "Basic",
            },
        ],
    },
    {
        id: 3,
        title: "Database",
        skills: [
            {
                name: "PostgreSQL",
                level: "Advanced",
            },
            {
                name: "MongoDB",
                level: "Advanced",
            },
            {
                name: "MySQL",
                level: "Advanced",
            },
            {
                name: "SQLite",
                level: "Advanced",
            },
            {
                name: "ElasticSearch",
                level: "Advanced",
            },
        ],
    },
    {
        id: 4,
        title: "Cloud & Infrastructure",
        skills: [
            {
                name: "AWS",
                level: "Intermediate",
            },
            {
                name: "Azure",
                level: "Intermediate",
            },
            {
                name: "Docker",
                level: "Intermediate",
            },
        ],
    },
];

export const softSkills = [
    { name: "Self-Confidence", description: "Belief in one's own abilities and judgment." },
    { name: "Problem Resolution", description: "Ability to identify issues and find effective solutions." },
    { name: "Communication", description: "Skill in expressing ideas clearly and listening to others." },
    { name: "People Person", description: "Enjoy working with others and building relationships." },
    { name: "Responsible", description: "Accountable for one's actions and commitments." },
    { name: "Teamwork", description: "Collaborating effectively with colleagues to achieve common goals." },
    { name: "Adaptability", description: "Ability to adjust to new environments and technologies quickly." },
    { name: "Critical Thinking", description: "Analyzing information and making informed decisions." },
    { name: "Time Management", description: "Organizing tasks and meeting deadlines." },
    { name: "Creativity", description: "Thinking innovatively to solve complex challenges." },
    { name: "Empathy", description: "Understanding and considering others' perspectives and needs." },
    { name: "Quick Learner", description: "Ability to grasp new concepts and technologies swiftly." },
];

export const dataContact = [
    {
        id: 1,
        title: "Phone",
        subtitle: "+34 644223777",
        link: "tel:+34644223777",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "mail",
        subtitle: "loanncoal@gmail.com",
        link: "mailto:loanncoal@gmail.com",
        icon: <Inbox />,
    },
];

export const projectsData = [
    {
        id: 1,
        title: "Proyecto Uno",
        description: "Descripción del proyecto uno.",
        images: [
            "/angular.png",
            "/AWS.png",
            "/dart.png"
        ],
        link: "https://enlace-al-proyecto1.com"
    },
    {
        id: 2,
        title: "Proyecto Dos",
        description: "Descripción del proyecto dos.",
        images: [
        ],
        link: "https://enlace-al-proyecto2.com"
    },
];
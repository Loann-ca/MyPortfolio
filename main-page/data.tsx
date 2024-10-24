import { Code2, FolderKanban, Home, Inbox, Mail, Phone, SquareChartGantt, UserRound } from "lucide-react";
import Image from "next/image";



  export const skillIcons = {
    "JavaScript": <Image src="/techSkills/javaScript.png" alt="JavaScript" height={20} width={20} />,
    "TypeScript": <Image src="/techSkills/typeScript.png" alt="TypeScript" height={20} width={20} />,
    "HTML": <Image src="/techSkills/html5.png" alt="HTML" height={20} width={20} />,
    "CSS": <Image src="/techSkills/css3.png" alt="CSS" height={20} width={20} />,
    "Angular": <Image src="/techSkills/angular.png" alt="Angular" height={20} width={20} />,
    "React": <Image src="/techSkills/react.png" alt="React" height={20} width={20} />,
    "Next.js": <Image src="/techSkills/nextJs.png" alt="Next.js" height={20} width={20} />,
    "Tailwind CSS": <Image src="/techSkills/tailwindcss.png" alt="Tailwind CSS" height={20} width={20} />,
    "Flutter": <Image src="/techSkills/flutter.png" alt="Flutter" height={20} width={20} />,
    "Dart": <Image src="/techSkills/dart.png" alt="Dart" height={20} width={20} />,
    "PHP": <Image src="/techSkills/php.png" alt="PHP" height={20} width={20} />,
    "Node.js": <Image src="/techSkills/nodeJS.png" alt="Node.js" height={20} width={20} />,
    "Python": <Image src="/techSkills/python.png" alt="Python" height={20} width={20} />,
    "Loopback": <Image src="/techSkills/loopback.png" alt="Loopback" height={20} width={20} />,
    "Java": <Image src="/techSkills/java.png" alt="Java" height={20} width={20} />,
    "C#": <Image src="/techSkills/cSharp.png" alt="C#" height={20} width={20} />,
    "C++": <Image src="/techSkills/c++.png" alt="C++" height={20} width={20} />,
    "PostgreSQL": <Image src="/techSkills/postgresql.png" alt="PostgreSQL" height={20} width={20} />,
    "MongoDB": <Image src="/techSkills/mongodb.png" alt="MongoDB" height={20} width={20} />,
    "MySQL": <Image src="/techSkills/mySQL.png" alt="MySQL" height={20} width={20} />,
    "SQLite": <Image src="/techSkills/sqLite.png" alt="SQLite" height={20} width={20} />,
    "ElasticSearch": <Image src="/techSkills/elastic.png" alt="ElasticSearch" height={20} width={20} />,
    "AWS": <Image src="/techSkills/AWS.png" alt="AWS" height={20} width={20} />,
    "Azure": <Image src="/techSkills/azure.png" alt="Azure" height={20} width={20} />,
    "Docker": <Image src="/techSkills/docker.png" alt="Docker" height={20} width={20} />,
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
        title: "Projects",
        icon: <FolderKanban size={20} />,
        link: "#projects",
    },
    {
        id: 5,
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
        title: "PetMate",
        description: "PetMate is an application created at the university with a group of students, aimed at facilitating adoption between multiple animal shelters and adopters. My contribution to this project has been comprehensive, including analysis, design, and mainly front-end coding.",
        images: [
          "/projects/PetMate/pantalla inicio.png",
          "/projects/PetMate/registro.png",
          "/projects/PetMate/seleccion.png",
          "/projects/PetMate/filtrado.png",
          "/projects/PetMate/busqueda.png",
          "/projects/PetMate/adopciones.png",
          "/projects/PetMate/informacionAdoptante.png",
          "/projects/PetMate/datosDeLaProtectora.png",
          "/projects/PetMate/datosDeLaMascota.png",
          "/projects/PetMate/mensajes.png",
          "/projects/PetMate/chatEnLinea.png",
          "/projects/PetMate/añadirMascota.png",
          
        ],
        video: "/projects/PetMate/Video.mp4",
        link: "https://github.com/rubenvare/PetMate_Frontend",
    },
    {
        id: 2,
        title: "My Portfolio",
        description: "This project is the development of the portfolio you are currently viewing.",
        images: [
            "/projects/MyPortfolio/fotoIntro.png",
            "/projects/MyPortfolio/aboutme.png",
            "/projects/MyPortfolio/foto skills.png",
            "/projects/MyPortfolio/projects.png",
        ],
        link: "https://github.com/Loann-ca/MyPortfolio"
    },
    {
        id: 3,
        title: "Economic Monitoring of a Project",
        description: "This is my Final Degree Project (TFG), developed at the company Wattwin. For the project, I analyzed the requirements by holding meetings with clients and researching potential competitors. I created my product backlog, developed an initial design using Moqups, and later a final design with Figma. Once everything was set, I divided the tasks into different sprints and worked on both the frontend and backend, including creating new database entities.\n\nThe purpose of this project is to economically track a project’s progress. Previously, a project (such as a photovoltaic installation) was only associated with its budget and what would be charged based on that budget. However, unexpected costs could arise for the company, both positive and negative, making it difficult to accurately assess whether the budget had been overestimated, underestimated, or if the profit margins were correct. This is why this TFG was created.\n\nTo achieve this, I developed a resources section where users could view a list of resources in different formats, export them to Excel, and import them as needed. There was also an activity log to track user actions (modifications, additions, etc.) with filtering and search capabilities. Each resource had a detailed view, allowing attributes to be changed, including creating or uploading Google documents.\n\nAfter completing the resources section, I moved on to the costs section. Here, the confirmed budget costs could be marked as 'actual' pending confirmation. Additionally, costs related to resources, products (an entity previously created by another colleague), or other expenses could be added. I also implemented a comparison table to view the difference between the estimated and actual costs.",
        images: [
            "/projects/TFG/costes.png",
            "/projects/TFG/recursoListado.png",
            "/projects/TFG/recursosDetalle.png",
            "/projects/TFG/filtro.png",
            "/projects/TFG/recursoListadoTabla.png",
            "/projects/TFG/valor.png",
        ],
        video: "/projects/TFG/Video TFG.mov",
        showMore:  true,

    }
    
];

interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    video?: string;
    link?: string;
    showMore?: boolean; 
}

export interface ProjectDescriptionProps {
    project: Project;
}


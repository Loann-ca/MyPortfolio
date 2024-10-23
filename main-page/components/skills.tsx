import { skillsData, skillIcons, softSkills } from "@/data";
import Title from "./shared/title";
import { Database, Laptop, SquareChartGantt, Cloud } from "lucide-react";

const Skills = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="skills">
            <Title title="Skills" subtitle="Tech Skills" />

            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {skillsData.map((data) => (
                    <div key={data.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl flex items-center justify-center gap-2">
                            {data.title}
                            {data.title === "Frontend Development" && <Laptop />}
                            {data.title === "Backend Development" && <SquareChartGantt />}
                            {data.title === "Database" && <Database />}
                            {data.title === "Cloud & Infraestructure" && <Cloud />}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.skills.map((item) => item && (
                                <div key={item.name} className="my-4">
                                    <p className="flex gap-2 mb-2">
                                    {skillIcons[item.name as keyof typeof skillIcons] && (<span className="mr-2">{skillIcons[item.name as keyof typeof skillIcons]}</span>)}
                                        {item.name}
                                    </p>
                                    <p className="text-gray-400 mb-2">{item.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-6 md:px-12 md:py-10 max-w-5xl mx-auto">
                <Title title="" subtitle="Soft Skills" />
                <div className="grid md:grid-cols-2 gap-8 mt-5">
                {softSkills.map((skill) => (
                        <div key={skill.name} className="p-4 border border-gray-400 rounded-lg">
                            <h4 className="text-lg font-semibold">{skill.name}</h4>
                            <p className="text-gray-600">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    );
}

export default Skills;
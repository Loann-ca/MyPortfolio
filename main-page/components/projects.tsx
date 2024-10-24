"use client"

import Image from "next/image";
import Title from "./shared/title";
import { ProjectDescriptionProps, projectsData } from "@/data"; 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useState } from "react";

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="projects">
            <Title title="Projects" subtitle="My recent projects" />

            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {projectsData.map((project) => project && (
                    <div key={project.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl font-semibold">{project.title}</h3>
                        <Carousel
                            opts={{
                                align: "start"
                            }}
                            orientation="horizontal"
                            className="w-full max-w-xs mx-auto"
                        >
                            <CarouselContent className="h-[500px]">
                                {project.video && (
                                    <CarouselItem className="w-full flex items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <video
                                                controls
                                                className="w-full h-auto rounded-lg"
                                            >
                                                <source src={project.video} type="video/mp4" />
                                            </video>
                                        </div>
                                    </CarouselItem>
                                )}

                                {project.images.map((image, index) => (
                                    <CarouselItem key={index} className="w-full flex items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={image}
                                                alt={`${project.title} image ${index + 1}`}
                                                width={200}
                                                height={200}
                                                className="w-full h-auto rounded-lg cursor-pointer"
                                                onClick={() => openModal(image)}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        <ProjectDescription project={project} />

                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block text-center">
                                See the code
                            </a>
                        ) : (
                            <p className="text-red-500 mt-2 block text-center">
                                The code is confidential.
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {isModalOpen && selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                    <div className="relative">
                        <Image
                            src={selectedImage}
                            alt="Expanded Image"
                            width={800}
                            height={800}
                            className="rounded-lg max-w-full max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_WORDS = 50;

    const words = project.description.split(" ");
    const displayedText = isExpanded ? project.description : words.slice(0, MAX_WORDS).join(" ") + (words.length > MAX_WORDS ? "..." : "");

    return (
        <div>
            <p className="text-gray-600">{displayedText}</p>
            {words.length > MAX_WORDS && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="text-blue-500 hover:underline mt-2 block mx-auto"
                >
                    {isExpanded ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}

export default Projects;

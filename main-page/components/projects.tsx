
import Image from "next/image";
import Title from "./shared/title";
import { projectsData } from "@/data"; 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="projects">
            <Title title="Proyectos" subtitle="Mis trabajos recientes" />

            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {projectsData.map((project) => (
                    <div key={project.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl font-semibold">{project.title}</h3>
                        <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="horizontal"
                        className="w-full max-w-xs mx-auto"
                    >
                        <CarouselContent className="h-[250px] flex items-center justify-center overflow-hidden">
                                {project.images.map((image, index) => (
                                    <CarouselItem key={index} className="w-full flex items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={image}
                                                alt={`${project.title} imagen ${index + 1}`}
                                                width={200} height={200}
                                                className="w-full h-auto rounded-lg" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                    </Carousel>
                        <p className="text-gray-600">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block text-center">
                            Ver Proyecto
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
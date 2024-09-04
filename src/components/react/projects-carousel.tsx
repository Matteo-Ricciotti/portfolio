import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PROJECTS } from "@/constants/projects";
import { ProjectDetails } from "./project-details";

export const ProjectsCarousel = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const currentProject = PROJECTS.find((_, i) => i === current - 1) ?? PROJECTS[0];

    return (
        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 md:gap-10 md:text-start">
            <ProjectDetails {...currentProject} />
            <Carousel
                className="rounded-lg border-2 border-accent p-4 max-md:min-h-[298px] md:h-fit"
                setApi={setApi}
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 5000 })]}
            >
                <div className="overflow-hidden rounded-md">
                    <CarouselContent>
                        {PROJECTS.map((project) => (
                            <CarouselItem
                                key={project.code}
                                className="aspect-square size-[298px] md:size-[348px] xl:size-[398px]"
                            >
                                <img
                                    width={999}
                                    height={999}
                                    className="size-full rounded-md object-cover"
                                    src={`/projects/${project.image}`}
                                    alt={project.name}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>
                <CarouselPrevious className="max-md:-top-[3.2rem] max-md:left-[calc(50%-6.5rem)]" />
                <CarouselNext className="max-md:-top-[3.2rem] max-md:right-[calc(50%-6.5rem)]" />
            </Carousel>
        </div>
    );
};

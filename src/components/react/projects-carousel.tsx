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
        <div className="grid grid-cols-2 gap-10">
            <ProjectDetails {...currentProject} />
            <Carousel
                className="h-fit rounded-lg border-2 border-accent p-4"
                setApi={setApi}
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 5000 })]}
            >
                <div className="overflow-hidden rounded-md">
                    <CarouselContent>
                        {PROJECTS.map((project) => (
                            <CarouselItem
                                key={project.code}
                                className="aspect-square size-[198px] sm:size-[298px] md:size-[348px] xl:size-[398px]"
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

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

    return (
        <>
            {/* <div className="grid gap-20">
                {PROJECTS.map((project, i) => (
                    <>
                        <ProjectDetails number={i + 1} swap={i % 2 !== 0} {...project} />
                        {i !== PROJECTS.length - 1 && <div className="border-accent/50 w-full border border-dashed" />}
                    </>
                ))}
            </div> */}
            <Carousel setApi={setApi} opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
                <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
};

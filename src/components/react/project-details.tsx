import { Fragment } from "react";

import { cn } from "@/utils";
import type { Project } from "@/constants/projects";
import { SKILLS } from "@/constants/skills";

import { ArrowRight } from "./assets/arrow-right";
import { GitHub } from "./assets/github";
import { Description } from "./text/description";
import { OutlineText } from "./text/outline-text";
import { SkillLink } from "./text/skill-link";
import { Title } from "./text/title";
import { Button } from "./ui/button";

type ProjectDetailsProps = Project;

export const ProjectDetails = ({ code, name, description, image, stack, link, github }: ProjectDetailsProps) => {
    const technologies = stack.map((id) => {
        const skillData = SKILLS.find((skill) => skill.id === id);
        if (!skillData) throw new Error(`Missing technology with id '${id}'`);
        return skillData;
    });

    return (
        <div>
            <div slot="title">
                <OutlineText>{code.padStart(2, "0")}</OutlineText>
                <Title>{name}</Title>
            </div>
            <Description>{description}</Description>
            <div
                slot="other"
                className="flex w-full max-w-full flex-col items-center md:max-w-[350px] md:items-start lg:max-w-[550px] xl:max-w-[650px]"
            >
                <ul className="flex flex-wrap justify-center gap-2 text-accent md:justify-start">
                    {technologies.map((tech, i) => (
                        <Fragment key={tech.name}>
                            <SkillLink url={tech.url}>{tech.name}</SkillLink>
                            {i !== technologies.length - 1 && <li>-</li>}
                        </Fragment>
                    ))}
                </ul>
                <div className="mb-6 mt-4 w-full border border-white/20"></div>
                <div className="flex gap-4">
                    <Button
                        disabled={!link}
                        aria-label="Project Link"
                        onClick={() => window.open(link)}
                        size="icon"
                        variant="secondary"
                    >
                        <ArrowRight className={`${cn("-rotate-45 transition-all", link && "hover:rotate-0")}`} />
                    </Button>
                    <Button
                        disabled={!github}
                        aria-label="Project Code"
                        onClick={() => window.open(github)}
                        size="icon"
                        variant="secondary"
                    >
                        <GitHub />
                    </Button>
                </div>
            </div>
        </div>
    );
};

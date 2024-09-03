import { ArrowRight } from "./assets/arrow-right";
import { GitHub } from "./assets/github";
import { IconLink } from "./icon-link";
import { Description } from "./text/description";
import { OutlineText } from "./text/outline-text";
import { SkillLink } from "./text/skill-link";
import { Title } from "./text/title";

export const ProjectDetails = () => {
    return (
        <div>
            {/* <div slot="title">
                <OutlineText>{String(number).padStart(2, "0")}</OutlineText>
                <Title>{name}</Title>
            </div>
            <Description>{description}</Description>
            <div
                slot="other"
                className="flex w-full max-w-full flex-col items-center md:max-w-[350px] md:items-start lg:max-w-[550px] xl:max-w-[650px]"
            >
                <ul className="flex flex-wrap justify-center gap-2 text-accent md:justify-start">
                    {technologies.map(({ url, name }, i) => (
                        <>
                            <SkillLink url={url}>{name}</SkillLink>
                            {i !== technologies.length - 1 && <li>-</li>}
                        </>
                    ))}
                </ul>
                <div className="mb-6 mt-4 w-full border border-white/20"></div>
                <div className="flex gap-4">
                    <IconLink href={link} target="_blank" disabledText="Link not available" darker>
                        <ArrowRight className={`${cn("-rotate-45 transition-all", link && "hover:rotate-0")}`} />
                    </IconLink>
                    <IconLink href={github} target="_blank" disabledText="Closed source" darker>
                        <GitHub />
                    </IconLink>
                </div>
            </div>
            <img slot="image" className="size-72 object-cover" src={`/projects/${image}`} alt={name} /> */}
        </div>
    );
};

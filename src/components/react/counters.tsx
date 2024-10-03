import { PROJECTS } from "@/constants/projects";
import { Countup } from "./countup";
import { SKILLS } from "@/constants/skills";
import { getDuration } from "@/utils";
import { ABOUT } from "@/constants/about";

export const Counters = () => {
    const experience = getDuration(ABOUT.START_CAREER_TIMESTAMP);

    return (
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-16">
            <Countup name="Years of experience" number={experience} />
            {/* <Countup name="Projects completed" number={PROJECTS.length} /> */}
            <Countup name="Skills mastered" number={SKILLS.length} />
            <Countup name="Github commits" number={ABOUT.GITHUB_COMMITS} />
        </div>
    );
};

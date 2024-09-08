import { getDuration } from "@/utils";
import { AboutInfo } from "./text/about-info";
import { ABOUT } from "@/constants/about";

export const ExperienceAboutField = () => {
    const duration = getDuration(ABOUT.START_CAREER_TIMESTAMP, true);

    return <AboutInfo name="Experience">{duration}</AboutInfo>;
};

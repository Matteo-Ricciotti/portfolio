import { getDuration } from "@/utils";
import { AboutInfo } from "./text/about-info";
import { ABOUT } from "@/constants/about";

export const ExperienceAboutField = () => {
    const { partial, full } = getDuration(ABOUT.START_CAREER_TIMESTAMP);

    return (
        <AboutInfo title={full} name="Experience">
            {partial}
        </AboutInfo>
    );
};

import { BallCanvas } from "..";
import { technologies } from "../../constants/technologies";
import SectionWrapper from "../SectionWrapper";

const Tech = () => {
  return (
    <SectionWrapper idName="tech">
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div key={tech.name} className="h-28 w-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../SectionWrapper";
import { textVariant } from "../../utils/motions";
import { experiences } from "../../constants/experiences";

type Props = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}: Props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full items-center justify-center">
          <img
            src={icon}
            alt={company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="font-semibold text-secondary">{company_name}</p>
      </div>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, i) => (
          <li
            key={`point-${i}`}
            className="pl-1 text-sm tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <SectionWrapper idName="experience">
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">What i have done so far</p>
        <h2 className="section-head-text">Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <ExperienceCard key={i} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motions";
import { projects } from "../../constants/projects";
import { github } from "../../assets";

type Props = {
  index: number;
  name: string;
  description: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  image: string;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: Props) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: "up",
        type: "spring",
        delay: index * 0.5,
        duration: 0.75,
      })}
    >
      <Tilt className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open("https://google.com")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img alt="live" className="h-1/2 w-1/2 object-contain" />
            </div>
            <div
              onClick={() => window.open(source_code_link)}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <SectionWrapper idName="works">
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">My work</p>
        <h2 className="section-head-text">Projects</h2>
      </motion.div>
      <div className="flex">
        <motion.p
          variants={fadeIn({
            direction: "",
            type: "",
            delay: 0.1,
            duration: 1,
          })}
          className="mt-3 max-w-3xl text-lg leading-[30px] text-secondary"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo
          totam officiis debitis nam quia atque. Eius incidunt qui, pariatur
          esse modi ad voluptates maxime impedit tenetur ratione quis quam?
        </motion.p>
      </div>
      <div className="mt-20 flex  flex-wrap justify-center gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} index={i} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;

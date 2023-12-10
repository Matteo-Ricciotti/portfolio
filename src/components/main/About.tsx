import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motions";
import { services } from "../../constants/positions";
import SectionWrapper from "../SectionWrapper";

type Props = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: Props) => {
  return (
    <Tilt className="w-full xs:w-auto">
      <motion.div
        variants={fadeIn({
          direction: "right",
          type: "spring",
          delay: 0.5 * index,
          duration: 0.75,
        })}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card xs:w-[250px]"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-xl font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn({ direction: "", type: "", delay: 0.1, duration: 1 })}
        className="mt-4 max-w-3xl text-lg leading-[30px] text-secondary"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        voluptatum ipsa non. Animi atque nisi earum ratione ipsam voluptatem,
        laudantium repellendus, ullam consequuntur assumenda omnis aspernatur
        quibusdam dolore, reiciendis velit.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;

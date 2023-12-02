import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motions";
import { ReactNode } from "react";

const SectionWrapper = ({
  children,
  idName,
}: {
  children: ReactNode;
  idName: string;
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="padding relative z-0 mx-auto max-w-7xl"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;

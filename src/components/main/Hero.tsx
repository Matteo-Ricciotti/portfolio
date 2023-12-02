import { motion } from "framer-motion";
import { ComputersCanvas } from "..";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="padding-x absolute inset-0 top-[120px] mx-auto flex max-w-7xl items-start gap-5">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-purple" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className="hero-head-text">
            Hi, I'm <span className="text-purple">Matteo</span>
          </h1>
          <p className="hero-sub-text mt-2">
            I develop 3d visual, user interfaces
            <br className="hidden sm:block" /> and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="flex h-16 w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

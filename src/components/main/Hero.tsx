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
    </section>
  );
};

export default Hero;

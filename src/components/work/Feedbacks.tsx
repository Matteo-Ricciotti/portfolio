import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motions";
import { testimonials } from "../../constants/testimonials";

type Props = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: Props) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: "",
        type: "spring",
        delay: index * 0.5,
        duration: 0.75,
      })}
      className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
    >
      <p className="text-5xl font-black text-white">"</p>
      <div className="mt-1">
        <p className="text-lg tracking-wider text-white">{testimonial}</p>
        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="font-medium text-white">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-xs text-secondary">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <SectionWrapper idName="feedbacks">
      <div className="mt-12 rounded-[20px] bg-black-100">
        <div className="padding min-h-[300px] rounded-2xl bg-tertiary">
          <motion.div variants={textVariant()}>
            <p className="section-sub-text">What others say</p>
            <h2 className="section-head-text">Testimonials</h2>
          </motion.div>
        </div>
        <div className="padding-x -mt-20 flex flex-wrap justify-center gap-7 pb-14">
          {testimonials.map((testimonial, i) => (
            <FeedbackCard key={testimonial.name} index={i} {...testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feedbacks;

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../SectionWrapper";
import { EarthCanvas } from "..";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { slideIn } from "../../utils/motions";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (ev) => {
    const { name, value } = ev.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_o4ev0og",
        "template_ws4y5zk",
        {
          from_name: form.name,
          to_name: "Matteo",
          from_email: form.email,
          to_email: "ricciottimatteo2003@gmail.com",
          message: form.message,
        },
        "5S36CKDQybVLQ0ZEK",
      );
      setLoading(false);
      alert("ok");
    } catch (error) {
      setLoading(false);
      alert("error");
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div
          variants={slideIn({
            direction: "left",
            type: "tween",
            delay: 0.2,
            duration: 0.7,
          })}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className="section-sub-text">Get in touch</p>
          <h3 className="section-head-text">Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="What's your name"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="What's your email"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                placeholder="What do you want to say"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none hover:opacity-75"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 0.7,
          })}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

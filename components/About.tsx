"use client";

import useSectionInView from "@/lib/useSectionInView";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mt-36 max-w-[40rem] text-center scroll-mt-28"
      id="about"
      ref={ref}
    >
      <h1 className="font-semibold text-2xl mb-3">About Me</h1>

      <p>
        I am a <span className="font-medium"> Software Developer </span> with
        over <span className="font-medium"> 2 years </span> of experience in
        developing responsive and efficient web applications. Proficient in web
        technologies such as
        <span className="font-semibold"> React and Vue.js </span> , I am eager
        to contribute my skills and expertise to an organization where I can
        continue to grow and enhance both the company&apos;s projects and my own
        capabilities. Beyond web development, I am also enthusiastic about
        exploring and mastering new technologies and methodologies to drive
        innovation and success across various domains.
      </p>
    </motion.section>
  );
}

"use client";

import { skillsData } from "@/lib/Data";
import useSectionInView from "@/lib/useSectionInView";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mt-36 max-w-[42rem] text-center mx-auto scroll-mt-28 "
    >
      <h1 className="font-semibold text-2xl mb-3 text-center">Skills</h1>
      <div className="mt-4 mx-auto text-center">
        <ul className="flex flex-wrap gap-2 items-center justify-center mx-auto">
          {skillsData.map((item, index) => (
            <motion.li
              variants={{
                initial: {
                  opacity: 0,
                  y: 100,
                },
                animate: (index: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.05 * index,
                  },
                }),
              }}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              key={index}
              className="text-center border-[1.5px] border-gray-900 px-3 text-sm rounded-md py-1 font-medium 
              
                  "
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

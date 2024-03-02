"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


export default function ProjectItem({
  title,
  description,
  tags,
  imageUrl,
}: any) {
  const scrollRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  

  return (
    <div >
      <motion.section
        ref={scrollRef}
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }}
        className=" group :sm:group-even-pl-8 bg-gray-100 my-2 max-w-[42rem] rounded-lg  border border-black/5 sm:pr-8 flex  overflow-hidden relative sm:h-[20rem] "
      >
        <div className="left px-5 py-4 sm:max-w-[50%] sm:pt-8 sm:pr-2 sm:pl-10  flex flex-col  sm:group-even:ml-[18rem] ">
          <h2 className="font-semibold mb-2"> {title} </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {" "}
            {description}{" "}
          </p>
          <ul className="flex items-center gap-x-2 flex-wrap mt-auto">
            {tags.map((item: any, index: number) => (
              <li
                className="bg-gray-800 px-2 rounded-full
              mb-1
                  text-gray-300"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="right absolute top-8 -right-40 w-[28.25rem] 
      rounded-t-lg shadow-2xl hidden 
      sm:block 
      group-even:right-[initial] group-even:-left-40
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2
      group-hover:scale-[1.04]
      transition
      "
        >
          <Image src={imageUrl} alt="project1" quality={95} />
        </div>
      </motion.section>
    </div>
  );
}

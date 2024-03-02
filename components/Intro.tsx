"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { ActiveSectionContext } from "@/context/active-section-provider";
import { useInView } from "react-intersection-observer";
import useSectionInView from "@/lib/useSectionInView";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section className="scroll-mt-28" id="home" ref={ref}>
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
            }}
          >
            <Image
              src={
                "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={192}
              height={192}
              alt="user image"
              quality={95}
              priority={true}
              className="object-cover rounded-full h-24 w-24 border-2 relative border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-2xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* about me */}
      <div className=" text-center max-w-[32rem] mx-auto mt-5 md:text-2xl text-xl !leading-[1.5]">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-semibold"> Hello, I'm Bikesh Gupta.</span> I'm a{" "}
          <span className="font-semibold">software developer </span>
          with <span className="font-semibold"> 2 years </span> of experience. I
          enjoy building sites and apps. My focus is{" "}
          <span className="underline">React and Next.js</span>
        </motion.p>
      </div>
      {/* buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-5"
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 py-2 px-3 flex items-center gap-x-1 rounded-full text-white
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
                  "
        >
          Contact me here
          <span className="group-hover:translate-x-1 transition">
            <BsArrowRight />
          </span>
        </Link>
        <a
          href="/CV.pdf"
          download
          className="bg-white py-2 px-3 flex items-center gap-x-2 rounded-full text-gray-900"
        >
          Download cv{" "}
          <span>
            <HiDownload />
          </span>
        </a>

        <div className="flex items-center justify-center gap-2">
          <a
            href="https://linkedin.com/in/bikesh-gupta-0701a4191"
            target="_blank"
            className="bg-white flex items-center justify-center p-3 rounded-full "
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Dev25-os"
            className="bg-white flex items-center justify-center p-3 rounded-full "
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

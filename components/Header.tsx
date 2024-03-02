"use client";

import { links } from "@/lib/Data";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useContext, useState } from "react";
import { ActiveSectionContext } from "@/context/active-section-provider";

const Header = () => {
  const { activeSection, setActiveSection, setLastTimeClick } =useContext<any>(ActiveSectionContext);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0  left-1/2 -translate-x-1/2 h-[4.5rem]
    
      w-full rounded-none border border-white
      border-opacity-40 bg-white bg-opacity-80
      shadow-lg shadow-black/[0.03]
      backdrop-blur-[0.5rem] 

      sm:top-6 sm:h-[3.25rem]
      sm:w-[36rem] sm:rounded-full
      "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className=" flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:py-0 sm:top-[2.4rem]  sm:h-[initial]">
        <ul
          className=" flex items-center justify-center gap-x-3 flex-wrap gap-y-1 text-[0.9rem] text-gray-500 sm:w-[initial] sm:flex sm:flex-nowrap  sm:items-center sm:justify-center sm:gap-x-6
        "
        >
          {links.map((item) => (
            <motion.li
              className="flex items-center justify-center relative px-2 py-[2px]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={item.hash}
            >
              <Link
                className={clsx(
                  " flex w-full items-center justify-center text-gray-500 hover:text-gray-950 transition",
                  {
                    "text-gray-950": activeSection === item.name,
                  }
                )}
                href={item.hash}
                onClick={() => {
                  setActiveSection(item.name);
                  setLastTimeClick(Date.now());
                }}
              >
                {item.name}
                {activeSection === item.name && (
                  <motion.span
                    layoutId="active"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 380,
                    }}
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 "
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

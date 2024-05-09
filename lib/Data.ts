import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cymplyfi from "@/public/cymplyfi.png";
import bonusround from "@/public/bonusround.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { title } from "process";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    company: "Flyerssoft Private Limited",
    description: [
      `• Utilized multiple tools and technologies, including React and Vue.js, for web application development `,
      `• Contributed to the enhancement of multiple products by adding various features.`,
      `• Collaborated closely with teams of developers and testers to maintain alignment throughout the development process.`,
      `• Effectively led a small team, providing guidance and direction to ensure project success.`,
      `• Prioritized effective communication and teamwork to drive project success.`,
    ] as string[],

    icon: React.createElement(CgWorkAlt),
    date: "01/2023 – 02/2024",
  },
  {
    title: "Software Developer",
    company: "Triofi Technologies Private Limited",
    description: [
      `• Contributed to multiple projects by adding features and fixing bugs. `,
      `• Utilized Figma for designing screens and Vue.js for project development.`,
      `• Collaborated with backend developers and testers to discuss project requirements and features`,
      `• Worked on refining product designs using Figma`,
      `• Addressed project bugs to enhance overall project quality.`,
    ] as string[],

    icon: React.createElement(CgWorkAlt),
    date: "01/2022 – 01/2023",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
];

export const projectsData = [
  {
    title: "Cymplyfi",
    description:
      "A CMS tool to make the life of project manager easier. It includes Project Management System, Expense Tracker, Resources Allocation and helpful for Accounting purposes.",
    tags: [
      "Nuxt.js",
      "Vue.js",
      "vuex",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "Vuetify",
    ],
    imageUrl: cymplyfi,
  },
  {
    title: "Bonus Round",
    description:
      "Bonus Round is a platform to watch canadian tv shows it allows admin to have full control on managing content through a admin page.",
    tags: [
      "Nuxt.js",
      "Vue.js",
      "vuex",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
    ],
    imageUrl: bonusround,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Nuxt.Js",
  "Vue.js",
  "Redux",
  "Tailwind",
  "Git",
  "Node.js",
  "MongoDB",
  "Express",
  "React Native",
  "Figma",
  "Python",
  "CSS",
  "HTML",
] as const;

"use client";

import { projectsData } from "@/lib/Data";
import ProjectItem from "./ProjectItem";

import useSectionInView from "@/lib/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section className="mt-36 scroll-mt-28" id="projects" ref={ref}>
      <h1 className="text-2xl font-semibold text-center">Projects</h1>
      <div className="mt-5">
        {projectsData.map((item, index) => (
          <div key={index}>
            <ProjectItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

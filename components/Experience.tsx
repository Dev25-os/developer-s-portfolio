"use client";
import { experiencesData } from "@/lib/Data";
import useSectionInView from "@/lib/useSectionInView";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function () {
  const { ref } = useSectionInView("Experience");
  return (
    <motion.section ref={ref} className="mt-36 scroll-mt-28" id="experience">
      <h1 className="text-2xl font-semibold text-center">Experience</h1>

      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: ".5rem 1rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "#fff" }}
            >
              <h2 className="!pt-0 !mt-0 font-semibold">{item?.title} </h2>
              <p className="!mt-0 !text-gray-500"> {item?.company} </p>
              <ul className="mt-2">
                {item?.description?.map((ele: string, index: number) => (
                  <li key={index} className="text-xs text-gray-700">
                    {ele}{" "}
                  </li>
                ))}
              </ul>

              {/* <p className="!mt-0 !text-sm !pb-2 !font-normal">
                {item?.description}
              </p> */}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}

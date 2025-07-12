"use client";
import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center gap-10 mb-8">
      <h1 className="w-[95vw] text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Skills.
      </h1>
      <div className="translate-x-1 sm:-translate-x-1">
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            initSpeed: "normal",
            maxSpeed: "normal",
          })}
          onClick={(tag: string, ev: MouseEvent) => alert(tag)}
          onClickOptions={{ passive: true }}
        >
          {[
            "Java",
            "Python",
            "C",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Next.js",
            "React",
            "Tailwind",
            "MUI",
            "GSAP",
            "Express",
            "Mongo DB",
            "Postgres Sql",
            "My SQL",
            "AWS",
            "Git",
            "GitHub",
          ]}
        </TagCloud>
      </div>
    </div>
  );
};

export default Skills;

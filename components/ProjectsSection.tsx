import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-9 items-center text-center font-sans">
        <h1 className="w-[95vw] text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects.
        </h1>
        <h1 className="w-[75vw] text-lg">
          Real skills are forged through real work. Here are some of my recent
          projects that highlight my skills in web development and problem solving.
        </h1>
      </div>
      <div className="px-6 pb-[7rem] mt-16 h-auto flex flex-wrap gap-24 items-start justify-center">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsSection;

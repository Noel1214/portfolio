import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
      <div className="h-screen">
      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl text-center font-semibold">Featured Projects</h1>
      </div>
      <div className="px-6 pb-[7rem] mt-16 h-auto flex flex-wrap gap-24 items-start justify-center">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsSection;

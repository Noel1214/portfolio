import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
      <div className="mt-3 h-screen">
      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl text-center font-semibold">Featured Projects</h1>
      </div>
      <div className="px-5 pb-[7rem] mt-16 h-auto flex flex-col gap-24 items-center justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsSection;

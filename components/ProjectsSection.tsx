import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-9 items-center text-center font-sans">
        <h1 className="w-[95vw] text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects.
        </h1>
        <h1 className="max-w-[35rem] px-2 text-lg">
          Real skills are forged through real work. Here are some of my recent
          projects that highlight my skills in web development and problem solving.
        </h1>
      </div>
      <div className="px-6 pb-[7rem] mt-16 h-auto flex flex-wrap gap-24 items-start justify-center">
        <ProjectCard date="15th January 2025"  imageLink="tut-app.png" title="Tution App" desc="A web app to display and get reviews of tution tution teachers of a tution center" code="https://github.com/Noel1214/excellent-tution" demo="https://tution.devnoel.org" />
      </div>
    </div>
  );
};

export default ProjectsSection;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import "../components/css/ProjectCard.css";

const ProjectCard = () => {

  return (
    <div className="interpolate-property bg-neutral-900 w-[20rem] h-[25rem] sm:w-[24rem] flex justify-center rounded-2xl transition-all duration-300 ease-in-out sm:max-h-none sm:max-w-none overflow-hidden hover:scale-110">
      <div className="flex flex-col gap-2 h-full w-full items-center rounded-2 xl">
        <Image
          className="h-[11rem] w-[20rem] sm:h-[13rem] sm:w-[24rem] rounded-2xl"
          src="/tut-app.png"
          width={500}
          height={500}
          alt="Picture of the project"
        />
        <div className="h-auto p-2 flex flex-col gap-6 scale-95">
          <h1 className="text-xl underline underline-offset-7">Tution App</h1>
          <h1 className="">
            A web app to display and get reviews of tution tution
            teachers of a tution center
          </h1>
          <div className="flex gap-3">
            <button className="h-10 w-28 bg-neutral-700 rounded-3xl text-white  hover:cursor-pointer">
              View Demo
            </button>
            <button className="h-10 w-28 bg-neutral-700 rounded-3xl text-white hover:cursor-pointer">
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

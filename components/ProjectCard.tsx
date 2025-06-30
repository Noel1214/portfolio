"use client";
import Image from "next/image";
import React, { useState } from "react";
import "../components/css/ProjectCard.css";

const ProjectCard = () => {
  const [first, setfirst] = useState(false);

  return (
    <div
      className={`interpolate-property flex justify-center bg-green-500 rounded-2xl transition-all duration-300 ease-in-out sm:max-h-none sm:max-w-none overflow-hidden ${
        first
          ? "sm:pt-5 h-auto w-[80vw] sm:w-[85vw] max-w-[210rem]"
          : "h-[10rem] w-[60vw] sm:h-[30vw] sm:w-[45vw] hover:scale-110 max-h-[90vh] max-w-[21rem]"
      }`}
      onClick={() => {
        setfirst((prev) => !prev);
      }}
    >
      <div className="flex flex-col gap-16 h-full w-full items-center rounded-2xl">
        <Image
          className="h-[12rem] sm:h-[30vw] sm:w-[45vw] rounded-2xl shrink-0"
          src="/tut-app.png"
          width={500}
          height={500}
          alt="Picture of the project"
        />
        <div className="bg-red-500 h-auto min-h-[10vw] w-[50vw] ov erflow-auto">
          <h1>
            Desc: A web app to display and get reviews of tution tution teachers
            of Excellent tution center
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
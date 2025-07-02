"use client";
import Image from "next/image";
import React, { useState } from "react";
import "../components/css/ProjectCard.css";
import { CiCalendar } from "react-icons/ci";

interface CertificateCardProps {
  imageLink: string;
  title: string;
  demo: string;
  desc: string;
  code: string;
  date: string;
}

const ProjectCard: React.FC<CertificateCardProps> = (props) => {
  return (
    <div className="px-4 pt-6 pb-5 bg-gray-900 sm:bg-neutral-900 w-[20rem] min-h-[25rem] sm:w-[24rem] flex justify-center rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="flex flex-col gap- h-full w-full items-center">
        <Image
          className="h-[11rem] w-[20rem] sm:h-[13rem] sm:w-[24rem] object-cover rounded-2xl"
          src={`/${props.imageLink}`}
          width={500}
          height={500}
          alt="Picture of the project"
        />
        <div className="h-auto flex flex-col gap-4 scale-95">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">{props.title}</h1>
            <div className="text-sm flex items-center gap-1">
              <CiCalendar size={20} />
              <h1 className="translate-y-[0.1rem]">completed on {props.date}</h1>
            </div>
          </div>
          <h1 className="">{props.desc}</h1>
          <div className="flex gap-4">
            <a target="_blank" href={props.demo}>
              <button className="h-10 px-3 bg-neutral-700 rounded-3xl text-white  hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
                View Demo
              </button>
            </a>
            <a target="_blank" href={props.code}>
              <button className="h-10 px-3 bg-neutral-700 rounded-3xl text-white  hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
                View Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

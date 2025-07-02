"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative min-h-[30vh] mt-[8rem] p-10 bg-zinc-900">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-bold font-sans">Get In Touch</h1>
        <h1 className="w-[30vw] text-center text-lg font-sans">
          I'm always open to discussing new opportunities and interesting
          projects.
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <a
            className="hover:scale-125 transition-all duration-200 ease-in-out"
            target="_blank"
            href="https://www.linkedin.com/in/noel-sebu-57644b319"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="hover:scale-125 transition-all duration-200 ease-in-out"
            target="_blank"
            href="https://github.com/Noel1214"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            className="hover:scale-125 transition-all duration-200 ease-in-out"
            href="mailto:noelsebu555@gmail.com"
          >
            <MdOutlineMail size={30} />
          </a>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-10 bg-zinc-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-zinc-800 hover:scale-125 transition-all duration-200 ease-in-out"
      >
        ↑ Top
      </button>
      <div className="flex justify-center my-10">
        <h1>© 2025 Noel Sebu. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;

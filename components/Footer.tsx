"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="footer" className="text-white relative mt-[8rem] p-10 bg-zinc-900">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl text-center font-bold font-sans">
          Get In Touch
        </h1>
        <h1 className="max-w-[29rem] text-center text-lg font-sans">
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

      <div className="flex justify-center my-10 text-center">
        <h1>© 2025 Noel Sebu. All rights reserved.</h1>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-zinc-600 px-4 py-2 rounded-full shadow-lg hover:bg-zinc-800 hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center gap-2">
            <FaArrowUpLong />
            <h1>Back to Top</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Footer;

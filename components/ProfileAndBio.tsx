import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const ProfileAndBio = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="mt-7 min-h-[28rem] w-screen flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-16 sm:gap-8 overflow-x-hidden">
        <div className="px-8 shrink-0">
          <Image
            className="h-[15rem] w-[70vw] md:h-[18rem] md:w-[18rem] object-cover object-top md:object-center rounded-2xl md:rounded-full overflow-hidden shrink-0"
            src="/D.png"
            width={200}
            height={200}
            alt="Noel"
          />
        </div>
        <div className="min-h-[8rem] max-w-[29rem] px-4 flex flex-col gap-5 text-center">
          <h1 className="text-5xl sm:text-5xl mb-3 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hi, I'm Noel Sebu
          </h1>
          <h2 className="text-lg">
            I am a self-taught developer skilled in building scalable,
            accessible, and highly available websites that are visually
            appealing and user friendly.
          </h2>
        </div>
      </div>
      <div className="w-screen my-16 flex justify-center">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1BeXlkG15O_HbDpGTmY2gR4z5MniKQP_B/view?usp=drive_link"
        >
          <div className="min-w-[20rem] w-[90vw] sm:px-[6rem] md:flex md:justify-center">
            <button className="h-9 w-full md:w-1/2 rounded-3xl bg-zinc-800 cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
              Get Resume
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProfileAndBio;

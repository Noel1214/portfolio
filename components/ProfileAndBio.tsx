import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const ProfileAndBio = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar />
      </div>

      <div className="mt-6 min-h-[28rem] w-screen flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 md:gap-0 overflow-x-hidden">
        <div className="px-8 shrink-0">
          <Image
            className="h-[15rem] w-[70vw] md:h-[15rem] md:w-[15rem] object-cover object-top md:object-center rounded-2xl md:rounded-full overflow-hidden shrink-0"
            src="/main.jpg"
            width={200}
            height={200}
            alt="Noel"
          />
        </div>
        <div className="min-h-[8rem] max-w-[29rem] px-8 text-center">
          <h1 className="text-2xl font-bold">Hi, I'm Noel Sebu</h1>
          <h2>
            I am a self-taught developer skilled in building scalable,
            accessible, and highly available websites that are visually
            appealing and user-friendly.
          </h2>
        </div>
        <div className="min-w-[20rem] w-[90vw] px-[6rem] my-2 md:flex md:justify-center">
          <button className="h-9 w-full md:w-1/2 rounded-3xl bg-zinc-800 cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
            Get Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAndBio;

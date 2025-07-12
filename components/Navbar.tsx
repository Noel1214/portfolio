"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SideNavBar from "./SideNavBar";

const Navbar = () => {
  const [showNavBar, setshowNavBar] = useState(false);

  return (
    <div className="relative mt-3">
      <div className="w-screen h-16 grid grid-cols-3">
        <h1 className="col-start-2 col-span-1 flex items-center justify-center text-3xl sm:text-4xl font-sans font-bold">
          Portfolio
        </h1>
        <div className="h-full col-start-3 col-span-1 pr-6 sm:pr-7 flex items-center justify-end text-black dark:text-white">
          <div
            className="hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration-200"
            onClick={() => setshowNavBar((prev) => !prev)}
          >
            <IoMenu size={29} />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 w-screen sm:w-[40vw] h-screen opacity-100 transition-all ease-in-out duration-500 ${
          showNavBar
            ? ""
            : "translate-x-[105vw] sm:translate-x-[40vw] opacity-0"
        }`}
      >
        <SideNavBar showNavBar={setshowNavBar} setshowNavBar={setshowNavBar} />
      </div>
    </div>
  );
};

export default Navbar;

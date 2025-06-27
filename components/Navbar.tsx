import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="mt-3">
      <div className="w-screen h-16 grid grid-cols-3">
        <h1 className="col-start-2 col-span-1 flex items-center justify-center text-2xl">
          Portfolio
        </h1>
        <div className="h-full col-start-3 col-span-1 pr-4 sm:pr-7 flex items-center justify-end text-white">
          <div className="hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-100">
            <IoMenu size={29} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

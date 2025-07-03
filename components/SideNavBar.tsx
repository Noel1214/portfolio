import React from "react";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  showNavBar: React.Dispatch<React.SetStateAction<boolean>>;
  setshowNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavBar: React.FC<NavbarProps> = ({showNavBar, setshowNavBar}) => {
  return (
    <div className="relative backdrop-blur-sm bg-black/70 h-full w-full flex items-center">
      <div className="">
        <ul className="h-[20rem] px-20 text-2xl space-y-10">
          <li className="hover:scale-120 hover:tracking-widest transition-all duration-200 ease-in-out">
            About Me
          </li>
          <li className="hover:scale-120 hover:tracking-widest transition-all duration-200 ease-in-out">
            Projects
          </li>
          <li className="hover:scale-120 hover:tracking-widest transition-all duration-200 ease-in-out">
            Certificates
          </li>
          <li className="hover:scale-120 hover:tracking-widest transition-all duration-200 ease-in-out">
            Contact
          </li>
        </ul>
      </div>
      <div className="absolute top-8 right-5" onClick={() => {setshowNavBar((prev) => !prev)}}>
        <IoClose size={40} />
      </div>
    </div>
  );
};

export default SideNavBar;

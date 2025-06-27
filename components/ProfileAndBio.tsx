import Image from "next/image";
import React from "react";

const ProfileAndBio = () => {
  return (
    <div>
      <div>
        <Image
          className="h-[15rem] w-[15rem] rounded-full object-cover object-top-right overflow-hidden"
          src="/Noel Sebu JPG.jpg"
          width={500}
          height={500}
          alt="Noel"
        />
      </div>
      <div>
          <h1>Hi, I'm Noel Sebu</h1>
          <h2>I am a self-taught developer skilled in building scalable, accessible, and highly available websites that are visually appealing and user-friendly.</h2>
      </div>
    </div>
  );
};

export default ProfileAndBio;

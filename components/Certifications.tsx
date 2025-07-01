import React from "react";
import CertificateCard from "./CertificateCard";

const Certifications = () => {
  return (
    <div className="w-screen min-h-[50vh] flex flex-col gap-14 mb-10 items-center font-sans">
      <div>
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Certifications & Achievements.
        </h1>
        <h1 className="w-[75vw] text-center text-lg">
          Continuous learning is the key to staying current with evolving
          technology. Here are my professional certifications and achievements
          that demonstrate my expertise.
        </h1>
      </div>
        <div className="w-full mt-5 px-5 flex flex-wrap justify-center gap-14">
        <CertificateCard imagelink="smarted.png" company="Smarted" desc="Housing and Rental space finder applications where people can list propeties and find vacant spaces" />
        <CertificateCard imagelink="vdart.png" company="Vdart" desc="Offical import and export document handler, where admins and other officals can verify and validate documents"/>
      </div>
    </div>
  );
};

export default Certifications;

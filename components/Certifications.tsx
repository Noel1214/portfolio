import React from "react";
import CertificateCard from "./CertificateCard";

const Certifications = () => {
  return (
    <div id="certification" className="w-screen flex flex-col gap-14 mb-10 items-center font-sans">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Certifications & Achievements.
        </h1>
        <h1 className="max-w-[35rem] px-2 text-center text-lg">
          Continuous learning is the key to staying current with evolving
          technology. Here are my professional certifications and achievements
          that demonstrate my expertise.
        </h1>
      </div>
      <div className="w-full mt-5 px-5 flex flex-wrap justify-center gap-14">
        <CertificateCard
          imagelink="smarted.png"
          company="Smarted Innovation"
          desc="Housing and Rental space finder applications where people can list propeties and find vacant spaces"
          linkOfCertificate="https://drive.google.com/file/d/1yNLB6jJFtF2HUVEa4C1IdBbU7w-y4jOV/view?usp=drive_link"
          date="5-2-2025 - 5-5-2025"
        />
        <CertificateCard
          imagelink="vdart.png"
          company="Vdart Inc"
          desc="Offical import and export document handler, where admins and other officals can verify and validate documents"
          linkOfCertificate="https://drive.google.com/file/d/1gv3_SFNrSwKCbQDIFT8l8JrH-U9n3YOq/view?usp=drive_link"
          date="17-3-2025 - 28-3-2025"
        />
        <CertificateCard
          imagelink="hackathon.png"
          company="TECHINFLR 2K24"
          desc="Secured Second Place in a Hackathon at Bon Secours College, showcasing problem-solving and full-stack development skills."
          linkOfCertificate="https://drive.google.com/file/d/1Ur_B0SsgNrX7s7-qwPHW_0hGfL3aYJOE/view?usp=drive_link"
          date="4th September 2024"
        />
      </div>
    </div>
  );
};

export default Certifications;

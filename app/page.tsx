import React from "react";
import Navbar from "@/components/Navbar";
import ProfileAndBio from "@/components/ProfileAndBio";
import ProjectsSection from "@/components/ProjectsSection";
import Certifications from "@/components/Certifications";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <ProfileAndBio />
      <ProjectsSection />
      <Certifications />
    </div>
  );
};

export default page;

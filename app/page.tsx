import React from "react";
import Navbar from "@/components/Navbar";
import ProfileAndBio from "@/components/ProfileAndBio";
import ProjectsSection from "@/components/ProjectsSection";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <ProfileAndBio />
      <ProjectsSection />
      <Certifications />
      <Footer />
    </div>
  );
};

export default page;

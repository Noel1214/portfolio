import React from "react";
import Navbar from "@/components/Navbar";
import ProfileAndBio from "@/components/ProfileAndBio";
import ProjectsSection from "@/components/ProjectsSection";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <ProfileAndBio />
      <AboutMe />
      <ProjectsSection />
      <Certifications />
      <Footer />
    </div>
  );
};

export default page;

"use client";
import React, { useEffect } from "react";
import ProfileAndBio from "@/components/ProfileAndBio";
import ProjectsSection from "@/components/ProjectsSection";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Lenis from "lenis";
import Skills from "@/components/Skills";

const page = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.3,
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ProfileAndBio />
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <Certifications />
      <Footer />
    </div>
  );
};

export default page;

import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="flex flex-col gap-10 pb-[6rem] items-center">
        <h1 className="w-[95vw] text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me.
        </h1>
        <div className="px-6">
          <p className="max-w-[45rem] text-center text-lg font-sans">
            I am Noel Sebu, a self-taught MERN Stack Developer with a strong
            interest in building user-friendly and scalable web applications.
            I’ve worked on real-world projects, including a freelance job for a
            tuition center and a job-related project, and also completed an
            internship to gain hands-on experience. I work with technologies
            like React.js, Next.js, Node.js, MongoDB, Tailwind CSS, GSAP, and
            tools like Git, GitHub, Vercel, and AWS. I enjoy learning new tools
            and frameworks and focus on clean design, performance, and
            accessibility in every project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { ButtonPrimary } from "../components/Button";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    imgSrc: "../images/pp.png",
    title: "Actuaria Academy Website",
  },
]

const Hero = () => {
  return (
    <section id="home" className="pt-7 lg:pt-70">
      <div
        className="container mx-auto max-w-screen-xl flex justify-center px-6 md:px-12 md:py-4 lg:px-18"
      >
        <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:gap-2 lg:justify-items-end">

          {/* KIRI */}
          <div className="bg-sky-90 mt-2 lg:mt-0 lg:p-0 flex md:mt-15 md:p-0 md:justify-start flex justify-center pt-10">
            <div className="lg:w-72 md:w-36 w-48 content-center">
              {projects.map(({ imgSrc, title }, key) => (
                <img
                  key={key}
                  src={imgSrc}
                  alt={title}
                  className="w-full md:rounded-3xl rounded-full"
                />
              ))}
            </div>
            {/* <div className="flex items-center gap-3">
              <ButtonPrimary href="#about" label="Download CV" />
            </div> */}
          </div>

          {/* KANAN */}

          <div className="bg-sky-80 hl-4 sm:text-justify mt-8 md:mt-5 lg:mt-0 col-span-2">
            <h1 className="hl-1 flex justify-center md:justify-start lg:max-w-[15ch]">
              Fakhri Ajrillah
            </h1>
            <h2 className="max-sm:text-lg text-2xl md:text-3xl flex justify-center md:justify-start text-zinc-400 mt-1">AI Engineer | Software Engineer</h2>

            <h4 className="paragraf flex md:justify-start sm:justify-center text-xl font-semibold lg:hidden md:block hidden  text-zinc-300 md:mt-8">
              About
            </h4>
            <p className="paragraf text-justify text-[14pt] mt-8 md:mt-2 text-zinc-400 lg:mt-10">
              A highly motivated individual with hands-on experience in AI, Computer Vision, Robotics, and Embedded Systems. Proven track record of deploying machine learning models on edge devices, leading technical teams, and building real-time autonomous systems. Passionate about integrating intelligent algorithms with hardware to solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

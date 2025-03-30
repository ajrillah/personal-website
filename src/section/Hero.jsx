import React from "react";
import { ButtonPrimary } from "../components/Button";

const Hero = () => {
  return (
    <section id="home" className="pt-7 lg:pt-30">
      <div
        className="container mx-auto max-w-screen-xl px-6 md:px-12 md:py-4 lg:grid lg:grid-cols-2 lg:gap-2 lg:px-18
      "
      >
        {/* KIRI */}

        <div className="bg-sky-90 mt-2 lg:mt-0">
          <h1 className="hl-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch]">
            Fakhri Ajrillah
          </h1>
          <h2 className="hl-2 text-zinc-300 mt-1">Software Engineer</h2>
          <h4 className="max-w-70 hl-4 text-zinc-400 text-xl mt-5 mb-5 lg:mb-8">
            I create user-friendly and well-designed websites that work smoothly
            on any device.
          </h4>

          {/* <div className="flex items-center gap-3">
            <ButtonPrimary href="#about" label="Download CV" />
          </div> */}
        </div>

        {/* KANAN */}

        <div className="bg-sky-80 hl-4 mb-15 sm:text-justify mt-15 lg:mt-0">
          <h4 className="paragraf text-xl font-semibold lg:hidden text-zinc-300">
            About
          </h4>
          <p className="paragraf text-[14pt] mt-4 text-zinc-400 lg:mt-0">
            I am a highly motivated individual with a great passion for
            programming and electronics. Becoming highly competent in these
            fields is my dream and a goal I would like to achieve. Currently, I
            am actively pursuing programming while ensuring that I do not
            neglect my interest in electronics. My ability to analyze and look
            at problems from multiple viewpoints is a key strength, allowing me
            to approach challenges with a well-rounded perspective. By
            integrating my passion for programming and electronics with a strong
            foundation in communication and teamwork, I am confident in my
            ability to tackle complex challenges and contribute effectively in
            the field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

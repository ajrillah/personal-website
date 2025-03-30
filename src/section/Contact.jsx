import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="pt-7 lg:pt-30" id="contacts">
      <div className="container mx-auto max-w-screen-xl px-6 md:px-12 md:py-4 grid lg:grid-cols-2 lg:px-18 mb-5">
        <div className="mb-10 lg:mb-0 lg:flex-col">
          <div className="bg-amber-40/10">
            <h4 className="paragraf text-2xl font-semibold lg:text-3xl text-zinc-300/90 my-5">
              Contact me for collaboration
            </h4>
            <p className="paragraf text-[14pt] max-w-md mb-8 lg:mb-38 text-zinc-400">
              Reach out today to discuss your project needs and start
              collaborating on something amazing
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-4 pl-1">
              <a href="https://www.instagram.com/fakhri.ajrillah/" className="">
                <SiInstagram className="size-6 hover:translate-x-0.5 hover:-translate-y-0.5" />
              </a>
              <a href="https://github.com/ajrillah" className="">
                <FaGithub className="size-6 hover:translate-x-0.5 hover:-translate-y-0.5" />
              </a>
              <a href="https://id.linkedin.com/in/fakhri-ajrillah" className="">
                <FaLinkedin className="size-6 hover:translate-x-0.5 hover:-translate-y-0.5" />
              </a>
              <a href="mailto:fakhri.ajril@gmail.com" className="">
                <BiLogoGmail className="size-8 hover:translate-x-0.5 hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <form
            action="https://getform.io/f/amdkrjkb"
            method="POST"
            className=""
          >
            <div className="">
              <div className="mb-4">
                <label htmlFor="name" className="label reveal-up"></label>
                <input
                  type="text"
                  name="name"
                  className="text-field reveal-up"
                  autoComplete="name"
                  required
                  placeholder="name"
                  id="name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="label reveal-up"></label>
                <input
                  type="email"
                  name="email"
                  className="text-field reveal-up"
                  autoComplete="email"
                  required
                  placeholder="email@example.com"
                  id="email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="label reveal-up"></label>
                <textarea
                  name="message"
                  id="message"
                  className="text-field resize-y min-h-32 max-h-80 reveal-up"
                  placeholder="message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn2 btn-primary2 w-full justify-center reveal-up"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

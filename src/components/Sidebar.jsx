import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";



const Navbar_contact = () => {
  return (
    <nav className="navbar-contact grid">
      <a href="https://www.instagram.com/fakhri.ajrillah/" className="flex justify-center">
        <SiInstagram className="size-6 hover:translate-x-0.5 hover:-translate-y-0.5" />
      </a>
      <a href="https://github.com/ajrillah" className="flex justify-center">
        <FaGithub className="size-6 hover:translate-x-0.5 hover:-translate-y-0.5" />
      </a>
      <a href="https://id.linkedin.com/in/fakhri-ajrillah" className="flex justify-center">
        <FaLinkedin className="size-6 hover:translate-x-0.5 hover:-translate-y-0.5" />
      </a>
      <a href="mailto:fakhri.ajril@gmail.com" className="flex justify-center">
        <BiLogoGmail className="size-8 hover:translate-x-0.5 hover:-translate-y-0.5" />
      </a>
    </nav>
  );
};

export default Navbar_contact;

import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import Navbar_contact from "../components/Sidebar";

const Sidebar = () => {
  return (
    <section className="fixed h-full">
      <div className="max-w-screen-2xl w-23 h-full items-center flex invisible">
        <MdOutlineDarkMode size={40} className="" />

        <Navbar_contact />
        <MdOutlineDarkMode size={40} className="" />
      </div>
    </section>
  );
};

export default Sidebar;

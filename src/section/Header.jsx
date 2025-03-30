import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="fixed w-full flex h-20 item-center">
      <div className="max-w-screen-2xl w-full px-4 mx-auto items-center flex justify-between invisible">
        <MdOutlineDarkMode size={40} className="" />

        <Navbar />
        <MdOutlineDarkMode size={40} className="" />
      </div>
    </header>
  );
};

export default Header;

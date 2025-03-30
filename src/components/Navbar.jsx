import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">
        HOME
      </a>
      <a href="#experiences" className="nav-link">
        EXPERIENCES
      </a>
      <a href="#projects" className="nav-link">
        PROJECTS
      </a>
      <a href="#contacts" className="nav-link">
        CONTACT
      </a>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-header">
          <FaLaptopCode className="nav-logo" />

          <button className="btn toggle-btn">
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Tools</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

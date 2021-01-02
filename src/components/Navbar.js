import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>
          <FaLaptopCode />
        </h3>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Tools</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

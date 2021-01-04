import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="nav-header">
            <FaLaptopCode className="nav-logo" />

            <button className="btn toggle-btn">
              <FaBars />
            </button>
          </div>

          <ul className="nav-links">
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Skills</li>
            <li>Ferramentas</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

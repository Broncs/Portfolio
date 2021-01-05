import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="nav-header">
            <FaLaptopCode className="nav-logo" />

            <button className="btn toggle-btn" onClick={handleClick}>
              <FaBars />
            </button>
          </div>
          {toggle ? <Modal setToggle={setToggle} /> : null}

          <ul className="nav-links">
            <li>
              <a href="https://google.com">Inicio</a>
            </li>
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

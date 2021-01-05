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
              <a href="/#">Inicio</a>
            </li>
            <li>
              <a href="/#sobre">Sobre</a>
            </li>
            <li>
              <a href="/#projetos">Projetos</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="#ferramentas">Ferramentas</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

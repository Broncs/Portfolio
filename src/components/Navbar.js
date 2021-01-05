import React, { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // const handleClick = () => {
  //   setToggle((prevValue) => !prevValue);
  // };

  const modalWillOpen = () => {
    setToggle(true);
  };
  const modalWillClose = () => {
    setToggle(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        modalWillClose();
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="nav-header">
            <FaLaptopCode className="nav-logo" />

            <button className="btn toggle-btn" onClick={modalWillOpen}>
              <FaBars />
            </button>
          </div>
          {toggle ? <Modal modalWillClose={modalWillClose} /> : null}

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

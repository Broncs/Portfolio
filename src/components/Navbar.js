import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

import { FaLaptopCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const container = useRef(null);

  // const handleClick = () => {
  //   setToggle((prevValue) => !prevValue);
  // };

  const handleScroll = (e) => {
    if (window.scrollY === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav
      className={isScrolled ? "navbar  nav-background" : "navbar"}
      ref={container}
    >
      <div className="container">
        <div className={`nav-container`}>
          <div className="nav-header">
            <FaLaptopCode className="nav-logo" />

            <button className="toggle-btn" onClick={modalWillOpen}>
              <FaBars />
            </button>
          </div>
          {toggle ? <Modal modalWillClose={modalWillClose} /> : null}

          <ul className="nav-links">
            <li>
              <Link
                className="custom-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                activeClass="active"
                to="ferramentas"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Ferramentas
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

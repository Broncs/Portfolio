import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Modal = ({ modalWillClose }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={modalWillClose}>
          <AiOutlineClose />
        </span>
        <ul className="modal-link-container">
          <li>
            <Link
              onClick={modalWillClose}
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
              onClick={modalWillClose}
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
              onClick={modalWillClose}
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
              onClick={modalWillClose}
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
              onClick={modalWillClose}
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
              onClick={modalWillClose}
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
  );
};

export default Modal;

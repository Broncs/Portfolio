import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ modalWillClose }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={modalWillClose}>
          <AiOutlineClose />
        </span>
        <ul>
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
            <a href="/#ferramentas">Ferramentas</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;

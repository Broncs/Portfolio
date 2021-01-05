import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ setToggle }) => {
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span
          class="close"
          onClick={() => setToggle((prevValue) => !prevValue)}
        >
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

import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-icons">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jhonatan-mendes-b275561a4/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Broncs"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Broncs"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFile className="icons" />
              </a>
            </li>
          </ul>
        </div>
        <p>Copyright - 2020 Johnny Ung, All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

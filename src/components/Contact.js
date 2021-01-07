import React from "react";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="form-contact">
          <form className="contact-form">
            <h2>Deixe uma Mensagem!</h2>

            <input
              className="text-input input-width-1"
              type="text"
              placeholder="Seu nome :"
            />
            <input
              className="text-input input-width-2"
              type="email"
              placeholder="Email :"
            />

            <input className="text-input" type="text" placeholder="assunto :" />
            <textarea
              className="textarea-input"
              placeholder="Sua Mensagem :"
              name="mensagem"
              id="mensagem"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn btn-primary">enviar mensagem</button>
          </form>

          <div className="contact-info">
            <h2>Informações de contato</h2>
            <p>
              Sinta-se à vontade para entrar em contato comigo para obter
              informações sobre perspectivas de carreira, serviços comerciais e
              outras consultas profissionais!
            </p>
            <div>
              <ul className="list-icons">
                <li>
                  <div className="contact-icon">
                    <FaMapMarkerAlt className="fas" />
                  </div>
                  <div className="contact-text">
                    <h5>Localização</h5>
                    <span>Guarulhos / São Paulo</span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <FaPhoneAlt className="fas" />
                  </div>
                  <div className="contact-text">
                    <h5>Telefone</h5>
                    <span>(11) 984797795 </span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <FaEnvelope className="fas" />
                  </div>
                  <div className="contact-text">
                    <h5>Email</h5>
                    <span>
                      <a href="mailto:Jhowfrombrazil@gmail.com">
                        Jhowfrombrazil@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import Success from "./Success";
import { FaTimesCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => <Success />)
      .catch((error) => alert(error));
  };

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="form-contact">
          <form
            name="contact"
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2>Deixe uma Mensagem!</h2>
            <input
              className={`text-input input-width-1 ${
                errors.nome && "error-border"
              }`}
              type="text"
              placeholder="Seu nome :"
              name="nome"
              ref={register({ required: true, minLength: 3 })}
            />
            <input
              className={`text-input input-width-2 ${
                errors.email && "error-border"
              }`}
              type="email"
              placeholder="Email :"
              name="email"
              ref={register({ required: true })}
            />
            <input
              className={`text-input ${errors.assunto && "error-border"}`}
              type="text"
              placeholder="assunto :"
              name="assunto"
              ref={register({ required: true })}
            />
            <textarea
              className={`textarea-input ${errors.mensagem && "error-border"}`}
              placeholder="Sua Mensagem :"
              name="mensagem"
              id="mensagem"
              cols="30"
              rows="10"
              ref={register({ required: true })}
            ></textarea>

            {errors.nome && errors.nome.type === "required" && (
              <p className="error-msg">
                <span>
                  <FaTimesCircle />
                </span>
                Preencha um nome
              </p>
            )}
            {errors.nome && errors.nome.type === "minLength" && (
              <p className="error-msg">
                <span>
                  <FaTimesCircle />
                </span>
                Nome minimo 3 characteres
              </p>
            )}
            {errors.email && errors.email.type === "required" && (
              <p className="error-msg">
                <span>
                  <FaTimesCircle />
                </span>
                Preencha um email
              </p>
            )}
            {errors.assunto && errors.assunto.type === "required" && (
              <p className="error-msg">
                <span>
                  <FaTimesCircle />
                </span>
                Assunto obrigatório
              </p>
            )}
            {errors.mensagem && (
              <p className="error-msg">
                <span>
                  <FaTimesCircle />
                </span>
                Mensagem obrigatória
              </p>
            )}

            <button type="submit" className="btn btn-primary">
              enviar mensagem
            </button>
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

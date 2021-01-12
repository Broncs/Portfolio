import React from "react";
import peopleilustrator from "../images/people-with-laptop.png";
import cv from "../pdf/CV-.pdf";
const About = () => {
  return (
    <section id="sobre">
      <div className="container">
        <div className="about-container">
          <div className="img-laptop">
            <img src={peopleilustrator} alt="people" />
          </div>
          <div className="about-info">
            <h2>
              Olá ! Me chamo Jhonatan mendes, Sou desenvolvedor Front End , moro
              em Guarulhos,SP.
            </h2>
            <p>
              Apos me formar no ensino médio, estava muito indeciso em qual
              carreira seguir, então decidi aprender inglês, que seria bem útil
              em qualquer área que escolhesse, apos alguns tutorias sobre logica
              de programação, acabei me apaixonando por isso. No começo de 2020,
              Inicie minha graduação em analise e desenvolvimento de sistemas, e
              assim como o inglês, que eu aprendi por conta própria, estou
              fazendo o mesmo com programação, tenho estudado todos os dias, com
              cursos, tutorias, documentação online etc. ... Atualmente estou
              Aprendendo desenvolvimento web Front-end , utilizando, HTML, CSS
              ,JS, React . Busco uma oportunidade de estagio em alguma empresa,
              Para poder aplicar meus conhecimentos em um cenário real .
            </p>
            <p>
              Sinta-se à vontade para se conectar comigo! Vamos falar sobre
              desenvolvimento web, tecnologia, esportes, videogames, culinária
              ou como posso ajudar sua equipe ou empresa! Adoraria conhecer mais
              desenvolvedores e expandir meu network.
            </p>

            <ul className="contact-list">
              <li>
                <span>Email:</span>
                <a href="mailto:Jhowfrombrazil@gmail.com">
                  Jhowfrombrazil@gmail.com
                </a>
              </li>
              <li>
                <span>Celular:</span>
                (11) 98479-7795
              </li>
              <li>
                <span> LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/jhonatan-mendes-b275561a4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/in/jhonatan-mendes-b275561a4/
                </a>
              </li>
              <li>
                <span>GitHub:</span>
                <a
                  href="https://github.com/Broncs"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Broncs
                </a>
              </li>
            </ul>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Curriculo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

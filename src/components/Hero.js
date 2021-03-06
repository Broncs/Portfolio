import React from "react";
import Typewriter from "typewriter-effect";
import cv from "../pdf/CV-.pdf";
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <article className="hero-info">
          <h1>Jhonatan Mendes</h1>

          <div className="typewriter-text">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(20)
                  .typeString("Desenvolvedor Front-end.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Estudando <strong>ADS</strong>.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Apaixonado por novas tecnologias.")
                  .pauseFor(1000)

                  .start();
              }}
            />
          </div>

          <a
            className="btn btn-primary"
            href={cv}
            target="_blank"
            rel="noreferrer"
          >
            Curriculo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import peopleilustrator from "../images/people-with-laptop.png";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="about-container">
          <div className="img-laptop">
            <img src={peopleilustrator} alt="people" />
          </div>
          <div className="about-info">
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              omnis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              maxime animi quidem fuga doloremque aperiam eum facilis culpa
              incidunt voluptatibus eligendi odio nulla expedita optio
              distinctio ea, id perferendis qui? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Laborum pariatur nostrum facere
              suscipit? Voluptatibus molestias aliquid numquam rerum animi unde?
            </p>

            <ul className="contact-list">
              <li>
                <span>Email:</span>
                Jhowfrombrazil@gmail.com
              </li>
              <li>
                <span>Celular:</span>
                (11) 99999999
              </li>
              <li>
                <span> LinkedIn:</span>
                <a href="https://www.linkedin.com/in/jhonatan-mendes-b275561a4/">
                  https://www.linkedin.com/in/jhonatan-mendes-b275561a4/
                </a>
              </li>
              <li>
                <span>GitHub:</span>
                <a href="https://github.com/Broncs">
                  {" "}
                  https://github.com/Broncs
                </a>
              </li>
            </ul>
            <button className="btn btn-primary">Curriculo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

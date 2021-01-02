import React from "react";
import project1 from "../images/cocktail.PNG";
import project2 from "../images/color.PNG";
import project3 from "../images/stripe.PNG";

const Projects = () => {
  return (
    <section id="projects">
      <div>
        <div>
          <h2>Projetos</h2>
          <p>
            From ideation to creation, here are some applications that I have
            developed
          </p>
        </div>
      </div>

      <div>
        <div>
          <img src={project1} alt="cocktail" />
        </div>
        <div>
          <img src={project2} alt="color" />
        </div>
        <div>
          <img src={project3} alt="stripe" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

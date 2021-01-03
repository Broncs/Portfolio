import React from "react";
import project1 from "../images/cocktail.PNG";
import project2 from "../images/color.PNG";
import project3 from "../images/stripe.PNG";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-info">
          <h2>Projetos</h2>
          <p>
            From ideation to creation, here are some applications that I have
            developed
          </p>
        </div>

        <div className="img-container">
          <div className="content">
            <div className="content-overlay"></div>
            <img src={project1} alt="cocktail" />
            <div className="content-details fadeIn-top">
              <h3>This is a title</h3>
              <p>This is a short description</p>
            </div>
          </div>

          <div className="content">
            <div className="content-overlay"></div>
            <img src={project2} alt="cocktail" />
            <div className="content-details fadeIn-top">
              <h3>This is a title</h3>
              <p>This is a short description</p>
            </div>
          </div>

          <div className="content">
            <div className="content-overlay"></div>
            <img src={project3} alt="cocktail" />
            <div className="content-details fadeIn-top">
              <h3>This is a title</h3>
              <p>This is a short description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

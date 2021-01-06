import React from "react";

import SingleProject from "./SingleProject";
import projects from "../data";

const Projects = () => {
  return (
    <section id="projetos">
      <div className="container">
        <div className="project-info">
          <h2>Projetos</h2>
          <p>
            From ideation to creation, here are some applications that I have
            developed
          </p>
        </div>

        <div className="img-container">
          {projects.map((item) => {
            const { id } = item;
            return <SingleProject key={id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

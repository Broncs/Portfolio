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
            Aqui estão alguns Projetos que desenvolvi. Há muito mais disponíveis no meu Github.
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

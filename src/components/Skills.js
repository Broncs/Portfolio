import React from 'react';
import Css from '../icons/Css';
import Html from '../icons/Html';
import Javascript from '../icons/Javascript';
import ReactIcon from '../icons/ReactIcon';
import Bootstrap from '../icons/Bootstrap';
import Sass from '../icons/Sass';
import StyledComponents from '../icons/StyledComponents';
import Next from '../icons/Next';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-info">
          <h2>Habilidades</h2>
          <p>
            Linguagens e tecnologias que aprendi e apliquei aos meus projetos
          </p>
        </div>
        <div>
          <ul className="skills-img-container">
            <li>
              <Html />
              <h5>HTML 5</h5>
            </li>
            <li>
              <Css />
              <h5>CSS 3</h5>
            </li>
            <li>
              <Javascript />
              <h5>JavaScript (ES5/ES6)</h5>
            </li>
            <li>
              <ReactIcon />
              <h5>React.js</h5>
            </li>
            <li>
              <Sass />
              <h5>SASS</h5>
            </li>
            <li>
              <Bootstrap />
              <h5>Bootstrap 4</h5>
            </li>
            <li>
              <StyledComponents />
              <h5>Styled Components</h5>
            </li>
            <li>
              <Next />
              <h5>Next js</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

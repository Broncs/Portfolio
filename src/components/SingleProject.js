import React from "react";

const SingleProject = ({ title, description, img, liveDemo, github }) => {
  return (
    <>
      <div className="content">
        <div className="content-overlay"></div>
        <img src={img} alt={title} />
        <div className="content-details fadeIn-top">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href={liveDemo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleProject;

import React from "react";

const SingleProject = ({ title, description, img }) => {
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
              <a href="/#">Github</a>
            </li>
            <li>
              <a href="/#">Live Demo</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleProject;

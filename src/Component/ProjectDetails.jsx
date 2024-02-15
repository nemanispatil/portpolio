// src/Project.js
import React from "react";
import "./ProjectDetails.css";
const ProjectDetails = ({
  title,
  imgSrc,
  githubLink,
  netlifyLink,
  description,
}) => {
  return (
<div className="responsive">
<div className="project-details">
        <h3>{title}</h3>
        <img src={imgSrc} alt={title} className="project-image" />
        <p>{description}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={netlifyLink} target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </div>
      </div>
</div>
    

  );
};

export default ProjectDetails;

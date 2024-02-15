// SkillCard.js

import React from 'react';
import './Skilll.css';

const Skilll = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skilll;

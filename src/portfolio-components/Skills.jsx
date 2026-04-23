import React from 'react';
import './Skills.css';

const Skills = ({ data }) => {
  // Pulling nested skills data with fallback to empty arrays
  const technical = data?.skills?.technical || [];
  const soft = data?.skills?.soft || [];

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-tag"><br/>05. Capabilities</span>
        <h2 className="section-title">Technical & Professional Skills</h2>
      </div>

      <div className="skills-grid">
        {/* Technical Section */}
        <div className="skills-column">
          <div className="category-header">
            <span className="cat-icon">0x01</span>
            <h3 className="cat-title">Technical Proficiencies</h3>
          </div>
          <div className="skills-box">
            {technical.length > 0 ? (
              technical.map((skill, i) => (
                <div key={`tech-${i}`} className="skill-tag">
                  <span className="skill-bullet"></span>
                  {skill}
                </div>
              ))
            ) : (
              <p className="code-font" style={{opacity: 0.5}}>No technical data found...</p>
            )}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="skills-column">
          <div className="category-header">
            <span className="cat-icon">0x02</span>
            <h3 className="cat-title">Professional Competencies</h3>
          </div>
          <div className="skills-box">
            {soft.length > 0 ? (
              soft.map((skill, i) => (
                <div key={`soft-${i}`} className="skill-tag">
                  <span className="skill-bullet"></span>
                  {skill}
                </div>
              ))
            ) : (
              <p className="code-font" style={{opacity: 0.5}}>No professional data found...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
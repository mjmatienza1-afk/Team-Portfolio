import React from 'react';
import './Education.css';

const Education = ({ data }) => {
  
  // Safety check: prevent app crash if data is missing
  if (!data || !data.education) {
    return <p style={{color: 'red', padding: '20px'}}>SECURE_DATA_NOT_FOUND // CHECK_DATA_JS</p>;
  }

  return (
    /* CHANGED: className to "section-container" to match our global CSS fix */
    <section id="education" className="section-container">
      <div className="section-header">
        <span className="section-tag">02. Formation</span>
        <h2 className="section-title">Academic Journey</h2>
      </div>

      <div className="edu-interactive-grid">
        {data.education.map((edu, i) => (
          <div className="edu-card-premium" key={i}>
            <div className="edu-top-meta">
              <span className="edu-date-pill">{edu.duration}</span>
              <div className="status-indicator">
                <span className="pulse-ring"></span>
              </div>
            </div>
            
            <h3 className="edu-institution">{edu.school}</h3>
            <p className="edu-sub-loc">📍 {edu.location}</p>
            
            <div className="edu-body-text">
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import './Experience.css';

const Experience = ({ data }) => {
  // Pulling experience array from the data prop
  const jobs = data?.experience || [];

  // Safety check: if no experience data, don't render empty section
  if (jobs.length === 0) return null;

  return (
    /* CHANGED: className to "section-container" for global visibility fix */
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-tag">03. Career Path</span>
        <h2 className="section-title">Professional Milestones</h2>
      </div>

      <div className="exp-timeline-container">
        {jobs.map((job, index) => (
          <div className="exp-node" key={index}>
            {/* Left Rail - Hidden on very small screens or adjusted */}
            <div className="exp-rail">
              <div className="exp-circle"></div>
              {index !== jobs.length - 1 && <div className="exp-line-path"></div>}
            </div>
            
            {/* Right Content - Full width on mobile */}
            <div className="exp-card-wrapper">
              <div className="exp-card-header">
                <div className="exp-title-group">
                  <h3 className="exp-role">{job.role}</h3>
                  <span className="exp-company">@ {job.company}</span>
                </div>
                {/* Note: Ensure your data.js uses "period" or change this to "duration" */}
                <div className="exp-duration-tag">{job.period || job.duration}</div>
              </div>
              
              <ul className="exp-bullet-list">
                {job.duties?.map((duty, i) => (
                  <li key={i} className="exp-bullet-item">{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import './About.css';

const About = ({ data }) => {
  // Safety check: If data hasn't loaded, show a loading state
  if (!data) return null;

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-tag"> <br/> 01. Profile</span>
        <h2 className="section-title">Technical Biography</h2>
      </div>

      <div className="about-grid">
        {/* Left Column: The Narrative (Now Dynamic) */}
        <div className="about-narrative">
          <p className="lead-text">
            <span className="highlight">{data.name}</span>, a {data.role} at the {data.school}, {data.narrative}
          </p>  
          
          <div className="bio-content">
            {/* This will now pull the unique 'about' text from data.js */}
            <p>{data.about}</p>
            {/* If you have a second paragraph in your data.js, you can map it here */}
            <p className="bio-text">
            {data.bioExtended && <p>{data.bioExtended}</p>}
            </p>
          </div>

          <div className="tech-pills">
            {data.skills && (
              Array.isArray(data.skills) 
                ? data.skills.map(skill => <span key={skill} className="skill-pill">{skill}</span>)
                : [...(data.skills.technical || []), ...(data.skills.soft || [])].map(skill => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))
            )}
          </div>
        </div>

        {/* Right Column: The "Executive Tower" (Image + Stats) */}
        <div className="about-visual-stack">
          <div className="profile-frame">
            {/* Uses the image from data.js if available, otherwise defaults to MyPhoto */}
            <img src={data.profileImage} alt={data.name} className="profile-img-large" />
            <div className="frame-border"></div>
          </div>

          {/* System Status Card (Now Dynamic) */}
          <div className="about-stats-card">
            <div className="card-header">
              <span className="terminal-title">system_status.sh</span>
            </div>
            
            <div className="card-body">
              <div className="stat-item">
                <label>Location</label>
                <p>{data.location}</p>
              </div>
              <div className="stat-item">
                <label>Institution</label>
                <p>{data.school}</p>
              </div>
              <div className="stat-item">
                <label>Expected Graduation</label>
                <p>{data.graduation || "2028"}</p>
              </div>
            </div>
            
            <div className="card-footer">
              <div className="pulse-container">
                <span className="pulse-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
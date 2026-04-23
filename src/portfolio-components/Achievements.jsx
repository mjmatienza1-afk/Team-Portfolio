import React from 'react';
import './Achievements.css';
// REMOVED: import { data } from '../data'; 

const Achievements = ({ data }) => {
  // Pull achievements from the data prop passed by PortfolioPage
  const achievements = data?.achievements;

  // Safety check: Don't render if there's no data
  if (!achievements) return null;

  return (
    <section id="achievements" className="section-container">
      <div className="section-header">
        <span className="section-tag"><br/>06. Milestones</span>
        <h2 className="section-title">Honor Roll & Certifications</h2>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, i) => (
          <div 
            className="achievement-node" 
            key={i} 
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="achievement-inner">
              <div className="achievement-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="medal-icon">
                  <path d="M12 15l-2 5 2 2 2-2-2-5z"></path>
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="achievement-content">
                {/* This now pulls the unique list from your leadData, designData, etc. */}
                <p className="achievement-text">{item}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
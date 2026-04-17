import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Dedicated CSS for the home page

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return Math.min(old + Math.random() * 15, 100);
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-overlay">
        <div className="loader-content">
          <p className="loader-text">ESTABLISHING_SECURE_CONNECTION...</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="percentage">{Math.round(progress)}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wedding-page fade-in">
      <header className="topbar">
        <h1 className="logo">CORE // SYSTEMS</h1>
        <button className="home-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          INITIALIZE //
        </button>
      </header>

      {/* SECTION 1: THE TEAM */}
      <section className="cards-section">
        <div className="card" onClick={() => navigate('/portfolio/lead')} data-hover="true">
          <img src="/images/profile1.png" className="card-image" alt="P1" />
          <h2>Lead Dev</h2>
          <p>System Architecture & Logic Execution.</p>
          <span className="access-link">ACCESS_ARCHIVES //</span>
        </div>
        <div className="card" onClick={() => navigate('/portfolio/design')} data-hover="true">
          <img src="/images/profile2.png" className="card-image" alt="P2" />
          <h2>Design Lead</h2>
          <p>Visual Interface & Experience Engineering.</p>
          <span className="access-link">ACCESS_ARCHIVES //</span>
        </div>
        <div className="card" onClick={() => navigate('/portfolio/fullstack')} data-hover="true">
          <img src="/images/profile3.png" className="card-image" alt="P3" />
          <h2>Fullstack</h2>
          <p>Database Management & Protocol Integration.</p>
          <span className="access-link">ACCESS_ARCHIVES //</span>
        </div>
      </section>

      {/* SECTION 2 & 3: TERMINALS */}
      <section className="about-section">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
            <p>ROOT@CORE_SYSTEMS: ~ /MISSION</p>
          </div>
          <div className="terminal-body">
            <h2>The Mission</h2>
            <p>
              We are a specialized development unit focused on creating high-fidelity 
              web solutions. Our collective philosophy centers on clean architecture, 
              aesthetic precision, and seamless user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
            <p>ROOT@CORE_SYSTEMS: ~ /PROTOCOLS</p>
          </div>
          <div className="terminal-body">
            <h2>System Strategy</h2>
            <p>
              Utilizing modular frameworks and rapid prototyping to ensure 
              that every deployment meets rigorous system requirements and 
              performance benchmarks across all distributed nodes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE MANIFEST */}
      <section className="manifest-section">
        <div className="manifest-grid">
          <div className="protocol-card">
            <span className="p-id">P_01</span>
            <h3>Performance First</h3>
            <p>Optimizing every line of code for maximum execution speed.</p>
          </div>
          <div className="protocol-card">
            <span className="p-id">P_02</span>
            <h3>Pixel Precision</h3>
            <p>Aesthetic integrity maintained across all viewports.</p>
          </div>
          <div className="protocol-card">
            <span className="p-id">P_03</span>
            <h3>Scalable Logic</h3>
            <p>Building architectures that grow with the user base.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE SCHOOL */}
      <section className="school-section">
        <div className="school-container">
          <div className="school-visual"><div className="origin-icon">◈</div></div>
          <div className="school-details">
            <span className="subtitle">INSTITUTIONAL ORIGIN //</span>
            <h2>University of the Philippines</h2>
            <div className="school-metadata"><span>BATCH_2026</span><span>PH_REGION_IV</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE RSVP ENVELOPE */}
      <section className="envelope-section">
        <div className={`envelope-wrapper ${isOpened ? 'open' : ''}`} onClick={() => !isOpened && setIsOpened(true)}>
          <div className="envelope">
            <div className="flap"></div>
            <div className="envelope-body"></div>
            <div className="letter">
              {isOpened && (
                <button 
                  className="close-envelope-x" 
                  onClick={(e) => { e.stopPropagation(); setIsOpened(false); }}
                  data-hover="true"
                >
                  [ X ]
                </button>
              )}
              <div className="letter-content">
                <span className="p-id">ACCESS_GRANTED</span>
                <h3>RSVP PROTOCOL</h3>
                <p>Confirm your attendance for the CORE_SYSTEMS deployment.</p>
                <button 
                   className="confirm-btn" 
                   onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/rsvp'); }}
                   data-hover="true"
                >
                  VIEW_DETAILS //
                </button>
              </div>
            </div>
          </div>
          {!isOpened && <div className="rsvp-label">INITIALIZE_RSVP //</div>}
        </div>
      </section>

      {/* SECTION 7: MARQUEE */}
      <section className="specs-marquee">
        <div className="marquee-content">
          <span>REACT.JS</span> <span>FLASK</span> <span>SQLITE</span> <span>VITE</span> 
          <span>PYTHON</span> <span>CSS3</span> <span>GIT</span> <span>FIGMA</span>
          <span>REACT.JS</span> <span>FLASK</span> <span>SQLITE</span> <span>VITE</span>
          <span>PYTHON</span> <span>CSS3</span> <span>GIT</span> <span>FIGMA</span>
        </div>
      </section>

      <footer className="footer">
        <p>SYSTEM VERSION 2.0.26 // ENCRYPTED CONNECTION</p>
      </footer>
    </div>
  );
}
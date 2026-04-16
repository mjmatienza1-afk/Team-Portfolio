import React from "react";
import "./Hero.css";

const Hero = ({ data }) => {
  if (!data) return null;

  // The Smooth Scroll Engine for the Hero Buttons
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Stops the instant teleporting
    const el = document.getElementById(targetId);
    
    if (el) {
      const offset = 80; // Accounts for your sticky navbar
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="hero-viewport">
      {/* Background Grid */}
      <div className="hero-background-grid"></div>

      <div className="hero-container">
        <div className="hero-main">
          <p className="hero-status">SYSTEM_ONLINE // UPLINK_ESTABLISHED</p>
          
          <h1 className="hero-glitch-name">
            {data.name}
          </h1>
          
          {/* Tagline */}
          <h2 className="hero-role">&gt; {data.tagline || "Software Engineer"}</h2>

          <p className="hero-mission">
            {data.description || "Architecting robust, scalable, and secure system modules. Ready for deployment."}
          </p>

          <div className="hero-actions">
            {/* Added onClick handlers to trigger the smooth scroll */}
            <a 
              href="#projects" 
              className="cta-primary"
              onClick={(e) => handleScroll(e, "projects")}
            >
              VIEW REPOSITORIES
            </a>
            
            <a 
              href="#about" 
              className="cta-primary"
              onClick={(e) => handleScroll(e, "about")}
            >
              IDENTITY PROFILE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
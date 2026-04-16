import React from 'react';
import './Contact.css';
// REMOVED: import { data } from '../data';

const Contact = ({ data }) => {
  // Pulling contact and socials from the passed data prop
  const contact = data?.contact;
  const socials = data?.socials;

  // Safety check to prevent crashing if data is missing
  if (!contact || !socials) return null;

  return (
    <section id="contact" className="section-container">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">07. Connection</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        
        <div className="contact-card">
          <p className="contact-description">
            I’m currently exploring new opportunities in <span className="highlight">Cybersecurity</span> and <span className="highlight">Full-Stack Development</span>. 
            Whether you have a technical query or just want to connect, my inbox is always open for a system handshake.
          </p>
          
          <div className="contact-meta">
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">{contact.address}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Encrypted Mail</span>
              <a href={`mailto:${contact.email}`} className="meta-value email-hover">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="cta-wrapper">
            <a href={`mailto:${contact.email}`} className="main-cta-button">
              Execute "Say Hello"
            </a>
          </div>

          <div className="social-grid">
            {Object.entries(socials).map(([platform, url]) => (
              <a 
                key={platform} 
                href={url} 
                target="_blank" 
                rel="noreferrer" 
                className="social-pill"
              >
                <span className="platform-tag">{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
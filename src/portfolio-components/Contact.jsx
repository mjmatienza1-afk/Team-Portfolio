import React, { useState } from 'react';
import './Contact.css';
// ❌ REMOVED: import { designData } from './data'; 

const Contact = ({ data }) => {
  // Pulling contact and socials from the passed data prop
  const contact = data?.contact;
  const socials = data?.socials;

  // State to track if the email was copied
  const [copied, setCopied] = useState(false);

  // Safety check to prevent crashing if data is missing
  if (!contact || !socials) return null;

  // The function to copy the email to the clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    
    // Reset back to the email address after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag"><br/>07. Connection</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        
        <div className="contact-card">
          
          {/* 👇 FIXED: Now uses 'data.contactdetails' so it changes per profile 👇 */}
          <p className="contact-description">
            {data.contactdetails}
          </p>
          {/* 👆 ----------------------------------------------------------- 👆 */}
          
          <div className="contact-meta">
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">{contact.address}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Encrypted Mail</span>
              <span 
                onClick={handleCopyEmail} 
                className="meta-value email-hover"
                style={{ cursor: 'pointer', color: copied ? '#27c93f' : '' }}
                title="Click to copy"
              >
                {copied ? "COPIED TO CLIPBOARD //" : contact.email}
              </span>
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
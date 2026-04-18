import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RSVP.css';

function RSVP() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);
  const TOTAL_PHASES = 5;
  
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    attendance: '',
    guestCount: 1,
    meal: '',
    dietary: '',
    song: ''
  });

  const handleReturnHome = () => {
    navigate('/'); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- NEW: SYSTEM VALIDATION LOGIC ---
  const isFormValid = () => {
    // 1. Check basic required fields
    const baseValid = formData.names.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.attendance !== '';
    
    // 2. If they accept, they MUST select a meal
    if (formData.attendance === 'accept' && formData.meal === '') {
      return false;
    }
    
    return baseValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", formData);
    alert("RSVP PROTOCOL COMPLETE. Thank you for confirming.");
    navigate('/'); 
  };

const handleScroll = (e) => {
    const container = e.target;
    const { scrollTop, scrollHeight, clientHeight } = container;
    
    // THE FIX: If the user scrolls to the absolute bottom of the container, 
    // force the system to recognize it's on the final slide.
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight - 10) {
      if (currentSlide !== TOTAL_PHASES) {
        setCurrentSlide(TOTAL_PHASES);
      }
      return;
    }
    
    // Normal calculation for slides 1 through 4
    const newSlide = Math.round(scrollTop / clientHeight) + 1;
    const clampedSlide = Math.min(Math.max(newSlide, 1), TOTAL_PHASES);
    
    if (clampedSlide !== currentSlide) {
      setCurrentSlide(clampedSlide);
    }
  };
  return (
    <div className="wedding-page fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <div className="terminal-window rsvp-modal" style={{ maxWidth: '800px', width: '100%' }}>
        
        <div className="terminal-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <span className="dot red" onClick={handleReturnHome} style={{cursor: 'pointer'}}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span style={{marginLeft: '10px'}}>ROOT@CORE_SYSTEMS: ~ /EVENT_MANIFEST (PHASE_0{currentSlide}/{`0${TOTAL_PHASES}`})</span>
          </div>
          {/* THE NEW X CLOSE BUTTON */}
          <span className="close-x-btn" onClick={handleReturnHome}>[ X ]</span>
        </div>
        
        <div className="terminal-body rsvp-body-container" style={{ position: 'relative' }}>
          
          {/* BACKGROUND IMAGE FOR SLIDE 1 NOW COVERS THE ENTIRE BODY */}
          <div className={`full-bg-image-container ${currentSlide === 1 ? 'visible' : 'hidden'}`}>
             <img src="/images/anna_and_steve_final.png" alt="Anna and Steve" className="full-bg-image" />
             <div className="photo-scan-effect"></div>
          </div>

          <div className="status-line" style={{marginBottom: '10px', color: '#27c93f', fontFamily: 'monospace', display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2}}>
            <span><span className="blink">●</span> SYSTEM_READY: DEPLOYMENT_PHASE_0{currentSlide}</span>
            <span style={{opacity: 0.6, fontSize: '0.65rem'}}>// SCROLL TO NAVIGATE ↓</span>
          </div>

          <form onSubmit={handleSubmit} className="tab-content-area rsvp-scroll-wrapper" onScroll={handleScroll} style={{ position: 'relative', zIndex: 2 }}>
            
            {/* SLIDE 1 (Text over image) */}
            <div className={`scroll-slide invitation-slide ${currentSlide === 1 ? 'active-slide' : 'inactive-slide'}`}>
              <div className="invitation-text-block">
                  <span className="p-id mono-label">SYSTEM_ANNOUNCEMENT //</span>
                  <h2 className="invitation-prompt">CORE_SYSTEMS:<br/>You Are Invited.</h2>
                  <p className="modal-subtitle text-center" style={{marginTop: '15px'}}>Protocol initialized. Attendance request confirmed for Anna <span className="mono-amp">&</span> Steve.</p>
              </div>
            </div>

            {/* SLIDE 2 */}
            <div className={`scroll-slide ${currentSlide === 2 ? 'active-slide' : 'inactive-slide'}`}>
              <span className="slide-label">ORIGIN_STORY // THE_LOG</span>
              <div className="story-container">
                <p>[LOG_ENTRY_001]: Initial contact was made in the backend servers of a mutual project. What started as debugging soon escalated into a full-scale partnership.</p>
                <p>[LOG_ENTRY_042]: After countless iterations, coffee runs, and late-night deployments, we decided to push our final commit to the master branch—together.</p>
              </div>
            </div>

            {/* SLIDE 3 */}
            <div className={`scroll-slide ${currentSlide === 3 ? 'active-slide' : 'inactive-slide'}`}>
              <span className="slide-label">OPERATION: MATRIMONY // DETAILS</span>
              <div className="details-grid">
                <div className="detail-card">
                  <span className="d-icon">⏱</span>
                  <h4>TEMPORAL MARKER</h4>
                  <p>December 12, 2026</p>
                  <p className="sub-text">1500 HOURS</p>
                </div>
                <div className="detail-card">
                  <span className="d-icon">📍</span>
                  <h4>CEREMONY NODE</h4>
                  <p>St. Therese Chapel</p>
                  <p className="sub-text">UPLB Campus, Los Baños</p>
                </div>
                <div className="detail-card">
                  <span className="d-icon">🥂</span>
                  <h4>RECEPTION NODE</h4>
                  <p>The Registry Function Hall</p>
                  <p className="sub-text">Dinner & Program to follow</p>
                </div>
                <div className="detail-card">
                  <span className="d-icon">👔</span>
                  <h4>DRESS PROTOCOL</h4>
                  <p>Formal / Cyber-Minimalist</p>
                  <p className="sub-text">Black, Silver, Emerald</p>
                </div>
              </div>
            </div>

            {/* SLIDE 4 */}
            <div className={`scroll-slide form-slide ${currentSlide === 4 ? 'active-slide' : 'inactive-slide'}`}>
              <span className="slide-label">GUEST_INITIALIZATION // IDENTIFICATION</span>
              <div className="form-group">
                <label>Name(s): ____________________</label>
                <input type="text" name="names" value={formData.names} onChange={handleInputChange} className="terminal-input" placeholder="Enter full name(s)" required />
              </div>
              <div className="form-group">
                <label>Contact Email / Phone:</label>
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} className="terminal-input" placeholder="For system updates" required />
              </div>
              <div className="form-group">
                <label>Attendance Confirmation:</label>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="attendance" value="accept" onChange={handleInputChange} required />
                    <span>[✓] Accepts with pleasure</span>
                  </label>
                  <label>
                    <input type="radio" name="attendance" value="decline" onChange={handleInputChange} />
                    <span>[X] Declines with regret</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Number Attending:</label>
                <input type="number" name="guestCount" value={formData.guestCount} onChange={handleInputChange} className="terminal-input" min="1" max="5" />
              </div>
            </div>

            {/* SLIDE 5 */}
            <div className={`scroll-slide form-slide ${currentSlide === 5 ? 'active-slide' : 'inactive-slide'}`}>
              <span className="slide-label">GUEST_PREFERENCES // CONFIGURATION</span>
              <div className="form-group">
                <label>Meal Selection:</label>
                <select name="meal" value={formData.meal} onChange={handleInputChange} className="terminal-input" required={formData.attendance === 'accept'}>
                  <option value="">-- SELECT_PROTEIN_SOURCE --</option>
                  <option value="chicken">Chicken</option>
                  <option value="beef">Beef</option>
                  <option value="fish">Fish</option>
                  <option value="vegetarian">Vegetarian</option>
                </select>
              </div>
              <div className="form-group">
                <label>Dietary Restrictions / Accessibility Needs:</label>
                <textarea name="dietary" value={formData.dietary} onChange={handleInputChange} className="terminal-input" rows="2" placeholder="Input specific requirements..."></textarea>
              </div>
              <div className="form-group">
                <label>Audio Request 🎶 / Message for the Couple:</label>
                <textarea name="song" value={formData.song} onChange={handleInputChange} className="terminal-input" rows="2" placeholder="Input song title or advice..."></textarea>
              </div>
              <div className="deadline-notice" style={{marginTop: '10px', color: '#ff5f56', fontSize: '0.8rem', textAlign: 'center'}}>
                <p>WARNING: Kindly respond by November 1, 2026 to ensure database allocation.</p>
              </div>
              {/* DYNAMIC SUBMIT BUTTON */}
              <button 
                type="submit"
                className="nav-btn submit-btn"
                disabled={!isFormValid()}
                style={{ 
                  width: '100%', 
                  marginTop: '15px',
                  padding: '12px 20px', 
                  fontFamily: 'monospace', 
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                {isFormValid() ? 'EXECUTE_SUBMISSION //' : '[!] ERROR: MISSING_PARAMETERS'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
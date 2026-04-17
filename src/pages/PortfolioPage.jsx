// src/pages/PortfolioPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { leadData, designData, fullstackData } from "../data";

import Navbar from "../portfolio-components/Navbar";
import Hero from "../portfolio-components/Hero";
import About from "../portfolio-components/About";
import Education from "../portfolio-components/Education";
import Experience from "../portfolio-components/Experience";
import Projects from "../portfolio-components/Projects";
import Skills from "../portfolio-components/Skills";
import Achievements from "../portfolio-components/Achievements";
import Contact from "../portfolio-components/Contact";
import Footer from "../portfolio-components/Footer";

export default function PortfolioPage() {
  const { role } = useParams();
  const [loading, setLoading] = useState(true);

  // Simulate a data decryption/loading sequence (1.5 seconds)
  useEffect(() => {
    // Reset loading to true if the role changes
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [role]);

  // Logic to pick data
  let activeData = leadData;
  if (role === "design") activeData = designData;
  if (role === "fullstack") activeData = fullstackData;

  // --- THE NEW LOADING SCREEN ---
  if (loading) {
    return (
      <div className="portfolio-loader">
        <div className="extraction-box">
          <div className="scan-line"></div>
          <p className="extraction-text">
            EXTRACTING_DOSSIER // <span>[{role.toUpperCase()}]</span>
          </p>
          <p className="sub-text">Decrypting local archives...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-wrapper fade-in">
      {/* Remember: Your dynamic Navbar header is handling the top navigation now! */}
      <Navbar data={activeData} />
      <Hero data={activeData} />
      <main className="container">
        <About data={activeData} />
        <Education data={activeData} />
        <Experience data={activeData} />
        <Projects data={activeData} />
        <Skills data={activeData} />
        <Achievements data={activeData} />
        <Contact data={activeData} />
      </main>
      <Footer data={activeData} />
    </div>
  );
}
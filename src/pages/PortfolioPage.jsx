// src/pages/PortfolioPage.jsx
import React from "react";
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

  // Logic to pick data
  let activeData = leadData;
  if (role === "design") activeData = designData;
  if (role === "fullstack") activeData = fullstackData;

  return (
    <div className="portfolio-wrapper">
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
import React from "react";
import "./Footer.css";

export default function Footer({ data }) {
  if (!data) return null;

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* We removed the <h2>{data.name}</h2> line entirely */}

        {/* Hard-coding this ensures the sub-module text NEVER disappears */}
        <p className="footer__tagline">CORE // SYSTEMS</p>

        <div className="footer__divider"></div>

        <p className="footer__copy">
          © {new Date().getFullYear()} {data.name}. 
          <span className="footer__status"> SYSTEM_SECURED</span>
        </p>
      </div>
    </footer>
  );
}
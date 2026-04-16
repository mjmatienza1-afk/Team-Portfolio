import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // IMPORT ROUTER NAVIGATION
import "./Navbar.css";

const links = ["Home", "About", "Education", "Experience", "Projects", "Skills", "Achievements", "Contact"];

const Navbar = ({ data }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  
  // Initialize the navigation hook
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const linkName = id.charAt(0).toUpperCase() + id.slice(1);
            setActive(linkName);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      if (link !== "Home") {
        const el = document.getElementById(link.toLowerCase());
        if (el) observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (linkName) => {
    if (linkName === "Home") {
      // 🚀 USE REACT ROUTER TO SEAMLESSLY GO BACK TO YOUR MAIN APP.JSX HOME
      navigate("/");
    } else {
      const targetId = linkName.toLowerCase();
      const el = document.getElementById(targetId);
      
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setMenuOpen(false);
    setActive(linkName);
  };

  const getInitials = (name) => {
    if (!name) return "CS";
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo("Home")}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">{getInitials(data?.name)}</span>
          <span className="logo-bracket">]</span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link}>
              <button
                className={`nav-link ${active === link ? "active" : ""}`}
                onClick={() => scrollTo(link)}
              >
                {link === "Home" ? `[ ${link} ]` : link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
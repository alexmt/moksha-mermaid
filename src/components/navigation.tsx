import { useState, useEffect } from "react";
import './navigation.css';

import mermaidImage from '../assets/mermaid.webp';

function Navigation(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "book"];
      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="home-header">
        <img src={mermaidImage} alt="Mermaid" className="mermaid-logo" />
        <div className="home-header-text">
          <div className="home-name">Vanessa Aders</div>
          <div className="home-title">PSYCHOTHERAPY</div>
        </div>
      </header>

      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <button
              className={activeSection === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={activeSection === "about" ? "active" : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={activeSection === "services" ? "active" : ""}
              onClick={() => scrollToSection("services")}
            >
              How I Work
            </button>
          </li>
          <li>
            <button
              className={activeSection === "book" ? "active" : ""}
              onClick={() => scrollToSection("book")}
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

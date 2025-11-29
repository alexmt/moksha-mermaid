import { useState, useEffect } from 'react';

function Navigation(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'book'];
      const scrollPosition = window.scrollY + 150;
      let currentSection = 'home';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <button
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'services' ? 'active' : ''}
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'book' ? 'active' : ''}
            onClick={() => scrollToSection('book')}
          >
            Book a Session
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;


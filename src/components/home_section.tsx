import mermaidImage from '../assets/mermaid.png';

function HomeSection(): React.JSX.Element {
  return (
    <section id="home" className="section home-section">
      <header className="home-header">
        <img src={mermaidImage} alt="Mermaid" className="mermaid-logo" />
        <div className="home-header-text">
          <div className="home-name">Vanessa Aders</div>
          <div className="home-title">PSYCHOTHERAPY</div>
        </div>
      </header>

      <div className="home-hero">
        <div className="home-hero-subtitle">Telehealth for San Francisco Bay Area</div>
        <h1 className="home-hero-title">Move Freely Again Through Playful, Restorative Motion</h1>
        <button
          className="home-hero-cta"
          onClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HomeSection;


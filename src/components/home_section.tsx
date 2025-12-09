import './home_section.css';

function HomeSection(): React.JSX.Element {
  return (
    <section id="home" className="section home-section">
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


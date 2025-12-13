import './home_section.css';
import butterflyGif from '../assets/butterfly.gif';
import dolphinImg from '../assets/dolphin.png';
import angelNumbersImg from '../assets/angel_numbers.png';
import mermaidImg from '../assets/mermaid_outline.png';
import dancerImg from '../assets/dancer.png';
import { useState } from 'react';

const extraItems = [{
  img: dolphinImg,
  alt: 'Dolphin',
  content: 'My spirit animal. A symbol of peace, harmony, and my deep love for the ocean.',
}, {
  img: angelNumbersImg,
  alt: 'Angel Numbers',
  content: 'Messages from my guardian angels. A reminder to stay aligned with the universe and trust my intuition.',
}, {
  img: mermaidImg,
  alt: 'Mermaid',
  content: 'A symbol of my spirit. Independent, free, intuitive, and loving.',
}, {
  img: dancerImg,
  alt: 'Dancer',
  content: 'My language of expression. Movement as a bridge to my inner world and embodied freedom.',
}]

function HomeSection(): React.JSX.Element {
  const [showExtra, setShowExtra] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <>
      <section id="home" className={"section home-section" + (showExtra ? ' extra-visible' : '')}>
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
        <div className="butterfly" onClick={() => setShowExtra(!showExtra)}>
          <div style={{ backgroundImage: `url(${butterflyGif})` }} className="butterfly-image" />
        </div>
      </section>
      <div className={"home-section-extra" + (showExtra ? ' extra-visible' : '')}>
        {extraItems.map((item, i) =>
          <img className={selectedItem === i ? 'selected' : ''} src={item.img} alt={item.alt} key={i} onClick={() => setSelectedItem(i)} />
        )}
        <p>{extraItems[selectedItem].content}</p>
      </div>
    </>
  );
}

export default HomeSection;

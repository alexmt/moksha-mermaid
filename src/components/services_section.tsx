import React from 'react';
import services1 from '../assets/services1.jpg';
import services2 from '../assets/services2.jpg';
import services3 from '../assets/services3.jpg';

type ServiceCard = {
  title: string;
  subtitle: string;
  image: string;
};

const cards: ServiceCard[] = [
  {
    title: 'Learn to tame Anxiety',
    subtitle: 'Practical tools to calm mind and body',
    image: services1,
  },
  {
    title: 'Rise above Depression',
    subtitle: 'Restore energy, hope, and direction',
    image: services2,
  },
  {
    title: 'Build a stronger Relationship',
    subtitle: 'Communicate, reconnect, and grow together',
    image: services3,
  },
];

function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="section services-section">
      <div className="section-content">
        <h2 className="section-title">Services</h2>
        <div className="service-stack">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="service-card"
              style={{
                backgroundImage: `url(${c.image})`,
              }}
              role="article"
              aria-label={c.title}
              tabIndex={0}
              data-index={i}
            >
              <div className="service-card-overlay">
                <div className="service-card-text">
                  <h3 className="service-card-title">{c.title}</h3>
                  <p className="service-card-subtitle">{c.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;


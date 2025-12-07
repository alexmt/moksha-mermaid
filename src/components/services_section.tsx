import React from 'react';
import services1 from '../assets/services1.jpg';
import services2 from '../assets/services2.jpg';
import services3 from '../assets/services3.jpg';
import { servicesContent } from '../content';
import Markdown from 'react-markdown'

type ServiceCard = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
};

const images = [services1, services2, services3];
const cards: ServiceCard[] = servicesContent.map((service, i) => ({
  title: service.name,
  subtitle: service.subtitle,
  image: images[i % images.length],
  description: service.description,
}));

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
                <div className="service-card-description">
                  <Markdown>{c.description}</Markdown>
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


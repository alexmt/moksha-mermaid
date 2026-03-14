import React from 'react';
import { servicesContent } from '../content';
import Markdown from 'react-markdown'
import ScrollDownButton from './scroll_down_button';
import './services_section.css';

type ServiceCard = {
  title: string;
  subtitle: string;
  description: string;
};

const cards: ServiceCard[] = servicesContent.map((service) => ({
  title: service.name,
  subtitle: service.subtitle,
  description: service.description,
}));

function ServiceCard({ card, index, nextId }: { card: ServiceCard; index: number; nextId: string }) {
  return (
    <div id={`service-${index}`} className="service-card-wrapper">
      <div
        className="service-card"
        role="article"
        aria-label={card.title}
        tabIndex={0}
        data-index={index}
      >
        <div className="service-card-overlay">
          <div className="service-card-text">
            <h3 className="service-card-title">{card.title}</h3>
            <p className="service-card-subtitle">{card.subtitle}</p>
          </div>
          <div className="service-card-description">
            <Markdown>{card.description}</Markdown>
          </div>
        </div>
      </div>
      <ScrollDownButton nextSection={nextId} />
    </div>
  );
}

function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="section services-section">
      <div className="section-content">
        {/* <h2 className="section-title">How I Work</h2> */}
        <div className="service-stack">
          {cards.map((c, i) => (
            <ServiceCard key={c.title} card={c} index={i} nextId={i < cards.length - 1 ? `service-${i + 1}` : 'book'} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;


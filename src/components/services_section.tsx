import React, { useRef } from 'react';
// @ts-ignore - responsive-loader types
import services1 from '../assets/services1.jpg?sizes[]=600&sizes[]=1200&sizes[]=1800';
// @ts-ignore - responsive-loader types
import services2 from '../assets/services2.jpg?sizes[]=600&sizes[]=1200&sizes[]=1800';
// @ts-ignore - responsive-loader types
import services3 from '../assets/services3.jpg?sizes[]=600&sizes[]=1200&sizes[]=1800';
import { servicesContent } from '../content';
import { useResponsiveBackground } from '../hooks/use_responsive_background';
import Markdown from 'react-markdown'
import './services_section.css';

type ServiceCard = {
  title: string;
  subtitle: string;
  image: string | { src: string; srcSet: string; images: Array<{ path: string; width: number }> };
  description: string;
};

const images = [services1, services2, services3];
const cards: ServiceCard[] = servicesContent.map((service, i) => ({
  title: service.name,
  subtitle: service.subtitle,
  image: images[i % images.length],
  description: service.description,
}));

function ServiceCard({ card, index }: { card: ServiceCard; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const backgroundImage = useResponsiveBackground(card.image, cardRef);
  
  return (
    <div
      ref={cardRef}
      className="service-card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
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
  );
}

function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="section services-section">
      <div className="section-content">
        {/* <h2 className="section-title">How I Work</h2> */}
        <div className="service-stack">
          {cards.map((c, i) => (
            <ServiceCard key={c.title} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;


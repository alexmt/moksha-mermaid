// @ts-ignore - responsive-loader types
import vanessaImage from '../assets/vanessa_aders.png?sizes[]=400&sizes[]=800&sizes[]=1200';
import ResponsiveImage from './responsive_image';
import { aboutContent } from '../content';
import './about_section.css';

function AboutSection(): React.JSX.Element {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <div className="section-card">
          <div className="card-image">
            <ResponsiveImage 
              src={vanessaImage} 
              alt={aboutContent.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            />
          </div>
          <div className="card-text">
            <h1 className="section-title">{aboutContent.title}</h1>
            <div className="about-text">
              {aboutContent.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;


import vanessaImage from '../assets/vanessa_aders.png';
import { aboutContent } from '../content';
import './about_section.css';

function AboutSection(): React.JSX.Element {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <div className="section-card">
          <div className="card-image">
            <img src={vanessaImage} alt={aboutContent.title} />
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


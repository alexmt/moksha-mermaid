import vanessaImage from '../assets/vanessa_aders.png';

function AboutSection(): React.JSX.Element {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <div className="section-card">
          <div className="card-image">
            <img src={vanessaImage} alt="Vanessa Aders" />
          </div>
          <div className="card-text">
            <h1 className="section-title">Vanessa Aders</h1>
            <div className="about-text">
              <p>
                Welcome to my practice. I am a dedicated therapist committed to helping you 
                navigate life's challenges and discover your inner strength. With years of 
                experience and a compassionate approach, I provide a safe and supportive 
                environment for healing and growth.
              </p>
              <p>
                My therapeutic approach is tailored to each individual, recognizing that 
                every person's journey is unique. Together, we will work towards understanding 
                your experiences, developing coping strategies, and building resilience.
              </p>
              <p>
                Whether you're dealing with anxiety, depression, relationship issues, or 
                simply seeking personal growth, I'm here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;


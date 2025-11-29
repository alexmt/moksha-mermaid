function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="section services-section">
      <div className="section-content">
        <h2 className="section-title">Services</h2>
        <div className="services-content">
          <p>
            I offer a range of therapeutic services designed to meet your unique needs. 
            Each session is personalized to support your journey towards wellness and 
            personal growth.
          </p>
          <div className="services-list">
            <div className="service-item">
              <h3>Individual Therapy</h3>
              <p>
                One-on-one sessions focused on your personal challenges, goals, and 
                emotional well-being. We'll work together to develop strategies that 
                work for you.
              </p>
            </div>
            <div className="service-item">
              <h3>Couples Counseling</h3>
              <p>
                Strengthen your relationship through improved communication, conflict 
                resolution, and deeper understanding of each other's needs.
              </p>
            </div>
            <div className="service-item">
              <h3>Group Therapy</h3>
              <p>
                Connect with others facing similar challenges in a supportive group 
                setting. Share experiences and learn from one another.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;


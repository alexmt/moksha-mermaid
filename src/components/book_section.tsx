function BookSection(): React.JSX.Element {
  return (
    <section id="book" className="section book-section">
      <div className="section-content" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Book a Session</h2>
        <div className="book-content">
          <form className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="preferred-date">Preferred Date</label>
              <input type="date" id="preferred-date" name="preferred-date" />
            </div>
            <div className="form-group">
              <label htmlFor="preferred-time">Preferred Time</label>
              <select id="preferred-time" name="preferred-time">
                <option value="">Select a time</option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                <option value="evening">Evening (5pm - 8pm)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5}></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookSection;


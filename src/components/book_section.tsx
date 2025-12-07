import { useState } from "react";

const webhook = 'https://script.google.com/macros/s/AKfycbzok3QVXPlZ1-BCNodIrN8ITnyEJ38o6_qkoyB_7zLcZ08NY4S3L6hQJIff3PDNg_7qkg/exec';

function BookSection(): React.JSX.Element {
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      setSending(true);
      await fetch(webhook, {
        method: "POST",
        mode: "no-cors",   // prevents browser from blocking the request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      alert('Thank you for your request! We will get back to you soon.');
    } catch (error) {
      console.error(error);
      alert('Sorry, there was an error sending your request. Please try again later.');
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="book" className="section book-section">
      <div className="section-content" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Book a Session</h2>
        <div className="book-content">
          <form className="booking-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="submit-button" disabled={sending}>Submit Request</button>
            {sending && <div className="sending-message">Sending...</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookSection;


import './footer.css';

function Footer(): React.JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-label">Location:</div>
        <div className="footer-contact"><span>Marin County, CA</span></div>
          
        <div className="footer-label">Contact me:</div>
        <div className="footer-contact">
          <a href="mailto:vanessa@vadersadvisory.com" className="footer-link">
            vanessa@vadersadvisory.com
          </a>
          <span className="footer-separator">|</span>
          <a href="tel:+14158950222" className="footer-link">
            415 895 0222
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Main Pages</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">Pricing</Link>
              </li>
              <li>
                <Link to="/free-games" className="footer-link">Free Games</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="footer-link">How It Works</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <Link to="/blog" className="footer-link">Blog</Link>
              </li>
              <li>
                <Link to="/reviews" className="footer-link">Reviews</Link>
              </li>
              <li>
                <Link to="/api-access" className="footer-link">API Access</Link>
              </li>
              <li>
                <Link to="/affiliate" className="footer-link">Affiliate Program</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="footer-link">Refund Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact">
              <p className="footer-contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:support@yourbrand.com" className="footer-link">
                  support@yourbrand.com
                </a>
              </p>
              <p className="footer-contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+1234567890" className="footer-link">
                  +1 (234) 567-890
                </a>
              </p>
              <p className="footer-contact-item">
                <span className="contact-icon">📍</span>
                <span className="footer-text">
                  123 Business Street, Suite 100<br />
                  City, State 12345
                </span>
              </p>
            </div>
            <div className="footer-social">
              <Link to="/contact" className="footer-link footer-contact-link">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy</Link>
            <span className="footer-separator">|</span>
            <Link to="/terms-of-service" className="footer-bottom-link">Terms</Link>
            <span className="footer-separator">|</span>
            <Link to="/cookie-policy" className="footer-bottom-link">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


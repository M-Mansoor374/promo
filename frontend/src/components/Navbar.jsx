import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">MSH Social Hub</span>
        </Link>
        
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pricing" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/free-games" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Free Games
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/how-it-works" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="navbar-item navbar-auth">
            <Link to="/login" className="navbar-link navbar-link-login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </li>
          <li className="navbar-item navbar-auth">
            <Link to="/register" className="navbar-link navbar-link-register" onClick={() => setIsMenuOpen(false)}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


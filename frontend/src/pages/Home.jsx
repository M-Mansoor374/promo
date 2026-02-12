import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Marketing & Analytics Platform for Social Media
            </h1>
            <p className="hero-description">
              MSH Social Hub provides audience engagement tools and organic growth assistance 
              across multiple social media platforms. Access user-initiated actions through 
              our coin-based system.
            </p>
            <div className="hero-cta">
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Logos Section */}
      <section className="platforms-section">
        <div className="container">
          <h2 className="section-title">Supported Platforms</h2>
          <div className="platforms-grid">
            <div className="platform-logo">
              <div className="platform-icon">📘</div>
              <span className="platform-name">Facebook</span>
            </div>
            <div className="platform-logo">
              <div className="platform-icon">📷</div>
              <span className="platform-name">Instagram</span>
            </div>
            <div className="platform-logo">
              <div className="platform-icon">🐦</div>
              <span className="platform-name">Twitter</span>
            </div>
            <div className="platform-logo">
              <div className="platform-icon">💼</div>
              <span className="platform-name">LinkedIn</span>
            </div>
            <div className="platform-logo">
              <div className="platform-icon">📺</div>
              <span className="platform-name">YouTube</span>
            </div>
            <div className="platform-logo">
              <div className="platform-icon">🎵</div>
              <span className="platform-name">TikTok</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Platform Features</h2>
          <p className="section-subtitle">
            Tools designed to support your social media presence
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3 className="service-title">Organic Growth Assistance</h3>
              <p className="service-description">
                Access tools that support natural audience development through 
                user-initiated actions and engagement strategies.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">👥</div>
              <h3 className="service-title">Audience Engagement Tools</h3>
              <p className="service-description">
                Connect with your audience through various engagement options 
                available across multiple social media platforms.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">Marketing & Analytics Platform</h3>
              <p className="service-description">
                Monitor and analyze your social media performance with 
                comprehensive analytics and reporting features.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3 className="service-title">User-Initiated Actions</h3>
              <p className="service-description">
                All platform activities are driven by user choices, ensuring 
                authentic engagement and platform compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coin-Based System Explanation */}
      <section className="coin-system-section">
        <div className="container">
          <div className="coin-system-content">
            <div className="coin-system-text">
              <h2 className="section-title">Coin-Based System</h2>
              <p className="coin-system-description">
                MSH Social Hub operates on a coin-based system that provides access 
                to platform features and services. Coins are used to initiate 
                user-requested actions across supported social media platforms.
              </p>
              <div className="coin-features">
                <div className="coin-feature">
                  <div className="coin-feature-icon">🪙</div>
                  <div className="coin-feature-content">
                    <h4>Flexible Usage</h4>
                    <p>Use coins to access various engagement and growth tools</p>
                  </div>
                </div>
                <div className="coin-feature">
                  <div className="coin-feature-icon">💳</div>
                  <div className="coin-feature-content">
                    <h4>Easy Purchase</h4>
                    <p>Purchase coins through secure payment methods</p>
                  </div>
                </div>
                <div className="coin-feature">
                  <div className="coin-feature-icon">📱</div>
                  <div className="coin-feature-content">
                    <h4>Platform Access</h4>
                    <p>Coins enable access to multiple social media platforms</p>
                  </div>
                </div>
              </div>
              <div className="coin-cta">
                <Link to="/pricing" className="btn btn-primary">
                  View Pricing
                </Link>
                <Link to="/free-games" className="btn btn-outline">
                  Earn Free Coins
                </Link>
              </div>
            </div>
            <div className="coin-system-visual">
              <div className="coin-visual-card">
                <div className="coin-display">
                  <div className="coin-icon-large">🪙</div>
                  <div className="coin-amount">1,000</div>
                  <div className="coin-label">Coins Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Join MSH Social Hub today and access our marketing & analytics platform 
              with audience engagement tools and organic growth assistance.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Create Account
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


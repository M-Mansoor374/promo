import { Link } from 'react-router-dom';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: '👤',
    title: 'Register / Login',
    description:
      'Create your free MSH Social Hub account or log in to your existing account. Set up your profile, link your social media platforms, and configure your dashboard preferences.',
    details: [
      'Quick registration with email or social login',
      'Secure account with two-factor authentication',
      'Connect your social media profiles',
      'Customize your dashboard layout',
    ],
  },
  {
    number: '02',
    icon: '🪙',
    title: 'Buy MSH Coins',
    description:
      'Purchase MSH Coins through our secure payment system. Coins are the currency used to access platform features including audience engagement tools and organic growth assistance.',
    details: [
      'Multiple secure payment options available',
      'Flexible coin packages to fit any need',
      'Transparent pricing with no hidden charges',
      'Coins are added to your account instantly',
    ],
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Create Campaign',
    description:
      'Set up your campaign by choosing a platform, selecting the type of user-initiated action, and defining your target audience. Our tools guide you through the process step by step.',
    details: [
      'Choose from 6+ supported social platforms',
      'Select engagement type and audience',
      'Set campaign duration and budget in coins',
      'Review and launch with one click',
    ],
  },
  {
    number: '04',
    icon: '📈',
    title: 'Earn Coins / Engage Audience',
    description:
      'Monitor your campaign performance through the analytics dashboard. Earn additional coins by participating in community actions, or continue investing in organic growth assistance.',
    details: [
      'Track real-time analytics and insights',
      'Earn coins through user-initiated actions',
      'Optimize campaigns based on performance data',
      'Reinvest earned coins into new campaigns',
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="hiw-page">
      {/* Hero */}
      <section className="hiw-hero">
        <div className="hiw-container">
          <h1 className="hiw-hero-title">How It Works</h1>
          <p className="hiw-hero-subtitle">
            Get started with MSH Social Hub in four simple steps. Our platform
            makes it easy to manage your social media presence with audience
            engagement tools and organic growth assistance.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="hiw-steps-section">
        <div className="hiw-container">
          <div className="hiw-steps">
            {steps.map((step, index) => (
              <div
                className={`hiw-step ${index % 2 !== 0 ? 'hiw-step-reverse' : ''}`}
                key={index}
              >
                <div className="hiw-step-content">
                  <div className="hiw-step-header">
                    <span className="hiw-step-number">{step.number}</span>
                    <h2 className="hiw-step-title">{step.title}</h2>
                  </div>
                  <p className="hiw-step-description">{step.description}</p>
                  <ul className="hiw-step-details">
                    {step.details.map((detail, i) => (
                      <li key={i} className="hiw-step-detail">
                        <span className="hiw-check">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hiw-step-visual">
                  <div className="hiw-step-icon-wrapper">
                    <span className="hiw-step-icon">{step.icon}</span>
                    <span className="hiw-step-badge">{step.number}</span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hiw-connector">
                    <div className="hiw-connector-line"></div>
                    <div className="hiw-connector-dot"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Timeline */}
      <section className="hiw-timeline-section">
        <div className="hiw-container">
          <h2 className="hiw-section-title">Quick Overview</h2>
          <div className="hiw-timeline">
            {steps.map((step, index) => (
              <div className="hiw-timeline-item" key={index}>
                <div className="hiw-timeline-marker">
                  <span className="hiw-timeline-number">{step.number}</span>
                </div>
                <div className="hiw-timeline-content">
                  <span className="hiw-timeline-icon">{step.icon}</span>
                  <h3 className="hiw-timeline-title">{step.title}</h3>
                </div>
                {index < steps.length - 1 && (
                  <div className="hiw-timeline-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="hiw-faq-section">
        <div className="hiw-container">
          <h2 className="hiw-section-title">Common Questions</h2>
          <div className="hiw-faq-grid">
            <div className="hiw-faq-card">
              <h3 className="hiw-faq-question">How long does setup take?</h3>
              <p className="hiw-faq-answer">
                Account creation takes under 2 minutes. You can launch your first
                campaign within 5 minutes of registering.
              </p>
            </div>
            <div className="hiw-faq-card">
              <h3 className="hiw-faq-question">Are there free coins available?</h3>
              <p className="hiw-faq-answer">
                Yes. You can earn free coins through our Free Games section and by
                participating in user-initiated community actions.
              </p>
            </div>
            <div className="hiw-faq-card">
              <h3 className="hiw-faq-question">Which platforms are supported?</h3>
              <p className="hiw-faq-answer">
                MSH Social Hub supports Facebook, Instagram, Twitter, LinkedIn,
                YouTube, and TikTok.
              </p>
            </div>
            <div className="hiw-faq-card">
              <h3 className="hiw-faq-question">Can I track my campaign results?</h3>
              <p className="hiw-faq-answer">
                Absolutely. Our marketing & analytics platform provides real-time
                insights and performance metrics for every campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hiw-cta-section">
        <div className="hiw-container">
          <div className="hiw-cta-card">
            <h2 className="hiw-cta-title">Ready to Begin?</h2>
            <p className="hiw-cta-text">
              Join MSH Social Hub and start your first campaign today with our
              audience engagement tools and organic growth assistance.
            </p>
            <div className="hiw-cta-buttons">
              <Link to="/register" className="hiw-btn hiw-btn-primary">
                Create Account
              </Link>
              <Link to="/pricing" className="hiw-btn hiw-btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;


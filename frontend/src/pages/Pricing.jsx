import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    coins: '50',
    badge: '',
    description: 'Get started with basic access to the platform at no cost.',
    features: [
      { text: '50 MSH Coins on signup', included: true },
      { text: 'Access to 3 platforms', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: '1 active campaign at a time', included: true },
      { text: 'Community support', included: true },
      { text: 'Earn coins via Free Games', included: true },
      { text: 'Priority support', included: false },
      { text: 'API access', included: false },
      { text: 'Advanced analytics', included: false },
    ],
    cta: 'Sign Up Free',
    ctaLink: '/register',
    highlighted: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$9.99',
    period: '/month',
    coins: '500',
    badge: '',
    description: 'Ideal for individuals starting their social media journey.',
    features: [
      { text: '500 MSH Coins per month', included: true },
      { text: 'Access to all 6+ platforms', included: true },
      { text: 'Standard analytics dashboard', included: true },
      { text: '5 active campaigns', included: true },
      { text: 'Email support', included: true },
      { text: 'Earn coins via Free Games', included: true },
      { text: 'Priority support', included: false },
      { text: 'API access', included: false },
      { text: 'Advanced analytics', included: false },
    ],
    cta: 'Choose Starter',
    ctaLink: '/register',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$29.99',
    period: '/month',
    coins: '2,000',
    badge: 'Most Popular',
    description: 'Best for creators and small businesses scaling their presence.',
    features: [
      { text: '2,000 MSH Coins per month', included: true },
      { text: 'Access to all 6+ platforms', included: true },
      { text: 'Advanced analytics & reports', included: true },
      { text: '20 active campaigns', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Earn coins via Free Games', included: true },
      { text: 'Campaign scheduling', included: true },
      { text: 'API access', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Choose Professional',
    ctaLink: '/register',
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: '$79.99',
    period: '/month',
    coins: '6,000',
    badge: '',
    description: 'For agencies and businesses managing multiple accounts.',
    features: [
      { text: '6,000 MSH Coins per month', included: true },
      { text: 'Access to all 6+ platforms', included: true },
      { text: 'Advanced analytics & reports', included: true },
      { text: 'Unlimited active campaigns', included: true },
      { text: 'Priority support (24/7)', included: true },
      { text: 'Earn coins via Free Games', included: true },
      { text: 'Campaign scheduling', included: true },
      { text: 'Full API access', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Choose Business',
    ctaLink: '/register',
    highlighted: false,
  },
];

const coinPacks = [
  { coins: '100', price: '$1.99', perCoin: '$0.0199', savings: '' },
  { coins: '500', price: '$8.99', perCoin: '$0.0180', savings: '10%' },
  { coins: '1,000', price: '$16.99', perCoin: '$0.0170', savings: '15%' },
  { coins: '5,000', price: '$74.99', perCoin: '$0.0150', savings: '25%' },
  { coins: '10,000', price: '$129.99', perCoin: '$0.0130', savings: '35%' },
  { coins: '50,000', price: '$549.99', perCoin: '$0.0110', savings: '45%' },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="price-page">
      {/* Hero */}
      <section className="price-hero">
        <div className="price-container">
          <h1 className="price-hero-title">Simple, Transparent Pricing</h1>
          <p className="price-hero-subtitle">
            Choose a plan that fits your needs. All plans include access to our
            audience engagement tools and organic growth assistance.
          </p>
          <div className="price-toggle">
            <button
              className={`price-toggle-btn ${billingCycle === 'monthly' ? 'price-toggle-active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`price-toggle-btn ${billingCycle === 'yearly' ? 'price-toggle-active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="price-save-badge">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="price-plans-section">
        <div className="price-container">
          <div className="price-plans-grid">
            {plans.map((plan) => (
              <div
                className={`price-plan-card ${plan.highlighted ? 'price-plan-highlighted' : ''}`}
                key={plan.id}
              >
                {plan.badge && (
                  <span className="price-plan-badge">{plan.badge}</span>
                )}
                <h3 className="price-plan-name">{plan.name}</h3>
                <p className="price-plan-desc">{plan.description}</p>
                <div className="price-plan-price">
                  <span className="price-amount">
                    {billingCycle === 'yearly' && plan.price !== '$0'
                      ? `$${(parseFloat(plan.price.replace('$', '')) * 0.8 * 12).toFixed(2)}`
                      : plan.price}
                  </span>
                  <span className="price-period">
                    {plan.price === '$0'
                      ? plan.period
                      : billingCycle === 'yearly'
                        ? '/year'
                        : plan.period}
                  </span>
                </div>
                <div className="price-plan-coins">
                  <span className="price-coin-icon">🪙</span>
                  <span className="price-coin-amount">{plan.coins}</span>
                  <span className="price-coin-label">
                    MSH Coins {plan.price === '$0' ? 'on signup' : 'per month'}
                  </span>
                </div>
                <ul className="price-features">
                  {plan.features.map((feature, i) => (
                    <li
                      className={`price-feature ${!feature.included ? 'price-feature-disabled' : ''}`}
                      key={i}
                    >
                      <span className="price-feature-check">
                        {feature.included ? '✓' : '✗'}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.ctaLink}
                  className={`price-plan-btn ${plan.highlighted ? 'price-plan-btn-primary' : 'price-plan-btn-outline'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coin Packs */}
      <section className="price-coins-section">
        <div className="price-container">
          <h2 className="price-section-title">Buy Coin Packs</h2>
          <p className="price-section-subtitle">
            Need extra coins? Purchase additional MSH Coin packs anytime. Larger
            packs offer better value.
          </p>
          <div className="price-coins-grid">
            {coinPacks.map((pack, index) => (
              <div className="price-coin-card" key={index}>
                <div className="price-coin-top">
                  <span className="price-coin-pack-icon">🪙</span>
                  <span className="price-coin-pack-amount">{pack.coins}</span>
                  <span className="price-coin-pack-label">Coins</span>
                </div>
                <div className="price-coin-middle">
                  <span className="price-coin-pack-price">{pack.price}</span>
                  <span className="price-coin-per">{pack.perCoin} per coin</span>
                </div>
                {pack.savings && (
                  <span className="price-coin-savings">Save {pack.savings}</span>
                )}
                <Link to="/register" className="price-coin-btn">
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="price-table-section">
        <div className="price-container">
          <h2 className="price-section-title">Plan Comparison</h2>
          <div className="price-table-wrapper">
            <table className="price-table">
              <thead>
                <tr>
                  <th className="price-table-feature">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      className={`price-table-plan ${plan.highlighted ? 'price-table-plan-hl' : ''}`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Coins</td>
                  {plans.map((p) => (
                    <td key={p.id}>{p.coins}</td>
                  ))}
                </tr>
                <tr>
                  <td>Supported Platforms</td>
                  <td>3</td>
                  <td>6+</td>
                  <td>6+</td>
                  <td>6+</td>
                </tr>
                <tr>
                  <td>Active Campaigns</td>
                  <td>1</td>
                  <td>5</td>
                  <td>20</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>Basic</td>
                  <td>Standard</td>
                  <td>Advanced</td>
                  <td>Advanced</td>
                </tr>
                <tr>
                  <td>Campaign Scheduling</td>
                  <td>✗</td>
                  <td>✗</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>API Access</td>
                  <td>✗</td>
                  <td>✗</td>
                  <td>✗</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Priority Support</td>
                  <td>✗</td>
                  <td>✗</td>
                  <td>✓</td>
                  <td>24/7</td>
                </tr>
                <tr>
                  <td>Dedicated Manager</td>
                  <td>✗</td>
                  <td>✗</td>
                  <td>✗</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="price-cta-section">
        <div className="price-container">
          <div className="price-cta-card">
            <h2 className="price-cta-title">Not Sure Which Plan to Choose?</h2>
            <p className="price-cta-text">
              Start with our Free plan and upgrade anytime. Our team is here to
              help you find the right fit for your needs.
            </p>
            <div className="price-cta-buttons">
              <Link to="/register" className="price-btn price-btn-primary">
                Start Free
              </Link>
              <Link to="/contact" className="price-btn price-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;


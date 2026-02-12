import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const platforms = [
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '📺',
    color: '#FF0000',
    description:
      'Audience engagement tools and organic growth assistance for your YouTube channel.',
    services: [
      {
        name: 'Views',
        icon: '👁️',
        description: 'Increase visibility through user-initiated video views.',
      },
      {
        name: 'Watchtime',
        icon: '⏱️',
        description: 'Grow your channel watchtime with organic audience engagement.',
      },
      {
        name: 'Likes',
        icon: '👍',
        description: 'Receive authentic likes from real user-initiated actions.',
      },
      {
        name: 'Comments',
        icon: '💬',
        description: 'Build community with genuine user comments on your content.',
      },
      {
        name: 'Subscribers',
        icon: '🔔',
        description: 'Grow your subscriber base through organic growth assistance.',
      },
      {
        name: 'Shares',
        icon: '🔗',
        description: 'Expand reach through user-initiated content sharing.',
      },
    ],
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📷',
    color: '#E1306C',
    description:
      'Marketing & analytics tools designed for Instagram content creators and businesses.',
    services: [
      {
        name: 'Likes',
        icon: '❤️',
        description: 'Boost post engagement with authentic user-initiated likes.',
      },
      {
        name: 'Views',
        icon: '👁️',
        description: 'Increase Reels and Story views through organic reach.',
      },
      {
        name: 'Comments',
        icon: '💬',
        description: 'Engage your audience with genuine user comments.',
      },
      {
        name: 'Followers',
        icon: '👥',
        description: 'Grow your follower base with organic growth assistance.',
      },
      {
        name: 'Shares',
        icon: '🔗',
        description: 'Increase content distribution through user-initiated shares.',
      },
    ],
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: '🎵',
    color: '#010101',
    description:
      'Organic growth tools for TikTok creators looking to expand their audience.',
    services: [
      {
        name: 'Views',
        icon: '👁️',
        description: 'Amplify video visibility with user-initiated views.',
      },
      {
        name: 'Likes',
        icon: '❤️',
        description: 'Grow engagement through authentic user-initiated likes.',
      },
      {
        name: 'Comments',
        icon: '💬',
        description: 'Build community interaction with genuine comments.',
      },
      {
        name: 'Shares',
        icon: '🔗',
        description: 'Increase video reach through user-initiated sharing.',
      },
      {
        name: 'Followers',
        icon: '👥',
        description: 'Expand your TikTok audience with organic growth assistance.',
      },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '📘',
    color: '#1877F2',
    description:
      'Audience engagement tools for Facebook pages, groups, and personal profiles.',
    services: [
      {
        name: 'Likes',
        icon: '👍',
        description: 'Increase post and page likes through user-initiated actions.',
      },
      {
        name: 'Views',
        icon: '👁️',
        description: 'Boost video and reel views with organic engagement.',
      },
      {
        name: 'Comments',
        icon: '💬',
        description: 'Encourage discussion with genuine user comments.',
      },
      {
        name: 'Shares',
        icon: '🔗',
        description: 'Expand content reach through user-initiated sharing.',
      },
      {
        name: 'Followers',
        icon: '👥',
        description: 'Grow your page following with organic growth assistance.',
      },
    ],
  },
  {
    id: 'twitch',
    name: 'Twitch',
    icon: '🎮',
    color: '#9146FF',
    description:
      'Stream engagement tools and organic growth assistance for Twitch streamers.',
    services: [
      {
        name: 'Views',
        icon: '👁️',
        description: 'Increase stream and clip visibility with organic views.',
      },
      {
        name: 'Followers',
        icon: '👥',
        description: 'Grow your Twitch follower count through organic methods.',
      },
      {
        name: 'Comments',
        icon: '💬',
        description: 'Boost chat engagement with genuine user interactions.',
      },
    ],
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    color: '#0A66C2',
    description:
      'Professional audience engagement tools for LinkedIn profiles and company pages.',
    services: [
      {
        name: 'Likes',
        icon: '👍',
        description: 'Increase post engagement with user-initiated reactions.',
      },
      {
        name: 'Comments',
        icon: '💬',
        description: 'Drive professional discussions with authentic comments.',
      },
      {
        name: 'Followers',
        icon: '👥',
        description: 'Expand your professional network through organic growth.',
      },
      {
        name: 'Shares',
        icon: '🔗',
        description: 'Amplify content reach through user-initiated reposts.',
      },
    ],
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    icon: '🐦',
    color: '#1DA1F2',
    description:
      'Audience engagement tools and organic growth assistance for Twitter / X.',
    services: [
      {
        name: 'Likes',
        icon: '❤️',
        description: 'Boost tweet engagement with authentic user-initiated likes.',
      },
      {
        name: 'Views',
        icon: '👁️',
        description: 'Increase tweet impressions through organic reach.',
      },
      {
        name: 'Comments',
        icon: '💬',
        description: 'Start conversations with genuine user replies.',
      },
      {
        name: 'Shares',
        icon: '🔗',
        description: 'Expand reach through user-initiated retweets.',
      },
      {
        name: 'Followers',
        icon: '👥',
        description: 'Grow your following with organic growth assistance.',
      },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('youtube');

  const activePlatform = platforms.find((p) => p.id === activeTab);

  return (
    <div className="svc-page">
      {/* Hero */}
      <section className="svc-hero">
        <div className="svc-container">
          <h1 className="svc-hero-title">Our Services</h1>
          <p className="svc-hero-subtitle">
            Explore our audience engagement tools and organic growth assistance
            across all major social media platforms.
          </p>
        </div>
      </section>

      {/* Platform Tabs */}
      <section className="svc-tabs-section">
        <div className="svc-container">
          <div className="svc-tabs">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                className={`svc-tab ${activeTab === platform.id ? 'svc-tab-active' : ''}`}
                onClick={() => setActiveTab(platform.id)}
              >
                <span className="svc-tab-icon">{platform.icon}</span>
                <span className="svc-tab-name">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Platform Services */}
      <section className="svc-platform-section">
        <div className="svc-container">
          {activePlatform && (
            <div className="svc-platform-content">
              <div className="svc-platform-header">
                <span className="svc-platform-icon">{activePlatform.icon}</span>
                <div>
                  <h2 className="svc-platform-title">{activePlatform.name}</h2>
                  <p className="svc-platform-desc">{activePlatform.description}</p>
                </div>
              </div>

              <div className="svc-services-grid">
                {activePlatform.services.map((service, index) => (
                  <div className="svc-service-card" key={index}>
                    <div className="svc-service-icon">{service.icon}</div>
                    <h3 className="svc-service-name">{service.name}</h3>
                    <p className="svc-service-desc">{service.description}</p>
                    <Link to="/pricing" className="svc-learn-more">
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Platforms Overview */}
      <section className="svc-overview-section">
        <div className="svc-container">
          <h2 className="svc-section-title">All Platforms at a Glance</h2>
          <p className="svc-section-subtitle">
            Quick overview of available services across every supported platform.
          </p>
          <div className="svc-overview-grid">
            {platforms.map((platform) => (
              <div
                className="svc-overview-card"
                key={platform.id}
                onClick={() => {
                  setActiveTab(platform.id);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                <div className="svc-overview-icon">{platform.icon}</div>
                <h3 className="svc-overview-name">{platform.name}</h3>
                <div className="svc-overview-tags">
                  {platform.services.map((s, i) => (
                    <span className="svc-tag" key={i}>
                      {s.name}
                    </span>
                  ))}
                </div>
                <span className="svc-overview-count">
                  {platform.services.length} services
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta-section">
        <div className="svc-container">
          <div className="svc-cta-card">
            <h2 className="svc-cta-title">Start Using Our Platform</h2>
            <p className="svc-cta-text">
              Access audience engagement tools and organic growth assistance for
              all supported platforms with our coin-based system.
            </p>
            <div className="svc-cta-buttons">
              <Link to="/register" className="svc-btn svc-btn-primary">
                Get Started
              </Link>
              <Link to="/pricing" className="svc-btn svc-btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


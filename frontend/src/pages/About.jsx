import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    photo: 'https://api.dicebear.com/7.x/initials/svg?seed=AJ&backgroundColor=20b2aa',
    bio: 'Experienced in digital marketing and platform development with a passion for building accessible tools.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Maria Chen',
    role: 'Chief Technology Officer',
    photo: 'https://api.dicebear.com/7.x/initials/svg?seed=MC&backgroundColor=20b2aa',
    bio: 'Full-stack engineer focused on scalable architecture and seamless user experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'David Park',
    role: 'Head of Marketing',
    photo: 'https://api.dicebear.com/7.x/initials/svg?seed=DP&backgroundColor=20b2aa',
    bio: 'Specializes in organic growth strategies and audience engagement across social platforms.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Sarah Williams',
    role: 'Lead Designer',
    photo: 'https://api.dicebear.com/7.x/initials/svg?seed=SW&backgroundColor=20b2aa',
    bio: 'Creates intuitive interfaces with a focus on accessibility and modern design principles.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'James Taylor',
    role: 'Customer Success Manager',
    photo: 'https://api.dicebear.com/7.x/initials/svg?seed=JT&backgroundColor=20b2aa',
    bio: 'Dedicated to ensuring every user gets the most value from the MSH Social Hub platform.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Analyst',
    photo: 'https://api.dicebear.com/7.x/initials/svg?seed=ER&backgroundColor=20b2aa',
    bio: 'Transforms raw data into actionable insights for platform improvement and user reporting.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-container">
          <h1 className="about-hero-title">About MSH Social Hub</h1>
          <p className="about-hero-subtitle">
            A marketing & analytics platform providing audience engagement tools
            and organic growth assistance for social media.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="about-section">
        <div className="about-container">
          <div className="company-info">
            <div className="info-text">
              <h2 className="about-section-title">Who We Are</h2>
              <p className="about-text">
                MSH Social Hub is a marketing & analytics platform built to help
                individuals and businesses manage their social media presence. We
                offer audience engagement tools, organic growth assistance, and
                analytics features — all powered by a transparent coin-based system.
              </p>
              <p className="about-text">
                Our platform supports user-initiated actions across multiple social
                media channels, providing a centralized hub for managing your online
                presence efficiently and responsibly.
              </p>
            </div>
            <div className="info-stats">
              <div className="stat-card">
                <span className="stat-number">6+</span>
                <span className="stat-label">Supported Platforms</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Platform Availability</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h2 className="mv-title">Our Mission</h2>
              <p className="mv-text">
                To provide accessible, transparent, and effective audience engagement
                tools that empower users to grow their social media presence through
                user-initiated actions. We aim to simplify social media management
                while maintaining platform compliance and ethical practices.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h2 className="mv-title">Our Vision</h2>
              <p className="mv-text">
                To become the most trusted marketing & analytics platform for social
                media, recognized for our commitment to organic growth assistance,
                transparent operations, and user-first approach. We envision a
                platform where every user can confidently manage their online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title about-section-title-center">
            Our Core Values
          </h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3 className="value-title">Transparency</h3>
              <p className="value-text">
                Clear pricing, honest communication, and straightforward processes
                in everything we do.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3 className="value-title">Reliability</h3>
              <p className="value-text">
                Consistent platform performance with 99.9% uptime and dependable
                service delivery.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">User-First</h3>
              <p className="value-text">
                Every feature and decision is driven by the needs and feedback of
                our users.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">✅</div>
              <h3 className="value-title">Compliance</h3>
              <p className="value-text">
                We operate within platform guidelines and promote ethical social
                media practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <h2 className="about-section-title about-section-title-center">
            Meet Our Team
          </h2>
          <p className="about-section-subtitle">
            The people behind MSH Social Hub working to deliver the best experience.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-photo-wrapper">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-photo"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-social">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="social-link"
                        aria-label={`${member.name} LinkedIn`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        💼
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="social-link"
                        aria-label={`${member.name} Twitter`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🐦
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-card">
            <h2 className="about-cta-title">Want to Work With Us?</h2>
            <p className="about-cta-text">
              Join MSH Social Hub and access our marketing & analytics platform
              with audience engagement tools and organic growth assistance.
            </p>
            <div className="about-cta-buttons">
              <Link to="/register" className="about-btn about-btn-primary">
                Get Started
              </Link>
              <Link to="/contact" className="about-btn about-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


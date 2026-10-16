import React, { useState } from 'react';
import { IconArrowRight, IconInstagram, IconChevronDown } from './Icons';
import './Footer.css';

export default function Footer({ logoUrl = '/logosarvika.png' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="sarvika-section-card sarvika-bg-navy footer-section">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-logo-link" aria-label="SARVIKA Home">
              <img src={logoUrl} alt="SARVIKA Logo" className="footer-logo-img" />
            </a>
            <p className="footer-desc">
              One platform for smarter collaboration, streamlined workflows and better business outcomes.
              SARVIKA support teams stay organised, productive and connected.
            </p>
            <div className="footer-status-pills">
              <span className="status-pill">
                <span className="status-dot" />
                <span>SMART WORKFLOWS. BETTER RESULTS.</span>
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">SARVIKA Intelligence</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero" className="footer-nav-link">Home</a></li>
              <li><a href="#about" className="footer-nav-link">About Us</a></li>
              <li><a href="#platform" className="footer-nav-link">Practice Platform</a></li>
              <li><a href="#capabilities" className="footer-nav-link">Core Capabilities</a></li>
              <li><a href="#pricing" className="footer-nav-link">Pricing</a></li>
              <li><a href="#faq" className="footer-nav-link">FAQ</a></li>
              <li><a href="#contact" className="footer-nav-link">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-newsletter-col">
            <h4 className="footer-heading">Stay Connected</h4>
            <p className="newsletter-text">
              Subscribe for the latest SARVIKA updates, productivity insights and smarter ways to manage your business.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                <span>Subscribed! Thank you for staying connected.</span>
              </div>
            ) : (
              <form className="footer-terminal-form" onSubmit={handleSubscribe}>
                <div className="terminal-bar">
                  <span className="terminal-prompt">&gt;</span>
                  <input
                    type="email"
                    className="terminal-input"
                    placeholder="ENTER_EMAIL_ADDR..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Newsletter email input"
                  />
                  <button type="submit" className="terminal-btn" aria-label="Submit newsletter subscription">
                    <IconArrowRight size={16} color="var(--pure-white)" />
                  </button>
                </div>
              </form>
            )}

            <div className="footer-social-wrap">
              <a
                href="https://www.instagram.com/sarvika_25?stkn=aTg1M2N6eXk1dmk5"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="SARVIKA Instagram Profile"
              >
                <IconInstagram size={20} color="#105c7e" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; 2026 ALL RIGHTS RESERVED.
          </p>

          <button
            type="button"
            className="back-to-top-button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <span className="top-arrow-icon">
              <IconChevronDown size={14} color="var(--deep-navy)" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

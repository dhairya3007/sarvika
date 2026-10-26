import React, { useState } from 'react';
import { IconArrowRight, IconInstagram, IconChevronDown } from './Icons';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import CookiesPolicyModal from './CookiesPolicyModal';
import './Footer.css';

export default function Footer({ logoUrl = '/logosarvika.png' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);

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
              <a
                href="https://www.instagram.com/sarvika_25?stkn=aTg1M2N6eXk1dmk5"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-btn-pill"
                aria-label="SARVIKA Instagram Profile"
              >
                <IconInstagram size={18} color="#105c7e" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3x3 Grid = 9 items across 3 columns, 0 empty space) */}
          <div className="footer-links-col">
            <h4 className="footer-heading">SARVIKA Intelligence</h4>
            <div className="footer-links-split-grid">
              <ul className="footer-nav-list">
                <li><a href="#hero" className="footer-nav-link">Home</a></li>
                <li><a href="#about" className="footer-nav-link">About Us</a></li>
                <li><a href="#platform" className="footer-nav-link">Practice Platform</a></li>
              </ul>
              <ul className="footer-nav-list">
                <li><a href="#capabilities" className="footer-nav-link">Core Capabilities</a></li>
                <li><a href="#pricing" className="footer-nav-link">Pricing</a></li>
                <li><a href="#faq" className="footer-nav-link">FAQ</a></li>
              </ul>
              <ul className="footer-nav-list">
                <li><a href="#contact" className="footer-nav-link">Contact</a></li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsPolicyOpen(true)}
                    className="footer-nav-link footer-policy-link-btn"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsCookiesOpen(true)}
                    className="footer-nav-link footer-policy-link-btn"
                  >
                    Cookies Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            <p className="copyright-text">
              &copy; 2026 ALL RIGHTS RESERVED.
            </p>
            <span className="footer-divider-dot">&bull;</span>
            <button
              type="button"
              className="footer-bottom-policy-btn"
              onClick={() => setIsPolicyOpen(true)}
            >
              Privacy Policy
            </button>
            <span className="footer-divider-dot">&bull;</span>
            <button
              type="button"
              className="footer-bottom-policy-btn"
              onClick={() => setIsCookiesOpen(true)}
            >
              Cookies Policy
            </button>
          </div>

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

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />

      {/* Cookies Policy Modal */}
      <CookiesPolicyModal
        isOpen={isCookiesOpen}
        onClose={() => setIsCookiesOpen(false)}
        onOpenPrivacyPolicy={() => setIsPolicyOpen(true)}
      />
    </footer>
  );
}

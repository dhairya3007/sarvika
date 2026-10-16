import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconMenu, IconClose } from './Icons';
import './Navbar.css';

const sectionLabels = {
  hero: 'Home',
  platform: 'Platform',
  capabilities: 'Platform',
  about: 'About',
  pricing: 'Pricing',
  faq: 'FAQ',
  contact: 'Contact'
};

export default function Navbar({ logoUrl = '/logosarvika.png' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll detection to update floating navbar style on scroll (glass, elevation, accent glow)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for reactive navbar highlighting
  useEffect(() => {
    const sections = ['hero', 'platform', 'capabilities', 'about', 'pricing', 'faq', 'contact'];
    const handleActive = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleActive, { passive: true });
    handleActive();
    return () => window.removeEventListener('scroll', handleActive);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        id="navbar"
        className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="container">
          <div className="navbar-container">
            {/* Authentic SARVIKA Logo & Responsive Active Section Chip */}
            <div className="navbar-brand-wrapper">
              <a href="#hero" className="navbar-brand" onClick={closeMenu} aria-label="SARVIKA Home">
                <img src={logoUrl} alt="SARVIKA" className="navbar-logo-img" />
              </a>

              {/* Responsive Scrollspy Chip (Visible on mobile/tablet past hero) */}
              {activeSection !== 'hero' && sectionLabels[activeSection] && (
                <span
                  className="navbar-active-section-chip"
                  aria-label={`Current section: ${sectionLabels[activeSection]}`}
                >
                  <span className="section-chip-dot" />
                  <span className="section-chip-text">{sectionLabels[activeSection]}</span>
                </span>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <nav className="navbar-desktop-nav" aria-label="Main Navigation">
              <ul className="navbar-menu">
                <li className="menu-item"><a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>Home</a></li>
                <li className="menu-item"><a href="#platform" className={`nav-link ${activeSection === 'platform' ? 'active' : ''}`}>Platform</a></li>
                <li className="menu-item"><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About Us</a></li>
                <li className="menu-item"><a href="#pricing" className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}>Pricing</a></li>
                <li className="menu-item"><a href="#faq" className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}>FAQ</a></li>
                <li className="menu-item"><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
              </ul>

              {/* Laptop View: Book a Demo Option */}
              <div className="navbar-actions">
                <a href="#contact" className="nav-book-btn">
                  Book a Demo
                </a>
              </div>
            </nav>

            {/* Responsive Floating Controls: Quick Demo & Hamburger */}
            <div className="navbar-responsive-controls">
              <a href="#contact" className="nav-responsive-cta-btn" onClick={closeMenu}>
                <span>Demo</span>
              </a>
              <button
                type="button"
                className="navbar-hamburger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <IconClose size={20} color="#ffffff" /> : <IconMenu size={20} color="#ffffff" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Render Mobile Menu via Portal to document.body so it covers full viewport with solid background */}
      {typeof document !== 'undefined' && createPortal(
        <>
          {mobileMenuOpen && (
            <div
              className="navbar-mobile-backdrop"
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}

          <div
            className={`navbar-mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
            aria-hidden={!mobileMenuOpen}
          >
            <div className="mobile-drawer-header">
              <img src={logoUrl} alt="SARVIKA" className="mobile-drawer-logo" />
              <button
                type="button"
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <IconClose size={22} color="#ffffff" />
              </button>
            </div>

            <ul className="mobile-drawer-menu">
              <li><a href="#hero" className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={closeMenu}>Home</a></li>
              <li><a href="#platform" className={`mobile-nav-link ${activeSection === 'platform' ? 'active' : ''}`} onClick={closeMenu}>Platform</a></li>
              <li><a href="#about" className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>About Us</a></li>
              <li><a href="#faq" className={`mobile-nav-link ${activeSection === 'faq' ? 'active' : ''}`} onClick={closeMenu}>FAQ</a></li>
              <li><a href="#pricing" className={`mobile-nav-link ${activeSection === 'pricing' ? 'active' : ''}`} onClick={closeMenu}>Pricing</a></li>
              <li><a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a></li>
            </ul>

            <div className="mobile-drawer-cta">
              <a href="#contact" className="mobile-drawer-btn" onClick={closeMenu}>
                Book a Demo
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

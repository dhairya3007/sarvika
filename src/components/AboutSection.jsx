import React from 'react';
import { IconUsers, IconShield, IconCalendar } from './Icons';
import aboutImage from '../assets/aboutimage.jpeg';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="sarvika-section-card sarvika-bg-soft about-section">
      <div className="container">
        <div className="about-layout">
          {/* Left Column: Text & Features */}
          <div className="about-content">
            <div className="section-badge">
              <span className="badge-dot" />
              <span>About SARVIKA</span>
            </div>

            <h2 className="about-title">
              Empowering Immigration <span className="section-title-highlight">Practices</span>
            </h2>

            <p className="about-lead">
              SARVIKA™ is an all-in-one practice management platform built exclusively for immigration and
              legal professionals. We help you streamline operations, improve team collaboration, elevate
              client experiences and grow your practice with confidence.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <IconUsers size={22} color="var(--electric-blue)" />
                </div>
                <div className="about-feature-text">
                  <h4>Built for Immigration Professionals</h4>
                  <p>
                    Every feature in SARVIKA is designed around the real-world needs of immigration practices —
                    from case management to client communication.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <IconShield size={22} color="var(--electric-blue)" />
                </div>
                <div className="about-feature-text">
                  <h4>Secure. Compliant. Reliable.</h4>
                  <p>
                    Enterprise-grade security, server-side permissions and audit controls ensure your data and
                    your clients' information are always protected.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a href="#platform" className="btn-primary">
                <IconUsers size={18} />
                <span>Our Platform</span>
              </a>
              <a href="#contact" className="btn-ghost">
                <IconCalendar size={18} />
                <span>Book a Demo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Image Showcase with Geometric Brand Accents */}
          <div className="about-visual-col">
            <div className="about-image-showcase">
              {/* Layered Decorative Brand Accents matching reference aesthetic */}
              <div className="about-shape-accent shape-top-left" aria-hidden="true" />
              <div className="about-shape-accent shape-bottom-right-cyan" aria-hidden="true" />
              <div className="about-shape-accent shape-bottom-right-blue" aria-hidden="true" />

              {/* Main Image Card with Soft Shade & No Borders */}
              <div className="about-image-card">
                <img
                  src={aboutImage}
                  alt="SARVIKA Immigration Practice Management Platform"
                  className="about-image"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

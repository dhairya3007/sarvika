import React from 'react';
import { IconUsers, IconShield, IconCalendar, IconCheckCircle } from './Icons';
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

          {/* Right Column: Visual Shield Card with Animations */}
          <div className="about-visual-col">
            <div className="about-shield-card">
              {/* Concentric Animated Radar Rings */}
              <div className="about-rings-visual" aria-hidden="true">
                <div className="about-concentric-ring ring-3" />
                <div className="about-concentric-ring ring-2">
                  <span className="ring-satellite sat-1" />
                </div>
                <div className="about-concentric-ring ring-1">
                  <span className="ring-satellite sat-2" />
                </div>
              </div>

              {/* Floating Highlight Chips */}
              <div className="about-float-chip chip-top" aria-hidden="true">
                <IconCheckCircle size={15} color="var(--electric-blue)" />
                <span>OISC &amp; SRA Ready</span>
              </div>

              <div className="about-float-chip chip-bottom" aria-hidden="true">
                <IconShield size={15} color="var(--electric-blue)" />
                <span>UK Cloud Encrypted</span>
              </div>

              {/* Core Badge with Radar Pulse */}
              <div className="about-core-badge">
                <div className="about-shield-icon-wrap">
                  <div className="about-shield-pulse" />
                  <IconShield size={38} color="var(--electric-blue)" />
                </div>
                <span className="about-core-title">IMMIGRATION PRACTICE INTELLIGENCE</span>
                <span className="about-core-sub">Designed for UK Law Firms &amp; Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  IconCheckCircle, 
  IconFolder, 
  IconFileText, 
  IconUsers, 
  IconShield 
} from './Icons';
import './PlatformSection.css';

export default function PlatformSection() {
  // Animate Workflow Efficiency count from 20% to 84%
  const [workflowCount, setWorkflowCount] = useState(20);

  useEffect(() => {
    let startVal = 20;
    const targetVal = 84;
    const duration = 2200; // 2.2 seconds smooth progression
    const startTime = performance.now();
    let animationFrameId;

    const animateNumber = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (targetVal - startVal) * easeOut);
      setWorkflowCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateNumber);
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animateNumber);
    }, 250);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="platform" className="sarvika-section-card sarvika-bg-soft platform-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Practice Management Platform</span>
          </div>
          <h2 className="section-title">
            Everything You Need to <span className="section-title-highlight">Manage Your Practice</span>
          </h2>
          <p className="section-description">
            SARVIKA brings your clients, team, cases and operations together in one smart platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: Case Management Flow (Span 7) */}
          <article className="bento-card bento-card-case">
            <div className="bento-card-header">
              <h3 className="bento-card-title">Case Management</h3>
              <p className="bento-card-desc">
                Manage every immigration case from enquiry to decision in one place.
              </p>
            </div>

            <div className="bp-mock-chart" aria-hidden="true">
              <div className="bp-chart-y">
                <span>Enquiry</span>
                <span>In Progress</span>
                <span>Review</span>
                <span>Decision</span>
              </div>

              <div className="bp-chart-graph">
                <div className="bp-grid-line" style={{ top: '25%' }} />
                <div className="bp-grid-line" style={{ top: '50%' }} />
                <div className="bp-grid-line" style={{ top: '75%' }} />

                <div className="bp-tooltip primary" style={{ top: '38%', left: '46%' }}>
                  Review
                </div>

                <svg className="bp-chart-svg" viewBox="0 0 500 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartBlueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--electric-blue)" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="var(--electric-blue)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Gradient Area Fill */}
                  <path 
                    d="M0,140 L0,120 C60,60 120,110 180,40 C240,-10 280,100 340,80 C400,60 440,30 500,70 L500,140 Z"
                    fill="url(#chartBlueGrad)"
                    className="bp-path-area"
                  />

                  {/* Guide Track Line */}
                  <path 
                    d="M0,120 C60,60 120,110 180,40 C240,-10 280,100 340,80 C400,60 440,30 500,70"
                    fill="none"
                    stroke="var(--soft-border)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Foreground Animated Flow Line */}
                  <path 
                    d="M0,120 C60,60 120,110 180,40 C240,-10 280,100 340,80 C400,60 440,30 500,70"
                    fill="none"
                    stroke="var(--electric-blue)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="bp-path-fg"
                  />

                  {/* Milestone Points */}
                  <circle cx="180" cy="40" r="5" fill="var(--pure-white)" stroke="var(--electric-blue)" strokeWidth="3" className="bp-point" />
                  <circle cx="340" cy="80" r="5" fill="var(--pure-white)" stroke="var(--electric-blue)" strokeWidth="3" className="bp-point" />
                </svg>
              </div>
            </div>
          </article>

          {/* Card 2: Document Management Vault (Span 5) */}
          <article className="bento-card bento-card-doc">
            <div className="bento-card-header">
              <h3 className="bento-card-title">Document Management</h3>
              <p className="bento-card-desc">
                Store, organise and access documents securely, anytime.
              </p>
            </div>

            <div className="bp-mock-security" aria-hidden="true">
              <div className="bp-sec-wrapper">
                <div className="bp-sec-col">
                  <div className="bp-float-node float-1" title="PDF Files">
                    <IconFileText size={18} color="var(--electric-blue)" />
                  </div>
                  <div className="bp-float-node float-2" title="Excel Sheets">
                    <IconFileText size={18} color="var(--electric-blue)" />
                  </div>
                </div>

                <div className="bp-sec-center">
                  <div className="vault-radar-wave" />
                  <div className="bp-shield-core">
                    <IconFolder size={28} color="var(--pure-white)" />
                  </div>
                </div>

                <div className="bp-sec-col">
                  <div className="bp-float-node float-3" title="Word Docs">
                    <IconFileText size={18} color="var(--electric-blue)" />
                  </div>
                  <div className="bp-float-node float-4" title="Scan Images">
                    <IconFileText size={18} color="var(--electric-blue)" />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: Smart Workflow Radial — Count increases 20% to 84% */}
          <article className="bento-card bento-card-radial text-center">
            <div className="bento-card-header">
              <h3 className="bento-card-title">Smart Workflow</h3>
              <p className="bento-card-desc">
                Automate tasks and approvals to get more done in less time.
              </p>
            </div>

            <div className="bp-mock-radial" aria-hidden="true">
              <div className="bp-radial-wrapper" data-progress="84">
                <svg className="bp-radial-svg" viewBox="0 0 100 100">
                  <circle className="bp-radial-bg" cx="50" cy="50" r="38" />
                  <circle className="bp-radial-fg" cx="50" cy="50" r="38" />
                </svg>
                <div className="bp-radial-inner">
                  <span className="bp-radial-val">{workflowCount}%</span>
                  <span className="bp-radial-label">
                    Workflow<br />Efficiency
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 4: Everything in One Platform (Span 8) */}
          <article className="bento-card bento-card-platform">
            <div className="bp-split-layout">
              <div className="bento-platform-left">
                <h3 className="bento-card-title">Everything in One Platform</h3>
                <p className="bento-card-desc">
                  SARVIKA brings your clients, team, cases and operations together in one smart platform.
                </p>

                <ul className="bp-feature-list">
                  <li>
                    <IconCheckCircle size={18} color="var(--electric-blue)" />
                    <span>Secure</span>
                  </li>
                  <li>
                    <IconCheckCircle size={18} color="var(--electric-blue)" />
                    <span>Reliable</span>
                  </li>
                  <li>
                    <IconCheckCircle size={18} color="var(--electric-blue)" />
                    <span>Built for Immigration Professionals</span>
                  </li>
                </ul>
              </div>

              {/* Connected Pipeline Box with Clear Connecting Lines */}
              <div className="bp-pipeline-box" aria-hidden="true">
                <div className="bp-pipe-col">
                  <div className="bp-pipe-pill outline">
                    <IconUsers size={16} color="var(--electric-blue)" />
                    <span>Client Portal</span>
                  </div>
                  <div className="bp-pipe-pill outline">
                    <IconShield size={16} color="var(--electric-blue)" />
                    <span>Employee Portal</span>
                  </div>
                </div>

                {/* Visible Dual Connecting Lines from both portals into SARVIKA */}
                <div className="bp-pipe-arrow">
                  <svg width="74" height="92" viewBox="0 0 74 92" fill="none" className="bp-pipeline-svg">
                    {/* Top branch line from Client Portal */}
                    <path
                      d="M2,22 C34,22 42,46 60,46"
                      stroke="var(--electric-blue)"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                      className="bp-dash-line"
                    />
                    {/* Bottom branch line from Employee Portal */}
                    <path
                      d="M2,70 C34,70 42,46 60,46"
                      stroke="var(--electric-blue)"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                      className="bp-dash-line"
                    />
                    {/* Source node indicator dots */}
                    <circle cx="3" cy="22" r="3.5" fill="var(--electric-blue)" />
                    <circle cx="3" cy="70" r="3.5" fill="var(--electric-blue)" />
                    {/* Convergence Arrowhead pointing directly into SARVIKA */}
                    <polygon points="58,40 70,46 58,52" fill="var(--electric-blue)" />
                  </svg>
                </div>

                <div className="bp-pipe-col">
                  <div className="bp-pipe-pill active">
                    <div className="bp-glow-dot" />
                    <span>SARVIKA</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

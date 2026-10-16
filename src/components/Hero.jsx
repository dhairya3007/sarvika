import React, { useEffect, useRef } from 'react';
import SixFeatureDiagram from './SixFeatureDiagram';
import { IconCalendar, IconArrowRight } from './Icons';
import './Hero.css';

export default function Hero({ 
  logoUrl = '/favicon.png',
  isPreloaded = false
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system matching the real sarvika site: floating square dots in lime-green and cyan
    const particleCount = 42;
    const particles = [];
    const colors = [
      'rgba(184, 251, 4, 0.7)',   // Primary lime-green
      'rgba(184, 251, 4, 0.45)',  // Subtle lime
      'rgba(3, 191, 203, 0.65)',  // Cyan glow
      'rgba(3, 191, 203, 0.4)',   // Soft cyan
      'rgba(255, 255, 255, 0.5)'  // White sparkle
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 3, // 3px to 8px squares
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.45 + 0.15), // Gentle upward drift
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = Math.max(0.2, p.opacity + Math.sin(p.pulsePhase) * 0.2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        // Draw square particle as seen in authentic sarvika site
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Background Layers matching real SARVIKA site */}
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-container-rel">
        <div className="hero-layout">
          {/* Left Column: Headline and Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>Built for Immigration Professionals</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-line">The Smarter Way to Manage Your</span>
              <span className="hero-line">
                Immigration Practice.<span className="hero-title-dot" aria-hidden="true" />
              </span>
            </h1>

            <p className="hero-subtext">
              SARVIKA™ is the all-in-one practice management platform designed to streamline your workflows,
              delight your clients, and grow your business.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary hero-btn-main">
                <IconCalendar size={18} />
                <span>Book a Demo</span>
              </a>
              <a href="#platform" className="btn-ghost hero-btn-sub">
                <span>See How It Works</span>
                <IconArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Six-Feature Interconnected Diagram */}
          <div className="hero-diagram-col">
            <SixFeatureDiagram logoUrl={logoUrl} isAnimated={isPreloaded} />
          </div>
        </div>
      </div>
    </section>
  );
}


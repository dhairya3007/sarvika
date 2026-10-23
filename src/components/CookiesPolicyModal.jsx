import React, { useEffect } from 'react';
import { IconX } from './Icons';
import './PrivacyPolicyModal.css';

export default function CookiesPolicyModal({ isOpen, onClose, onOpenPrivacyPolicy }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    // Lock background scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="policy-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookies-modal-title"
    >
      <div className="policy-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Header */}
        <div className="policy-modal-header">
          <div className="policy-modal-header-text">
            <span className="policy-badge">COOKIE COMPLIANCE</span>
            <h2 id="cookies-modal-title" className="policy-modal-title">Cookies Policy</h2>
            <p className="policy-modal-subtitle">SARVIKA Practice Management &bull; sarvika.co.uk</p>
          </div>
          <button
            type="button"
            className="policy-modal-close-btn"
            onClick={onClose}
            aria-label="Close Cookies Policy"
          >
            <IconX size={20} color="currentColor" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="policy-modal-body">
          <p className="policy-intro">
            This policy explains how cookies and similar technologies are used on the Website (<strong>sarvika.co.uk</strong>). Please read this in conjunction with our{' '}
            <button
              type="button"
              className="policy-link-btn"
              onClick={() => {
                onClose();
                if (onOpenPrivacyPolicy) onOpenPrivacyPolicy();
              }}
            >
              Privacy Policy
            </button>.
          </p>

          <section className="policy-section">
            <h3 className="policy-section-title">1. What are cookies?</h3>
            <p>
              Cookies are small text files stored on your computer, tablet, or mobile device when you visit a website. Similar technologies, such as browser local storage and tracking scripts, are also covered by this policy.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">2. Cookies we use</h3>
            <p>
              The table below outlines the cookies operating on the Website:
            </p>

            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Provider</th>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>cookie_consent</code></td>
                    <td>Saturn Infotech Limited</td>
                    <td>Strictly necessary</td>
                    <td>Stores your cookie consent choice across sessions</td>
                    <td>12 months</td>
                  </tr>
                  <tr>
                    <td><code>session / security</code></td>
                    <td>Saturn Infotech Limited or eukhost</td>
                    <td>Strictly necessary</td>
                    <td>Keeps the Website secure and functioning properly</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td><code>_ga, _ga_*</code></td>
                    <td>Google LLC</td>
                    <td>Analytics (optional)</td>
                    <td>Measures anonymous aggregate traffic to improve site performance</td>
                    <td>2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="policy-notice-box">
              ℹ️ <strong>Consent Notice:</strong> Strictly necessary cookies do not require your prior consent as they are essential for website operation. Analytics cookies are set only when accepted.
            </div>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">3. Your choices</h3>
            <ul className="policy-list">
              <li>
                <strong>Accept or reject optional cookies:</strong> You can choose whether to accept or decline analytics cookies. Rejecting is as straightforward as accepting.
              </li>
              <li>
                <strong>Browser Controls:</strong> Most web browsers allow you to block or delete cookies via your browser settings (e.g. Chrome, Safari, Edge, Firefox).
              </li>
            </ul>
            <p className="policy-highlight-text">
              Note: Blocking strictly necessary cookies in your browser settings may prevent portions of the Website from functioning properly.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">4. Third-party cookies</h3>
            <p>
              Google Analytics is provided by Google LLC and is governed by Google’s Privacy &amp; Terms at{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="policy-link"
              >
                policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">5. Changes to this policy</h3>
            <p>
              We may update this policy periodically to reflect changes in legal requirements or website functionality. The date below indicates the latest revision.
            </p>
            <p className="policy-date-stamp">
              <strong>Last updated:</strong> 23/10/2026
            </p>
          </section>
        </div>

        {/* Sticky Footer */}
        <div className="policy-modal-footer">
          <button type="button" className="btn-primary policy-close-btn" onClick={onClose}>
            Close Cookies Policy
          </button>
        </div>
      </div>
    </div>
  );
}

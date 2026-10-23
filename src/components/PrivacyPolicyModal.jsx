import React, { useEffect } from 'react';
import { IconX } from './Icons';
import './PrivacyPolicyModal.css';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    // Prevent background scrolling while modal is open
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
      aria-labelledby="policy-modal-title"
    >
      <div className="policy-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Header */}
        <div className="policy-modal-header">
          <div className="policy-modal-header-text">
            <span className="policy-badge">LEGAL COMPLIANCE</span>
            <h2 id="policy-modal-title" className="policy-modal-title">Privacy Policy</h2>
            <p className="policy-modal-subtitle">SARVIKA Practice Management &bull; sarvika.co.uk</p>
          </div>
          <button
            type="button"
            className="policy-modal-close-btn"
            onClick={onClose}
            aria-label="Close Privacy Policy"
          >
            <IconX size={20} color="currentColor" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="policy-modal-body">
          {/* Metadata Card */}
          <div className="policy-meta-card">
            <div className="policy-meta-item">
              <span className="policy-meta-label">Website:</span>
              <span className="policy-meta-value"><a href="https://sarvika.co.uk" target="_blank" rel="noopener noreferrer">sarvika.co.uk</a></span>
            </div>
            <div className="policy-meta-item">
              <span className="policy-meta-label">Operator (Controller):</span>
              <span className="policy-meta-value">Saturn infotech limited, 17512422</span>
            </div>
            <div className="policy-meta-item">
              <span className="policy-meta-label">Registered Address:</span>
              <span className="policy-meta-value">Flat 11 Hillrise Court, 135 Kenton Road, Harrow, England, HA3 0AZ</span>
            </div>
            <div className="policy-meta-item">
              <span className="policy-meta-label">Contact & Data Protection:</span>
              <span className="policy-meta-value"><a href="mailto:info@sarvika.co.uk">info@sarvika.co.uk</a></span>
            </div>
          </div>

          <p className="policy-intro">
            This policy explains how we handle personal data collected through the Website, in line with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.
          </p>

          <section className="policy-section">
            <h3 className="policy-section-title">1. About the Website and what we do</h3>
            <p>
              The Website provides information about <strong>SARVIKA</strong>, a practice management software product. <strong>SARVIKA is not an immigration adviser, does not provide immigration advice at any stage, and is not a law firm or regulated immigration provider.</strong> Nothing on the Website is immigration, legal or regulatory advice.
            </p>
            <p>
              This policy covers personal data collected through the Website only. It does not cover data entered into the SARVIKA software platform by customers or their clients, which is processed under a separate contract and Data Processing Agreement.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">2. Personal data we collect</h3>
            <ul className="policy-list">
              <li><strong>Demo and contact forms:</strong> name, work email, phone number, organization, role, and the content of your message.</li>
              <li><strong>Newsletter sign-up:</strong> email address.</li>
              <li><strong>Cookies and analytics data:</strong> only if you accept optional cookies (see the Cookies Policy).</li>
              <li><strong>Technical data:</strong> IP address and browser information collected by our hosting provider to keep the Website secure.</li>
            </ul>
            <div className="policy-notice-box">
              ⚠️ <strong>Important:</strong> Please do not send immigration case details, passport or identity documents, health information, or other sensitive personal data through the Website.
            </div>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">3. Why we use it and our legal basis</h3>
            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Data</th>
                    <th>Legal basis (UK GDPR Art. 6)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Responding to demo requests and enquiries</strong></td>
                    <td>Contact and enquiry data</td>
                    <td>Steps at your request before a contract; legitimate interests</td>
                  </tr>
                  <tr>
                    <td><strong>Sending the newsletter</strong></td>
                    <td>Email address</td>
                    <td>Consent, which you can withdraw at any time</td>
                  </tr>
                  <tr>
                    <td><strong>Measuring website use</strong></td>
                    <td>Analytics data</td>
                    <td>Consent</td>
                  </tr>
                  <tr>
                    <td><strong>Keeping the Website secure and running</strong></td>
                    <td>Technical data</td>
                    <td>Legitimate interests</td>
                  </tr>
                  <tr>
                    <td><strong>Complying with legal obligations</strong></td>
                    <td>Any relevant data</td>
                    <td>Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">4. Who we share it with</h3>
            <ul className="policy-list">
              <li><strong>Hosting:</strong> eukhost</li>
              <li><strong>Analytics:</strong> Google LLC, only if you accept analytics cookies</li>
              <li><strong>Email and CRM tools:</strong> used securely for enquiries and notifications</li>
              <li><strong>Professional advisers:</strong> where necessary</li>
              <li><strong>Authorities:</strong> where required by law</li>
            </ul>
            <p className="policy-highlight-text">
              🔒 <strong>We do not sell personal data.</strong>
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">5. International Data Transfers</h3>
            <p>
              SARVIKA is designed so that client data is stored on the client's own server located in the <strong>United Kingdom</strong>.
            </p>
            <p>
              SARVIKA's software development and technical support may be provided by service providers located outside the United Kingdom. However, such providers do not receive access, store, process or control SARVIKA clients' personal data as part of the provision of the software.
            </p>
            <p>
              Client personal data remains under the control of the relevant SARVIKA client and is stored on the client's own UK-based server.
            </p>
            <p>
              Where any future service or integration involves the transfer or access to personal data outside the United Kingdom, SARVIKA will implement the appropriate safeguards and lawful transfer mechanism required under applicable UK data protection law.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">6. How long we keep it</h3>
            <ul className="policy-list">
              <li><strong>Demo and contact enquiries:</strong> 12 months after our last contact, unless a customer relationship begins</li>
              <li><strong>Newsletter data:</strong> until you unsubscribe</li>
              <li><strong>Analytics data:</strong> as set by the provider (14 months)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">7. Your rights</h3>
            <p>
              Under UK GDPR you can ask us to access, correct, or erase your data; restrict or object to its use; receive it in a portable format; and withdraw consent at any time. To exercise these rights, email <a href="mailto:info@sarvika.co.uk" className="policy-link">info@sarvika.co.uk</a>. We will respond within one month, and we may need to verify your identity first.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">8. Complaints</h3>
            <p>
              Please contact us first. You also have the right to complain to the <strong>Information Commissioner's Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="policy-link">ico.org.uk</a>.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">9. Security</h3>
            <p>
              We use HTTPS and access controls to protect personal data. No online service can be guaranteed completely securely.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">10. Children</h3>
            <p>
              The Website is aimed at businesses and professionals and is not directed at children.
            </p>
          </section>

          <section className="policy-section">
            <h3 className="policy-section-title">11. Changes to this policy</h3>
            <p>
              We may update this policy. The date below shows the latest revision.
            </p>
            <p className="policy-date-stamp">
              <strong>Last updated:</strong> 23/10/2026
            </p>
          </section>
        </div>

        {/* Sticky Footer */}
        <div className="policy-modal-footer">
          <button type="button" className="btn-primary policy-close-btn" onClick={onClose}>
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
}

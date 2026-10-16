import React, { useState, useEffect } from 'react';
import { IconPhone, IconMail, IconCalendar, IconCheckCircle, FlagUK, FlagIndia } from './Icons';
import { COUNTRIES, detectVisitorRegion } from '../utils/geo';
import { trackEvent } from '../utils/analytics';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firmName: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [regionInfo, setRegionInfo] = useState({ name: 'United Kingdom', code: 'GB', city: '', timeZone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-detect visitor country & timezone on load
  useEffect(() => {
    detectVisitorRegion().then((detected) => {
      setSelectedCountry(detected);
      setRegionInfo(detected);
      trackEvent('visitor_region_detected', {
        country: detected.name,
        code: detected.code,
        city: detected.city,
        timezone: detected.timeZone,
      });
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firmName || !formData.name || !formData.phone || !formData.email) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');

    // Trigger Google Analytics Lead Conversion Event for Analytics Dashboard
    trackEvent('generate_lead', {
      event_category: 'contact',
      event_label: 'demo_request',
      firm_name: formData.firmName,
      lead_country: selectedCountry.name,
      lead_country_code: selectedCountry.code,
      lead_dial_code: selectedCountry.dialCode,
      lead_city: regionInfo.city || '',
      lead_timezone: regionInfo.timeZone || '',
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="sarvika-section-card sarvika-bg-soft contact-section">
      <div className="container">
        <div className="contact-layout">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-col">
            <div className="section-badge">
              <span className="badge-dot" />
              <span>Contact Us</span>
            </div>

            <h2 className="contact-main-title">
              Let’s Build a Smarter Practice with{' '}
              <span className="section-title-highlight">SARVIKA</span>
            </h2>

            <p className="contact-text-lead">
              Ready to simplify the way you manage your practice? Discover how <strong>SARVIKA</strong> brings your
              clients, applications, tasks, documents and team workflows together in one organised platform.
            </p>

            <p className="contact-text-sub">
              <strong>Book a Demo today</strong> and see how SARVIKA can help your practice work smarter,
              stay organised and deliver a better client experience.
            </p>

            {/* Contact Details Cards (Exact details from live site) */}
            <div className="contact-cards-stack">
              <div className="contact-info-card">
                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <IconPhone size={20} color="var(--electric-blue)" />
                  </div>
                  <div className="contact-item-body">
                    <span className="contact-label">Contact Number</span>
                    <a href="tel:+447442974622" className="contact-value-link">
                      <FlagUK width={20} height={14} />
                      <span>7442 974622</span>
                    </a>
                  </div>
                </div>

                <div className="contact-card-divider" />

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <IconMail size={20} color="var(--electric-blue)" />
                  </div>
                  <div className="contact-item-body">
                    <span className="contact-label">Email Address</span>
                    <a href="mailto:Info@mercuryinfotech.co.uk" className="contact-value-link">
                      Info@mercuryinfotech.co.uk
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <IconPhone size={20} color="var(--electric-blue)" />
                  </div>
                  <div className="contact-item-body">
                    <span className="contact-label">Direct Line</span>
                    <a href="tel:+918128121376" className="contact-value-link">
                      <FlagIndia width={20} height={14} />
                      <span>81281 21376</span>
                    </a>
                  </div>
                </div>

                <div className="contact-card-divider" />

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <IconMail size={20} color="var(--electric-blue)" />
                  </div>
                  <div className="contact-item-body">
                    <span className="contact-label">Platform Support</span>
                    <a href="mailto:info@sarvika.co.uk" className="contact-value-link">
                      Info@sarvika.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule Your Demo Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Schedule Your Demo</h3>
              <p className="form-card-subtitle">
                Experience SARVIKA in action with a tailored walkthrough for your team.
              </p>

              {submitted ? (
                <div className="form-success-box" role="status">
                  <div className="success-icon-wrap">
                    <IconCheckCircle size={44} color="var(--electric-blue)" />
                  </div>
                  <h4 className="success-title">Demo Request Received</h4>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong> from <strong>{formData.firmName}</strong>. Our{' '}
                    <strong>{selectedCountry.name}</strong> practice specialists will contact you at{' '}
                    <strong>{formData.email}</strong> or <strong>{selectedCountry.dialCode} {formData.phone}</strong> shortly to confirm your walkthrough.
                  </p>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firmName: '', name: '', phone: '', email: '', message: '' });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="demo-form" onSubmit={handleSubmit} noValidate>
                  {errorMsg && (
                    <div className="form-error-banner" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="firmName" className="form-label">
                      Your Immigration Firm Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="firmName"
                      name="firmName"
                      className="form-input"
                      placeholder="Enter your immigration firm name"
                      value={formData.firmName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="req-star">*</span>
                      </label>
                      <div className="phone-input-wrap">
                        <div className="phone-country-select-wrapper" title="Click to change country dial code">
                          <span className="phone-selected-flag" aria-hidden="true">{selectedCountry.flag}</span>
                          <select
                            className="phone-country-select"
                            value={selectedCountry.code}
                            onChange={(e) => {
                              const found = COUNTRIES.find((c) => c.code === e.target.value);
                              if (found) setSelectedCountry(found);
                            }}
                            aria-label="Select country dial code"
                          >
                            {COUNTRIES.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.flag} {c.name} ({c.dialCode})
                              </option>
                            ))}
                          </select>
                          <span className="phone-dial-code">{selectedCountry.dialCode}</span>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-input phone-number-field"
                          placeholder="e.g. 7442 974622"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="form-textarea"
                      placeholder="Tell us about your practice or specific questions..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn">
                    <IconCalendar size={18} />
                    <span>Request a Demo</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

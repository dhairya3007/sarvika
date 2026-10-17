import React, { useState, useEffect, useRef } from 'react';
import { IconPhone, IconMail, IconCalendar, IconCheckCircle, FlagUK, FlagIndia, CountryFlag } from './Icons';
import { COUNTRIES, CORE_MARKETS_COUNT, detectVisitorRegion } from '../utils/geo';
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

  // Country selector dropdown & scroller state
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const countryPickerRef = useRef(null);
  const searchInputRef = useRef(null);
  const selectedItemRef = useRef(null);
  const phoneInputRef = useRef(null);

  const closeDropdown = () => {
    setIsCountryDropdownOpen(false);
    setCountrySearchQuery('');
  };

  const toggleDropdown = () => {
    setIsCountryDropdownOpen((prev) => {
      if (prev) setCountrySearchQuery('');
      return !prev;
    });
  };

  // Close country dropdown on outside click or escape, and handle focus/scroll
  useEffect(() => {
    function handleClickOutside(event) {
      if (countryPickerRef.current && !countryPickerRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    }
    if (isCountryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);

      // Focus search input and scroll to selected option
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
      if (selectedItemRef.current) {
        selectedItemRef.current.scrollIntoView({ block: 'nearest' });
      }
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCountryDropdownOpen]);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    closeDropdown();
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  };

  const filteredCountries = COUNTRIES.filter((c) => {
    if (!countrySearchQuery.trim()) return true;
    const q = countrySearchQuery.toLowerCase().trim();
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

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
              <strong>Book a Demo today</strong> and see how SARVIKA can support your practice work smarter,
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
                      Info@sarvika.co.uk
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
                        <div className="phone-country-picker-container" ref={countryPickerRef}>
                          <button
                            type="button"
                            className={`phone-country-select-wrapper ${isCountryDropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                            title="Click to change country dial code"
                            aria-label={`Select country code. Current is ${selectedCountry.name} (${selectedCountry.dialCode})`}
                            aria-haspopup="listbox"
                            aria-expanded={isCountryDropdownOpen}
                          >
                            <span className="phone-selected-flag" aria-hidden="true">
                              <CountryFlag code={selectedCountry.code} width={22} height={15} />
                            </span>
                            <span className="phone-dial-code">{selectedCountry.dialCode}</span>
                            <span className={`phone-dropdown-arrow ${isCountryDropdownOpen ? 'rotated' : ''}`} aria-hidden="true">
                              ▾
                            </span>
                          </button>

                          {isCountryDropdownOpen && (
                            <div className="phone-country-dropdown-menu" role="dialog" aria-label="Select Country">
                              {/* Search Box Header */}
                              <div className="phone-country-search-box">
                                <svg
                                  className="phone-country-search-icon"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <circle cx="11" cy="11" r="8" />
                                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input
                                  ref={searchInputRef}
                                  type="text"
                                  className="phone-country-search-input"
                                  placeholder="Search country or code..."
                                  value={countrySearchQuery}
                                  onChange={(e) => setCountrySearchQuery(e.target.value)}
                                  aria-label="Filter countries by name or dial code"
                                />
                                {countrySearchQuery && (
                                  <button
                                    type="button"
                                    className="phone-country-search-clear"
                                    onClick={() => setCountrySearchQuery('')}
                                    aria-label="Clear country search"
                                  >
                                    ✕
                                  </button>
                                )}
                              </div>

                              {/* Country List Scroller */}
                              <div className="phone-country-dropdown-scroller" role="listbox" tabIndex="-1">
                                {filteredCountries.length === 0 ? (
                                  <div className="phone-country-no-results">
                                    No countries matching "{countrySearchQuery}"
                                  </div>
                                ) : !countrySearchQuery ? (
                                  <>
                                    <div className="phone-country-group-label">Popular & Core Markets</div>
                                    {COUNTRIES.slice(0, CORE_MARKETS_COUNT).map((c) => {
                                      const isSelected = selectedCountry.code === c.code;
                                      return (
                                        <button
                                          key={`core-${c.code}`}
                                          ref={isSelected ? selectedItemRef : null}
                                          type="button"
                                          role="option"
                                          aria-selected={isSelected}
                                          className={`phone-country-option ${isSelected ? 'selected' : ''}`}
                                          onClick={() => handleSelectCountry(c)}
                                        >
                                          <span className="country-opt-flag">
                                            <CountryFlag code={c.code} width={20} height={14} />
                                          </span>
                                          <span className="country-opt-name">{c.name}</span>
                                          <span className="country-opt-code">{c.dialCode}</span>
                                          {isSelected && <span className="country-opt-check" aria-hidden="true">✓</span>}
                                        </button>
                                      );
                                    })}

                                    <div className="phone-country-group-label">All Countries (A-Z)</div>
                                    {COUNTRIES.slice(CORE_MARKETS_COUNT).map((c) => {
                                      const isSelected = selectedCountry.code === c.code;
                                      return (
                                        <button
                                          key={`all-${c.code}`}
                                          ref={isSelected ? selectedItemRef : null}
                                          type="button"
                                          role="option"
                                          aria-selected={isSelected}
                                          className={`phone-country-option ${isSelected ? 'selected' : ''}`}
                                          onClick={() => handleSelectCountry(c)}
                                        >
                                          <span className="country-opt-flag">
                                            <CountryFlag code={c.code} width={20} height={14} />
                                          </span>
                                          <span className="country-opt-name">{c.name}</span>
                                          <span className="country-opt-code">{c.dialCode}</span>
                                          {isSelected && <span className="country-opt-check" aria-hidden="true">✓</span>}
                                        </button>
                                      );
                                    })}
                                  </>
                                ) : (
                                  <>
                                    <div className="phone-country-group-label">
                                      Results ({filteredCountries.length})
                                    </div>
                                    {filteredCountries.map((c) => {
                                      const isSelected = selectedCountry.code === c.code;
                                      return (
                                        <button
                                          key={c.code}
                                          ref={isSelected ? selectedItemRef : null}
                                          type="button"
                                          role="option"
                                          aria-selected={isSelected}
                                          className={`phone-country-option ${isSelected ? 'selected' : ''}`}
                                          onClick={() => handleSelectCountry(c)}
                                        >
                                          <span className="country-opt-flag">
                                            <CountryFlag code={c.code} width={20} height={14} />
                                          </span>
                                          <span className="country-opt-name">{c.name}</span>
                                          <span className="country-opt-code">{c.dialCode}</span>
                                          {isSelected && <span className="country-opt-check" aria-hidden="true">✓</span>}
                                        </button>
                                      );
                                    })}
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <input
                          ref={phoneInputRef}
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

import React, { useState } from 'react';
import { IconChevronDown } from './Icons';
import './FaqSection.css';

const FAQS = [
  {
    q: 'What is SARVIKA™?',
    a: 'SARVIKA™ is an all-in-one practice management platform designed specifically for immigration professionals and legal practices.',
  },
  {
    q: 'Who can access SARVIKA and how is access controlled?',
    a: 'Access is role-based. Administrators control what employees and clients can see and do, ensuring the right information is available to the right people.',
  },
  {
    q: 'What features does SARVIKA include?',
    a: 'Visa Application management, document management, task management, calendar, digital signatures, internal communication, billing, reporting and more.',
  },
  {
    q: 'Do you provide training and support?',
    a: 'Yes. We provide onboarding, training for your team and ongoing support to ensure your practice gets the most out of SARVIKA.',
  },
  {
    q: 'Is my data secure with SARVIKA?',
    a: 'Yes. SARVIKA™ uses enterprise-grade security with role-based access, server-side permissions, encrypted data storage and audit logs.',
  },
  {
    q: 'Can my clients access the system?',
    a: 'Yes. Your clients can securely access their application status, upload documents, provide information and sign documents via the Client Portal.',
  },
  {
    q: 'How does pricing work?',
    a: 'SARVIKA is available on 12-month and 24-month contract plans. Installation and training are one-time charges.',
  },
  {
    q: 'Can SARVIKA grow with my practice?',
    a: 'Absolutely. SARVIKA is built to scale with your practice, whether you are a small team or a large multi-office immigration firm.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="sarvika-section-card sarvika-bg-white faq-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Common Questions</span>
          </div>

          <h2 className="section-title">
            Frequently Asked <span className="section-title-highlight">Questions</span>
          </h2>

          <p className="section-description">
            Everything you need to know about SARVIKA™ and how it can transform your immigration practice.
          </p>
        </div>

        {/* 2-Column Responsive FAQ Accordion Grid */}
        <div className="faq-grid">
          {/* Left Column (Even Indices) */}
          <div className="faq-column">
            {FAQS.map((item, idx) => {
              if (idx % 2 !== 0) return null;
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.q}</span>
                    <span className={`faq-icon-wrapper ${isOpen ? 'rotate' : ''}`}>
                      <IconChevronDown size={18} color="var(--electric-blue)" />
                    </span>
                  </button>
                  <div className={`faq-answer-collapse ${isOpen ? 'show' : ''}`}>
                    <div className="faq-answer-content">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (Odd Indices) */}
          <div className="faq-column">
            {FAQS.map((item, idx) => {
              if (idx % 2 === 0) return null;
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.q}</span>
                    <span className={`faq-icon-wrapper ${isOpen ? 'rotate' : ''}`}>
                      <IconChevronDown size={18} color="var(--electric-blue)" />
                    </span>
                  </button>
                  <div className={`faq-answer-collapse ${isOpen ? 'show' : ''}`}>
                    <div className="faq-answer-content">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

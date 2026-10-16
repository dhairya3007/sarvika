import React from 'react';
import { 
  IconFolder, 
  IconFileText, 
  IconUsers, 
  IconCheckCircle, 
  IconArrowRight, 
  IconCalendar 
} from './Icons';
import './CapabilitiesSection.css';

const CAPABILITIES = [
  {
    id: 'case-mgmt',
    icon: IconFolder,
    title: 'Case & Application Management',
    desc: 'Manage all immigration applications from initial enquiry to decision in one place.',
    points: [
      'Track case progress in real time',
      'Organise tasks, deadlines & milestones',
      'Complete visibility across your practice',
    ],
    action: 'View Applications',
  },
  {
    id: 'doc-mgmt',
    icon: IconFileText,
    title: 'Document & Signature Management',
    desc: 'Store, manage and share documents securely with built-in digital signature workflows.',
    points: [
      'Secure document storage',
      'Request & collect digital signatures',
      'Version control & audit trail',
    ],
    action: 'Manage Documents',
  },
  {
    id: 'team-collab',
    icon: IconUsers,
    title: 'Team Collaboration & Communication',
    desc: 'Empower your team to collaborate, communicate and get work done efficiently.',
    points: [
      'Internal team messaging',
      'Role-based access & permissions',
      'Task assignment & notifications',
    ],
    action: 'Manage Your Team',
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="sarvika-section-card sarvika-bg-soft capabilities-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="section-title">
            Everything You Need to Run a <span className="section-title-highlight">Smarter Immigration Practice</span>
          </h2>

          <p className="section-description">
            SARVIKA™ brings your cases, clients, documents, tasks and team together in one secure platform — 
            so you can work smarter and deliver better results.
          </p>
        </div>

        {/* 3 Capabilities Cards */}
        <div className="capabilities-grid">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="capability-card">
                <div className="capability-icon-wrap">
                  <Icon size={24} color="var(--electric-blue)" />
                </div>

                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-desc">{item.desc}</p>

                <ul className="capability-features">
                  {item.points.map((pt, i) => (
                    <li key={i}>
                      <IconCheckCircle size={17} color="var(--electric-blue)" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="capability-link">
                  <span>{item.action}</span>
                  <IconArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        {/* Actions Row */}
        <div className="capabilities-actions">
          <a href="#contact" className="btn-primary">
            <IconCalendar size={18} />
            <span>Book a Demo</span>
          </a>
          <a href="#about" className="btn-ghost">
            <span>Explore SARVIKA</span>
          </a>
        </div>
      </div>
    </section>
  );
}

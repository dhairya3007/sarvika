import React from 'react';
import { 
  IconCheckCircle, 
  IconCalendar, 
  IconMail, 
  IconUsers, 
  IconBriefcase, 
  IconInfo 
} from './Icons';
import './PricingSection.css';

const PRICING_DATA = {
  currency: 'GBP',
  currencySymbol: '£',
  billingPeriod: 'monthly',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      popular: false,
      description: 'Perfect for small teams',
      price: 199,
      users: {
        internalUsers: 4,
        caseWorkers: 1,
      },
      features: [
        'All core features',
        'Client portal',
        'Document management',
        'Tasks, deadlines & calendar',
        'Invoicing & reporting',
      ],
      ctaText: 'Book a Demo',
      ctaHref: '#contact',
    },
    {
      id: 'professional',
      name: 'Professional',
      popular: true,
      description: 'Ideal for growing practices',
      price: 299,
      users: {
        internalUsers: 7,
        caseWorkers: 1,
      },
      features: [
        'All core features',
        'Client portal',
        'Document management',
        'Tasks, deadlines & calendar',
        'Invoicing & reporting',
        'Role-based access & audit trail',
        'Internal team communication',
        'Digital signature',
      ],
      ctaText: 'Book a Demo',
      ctaHref: '#contact',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      popular: false,
      description: 'For established practices',
      price: 699,
      users: {
        internalUsers: 12,
        caseWorkers: 4,
      },
      features: [
        'All core features',
        'Client portal',
        'Document management',
        'Tasks, deadlines & calendar',
        'Invoicing & reporting',
        'Role-based access & audit trail',
        'Internal team communication',
        'Digital signature',
        'Advanced reporting',
        'Priority support',
      ],
      ctaText: 'Book a Demo',
      ctaHref: '#contact',
    },
  ],
  caseWorkerInfo: {
    title: 'Who can be a Case Worker?',
    description: 'A Case Worker can be anyone outside of your organisation, such as an external consultant, barrister, translator, accountant or other third party who works on your cases.',
  },
  customPlan: {
    title: 'Need a different setup?',
    description: 'Contact us for a customised plan to suit your practice.',
    ctaText: 'Contact Us',
    ctaHref: '#contact',
  },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="sarvika-section-card sarvika-bg-soft pricing-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>Pricing Plans</span>
          </div>

          <h2 className="section-title">
            Simple Pricing. <span className="section-title-highlight">Powerful Platform.</span>
          </h2>

          <p className="section-description">
            Transparent plans for immigration practices of all sizes.<br />
            No hidden costs. No surprises.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="pricing-grid">
          {PRICING_DATA.plans.map((plan) => (
            <article 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'card-featured' : ''}`}
            >
              {plan.popular && (
                <div className="featured-pill">RECOMMENDED PLAN</div>
              )}

              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <div className="plan-price-row">
                  <span className="plan-currency">{PRICING_DATA.currencySymbol}</span>
                  <span className="plan-amount">{plan.price}</span>
                  <span className="plan-period">/month</span>
                </div>

                {/* Internal Users & Case Workers badge */}
                <div className="plan-users-badge">
                  <div className="plan-user-item">
                    <IconUsers size={15} color="var(--electric-blue)" />
                    <span><strong>{plan.users.internalUsers}</strong> Internal Users</span>
                  </div>
                  <div className="plan-user-item">
                    <IconBriefcase size={15} color="var(--electric-blue)" />
                    <span><strong>{plan.users.caseWorkers}</strong> Case Worker{plan.users.caseWorkers > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <IconCheckCircle size={18} color="var(--electric-blue)" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <a 
                href={plan.ctaHref} 
                className={`${plan.popular ? 'btn-primary' : 'btn-ghost'} plan-cta-btn`}
              >
                <IconCalendar size={18} />
                <span>{plan.ctaText}</span>
              </a>
            </article>
          ))}
        </div>

        {/* Additional Lower Info: Case Worker Info & Custom Plan Callouts */}
        <div className="pricing-extras-grid">
          {/* Who can be a Case Worker? */}
          <div className="pricing-extra-card caseworker-info-card">
            <div className="extra-icon-bubble">
              <IconInfo size={22} color="var(--electric-blue)" />
            </div>
            <div className="extra-card-body">
              <h4 className="extra-card-title">{PRICING_DATA.caseWorkerInfo.title}</h4>
              <p className="extra-card-desc">{PRICING_DATA.caseWorkerInfo.description}</p>
            </div>
          </div>

          {/* Need a different setup? */}
          <div className="pricing-extra-card custom-plan-card">
            <div className="extra-icon-bubble">
              <IconMail size={22} color="var(--electric-blue)" />
            </div>
            <div className="extra-card-body">
              <h4 className="extra-card-title">{PRICING_DATA.customPlan.title}</h4>
              <p className="extra-card-desc">{PRICING_DATA.customPlan.description}</p>
            </div>
            <a href={PRICING_DATA.customPlan.ctaHref} className="btn-primary extra-cta-btn">
              <span>{PRICING_DATA.customPlan.ctaText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

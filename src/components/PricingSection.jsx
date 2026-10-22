import React, { useState, useEffect } from 'react';
import {
  IconCheckCircle,
  IconCalendar,
  IconMail,
  IconUsers,
  IconBriefcase,
  IconInfo
} from './Icons';
import {
  BASE_PLANS,
  PRICING_EXTRAS,
  getPricingForCountry
} from '../data/pricingData';
import { detectVisitorRegion } from '../utils/geo';
import './PricingSection.css';

export default function PricingSection({ userCountry }) {
  const [internalCountry, setInternalCountry] = useState(null);

  // If userCountry is not passed from parent, detect on load
  useEffect(() => {
    if (!userCountry) {
      detectVisitorRegion()
        .then((detected) => {
          if (detected) setInternalCountry(detected);
        })
        .catch(() => { });
    }
  }, [userCountry]);

  const activeCountry = userCountry || internalCountry;
  const activePricing = getPricingForCountry(activeCountry?.code);

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
          {BASE_PLANS.map((plan) => (
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
                  <span className="plan-currency">{activePricing.currencySymbol}</span>
                  <span className="plan-amount">{activePricing.plans[plan.id]}</span>
                  <span className="plan-period">/month</span>
                </div>

                {/* One time installation & training note automatically set for this visitor's country */}
                <div className="plan-price-note">
                  <p>{activePricing.installationNote}</p>
                  <p>{activePricing.trainingNote}</p>
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
              <h4 className="extra-card-title">{PRICING_EXTRAS.caseWorkerInfo.title}</h4>
              <p className="extra-card-desc">{PRICING_EXTRAS.caseWorkerInfo.description}</p>
            </div>
          </div>

          {/* Need a different setup? */}
          <div className="pricing-extra-card custom-plan-card">
            <div className="extra-icon-bubble">
              <IconMail size={22} color="var(--electric-blue)" />
            </div>
            <div className="extra-card-body">
              <h4 className="extra-card-title">{PRICING_EXTRAS.customPlan.title}</h4>
              <p className="extra-card-desc">{PRICING_EXTRAS.customPlan.description}</p>
            </div>
            <a href={PRICING_EXTRAS.customPlan.ctaHref} className="btn-primary extra-cta-btn">
              <span>{PRICING_EXTRAS.customPlan.ctaText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

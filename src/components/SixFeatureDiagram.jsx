import React, { useState } from 'react';
import {
  IconUsers,
  IconCalendar,
  IconFolder,
  IconComments,
  IconBilling,
  IconReports
} from './Icons';
import './SixFeatureDiagram.css';

const NODES = [
  {
    id: 'client-app',
    side: 'left',
    title: 'Client & Application Management',
    icon: IconUsers,
    cardX: 15,
    cardY: 60,
    anchorX: 215,
    anchorY: 92,
    pathD: 'M 285 205 C 250 205, 245 92, 215 92',
    animDelay: '0.2s',
  },
  {
    id: 'calendar-task',
    side: 'left',
    title: 'Calendar & Task Management',
    icon: IconCalendar,
    cardX: 15,
    cardY: 198,
    anchorX: 215,
    anchorY: 230,
    pathD: 'M 285 230 L 215 230',
    animDelay: '0.35s',
  },
  {
    id: 'document-mgmt',
    side: 'left',
    title: 'Document Management',
    icon: IconFolder,
    cardX: 15,
    cardY: 336,
    anchorX: 215,
    anchorY: 368,
    pathD: 'M 285 255 C 250 255, 245 368, 215 368',
    animDelay: '0.5s',
  },
  {
    id: 'internal-comm',
    side: 'right',
    title: 'Internal Communication',
    icon: IconComments,
    cardX: 505,
    cardY: 60,
    anchorX: 505,
    anchorY: 92,
    pathD: 'M 435 205 C 470 205, 475 92, 505 92',
    animDelay: '0.25s',
  },
  {
    id: 'billing-inv',
    side: 'right',
    title: 'Billing & Invoicing',
    icon: IconBilling,
    cardX: 505,
    cardY: 198,
    anchorX: 505,
    anchorY: 230,
    pathD: 'M 435 230 L 505 230',
    animDelay: '0.4s',
  },
  {
    id: 'reports-insights',
    side: 'right',
    title: 'Reports & Insights',
    icon: IconReports,
    cardX: 505,
    cardY: 336,
    anchorX: 505,
    anchorY: 368,
    pathD: 'M 435 255 C 470 255, 475 368, 505 368',
    animDelay: '0.55s',
  },
];

export default function SixFeatureDiagram({ logoUrl = '/favicon.png', isAnimated = false }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className={`diagram-container ${isAnimated ? 'is-animated' : 'diagram-waiting'}`} aria-label="SARVIKA Six-Feature Connected Architecture">
      {/* ================= CONNECTED SVG ARCHITECTURE DIAGRAM (LAPTOP/DESKTOP VIEW) ================= */}
      <div className="diagram-canvas-wrap">
        <svg
          className="diagram-svg-main"
          viewBox="0 25 720 410"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Orbit Halo Ring around Central Hub */}
          <ellipse
            cx="360"
            cy="230"
            rx="260"
            ry="165"
            fill="none"
            stroke="rgba(11, 143, 221, 0.25)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* SVG Connector Paths for 6 Features */}
          <g className="diagram-connectors-layer">
            {NODES.map((node) => {
              const isActive = activeId === node.id;
              return (
                <g key={node.id} className={`connector-item ${isActive ? 'is-active' : ''}`}>
                  {/* Subtle track line */}
                  <path
                    d={node.pathD}
                    stroke="rgba(184, 251, 4, 0.45)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 5"
                    className="path-track"
                  />
                  {/* Neon lime drawing connector line */}
                  <path
                    d={node.pathD}
                    stroke="#b8fb04"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 5"
                    className="path-draw"
                    style={{ animationDelay: node.animDelay }}
                  />
                  {/* Traveling highlight pulse */}
                  <path
                    d={node.pathD}
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="path-travel"
                  />
                  {/* Endpoint Anchor Dot */}
                  <circle
                    cx={node.anchorX}
                    cy={node.anchorY}
                    r="4"
                    fill="#FFFFFF"
                    stroke="#b8fb04"
                    strokeWidth="2"
                    className="endpoint-dot"
                  />
                </g>
              );
            })}
          </g>

          {/* Central Hub Exit Connection Anchors */}
          <circle cx="285" cy="205" r="3.5" fill="#b8fb04" />
          <circle cx="285" cy="230" r="3.5" fill="#b8fb04" />
          <circle cx="285" cy="255" r="3.5" fill="#b8fb04" />
          <circle cx="435" cy="205" r="3.5" fill="#b8fb04" />
          <circle cx="435" cy="230" r="3.5" fill="#b8fb04" />
          <circle cx="435" cy="255" r="3.5" fill="#b8fb04" />

          {/* Central SARVIKA Hub */}
          <foreignObject x="285" y="182" width="150" height="96" className="hub-foreign-obj">
            <div
              className="hub-chip-container"
              tabIndex="0"
              role="region"
              aria-label="SARVIKA Central Platform Hub"
            >
              <div className="hub-chip-pulse" aria-hidden="true" />
              <div className="hub-chip-surface">
                <img src="/favicon.png" alt="SARVIKA Logo" className="hub-chip-logo" />
              </div>
            </div>
          </foreignObject>

          {/* Six Feature Cards (SVG Embedded ForeignObjects) */}
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeId === node.id;

            return (
              <foreignObject
                key={node.id}
                x={node.cardX}
                y={node.cardY}
                width="200"
                height="64"
                className="card-foreign-obj"
              >
                <div
                  className={`node-card-box ${isActive ? 'is-active' : ''}`}
                  style={{ animationDelay: `${1.2 + index * 0.15}s` }}
                  onMouseEnter={() => setActiveId(node.id)}
                  onMouseLeave={() => setActiveId(null)}
                  tabIndex="0"
                  role="article"
                  aria-label={node.title}
                >
                  <div className="node-icon-bubble">
                    <Icon size={17} color="var(--electric-blue)" />
                  </div>
                  <div className="node-text-body">
                    <span className="node-label-title">{node.title}</span>
                  </div>
                </div>
              </foreignObject>
            );
          })}
        </svg>
      </div>

      {/* ================= RESPONSIVE VIEW (<= 820px): ONE-SIDE LOGO & OTHER-SIDE POINTS ================= */}
      <div className="diagram-responsive-view" aria-label="SARVIKA Responsive Architecture">
        {/* Split Section: One Side Logo, Other Side Those Points */}
        <div className="resp-split-layout">
          {/* Left Side: Central Logo */}
          <div className="resp-logo-side">
            <div className="resp-logo-card">
              <div className="resp-logo-pulse" aria-hidden="true" />
              <img src="/favicon.png" alt="SARVIKA Logo" className="resp-logo-img" />
            </div>
            <div className="resp-logo-spine" aria-hidden="true" />
          </div>

          {/* Right Side: Those Points */}
          <div className="resp-points-side">
            {NODES.map((node) => {
              const Icon = node.icon;
              return (
                <div key={node.id} className="resp-point-card">
                  <div className="resp-point-branch" aria-hidden="true">
                    <span className="resp-branch-dot" />
                    <span className="resp-branch-line" />
                  </div>
                  <div className="node-icon-bubble">
                    <Icon size={16} color="var(--electric-blue)" />
                  </div>
                  <span className="node-label-title">{node.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

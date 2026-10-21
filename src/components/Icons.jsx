import React from 'react';

export const IconCalendar = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const IconUsers = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const IconFolder = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

export const IconFileText = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const IconComments = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const IconBilling = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="16" x2="10" y2="16" />
    <circle cx="16" cy="16" r="1.5" />
  </svg>
);

export const IconReports = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export const IconShield = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const IconCheckCircle = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const IconArrowRight = ({ size = 18, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const IconPhone = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconMail = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const IconChevronDown = ({ size = 18, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconMenu = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const IconClose = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconInstagram = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const IconClock = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const IconStar = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const IconInfo = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const IconBriefcase = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const FlagUK = ({ width = 20, height = 14, className = '' }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 60 42" 
    className={`flag-icon ${className}`}
    style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }}
    role="img"
    aria-label="United Kingdom"
  >
    <clipPath id="ukClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#ukClip)">
      <rect width="60" height="42" fill="#012169" />
      <path d="M0,0 L60,42 M60,0 L0,42" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0,0 L60,42 M60,0 L0,42" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V42 M0,21 H60" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M30,0 V42 M0,21 H60" stroke="#C8102E" strokeWidth="7" />
    </g>
  </svg>
);

export const FlagIndia = ({ width = 20, height = 14, className = '' }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 60 42" 
    className={`flag-icon ${className}`}
    style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }}
    role="img"
    aria-label="India"
  >
    <clipPath id="inClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#inClip)">
      <rect width="60" height="14" y="0" fill="#FF9933" />
      <rect width="60" height="14" y="14" fill="#FFFFFF" />
      <rect width="60" height="14" y="28" fill="#138808" />
      <circle cx="30" cy="21" r="5" fill="none" stroke="#000080" strokeWidth="0.8" />
      <circle cx="30" cy="21" r="1.2" fill="#000080" />
      <path 
        d="M30,16 L30,26 M25,21 L35,21 M26.46,17.46 L33.54,24.54 M26.46,24.54 L33.54,17.46" 
        stroke="#000080" 
        strokeWidth="0.6" 
      />
    </g>
  </svg>
);

export const FlagUS = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="United States">
    <clipPath id="usClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#usClip)">
      <rect width="60" height="42" fill="#B22234" />
      <path d="M0,3.23 H60 M0,9.69 H60 M0,16.15 H60 M0,22.61 H60 M0,29.07 H60 M0,35.53 H60" stroke="#FFFFFF" strokeWidth="3.23" />
      <rect width="26" height="22.6" fill="#3C3B6E" />
      <circle cx="6" cy="5" r="1.2" fill="#FFFFFF" />
      <circle cx="13" cy="5" r="1.2" fill="#FFFFFF" />
      <circle cx="20" cy="5" r="1.2" fill="#FFFFFF" />
      <circle cx="9.5" cy="9" r="1.2" fill="#FFFFFF" />
      <circle cx="16.5" cy="9" r="1.2" fill="#FFFFFF" />
      <circle cx="6" cy="13" r="1.2" fill="#FFFFFF" />
      <circle cx="13" cy="13" r="1.2" fill="#FFFFFF" />
      <circle cx="20" cy="13" r="1.2" fill="#FFFFFF" />
      <circle cx="9.5" cy="17" r="1.2" fill="#FFFFFF" />
      <circle cx="16.5" cy="17" r="1.2" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagCA = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Canada">
    <clipPath id="caClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#caClip)">
      <rect width="60" height="42" fill="#FFFFFF" />
      <rect width="15" height="42" fill="#FF0000" />
      <rect x="45" width="15" height="42" fill="#FF0000" />
      <path d="M30,9 L32,18 L36,16 L34,22 L39,23 L37,27 L33,26 L31,31 L29,31 L27,26 L23,27 L21,23 L26,22 L24,16 L28,18 Z" fill="#FF0000" />
      <rect x="29" y="30" width="2" height="6" fill="#FF0000" />
    </g>
  </svg>
);

export const FlagAU = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Australia">
    <clipPath id="auClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#auClip)">
      <rect width="60" height="42" fill="#012169" />
      <rect width="30" height="21" fill="#012169" />
      <path d="M0,0 L30,21 M30,0 L0,21" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0,0 L30,21 M30,0 L0,21" stroke="#C8102E" strokeWidth="2" />
      <path d="M15,0 V21 M0,10.5 H30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M15,0 V21 M0,10.5 H30" stroke="#C8102E" strokeWidth="3.5" />
      <circle cx="15" cy="31" r="4.5" fill="#FFFFFF" />
      <circle cx="45" cy="8" r="1.8" fill="#FFFFFF" />
      <circle cx="52" cy="16" r="1.8" fill="#FFFFFF" />
      <circle cx="45" cy="33" r="1.8" fill="#FFFFFF" />
      <circle cx="38" cy="22" r="1.8" fill="#FFFFFF" />
      <circle cx="48" cy="24" r="1.2" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagAE = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="United Arab Emirates">
    <clipPath id="aeClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#aeClip)">
      <rect width="60" height="14" fill="#00732F" />
      <rect y="14" width="60" height="14" fill="#FFFFFF" />
      <rect y="28" width="60" height="14" fill="#000000" />
      <rect width="15" height="42" fill="#FF0000" />
    </g>
  </svg>
);

export const FlagIE = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Ireland">
    <clipPath id="ieClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#ieClip)">
      <rect width="20" height="42" fill="#169B62" />
      <rect x="20" width="20" height="42" fill="#FFFFFF" />
      <rect x="40" width="20" height="42" fill="#FF883E" />
    </g>
  </svg>
);

export const FlagSG = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Singapore">
    <clipPath id="sgClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#sgClip)">
      <rect width="60" height="21" fill="#ED2939" />
      <rect y="21" width="60" height="21" fill="#FFFFFF" />
      <path d="M14,6 A6.5,6.5 0 0 0 14,16 A5.5,5.5 0 0 1 14,6" fill="#FFFFFF" />
      <circle cx="17.5" cy="7.5" r="0.9" fill="#FFFFFF" />
      <circle cx="15.5" cy="9.5" r="0.9" fill="#FFFFFF" />
      <circle cx="19.5" cy="9.5" r="0.9" fill="#FFFFFF" />
      <circle cx="16.5" cy="12.5" r="0.9" fill="#FFFFFF" />
      <circle cx="18.5" cy="12.5" r="0.9" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagNZ = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="New Zealand">
    <clipPath id="nzClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#nzClip)">
      <rect width="60" height="42" fill="#012169" />
      <rect width="30" height="21" fill="#012169" />
      <path d="M0,0 L30,21 M30,0 L0,21" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0,0 L30,21 M30,0 L0,21" stroke="#C8102E" strokeWidth="2" />
      <path d="M15,0 V21 M0,10.5 H30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M15,0 V21 M0,10.5 H30" stroke="#C8102E" strokeWidth="3.5" />
      <circle cx="45" cy="8" r="2.2" fill="#FFFFFF" />
      <circle cx="45" cy="8" r="1.6" fill="#CC142B" />
      <circle cx="52" cy="17" r="2.2" fill="#FFFFFF" />
      <circle cx="52" cy="17" r="1.6" fill="#CC142B" />
      <circle cx="45" cy="32" r="2.2" fill="#FFFFFF" />
      <circle cx="45" cy="32" r="1.6" fill="#CC142B" />
      <circle cx="38" cy="20" r="2.2" fill="#FFFFFF" />
      <circle cx="38" cy="20" r="1.6" fill="#CC142B" />
    </g>
  </svg>
);

export const FlagPK = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Pakistan">
    <clipPath id="pkClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#pkClip)">
      <rect width="60" height="42" fill="#01411C" />
      <rect width="15" height="42" fill="#FFFFFF" />
      <circle cx="39" cy="21" r="11" fill="#FFFFFF" />
      <circle cx="42" cy="19" r="9.5" fill="#01411C" />
      <polygon points="41,13 43,18 48,18 44,21 46,26 41,23 37,26 39,21 35,18 40,18" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagBD = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Bangladesh">
    <clipPath id="bdClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#bdClip)">
      <rect width="60" height="42" fill="#006A4E" />
      <circle cx="27" cy="21" r="13" fill="#F42A41" />
    </g>
  </svg>
);

export const FlagNG = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Nigeria">
    <clipPath id="ngClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#ngClip)">
      <rect width="20" height="42" fill="#008751" />
      <rect x="20" width="20" height="42" fill="#FFFFFF" />
      <rect x="40" width="20" height="42" fill="#008751" />
    </g>
  </svg>
);

export const FlagZA = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="South Africa">
    <clipPath id="zaClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#zaClip)">
      <rect width="60" height="21" fill="#E03C31" />
      <rect y="21" width="60" height="21" fill="#001489" />
      <path d="M0,0 L24,21 L0,42" fill="#000000" stroke="#FFB81C" strokeWidth="3" />
      <path d="M0,21 L28,21 L60,21" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M0,21 L28,21 L60,21" stroke="#007749" strokeWidth="7" />
      <path d="M0,0 L28,21 L60,0" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0,42 L28,21 L60,42" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0,0 L28,21 L60,0" stroke="#007749" strokeWidth="5" />
      <path d="M0,42 L28,21 L60,42" stroke="#007749" strokeWidth="5" />
    </g>
  </svg>
);

export const FlagDE = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Germany">
    <clipPath id="deClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#deClip)">
      <rect width="60" height="14" fill="#000000" />
      <rect y="14" width="60" height="14" fill="#DD0000" />
      <rect y="28" width="60" height="14" fill="#FFCE00" />
    </g>
  </svg>
);

export const FlagFR = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="France">
    <clipPath id="frClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#frClip)">
      <rect width="20" height="42" fill="#002395" />
      <rect x="20" width="20" height="42" fill="#FFFFFF" />
      <rect x="40" width="20" height="42" fill="#ED2939" />
    </g>
  </svg>
);

export const FlagES = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Spain">
    <clipPath id="esClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#esClip)">
      <rect width="60" height="10.5" fill="#AA151B" />
      <rect y="10.5" width="60" height="21" fill="#F1BF00" />
      <rect y="31.5" width="60" height="10.5" fill="#AA151B" />
      <circle cx="16" cy="21" r="3.5" fill="#AA151B" />
    </g>
  </svg>
);

export const FlagIT = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Italy">
    <clipPath id="itClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#itClip)">
      <rect width="20" height="42" fill="#009246" />
      <rect x="20" width="20" height="42" fill="#FFFFFF" />
      <rect x="40" width="20" height="42" fill="#CE2B37" />
    </g>
  </svg>
);

export const FlagNL = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Netherlands">
    <clipPath id="nlClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#nlClip)">
      <rect width="60" height="14" fill="#AE1C28" />
      <rect y="14" width="60" height="14" fill="#FFFFFF" />
      <rect y="28" width="60" height="14" fill="#21468B" />
    </g>
  </svg>
);

export const FlagPH = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Philippines">
    <clipPath id="phClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#phClip)">
      <rect width="60" height="21" fill="#0038A8" />
      <rect y="21" width="60" height="21" fill="#CE1126" />
      <polygon points="0,0 26,21 0,42" fill="#FFFFFF" />
      <circle cx="9" cy="21" r="3" fill="#FCD116" />
    </g>
  </svg>
);

export const FlagMY = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Malaysia">
    <clipPath id="myClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#myClip)">
      <rect width="60" height="42" fill="#FFFFFF" />
      <path d="M0,1.5 H60 M0,4.5 H60 M0,7.5 H60 M0,10.5 H60 M0,13.5 H60 M0,16.5 H60 M0,19.5 H60 M0,22.5 H60 M0,25.5 H60 M0,28.5 H60 M0,31.5 H60 M0,34.5 H60 M0,37.5 H60 M0,40.5 H60" stroke="#CC0001" strokeWidth="3" />
      <rect width="30" height="24" fill="#010066" />
      <circle cx="15" cy="12" r="6" fill="#FFCC00" />
      <circle cx="17" cy="12" r="5" fill="#010066" />
      <circle cx="21" cy="12" r="3" fill="#FFCC00" />
    </g>
  </svg>
);

export const FlagSA = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Saudi Arabia">
    <clipPath id="saClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#saClip)">
      <rect width="60" height="42" fill="#006C35" />
      <rect x="14" y="27" width="32" height="2" fill="#FFFFFF" />
      <path d="M16,14 H44 M18,18 H42 M20,22 H40" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const FlagLK = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Sri Lanka">
    <clipPath id="lkClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#lkClip)">
      <rect width="60" height="42" fill="#FFBE29" />
      <rect x="3" y="3" width="10" height="36" fill="#005A36" />
      <rect x="13" y="3" width="10" height="36" fill="#EB7400" />
      <rect x="25" y="3" width="32" height="36" fill="#8D153A" />
      <circle cx="41" cy="21" r="5" fill="#FFBE29" />
    </g>
  </svg>
);

export const FlagNP = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Nepal">
    <clipPath id="npClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#npClip)">
      <rect width="60" height="42" fill="#F4F6F8" />
      <polygon points="6,3 36,18 16,18 42,39 6,39" fill="#DC143C" stroke="#003893" strokeWidth="2.5" />
      <circle cx="18" cy="13" r="2.5" fill="#FFFFFF" />
      <circle cx="18" cy="30" r="3" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagKE = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Kenya">
    <clipPath id="keClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#keClip)">
      <rect width="60" height="12" fill="#000000" />
      <rect y="12" width="60" height="3" fill="#FFFFFF" />
      <rect y="15" width="60" height="12" fill="#990000" />
      <rect y="27" width="60" height="3" fill="#FFFFFF" />
      <rect y="30" width="60" height="12" fill="#006600" />
      <ellipse cx="30" cy="21" rx="6" ry="12" fill="#990000" stroke="#000000" strokeWidth="1" />
      <line x1="30" y1="9" x2="30" y2="33" stroke="#FFFFFF" strokeWidth="1.5" />
    </g>
  </svg>
);

export const FlagGH = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Ghana">
    <clipPath id="ghClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#ghClip)">
      <rect width="60" height="14" fill="#CF0921" />
      <rect y="14" width="60" height="14" fill="#FCD116" />
      <rect y="28" width="60" height="14" fill="#006B3F" />
      <polygon points="30,16 32,21 37,21 33,24 35,29 30,26 25,29 27,24 23,21 28,21" fill="#000000" />
    </g>
  </svg>
);

export const FlagZW = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Zimbabwe">
    <clipPath id="zwClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#zwClip)">
      <rect width="60" height="6" fill="#006400" />
      <rect y="6" width="60" height="6" fill="#FFD700" />
      <rect y="12" width="60" height="6" fill="#D40000" />
      <rect y="18" width="60" height="6" fill="#000000" />
      <rect y="24" width="60" height="6" fill="#D40000" />
      <rect y="30" width="60" height="6" fill="#FFD700" />
      <rect y="36" width="60" height="6" fill="#006400" />
      <polygon points="0,0 24,21 0,42" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
      <polygon points="9,16 10.5,19.5 14,19.5 11,22 12.5,25.5 9,23.5 5.5,25.5 7,22 4,19.5 7.5,19.5" fill="#D40000" />
    </g>
  </svg>
);

export const FlagPL = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Poland">
    <clipPath id="plClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#plClip)">
      <rect width="60" height="21" fill="#FFFFFF" />
      <rect y="21" width="60" height="21" fill="#DC143C" />
    </g>
  </svg>
);

export const FlagPT = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Portugal">
    <clipPath id="ptClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#ptClip)">
      <rect width="24" height="42" fill="#006600" />
      <rect x="24" width="36" height="42" fill="#FF0000" />
      <circle cx="24" cy="21" r="7" fill="#FFCC00" stroke="#000000" strokeWidth="0.5" />
      <rect x="21" y="18" width="6" height="6" fill="#FFFFFF" stroke="#000099" strokeWidth="0.5" />
    </g>
  </svg>
);

export const FlagTR = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Turkey">
    <clipPath id="trClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#trClip)">
      <rect width="60" height="42" fill="#E30A17" />
      <circle cx="24" cy="21" r="10.5" fill="#FFFFFF" />
      <circle cx="27" cy="21" r="8.4" fill="#E30A17" />
      <polygon points="36,21 33,18.5 34.5,22.5 32,20 35,19" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagCN = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="China">
    <clipPath id="cnClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#cnClip)">
      <rect width="60" height="42" fill="#EE1C25" />
      <polygon points="10,6 12,12 18,12 13,15 15,21 10,17 5,21 7,15 2,12 8,12" fill="#FFFF00" />
      <circle cx="21" cy="7" r="1.8" fill="#FFFF00" />
      <circle cx="25" cy="11" r="1.8" fill="#FFFF00" />
      <circle cx="25" cy="16" r="1.8" fill="#FFFF00" />
      <circle cx="21" cy="20" r="1.8" fill="#FFFF00" />
    </g>
  </svg>
);

export const FlagJP = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Japan">
    <clipPath id="jpClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#jpClip)">
      <rect width="60" height="42" fill="#FFFFFF" />
      <circle cx="30" cy="21" r="12" fill="#BC002D" />
    </g>
  </svg>
);

export const FlagKR = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="South Korea">
    <clipPath id="krClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#krClip)">
      <rect width="60" height="42" fill="#FFFFFF" />
      <circle cx="30" cy="21" r="10" fill="#003478" />
      <path d="M20,21 A10,10 0 0,1 40,21 A5,5 0 0,1 30,21 A5,5 0 0,0 20,21 Z" fill="#C60C30" />
      <line x1="8" y1="8" x2="14" y2="14" stroke="#000000" strokeWidth="1.5" />
      <line x1="10" y1="6" x2="16" y2="12" stroke="#000000" strokeWidth="1.5" />
      <line x1="46" y1="28" x2="52" y2="34" stroke="#000000" strokeWidth="1.5" />
      <line x1="44" y1="30" x2="50" y2="36" stroke="#000000" strokeWidth="1.5" />
    </g>
  </svg>
);

export const FlagJM = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Jamaica">
    <clipPath id="jmClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#jmClip)">
      <polygon points="0,0 30,21 0,42" fill="#000000" />
      <polygon points="60,0 30,21 60,42" fill="#000000" />
      <polygon points="0,0 30,21 60,0" fill="#007749" />
      <polygon points="0,42 30,21 60,42" fill="#007749" />
      <line x1="0" y1="0" x2="60" y2="42" stroke="#FED100" strokeWidth="5" />
      <line x1="60" y1="0" x2="0" y2="42" stroke="#FED100" strokeWidth="5" />
    </g>
  </svg>
);

export const FlagBR = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Brazil">
    <clipPath id="brClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#brClip)">
      <rect width="60" height="42" fill="#009C3B" />
      <polygon points="30,4 56,21 30,38 4,21" fill="#FFDF00" />
      <circle cx="30" cy="21" r="8" fill="#002776" />
      <path d="M22,23 Q30,17 38,20" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

export const FlagQA = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Qatar">
    <clipPath id="qaClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#qaClip)">
      <rect width="60" height="42" fill="#8D1B3D" />
      <polygon points="0,0 18,0 23,2.3 18,4.6 23,7 18,9.3 23,11.6 18,14 23,16.3 18,18.6 23,21 18,23.3 23,25.6 18,28 23,30.3 18,32.6 23,35 18,37.3 23,39.6 18,42 0,42" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagKW = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Kuwait">
    <clipPath id="kwClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#kwClip)">
      <rect width="60" height="14" fill="#007A3D" />
      <rect y="14" width="60" height="14" fill="#FFFFFF" />
      <rect y="28" width="60" height="14" fill="#CE1126" />
      <polygon points="0,0 16,14 16,28 0,42" fill="#000000" />
    </g>
  </svg>
);

export const FlagOM = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Oman">
    <clipPath id="omClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#omClip)">
      <rect width="60" height="14" fill="#FFFFFF" />
      <rect y="14" width="60" height="14" fill="#DB161B" />
      <rect y="28" width="60" height="14" fill="#008000" />
      <rect width="16" height="42" fill="#DB161B" />
      <circle cx="8" cy="8" r="3" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagBH = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Bahrain">
    <clipPath id="bhClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#bhClip)">
      <rect width="60" height="42" fill="#CE1126" />
      <polygon points="0,0 16,0 22,4.2 16,8.4 22,12.6 16,16.8 22,21 16,25.2 22,29.4 16,33.6 22,37.8 16,42 0,42" fill="#FFFFFF" />
    </g>
  </svg>
);

export const FlagUA = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="Ukraine">
    <clipPath id="uaClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#uaClip)">
      <rect width="60" height="21" fill="#005BBB" />
      <rect y="21" width="60" height="21" fill="#FFD500" />
    </g>
  </svg>
);

export const FlagEU = ({ width = 20, height = 14, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 60 42" className={`flag-icon ${className}`} style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', flexShrink: 0 }} role="img" aria-label="European Union">
    <clipPath id="euClip">
      <rect width="60" height="42" rx="3" ry="3" />
    </clipPath>
    <g clipPath="url(#euClip)">
      <rect width="60" height="42" fill="#003399" />
      <circle cx="30" cy="10" r="1.5" fill="#FFCC00" />
      <circle cx="35.5" cy="11.5" r="1.5" fill="#FFCC00" />
      <circle cx="39.5" cy="15.5" r="1.5" fill="#FFCC00" />
      <circle cx="41" cy="21" r="1.5" fill="#FFCC00" />
      <circle cx="39.5" cy="26.5" r="1.5" fill="#FFCC00" />
      <circle cx="35.5" cy="30.5" r="1.5" fill="#FFCC00" />
      <circle cx="30" cy="32" r="1.5" fill="#FFCC00" />
      <circle cx="24.5" cy="30.5" r="1.5" fill="#FFCC00" />
      <circle cx="20.5" cy="26.5" r="1.5" fill="#FFCC00" />
      <circle cx="19" cy="21" r="1.5" fill="#FFCC00" />
      <circle cx="20.5" cy="15.5" r="1.5" fill="#FFCC00" />
      <circle cx="24.5" cy="11.5" r="1.5" fill="#FFCC00" />
    </g>
  </svg>
);

export const CountryFlag = ({ code = 'GB', width = 20, height = 14, className = '' }) => {
  const c = (code || 'GB').toUpperCase();
  switch (c) {
    case 'GB':
      return <FlagUK width={width} height={height} className={className} />;
    case 'EU':
      return <FlagEU width={width} height={height} className={className} />;
    case 'IN':
      return <FlagIndia width={width} height={height} className={className} />;
    case 'US':
      return <FlagUS width={width} height={height} className={className} />;
    case 'CA':
      return <FlagCA width={width} height={height} className={className} />;
    case 'AU':
      return <FlagAU width={width} height={height} className={className} />;
    case 'AE':
      return <FlagAE width={width} height={height} className={className} />;
    case 'IE':
      return <FlagIE width={width} height={height} className={className} />;
    case 'SG':
      return <FlagSG width={width} height={height} className={className} />;
    case 'NZ':
      return <FlagNZ width={width} height={height} className={className} />;
    case 'PK':
      return <FlagPK width={width} height={height} className={className} />;
    case 'BD':
      return <FlagBD width={width} height={height} className={className} />;
    case 'NG':
      return <FlagNG width={width} height={height} className={className} />;
    case 'ZA':
      return <FlagZA width={width} height={height} className={className} />;
    case 'DE':
      return <FlagDE width={width} height={height} className={className} />;
    case 'FR':
      return <FlagFR width={width} height={height} className={className} />;
    case 'ES':
      return <FlagES width={width} height={height} className={className} />;
    case 'IT':
      return <FlagIT width={width} height={height} className={className} />;
    case 'NL':
      return <FlagNL width={width} height={height} className={className} />;
    case 'PH':
      return <FlagPH width={width} height={height} className={className} />;
    case 'MY':
      return <FlagMY width={width} height={height} className={className} />;
    case 'SA':
      return <FlagSA width={width} height={height} className={className} />;
    case 'LK':
      return <FlagLK width={width} height={height} className={className} />;
    case 'NP':
      return <FlagNP width={width} height={height} className={className} />;
    case 'KE':
      return <FlagKE width={width} height={height} className={className} />;
    case 'GH':
      return <FlagGH width={width} height={height} className={className} />;
    case 'ZW':
      return <FlagZW width={width} height={height} className={className} />;
    case 'PL':
      return <FlagPL width={width} height={height} className={className} />;
    case 'PT':
      return <FlagPT width={width} height={height} className={className} />;
    case 'TR':
      return <FlagTR width={width} height={height} className={className} />;
    case 'CN':
      return <FlagCN width={width} height={height} className={className} />;
    case 'JP':
      return <FlagJP width={width} height={height} className={className} />;
    case 'KR':
      return <FlagKR width={width} height={height} className={className} />;
    case 'JM':
      return <FlagJM width={width} height={height} className={className} />;
    case 'BR':
      return <FlagBR width={width} height={height} className={className} />;
    case 'QA':
      return <FlagQA width={width} height={height} className={className} />;
    case 'KW':
      return <FlagKW width={width} height={height} className={className} />;
    case 'OM':
      return <FlagOM width={width} height={height} className={className} />;
    case 'BH':
      return <FlagBH width={width} height={height} className={className} />;
    case 'UA':
      return <FlagUA width={width} height={height} className={className} />;
    default:
      return (
        <img
          src={`https://flagcdn.com/w40/${c.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/w80/${c.toLowerCase()}.png 2x`}
          width={width}
          height={height}
          alt={c}
          className={`flag-icon ${className}`}
          style={{ borderRadius: '2.5px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)', objectFit: 'cover', flexShrink: 0 }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      );
  }
};




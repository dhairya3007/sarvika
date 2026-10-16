// ==========================================================================
// SARVIKA™ Google Analytics 4 (GA4) Integration
// Enables real-time country detection, visitor tracking, and lead conversions
// on your Google Analytics Dashboard.
// ==========================================================================

// Replace with your Google Analytics 4 Measurement ID (e.g. G-ABC123XYZ)
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

/**
 * Initializes Google Analytics 4 gtag.js script dynamically
 */
export function initAnalytics(measurementId = GA_MEASUREMENT_ID) {
  if (typeof window === 'undefined') return;
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    // GA Measurement ID placeholder: events will log to console in dev mode
    return;
  }

  // Prevent duplicate script tags
  if (window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: true,
  });
}

/**
 * Sends custom events to Google Analytics Dashboard
 * Examples: 'contact_form_submit', 'demo_booking', 'region_detected'
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
  // Console logging for developer visibility
  console.log(`📊 [Analytics Event]: ${eventName}`, params);
}

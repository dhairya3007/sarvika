// ==========================================================================
// SARVIKA™ Region & Geolocation Utility
// Automatically detects visitor country (UK, India, etc.) for smart phone codes,
// localized office routing, and analytics reporting.
// ==========================================================================

export const COUNTRIES = [
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', currency: 'GBP' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', currency: 'INR' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', currency: 'USD' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', currency: 'CAD' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', currency: 'AUD' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', currency: 'AED' },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪', currency: 'EUR' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', currency: 'SGD' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', currency: 'NZD' },
];

export async function detectVisitorRegion() {
  // 1. Fast, instant detection via Browser Timezone (0ms latency, privacy-safe)
  let detectedCode = 'GB'; // Default to primary UK immigration market
  let timeZone = '';
  let city = '';

  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (timeZone.includes('Kolkata') || timeZone.includes('Calcutta') || timeZone.includes('India')) {
      detectedCode = 'IN';
    } else if (timeZone.includes('London') || timeZone.includes('Europe/Belfast') || timeZone.includes('Europe/Jersey')) {
      detectedCode = 'GB';
    } else if (timeZone.includes('New_York') || timeZone.includes('Los_Angeles') || timeZone.includes('Chicago') || timeZone.includes('Denver')) {
      detectedCode = 'US';
    } else if (timeZone.includes('Toronto') || timeZone.includes('Vancouver') || timeZone.includes('Montreal')) {
      detectedCode = 'CA';
    } else if (timeZone.includes('Sydney') || timeZone.includes('Melbourne') || timeZone.includes('Brisbane')) {
      detectedCode = 'AU';
    } else if (timeZone.includes('Dubai')) {
      detectedCode = 'AE';
    }
  } catch (e) {
    // Keep GB fallback
  }

  // 2. Supplement with IP Geolocation lookup if network allows (1.2s timeout so page is never blocked)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (data && data.country_code) {
        detectedCode = data.country_code;
        city = data.city || '';
        timeZone = data.timezone || timeZone;
      }
    }
  } catch (err) {
    // Timezone fallback used seamlessly
  }

  const matched = COUNTRIES.find((c) => c.code === detectedCode) || {
    code: detectedCode,
    name: detectedCode,
    dialCode: '+44',
    flag: '🌍',
    currency: 'GBP',
  };

  return {
    ...matched,
    city,
    timeZone,
  };
}

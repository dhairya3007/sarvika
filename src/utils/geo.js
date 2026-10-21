// ==========================================================================
// SARVIKA™ Region & Geolocation Utility
// Automatically detects visitor country (UK, India, etc.) for smart phone codes,
// localized office routing, and analytics reporting.
// ==========================================================================

export const COUNTRIES = [
  // Primary Core & Diaspora Markets (Top Priority)
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', currency: 'GBP' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', currency: 'INR' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', currency: 'USD' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', currency: 'CAD' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', currency: 'AUD' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', currency: 'AED' },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪', currency: 'EUR' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', currency: 'SGD' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', currency: 'NZD' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰', currency: 'PKR' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', currency: 'BDT' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬', currency: 'NGN' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', currency: 'ZAR' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭', currency: 'PHP' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾', currency: 'MYR' },
  { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰', currency: 'HKD' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', currency: 'SAR' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦', currency: 'QAR' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼', currency: 'KWD' },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲', currency: 'OMR' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭', currency: 'BHD' },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰', currency: 'LKR' },
  { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵', currency: 'NPR' },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪', currency: 'KES' },
  { code: 'GH', name: 'Ghana', dialCode: '+233', flag: '🇬🇭', currency: 'GHS' },
  { code: 'ZW', name: 'Zimbabwe', dialCode: '+263', flag: '🇿🇼', currency: 'USD' },

  // All Other Global Countries (Alphabetical A-Z)
  { code: 'AF', name: 'Afghanistan', dialCode: '+93', flag: '🇦🇫', currency: 'AFN' },
  { code: 'AL', name: 'Albania', dialCode: '+355', flag: '🇦🇱', currency: 'ALL' },
  { code: 'DZ', name: 'Algeria', dialCode: '+213', flag: '🇩🇿', currency: 'DZD' },
  { code: 'AD', name: 'Andorra', dialCode: '+376', flag: '🇦🇩', currency: 'EUR' },
  { code: 'AO', name: 'Angola', dialCode: '+244', flag: '🇦🇴', currency: 'AOA' },
  { code: 'AG', name: 'Antigua and Barbuda', dialCode: '+1268', flag: '🇦🇬', currency: 'XCD' },
  { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷', currency: 'ARS' },
  { code: 'AM', name: 'Armenia', dialCode: '+374', flag: '🇦🇲', currency: 'AMD' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹', currency: 'EUR' },
  { code: 'AZ', name: 'Azerbaijan', dialCode: '+994', flag: '🇦🇿', currency: 'AZN' },
  { code: 'BS', name: 'Bahamas', dialCode: '+1242', flag: '🇧🇸', currency: 'BSD' },
  { code: 'BB', name: 'Barbados', dialCode: '+1246', flag: '🇧🇧', currency: 'BBD' },
  { code: 'BY', name: 'Belarus', dialCode: '+375', flag: '🇧🇾', currency: 'BYN' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪', currency: 'EUR' },
  { code: 'BZ', name: 'Belize', dialCode: '+501', flag: '🇧🇿', currency: 'BZD' },
  { code: 'BJ', name: 'Benin', dialCode: '+229', flag: '🇧🇯', currency: 'XOF' },
  { code: 'BM', name: 'Bermuda', dialCode: '+1441', flag: '🇧🇲', currency: 'BMD' },
  { code: 'BT', name: 'Bhutan', dialCode: '+975', flag: '🇧🇹', currency: 'BTN' },
  { code: 'BO', name: 'Bolivia', dialCode: '+591', flag: '🇧🇴', currency: 'BOB' },
  { code: 'BA', name: 'Bosnia and Herzegovina', dialCode: '+387', flag: '🇧🇦', currency: 'BAM' },
  { code: 'BW', name: 'Botswana', dialCode: '+267', flag: '🇧🇼', currency: 'BWP' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', currency: 'BRL' },
  { code: 'BN', name: 'Brunei', dialCode: '+673', flag: '🇧🇳', currency: 'BND' },
  { code: 'BG', name: 'Bulgaria', dialCode: '+359', flag: '🇧🇬', currency: 'BGN' },
  { code: 'BF', name: 'Burkina Faso', dialCode: '+226', flag: '🇧🇫', currency: 'XOF' },
  { code: 'BI', name: 'Burundi', dialCode: '+257', flag: '🇧🇮', currency: 'BIF' },
  { code: 'KH', name: 'Cambodia', dialCode: '+855', flag: '🇰🇭', currency: 'KHR' },
  { code: 'CM', name: 'Cameroon', dialCode: '+237', flag: '🇨🇲', currency: 'XAF' },
  { code: 'KY', name: 'Cayman Islands', dialCode: '+1345', flag: '🇰🇾', currency: 'KYD' },
  { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱', currency: 'CLP' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', currency: 'CNY' },
  { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴', currency: 'COP' },
  { code: 'CG', name: 'Congo', dialCode: '+242', flag: '🇨🇬', currency: 'XAF' },
  { code: 'CD', name: 'DR Congo', dialCode: '+243', flag: '🇨🇩', currency: 'CDF' },
  { code: 'CR', name: 'Costa Rica', dialCode: '+506', flag: '🇨🇷', currency: 'CRC' },
  { code: 'HR', name: 'Croatia', dialCode: '+385', flag: '🇭🇷', currency: 'EUR' },
  { code: 'CY', name: 'Cyprus', dialCode: '+357', flag: '🇨🇾', currency: 'EUR' },
  { code: 'CZ', name: 'Czech Republic', dialCode: '+420', flag: '🇨🇿', currency: 'CZK' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰', currency: 'DKK' },
  { code: 'DM', name: 'Dominica', dialCode: '+1767', flag: '🇩🇲', currency: 'XCD' },
  { code: 'DO', name: 'Dominican Republic', dialCode: '+1809', flag: '🇩🇴', currency: 'DOP' },
  { code: 'EC', name: 'Ecuador', dialCode: '+593', flag: '🇪🇨', currency: 'USD' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬', currency: 'EGP' },
  { code: 'SV', name: 'El Salvador', dialCode: '+503', flag: '🇸🇻', currency: 'USD' },
  { code: 'EE', name: 'Estonia', dialCode: '+372', flag: '🇪🇪', currency: 'EUR' },
  { code: 'ET', name: 'Ethiopia', dialCode: '+251', flag: '🇪🇹', currency: 'ETB' },
  { code: 'FJ', name: 'Fiji', dialCode: '+679', flag: '🇫🇯', currency: 'FJD' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮', currency: 'EUR' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', currency: 'EUR' },
  { code: 'GA', name: 'Gabon', dialCode: '+241', flag: '🇬🇦', currency: 'XAF' },
  { code: 'GM', name: 'Gambia', dialCode: '+220', flag: '🇬🇲', currency: 'GMD' },
  { code: 'GE', name: 'Georgia', dialCode: '+995', flag: '🇬🇪', currency: 'GEL' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', currency: 'EUR' },
  { code: 'GR', name: 'Greece', dialCode: '+30', flag: '🇬🇷', currency: 'EUR' },
  { code: 'GD', name: 'Grenada', dialCode: '+1473', flag: '🇬🇩', currency: 'XCD' },
  { code: 'GT', name: 'Guatemala', dialCode: '+502', flag: '🇬🇹', currency: 'GTQ' },
  { code: 'GN', name: 'Guinea', dialCode: '+224', flag: '🇬🇳', currency: 'GNF' },
  { code: 'GY', name: 'Guyana', dialCode: '+592', flag: '🇬🇾', currency: 'GYD' },
  { code: 'HT', name: 'Haiti', dialCode: '+509', flag: '🇭🇹', currency: 'HTG' },
  { code: 'HN', name: 'Honduras', dialCode: '+504', flag: '🇭🇳', currency: 'HNL' },
  { code: 'HU', name: 'Hungary', dialCode: '+36', flag: '🇭🇺', currency: 'HUF' },
  { code: 'IS', name: 'Iceland', dialCode: '+354', flag: '🇮🇸', currency: 'ISK' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩', currency: 'IDR' },
  { code: 'IR', name: 'Iran', dialCode: '+98', flag: '🇮🇷', currency: 'IRR' },
  { code: 'IQ', name: 'Iraq', dialCode: '+964', flag: '🇮🇶', currency: 'IQD' },
  { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱', currency: 'ILS' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', currency: 'EUR' },
  { code: 'CI', name: 'Ivory Coast', dialCode: '+225', flag: '🇨🇮', currency: 'XOF' },
  { code: 'JM', name: 'Jamaica', dialCode: '+1876', flag: '🇯🇲', currency: 'JMD' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', currency: 'JPY' },
  { code: 'JO', name: 'Jordan', dialCode: '+962', flag: '🇯🇴', currency: 'JOD' },
  { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', flag: '🇰🇿', currency: 'KZT' },
  { code: 'KG', name: 'Kyrgyzstan', dialCode: '+996', flag: '🇰🇬', currency: 'KGS' },
  { code: 'LA', name: 'Laos', dialCode: '+856', flag: '🇱🇦', currency: 'LAK' },
  { code: 'LV', name: 'Latvia', dialCode: '+371', flag: '🇱🇻', currency: 'EUR' },
  { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: '🇱🇧', currency: 'LBP' },
  { code: 'LS', name: 'Lesotho', dialCode: '+266', flag: '🇱🇸', currency: 'LSL' },
  { code: 'LR', name: 'Liberia', dialCode: '+231', flag: '🇱🇷', currency: 'LRD' },
  { code: 'LY', name: 'Libya', dialCode: '+218', flag: '🇱🇾', currency: 'LYD' },
  { code: 'LT', name: 'Lithuania', dialCode: '+370', flag: '🇱🇹', currency: 'EUR' },
  { code: 'LU', name: 'Luxembourg', dialCode: '+352', flag: '🇱🇺', currency: 'EUR' },
  { code: 'MO', name: 'Macau', dialCode: '+853', flag: '🇲🇴', currency: 'MOP' },
  { code: 'MG', name: 'Madagascar', dialCode: '+261', flag: '🇲🇬', currency: 'MGA' },
  { code: 'MW', name: 'Malawi', dialCode: '+265', flag: '🇲🇼', currency: 'MWK' },
  { code: 'MV', name: 'Maldives', dialCode: '+960', flag: '🇲🇻', currency: 'MVR' },
  { code: 'ML', name: 'Mali', dialCode: '+223', flag: '🇲🇱', currency: 'XOF' },
  { code: 'MT', name: 'Malta', dialCode: '+356', flag: '🇲🇹', currency: 'EUR' },
  { code: 'MR', name: 'Mauritania', dialCode: '+222', flag: '🇲🇷', currency: 'MRU' },
  { code: 'MU', name: 'Mauritius', dialCode: '+230', flag: '🇲🇺', currency: 'MUR' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', currency: 'MXN' },
  { code: 'MD', name: 'Moldova', dialCode: '+373', flag: '🇲🇩', currency: 'MDL' },
  { code: 'MC', name: 'Monaco', dialCode: '+377', flag: '🇲🇨', currency: 'EUR' },
  { code: 'MN', name: 'Mongolia', dialCode: '+976', flag: '🇲🇳', currency: 'MNT' },
  { code: 'ME', name: 'Montenegro', dialCode: '+382', flag: '🇲🇪', currency: 'EUR' },
  { code: 'MA', name: 'Morocco', dialCode: '+212', flag: '🇲🇦', currency: 'MAD' },
  { code: 'MZ', name: 'Mozambique', dialCode: '+258', flag: '🇲🇿', currency: 'MZN' },
  { code: 'MM', name: 'Myanmar', dialCode: '+95', flag: '🇲🇲', currency: 'MMK' },
  { code: 'NA', name: 'Namibia', dialCode: '+264', flag: '🇳🇦', currency: 'NAD' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', currency: 'EUR' },
  { code: 'NI', name: 'Nicaragua', dialCode: '+505', flag: '🇳🇮', currency: 'NIO' },
  { code: 'NE', name: 'Niger', dialCode: '+227', flag: '🇳🇪', currency: 'XOF' },
  { code: 'MK', name: 'North Macedonia', dialCode: '+389', flag: '🇲🇰', currency: 'MKD' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴', currency: 'NOK' },
  { code: 'PA', name: 'Panama', dialCode: '+507', flag: '🇵🇦', currency: 'USD' },
  { code: 'PG', name: 'Papua New Guinea', dialCode: '+675', flag: '🇵🇬', currency: 'PGK' },
  { code: 'PY', name: 'Paraguay', dialCode: '+595', flag: '🇵🇾', currency: 'PYG' },
  { code: 'PE', name: 'Peru', dialCode: '+51', flag: '🇵🇪', currency: 'PEN' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱', currency: 'PLN' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹', currency: 'EUR' },
  { code: 'RO', name: 'Romania', dialCode: '+40', flag: '🇷🇴', currency: 'RON' },
  { code: 'RW', name: 'Rwanda', dialCode: '+250', flag: '🇷🇼', currency: 'RWF' },
  { code: 'KN', name: 'Saint Kitts and Nevis', dialCode: '+1869', flag: '🇰🇳', currency: 'XCD' },
  { code: 'LC', name: 'Saint Lucia', dialCode: '+1758', flag: '🇱🇨', currency: 'XCD' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines', dialCode: '+1784', flag: '🇻🇨', currency: 'XCD' },
  { code: 'SN', name: 'Senegal', dialCode: '+221', flag: '🇸🇳', currency: 'XOF' },
  { code: 'RS', name: 'Serbia', dialCode: '+381', flag: '🇷🇸', currency: 'RSD' },
  { code: 'SC', name: 'Seychelles', dialCode: '+248', flag: '🇸🇨', currency: 'SCR' },
  { code: 'SL', name: 'Sierra Leone', dialCode: '+232', flag: '🇸🇱', currency: 'SLL' },
  { code: 'SK', name: 'Slovakia', dialCode: '+421', flag: '🇸🇰', currency: 'EUR' },
  { code: 'SI', name: 'Slovenia', dialCode: '+386', flag: '🇸🇮', currency: 'EUR' },
  { code: 'SO', name: 'Somalia', dialCode: '+252', flag: '🇸🇴', currency: 'SOS' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', currency: 'KRW' },
  { code: 'SS', name: 'South Sudan', dialCode: '+211', flag: '🇸🇸', currency: 'SSP' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', currency: 'EUR' },
  { code: 'SD', name: 'Sudan', dialCode: '+249', flag: '🇸🇩', currency: 'SDG' },
  { code: 'SR', name: 'Suriname', dialCode: '+597', flag: '🇸🇷', currency: 'SRD' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪', currency: 'SEK' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', currency: 'CHF' },
  { code: 'TW', name: 'Taiwan', dialCode: '+886', flag: '🇹🇼', currency: 'TWD' },
  { code: 'TJ', name: 'Tajikistan', dialCode: '+992', flag: '🇹🇯', currency: 'TJS' },
  { code: 'TZ', name: 'Tanzania', dialCode: '+255', flag: '🇹🇿', currency: 'TZS' },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭', currency: 'THB' },
  { code: 'TG', name: 'Togo', dialCode: '+228', flag: '🇹🇬', currency: 'XOF' },
  { code: 'TT', name: 'Trinidad and Tobago', dialCode: '+1868', flag: '🇹🇹', currency: 'TTD' },
  { code: 'TN', name: 'Tunisia', dialCode: '+216', flag: '🇹🇳', currency: 'TND' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷', currency: 'TRY' },
  { code: 'TM', name: 'Turkmenistan', dialCode: '+993', flag: '🇹🇲', currency: 'TMT' },
  { code: 'UG', name: 'Uganda', dialCode: '+256', flag: '🇺🇬', currency: 'UGX' },
  { code: 'UA', name: 'Ukraine', dialCode: '+380', flag: '🇺🇦', currency: 'UAH' },
  { code: 'UY', name: 'Uruguay', dialCode: '+598', flag: '🇺🇾', currency: 'UYU' },
  { code: 'UZ', name: 'Uzbekistan', dialCode: '+998', flag: '🇺🇿', currency: 'UZS' },
  { code: 'VE', name: 'Venezuela', dialCode: '+58', flag: '🇻🇪', currency: 'USD' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳', currency: 'VND' },
  { code: 'YE', name: 'Yemen', dialCode: '+967', flag: '🇾🇪', currency: 'YER' },
  { code: 'ZM', name: 'Zambia', dialCode: '+260', flag: '🇿🇲', currency: 'ZMW' },
];

export const CORE_MARKETS_COUNT = 26;

export async function detectVisitorRegion() {
  let detectedCode = '';
  let timeZone = '';
  let city = '';

  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch (e) {
    // Keep silent
  }

  // 1. IP Geolocation (Takes priority over local system clock — essential for VPNs, proxies & travel)
  // Provider A: api.country.is (Fast Cloudflare edge endpoint, zero rate limits)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch('https://api.country.is/', {
      signal: controller.signal,
      cache: 'no-store',
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (data && data.country && data.country.length === 2) {
        detectedCode = data.country.toUpperCase();
      }
    }
  } catch (err) {
    // Fall through to next provider
  }

  // Provider B: ipwho.is (Provides full country, region, city and timezone)
  if (!detectedCode) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch('https://ipwho.is/', {
        signal: controller.signal,
        cache: 'no-store',
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && data.country_code) {
          detectedCode = data.country_code.toUpperCase();
          city = data.city || '';
          timeZone = data.timezone?.id || timeZone;
        }
      }
    } catch (err) {
      // Fall through to next provider
    }
  }

  // Provider C: freeipapi.com fallback
  if (!detectedCode) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch('https://freeipapi.com/api/json', {
        signal: controller.signal,
        cache: 'no-store',
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (data && data.countryCode) {
          detectedCode = data.countryCode.toUpperCase();
          city = data.cityName || '';
        }
      }
    } catch (err) {
      // Network offline or blocked
    }
  }

  // 2. Fallback to Browser Timezone only if all IP lookups failed (e.g. offline mode)
  if (!detectedCode && timeZone) {
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
    } else if (timeZone.includes('Karachi')) {
      detectedCode = 'PK';
    } else if (timeZone.includes('Dhaka')) {
      detectedCode = 'BD';
    } else if (timeZone.includes('Lagos')) {
      detectedCode = 'NG';
    } else if (timeZone.includes('Johannesburg')) {
      detectedCode = 'ZA';
    } else if (timeZone.includes('Berlin')) {
      detectedCode = 'DE';
    } else if (timeZone.includes('Paris')) {
      detectedCode = 'FR';
    } else if (timeZone.includes('Madrid')) {
      detectedCode = 'ES';
    } else if (timeZone.includes('Rome')) {
      detectedCode = 'IT';
    } else if (timeZone.includes('Amsterdam')) {
      detectedCode = 'NL';
    } else if (timeZone.includes('Manila')) {
      detectedCode = 'PH';
    } else if (timeZone.includes('Kuala_Lumpur')) {
      detectedCode = 'MY';
    } else if (timeZone.includes('Hong_Kong')) {
      detectedCode = 'HK';
    } else if (timeZone.includes('Riyadh')) {
      detectedCode = 'SA';
    } else if (timeZone.includes('Qatar')) {
      detectedCode = 'QA';
    } else if (timeZone.includes('Colombo')) {
      detectedCode = 'LK';
    } else if (timeZone.includes('Kathmandu')) {
      detectedCode = 'NP';
    } else if (timeZone.includes('Nairobi')) {
      detectedCode = 'KE';
    } else if (timeZone.includes('Accra')) {
      detectedCode = 'GH';
    } else if (timeZone.includes('Dublin')) {
      detectedCode = 'IE';
    } else if (timeZone.includes('Singapore')) {
      detectedCode = 'SG';
    } else if (timeZone.includes('Auckland')) {
      detectedCode = 'NZ';
    }
  }

  // 3. Ultimate default fallback
  if (!detectedCode) {
    detectedCode = 'GB';
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

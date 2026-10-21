// =============================================================================
// SARVIKA™ Manual Regional Pricing Configuration
// -----------------------------------------------------------------------------
// You can directly edit, add, or customize country prices in this file!
// No automatic currency calculations are applied — what is written here is
// exactly what visitors will see.
// =============================================================================

export const DEFAULT_COUNTRY_CODE = 'GB';

/**
 * Manual country pricing dictionary.
 * To change a price or note for a country, simply update the values below.
 * To add a new country, copy any block and change the code (e.g., 'SG', 'NZ').
 */
export const MANUAL_PRICING_CONFIG = {
  // United Kingdom
  GB: {
    code: 'GB',
    name: 'United Kingdom',
    currencySymbol: '£',
    currencyCode: 'GBP',
    plans: {
      starter: '199',
      professional: '299',
      enterprise: '699',
    },
    installationNote: 'One time Installation cost is £750, Current offer is 50% off £375 for installation.',
    trainingNote: 'One time training cost for 2 hours is £350, Currently it is free.',
  },

  // India
  IN: {
    code: 'IN',
    name: 'India',
    currencySymbol: '₹',
    currencyCode: 'INR',
    plans: {
      starter: '14,999',
      professional: '24,999',
      enterprise: '49,999',
    },
    installationNote: 'One time Installation cost is ₹30,000, Current offer is 50% off ₹15,000 for installation.',
    trainingNote: 'One time training cost for 2 hours is ₹15,000, Currently it is free.',
  },

  // Singapore
  SG: {
    code: 'SG',
    name: 'Singapore',
    currencySymbol: 'S$',
    currencyCode: 'SGD',
    plans: {
      starter: '349',
      professional: '529',
      enterprise: '1,249',
    },
    installationNote: 'One time Installation cost is S$1,300, Current offer is 50% off S$650 for installation.',
    trainingNote: 'One time training cost for 2 hours is S$600, Currently it is free.',
  },

  // United States & Global
  US: {
    code: 'US',
    name: 'United States',
    currencySymbol: '$',
    currencyCode: 'USD',
    plans: {
      starter: '249',
      professional: '379',
      enterprise: '899',
    },
    installationNote: 'One time Installation cost is $950, Current offer is 50% off $475 for installation.',
    trainingNote: 'One time training cost for 2 hours is $450, Currently it is free.',
  },

  // United Arab Emirates
  AE: {
    code: 'AE',
    name: 'United Arab Emirates',
    currencySymbol: 'AED ',
    currencyCode: 'AED',
    plans: {
      starter: '899',
      professional: '1,399',
      enterprise: '3,299',
    },
    installationNote: 'One time Installation cost is 3,500 AED, Current offer is 50% off 1,750 AED for installation.',
    trainingNote: 'One time training cost for 2 hours is 1,600 AED, Currently it is free.',
  },

  // Canada
  CA: {
    code: 'CA',
    name: 'Canada',
    currencySymbol: 'C$',
    currencyCode: 'CAD',
    plans: {
      starter: '339',
      professional: '499',
      enterprise: '1,199',
    },
    installationNote: 'One time Installation cost is C$1,250, Current offer is 50% off C$625 for installation.',
    trainingNote: 'One time training cost for 2 hours is C$600, Currently it is free.',
  },

  // Australia
  AU: {
    code: 'AU',
    name: 'Australia',
    currencySymbol: 'A$',
    currencyCode: 'AUD',
    plans: {
      starter: '379',
      professional: '569',
      enterprise: '1,349',
    },
    installationNote: 'One time Installation cost is A$1,400, Current offer is 50% off A$700 for installation.',
    trainingNote: 'One time training cost for 2 hours is A$650, Currently it is free.',
  },

  // New Zealand
  NZ: {
    code: 'NZ',
    name: 'New Zealand',
    currencySymbol: 'NZ$',
    currencyCode: 'NZD',
    plans: {
      starter: '399',
      professional: '599',
      enterprise: '1,399',
    },
    installationNote: 'One time Installation cost is NZ$1,450, Current offer is 50% off NZ$725 for installation.',
    trainingNote: 'One time training cost for 2 hours is NZ$700, Currently it is free.',
  },

  // Malaysia
  MY: {
    code: 'MY',
    name: 'Malaysia',
    currencySymbol: 'RM ',
    currencyCode: 'MYR',
    plans: {
      starter: '999',
      professional: '1,599',
      enterprise: '3,699',
    },
    installationNote: 'One time Installation cost is RM 3,800, Current offer is 50% off RM 1,900 for installation.',
    trainingNote: 'One time training cost for 2 hours is RM 1,700, Currently it is free.',
  },

  // Hong Kong
  HK: {
    code: 'HK',
    name: 'Hong Kong',
    currencySymbol: 'HK$',
    currencyCode: 'HKD',
    plans: {
      starter: '1,999',
      professional: '2,999',
      enterprise: '6,999',
    },
    installationNote: 'One time Installation cost is HK$7,500, Current offer is 50% off HK$3,750 for installation.',
    trainingNote: 'One time training cost for 2 hours is HK$3,500, Currently it is free.',
  },

  // Pakistan
  PK: {
    code: 'PK',
    name: 'Pakistan',
    currencySymbol: 'PKR ',
    currencyCode: 'PKR',
    plans: {
      starter: '49,999',
      professional: '79,999',
      enterprise: '179,999',
    },
    installationNote: 'One time Installation cost is PKR 100,000, Current offer is 50% off PKR 50,000 for installation.',
    trainingNote: 'One time training cost for 2 hours is PKR 50,000, Currently it is free.',
  },

  // Bangladesh
  BD: {
    code: 'BD',
    name: 'Bangladesh',
    currencySymbol: 'BDT ',
    currencyCode: 'BDT',
    plans: {
      starter: '24,999',
      professional: '39,999',
      enterprise: '89,999',
    },
    installationNote: 'One time Installation cost is BDT 50,000, Current offer is 50% off BDT 25,000 for installation.',
    trainingNote: 'One time training cost for 2 hours is BDT 25,000, Currently it is free.',
  },

  // South Africa
  ZA: {
    code: 'ZA',
    name: 'South Africa',
    currencySymbol: 'R ',
    currencyCode: 'ZAR',
    plans: {
      starter: '3,999',
      professional: '5,999',
      enterprise: '13,999',
    },
    installationNote: 'One time Installation cost is R 15,000, Current offer is 50% off R 7,500 for installation.',
    trainingNote: 'One time training cost for 2 hours is R 7,000, Currently it is free.',
  },

  // Nigeria
  NG: {
    code: 'NG',
    name: 'Nigeria',
    currencySymbol: '₦',
    currencyCode: 'NGN',
    plans: {
      starter: '299,000',
      professional: '499,000',
      enterprise: '1,199,000',
    },
    installationNote: 'One time Installation cost is ₦1,200,000, Current offer is 50% off ₦600,000 for installation.',
    trainingNote: 'One time training cost for 2 hours is ₦500,000, Currently it is free.',
  },

  // Saudi Arabia
  SA: {
    code: 'SA',
    name: 'Saudi Arabia',
    currencySymbol: 'SAR ',
    currencyCode: 'SAR',
    plans: {
      starter: '899',
      professional: '1,399',
      enterprise: '3,299',
    },
    installationNote: 'One time Installation cost is SAR 3,500, Current offer is 50% off SAR 1,750 for installation.',
    trainingNote: 'One time training cost for 2 hours is SAR 1,600, Currently it is free.',
  },

  // Qatar
  QA: {
    code: 'QA',
    name: 'Qatar',
    currencySymbol: 'QAR ',
    currencyCode: 'QAR',
    plans: {
      starter: '899',
      professional: '1,399',
      enterprise: '3,299',
    },
    installationNote: 'One time Installation cost is QAR 3,500, Current offer is 50% off QAR 1,750 for installation.',
    trainingNote: 'One time training cost for 2 hours is QAR 1,600, Currently it is free.',
  },

  // European Union
  EU: {
    code: 'EU',
    name: 'Europe (Eurozone)',
    currencySymbol: '€',
    currencyCode: 'EUR',
    plans: {
      starter: '229',
      professional: '349',
      enterprise: '799',
    },
    installationNote: 'One time Installation cost is €850, Current offer is 50% off €425 for installation.',
    trainingNote: 'One time training cost for 2 hours is €400, Currently it is free.',
  },
};

/**
 * Common plan features and specifications
 */
export const BASE_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    popular: false,
    description: 'Perfect for small teams',
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
];

export const PRICING_EXTRAS = {
  caseWorkerInfo: {
    title: 'Who can be a Case Worker?',
    description:
      'A Case Worker can be anyone outside of your organisation, such as an external consultant, barrister, translator, accountant or other third party who works on your cases.',
  },
  customPlan: {
    title: 'Need a different setup?',
    description: 'Contact us for a customised plan to suit your practice.',
    ctaText: 'Contact Us',
    ctaHref: '#contact',
  },
};

/**
 * Returns the manual pricing configuration for a given country code.
 * Falls back to EU for European countries, US (Global USD) for other unlisted countries, or DEFAULT_COUNTRY_CODE (GB).
 */
export function getPricingForCountry(countryCode) {
  if (!countryCode) return MANUAL_PRICING_CONFIG[DEFAULT_COUNTRY_CODE];
  const code = countryCode.toUpperCase();
  if (MANUAL_PRICING_CONFIG[code]) {
    return MANUAL_PRICING_CONFIG[code];
  }

  // European countries fallback to EU
  const euCodes = ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'IE', 'PT', 'GR', 'FI', 'SE', 'DK', 'PL'];
  if (euCodes.includes(code) && MANUAL_PRICING_CONFIG.EU) {
    return MANUAL_PRICING_CONFIG.EU;
  }

  // Default to Global USD ($) for international visitors not specifically configured
  if (MANUAL_PRICING_CONFIG.US) {
    return MANUAL_PRICING_CONFIG.US;
  }

  return MANUAL_PRICING_CONFIG[DEFAULT_COUNTRY_CODE];
}

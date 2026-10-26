// =============================================================================
// SARVIKA™ Email SMTP Configuration
// Loads credentials securely from environment variables or local uncommitted files
// Sensitive credentials are NEVER committed to git.
// =============================================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadLocalSettings() {
  if (typeof process === 'undefined') return {};

  // 1. Read local uncommitted .env if present (gitignored)
  const candidatePaths = [
    path.resolve(__dirname, '..', '.env'),
    process.cwd ? path.resolve(process.cwd(), '.env') : null,
    path.resolve(__dirname, '.env'),
  ].filter(Boolean);

  for (const envFilePath of candidatePaths) {
    try {
      if (fs.existsSync(envFilePath)) {
        const lines = fs.readFileSync(envFilePath, 'utf-8').split('\n');
        lines.forEach((line) => {
          const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
          if (match && !match[1].startsWith('#')) {
            const key = match[1];
            let val = (match[2] || '').trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1);
            }
            if (!process.env[key]) process.env[key] = val;
          }
        });
        break;
      }
    } catch {
      // Silent fallback
    }
  }

  // 2. Read local uncommitted email JSON if present (gitignored)
  let localSettings = {};
  try {
    const emailFilePath = path.resolve(process.cwd(), 'email');
    if (fs.existsSync(emailFilePath)) {
      const raw = fs.readFileSync(emailFilePath, 'utf-8');
      const parsed = JSON.parse(raw);
      localSettings = parsed.Email || parsed.EmailSettings || {};
    }
  } catch {
    // Silent fallback to env vars
  }

  return localSettings;
}

export const EMAIL_CONFIG = {
  get host() {
    const local = loadLocalSettings();
    return process.env.SMTP_SERVER || local.Host || local.SmtpServer || 'smtp.gmail.com';
  },
  get port() {
    const local = loadLocalSettings();
    return Number(process.env.SMTP_PORT || local.Port || 587);
  },
  get secure() {
    const local = loadLocalSettings();
    const port = Number(process.env.SMTP_PORT || local.Port || 587);
    return port === 465;
  },
  get auth() {
    const local = loadLocalSettings();
    return {
      user: process.env.SMTP_USERNAME || local.Username || 'info@sarvika.co.uk',
      pass: process.env.SMTP_PASSWORD || local.Password || '',
    };
  },
  get from() {
    const local = loadLocalSettings();
    return process.env.EMAIL_FROM || local.FromAddress || local.From || process.env.SMTP_USERNAME || local.Username || 'info@sarvika.co.uk';
  },
  get fromName() {
    const local = loadLocalSettings();
    return process.env.EMAIL_FROM_NAME || local.FromName || 'Sarvika License Service';
  },
  get to() {
    const local = loadLocalSettings();
    return process.env.EMAIL_TO || local.To || 'info@sarvika.co.uk';
  },
};

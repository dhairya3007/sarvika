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
  // 1. Read local uncommitted .env if present (gitignored)
  const envCandidates = [
    path.resolve(process.cwd(), '.env'),
    path.resolve(__dirname, '..', '.env'),
  ];
  for (const envFilePath of envCandidates) {
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
      // Continue to next candidate
    }
  }

  // 2. Read local uncommitted email JSON if present (gitignored)
  const emailCandidates = [
    path.resolve(process.cwd(), 'email'),
    path.resolve(__dirname, '..', 'email'),
  ];
  let localSettings = {};
  for (const emailFilePath of emailCandidates) {
    try {
      if (fs.existsSync(emailFilePath)) {
        const raw = fs.readFileSync(emailFilePath, 'utf-8');
        const parsed = JSON.parse(raw);
        localSettings = parsed.EmailSettings || {};
        break;
      }
    } catch {
      // Continue to next candidate
    }
  }

  return localSettings;
}

export const EMAIL_CONFIG = {
  get host() {
    const local = loadLocalSettings();
    return process.env.SMTP_SERVER || local.SmtpServer || 'smtp.gmail.com';
  },
  get port() {
    const local = loadLocalSettings();
    return Number(process.env.SMTP_PORT || local.Port || 465);
  },
  get secure() {
    return true;
  },
  get auth() {
    const local = loadLocalSettings();
    return {
      user: process.env.SMTP_USERNAME || local.Username || '',
      pass: process.env.SMTP_PASSWORD || local.Password || '',
    };
  },
  get from() {
    const local = loadLocalSettings();
    return process.env.EMAIL_FROM || local.From || process.env.SMTP_USERNAME || local.Username || 'Info2zamir@gmail.com';
  },
  get to() {
    const local = loadLocalSettings();
    return process.env.EMAIL_TO || local.To || 'Info@sarvika.co.uk';
  },
};

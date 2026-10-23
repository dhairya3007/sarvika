// =============================================================================
// SARVIKA™ Email SMTP Configuration
// Loads credentials securely from environment variables or local uncommitted files
// Sensitive credentials are NEVER committed to git.
// =============================================================================

import fs from 'fs';
import path from 'path';

// 1. Read local uncommitted .env if present (gitignored)
try {
  const envFilePath = path.resolve(process.cwd(), '.env');
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
  }
} catch {
  // Silent fallback
}

// 2. Read local uncommitted email JSON if present (gitignored)
let localSettings = {};
try {
  const emailFilePath = path.resolve(process.cwd(), 'email');
  if (fs.existsSync(emailFilePath)) {
    const raw = fs.readFileSync(emailFilePath, 'utf-8');
    const parsed = JSON.parse(raw);
    localSettings = parsed.EmailSettings || {};
  }
} catch {
  // Silent fallback to env vars
}

export const EMAIL_CONFIG = {
  host: process.env.SMTP_SERVER || localSettings.SmtpServer || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || localSettings.Port || 465),
  secure: true, // port 465 SSL
  auth: {
    user: process.env.SMTP_USERNAME || localSettings.Username || '',
    pass: process.env.SMTP_PASSWORD || localSettings.Password || '',
  },
  from: process.env.EMAIL_FROM || localSettings.From || '',
  to: process.env.EMAIL_TO || localSettings.To || 'Info@sarvika.co.uk',
};

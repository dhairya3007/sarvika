// =============================================================================
// SARVIKA™ Email SMTP Configuration
// Loads credentials from environment variables or local email settings file
// =============================================================================

import fs from 'fs';
import path from 'path';

let localSettings = {};
try {
  const emailFilePath = path.resolve(process.cwd(), 'email');
  if (fs.existsSync(emailFilePath)) {
    const raw = fs.readFileSync(emailFilePath, 'utf-8');
    const parsed = JSON.parse(raw);
    localSettings = parsed.EmailSettings || {};
  }
} catch (e) {
  // Silent fallback to env vars
}

export const EMAIL_CONFIG = {
  host: process.env.SMTP_SERVER || localSettings.SmtpServer || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || localSettings.Port || 465),
  secure: true, // port 465 SSL
  auth: {
    user: process.env.SMTP_USERNAME || localSettings.Username || 'Info2zamir@gmail.com',
    pass: process.env.SMTP_PASSWORD || localSettings.Password || '',
  },
  from: process.env.EMAIL_FROM || localSettings.From || 'Info2zamir@gmail.com',
  to: process.env.EMAIL_TO || localSettings.To || 'dhairyapatel3007@gmail.com',
};

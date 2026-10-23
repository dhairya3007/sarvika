
// =============================================================================
// Vercel Serverless Function: POST /api/send-email
// =============================================================================

import { sendDemoInquiryEmail } from '../server/emailService.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    if (!data.name) {
      return res.status(400).json({ success: false, error: 'Name is required' });
    }
    if (!data.email || !EMAIL_REGEX.test(String(data.email).trim())) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }
    const result = await sendDemoInquiryEmail(data);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Serverless send-email error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to send email' });
  }
}

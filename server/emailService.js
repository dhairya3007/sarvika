// =============================================================================
// SARVIKA™ Email Dispatcher Service
// Sends lead notification to admin and branded confirmation to the client
// =============================================================================

import nodemailer from 'nodemailer';
import { EMAIL_CONFIG } from './emailConfig.js';
import {
  generateAdminNotificationEmail,
  generateClientConfirmationEmail,
} from './emailTemplates.js';

export function getTransporter() {
  const auth = EMAIL_CONFIG.auth;
  if (!auth.user || !auth.pass) {
    throw new Error('SMTP credentials are not configured. Please add SMTP_USERNAME and SMTP_PASSWORD to your hosting Environment Variables (e.g. Netlify Dashboard).');
  }
  return nodemailer.createTransport({
    host: EMAIL_CONFIG.host,
    port: EMAIL_CONFIG.port,
    secure: EMAIL_CONFIG.secure,
    auth: {
      user: auth.user,
      pass: auth.pass,
    },
  });
}

/**
 * Sends both the team notification email and client confirmation email concurrently in parallel
 * 100% attachment-free: NO files or PDF chips will ever be attached to the email.
 */
export async function sendDemoInquiryEmail(leadData) {
  const mailer = getTransporter();
  const timestamp = new Date().toISOString();
  const payload = { ...leadData, timestamp };

  const adminHtml = generateAdminNotificationEmail(payload);
  const clientHtml = generateClientConfirmationEmail(payload);

  const fullPhone = `${payload.dialCode || ''} ${payload.phone}`.trim();
  const senderName = 'SARVIKA™ Practice Management';

  // 1. Prepare Admin Notification Options (Zero attachments)
  const adminMailOptions = {
    from: `"${senderName}" <${EMAIL_CONFIG.from}>`,
    to: EMAIL_CONFIG.to,
    replyTo: payload.email || undefined,
    subject: `🚀 New Demo Request: ${payload.firmName || 'Practice'} - ${payload.name} (${payload.country || 'Global'})`,
    html: adminHtml,
    text: `New SARVIKA Demo Request\n\nFirm: ${payload.firmName}\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${fullPhone}\nCountry: ${payload.country}\nCity: ${payload.city || 'N/A'}\nNotes: ${payload.message || 'None'}\n`,
  };

  // 2. Prepare Client Confirmation Options (Zero attachments)
  let clientMailOptions = null;
  if (payload.email && payload.email.includes('@')) {
    clientMailOptions = {
      from: `"${senderName}" <${EMAIL_CONFIG.from}>`,
      to: payload.email,
      replyTo: EMAIL_CONFIG.to,
      subject: `Your SARVIKA Demo Request has been received — ${payload.firmName || payload.name}`,
      html: clientHtml,
      text: `Hello ${payload.name},\n\nThank you for requesting a demo of the SARVIKA platform for ${payload.firmName}. Our practice specialist for ${payload.country || 'your region'} will contact you shortly to schedule your live walkthrough.\n\nWarm regards,\nThe SARVIKA Team\ninfo@sarvika.co.uk\n`,
    };
  }

  // 3. Dispatch BOTH concurrently in parallel for maximum speed
  const sendAdminPromise = mailer.sendMail(adminMailOptions);
  const sendClientPromise = clientMailOptions
    ? mailer.sendMail(clientMailOptions).catch((clientErr) => {
        console.warn('[EmailService] Could not send client confirmation copy:', clientErr.message);
        return { messageId: null, error: clientErr.message };
      })
    : Promise.resolve({ messageId: null });

  const [adminResult, clientResult] = await Promise.all([
    sendAdminPromise,
    sendClientPromise,
  ]);

  return {
    success: true,
    adminMessageId: adminResult.messageId,
    clientMessageId: clientResult?.messageId || null,
  };
}

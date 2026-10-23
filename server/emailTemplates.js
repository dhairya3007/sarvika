// =============================================================================
// SARVIKA™ Email Templates
// Responsive, inline-styled email templates for Gmail, Outlook, Apple Mail
// =============================================================================

// Official hosted brand logo URL (clean, reliable across all email clients including Gmail without attachments)
export const EMAIL_LOGO_URL = 'https://cdn.jsdelivr.net/gh/dhairya3007/sarvika@main/public/logosarvika.png';

/**
 * Generates the Admin Notification Email sent to the SARVIKA sales team (Info@sarvika.co.uk)
 */
export function generateAdminNotificationEmail({
  firmName,
  name,
  phone,
  email,
  message,
  country,
  countryCode,
  dialCode,
  city,
  timeZone,
  timestamp,
}) {
  const fullPhone = `${dialCode || ''} ${phone}`.trim();
  const locationDisplay = [city, country].filter(Boolean).join(', ') || 'Global';
  const formattedDate = timestamp
    ? new Date(timestamp).toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'medium',
    })
    : new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'medium' });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New SARVIKA Demo Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f6fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f3f6fa; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 28px rgba(10, 35, 81, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner (Clean White Background) -->
          <tr>
            <td style="background-color: #ffffff; padding: 24px 32px; text-align: left; border-bottom: 2px solid #edf2f7;">
              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <div style="display: inline-block; background-color: #ffffff; padding: 6px 12px; border-radius: 6px;">
                      <img src="${EMAIL_LOGO_URL}" width="190" height="26" alt="SARVIKA Logo" style="display: block; background-color: #ffffff; width: 190px; height: auto; max-height: 28px; border: 0; outline: none;" />
                    </div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <div style="display: inline-block; background-color: #eff6ff; border: 1px solid #bfdbfe; color: #0284c7; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 6px 14px; border-radius: 20px;">
                      NEW
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="font-size: 20px; font-weight: 700; color: #0a2351; margin: 0 0 16px 0;">
                New Practice Walkthrough Request Received
              </h1>
              <p style="font-size: 15px; color: #475569; margin: 0 0 24px 0; line-height: 1.5;">
                A practice representative has submitted a demo request through the SARVIKA website. Details are summarised below:
              </p>

              <!-- Lead Info Card -->
              <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; width: 35%;">
                    Practice / Firm Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 700; color: #0a2351;">
                    ${firmName || 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Contact Person
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 700; color: #0a2351;">
                    ${name || 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Work Email
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #0b8fdd; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Phone Number
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 700; color: #0a2351;">
                    <a href="tel:${fullPhone.replace(/\s+/g, '')}" style="color: #0a2351; text-decoration: none;">${fullPhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
                    Region / Location
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #334155; font-weight: 600;">
                    ${locationDisplay} ${countryCode ? `(${countryCode})` : ''}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 600; color: #64748b;">
                    Submission Time
                  </td>
                  <td style="padding: 14px 18px; font-size: 13px; color: #64748b;">
                    ${formattedDate} ${timeZone ? `• ${timeZone}` : ''}
                  </td>
                </tr>
              </table>

              <!-- Message / Requirements Block -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 8px;">
                  Practice Requirements / Notes
                </div>
                <div style="background-color: #f1f5f9; border-left: 4px solid #0b8fdd; padding: 16px 18px; border-radius: 4px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">
                  ${message ? message : '<em>No additional notes provided by client.</em>'}
                </div>
              </div>

              <!-- Quick Action Buttons -->
              <table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 10px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=SARVIKA%20Demo%20Walkthrough%20-%20${encodeURIComponent(firmName || '')}" style="display: inline-block; background: #0b8fdd; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; margin: 0 6px 10px 6px;">
                      ✉️ Reply via Email
                    </a>
                    <a href="tel:${fullPhone.replace(/\s+/g, '')}" style="display: inline-block; background: #0a2351; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; margin: 0 6px 10px 6px;">
                      📞 Call ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0 0 4px 0;">This notification was generated automatically by the SARVIKA Website Contact System.</p>
              <p style="margin: 0;">© ${new Date().getFullYear()} SARVIKA. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Generates the Client Confirmation Email sent to the person who filled the demo request form
 */
export function generateClientConfirmationEmail({ firmName, name, phone, email, dialCode, country }) {
  const fullPhone = `${dialCode || ''} ${phone}`.trim();
  const firstName = name ? name.split(' ')[0] : 'there';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for requesting a SARVIKA Demo</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f6fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f3f6fa; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 28px rgba(10, 35, 81, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner (Clean White Background) -->
          <tr>
            <td style="background-color: #ffffff; padding: 24px 32px; text-align: left; border-bottom: 2px solid #edf2f7;">
              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <div style="display: inline-block; background-color: #ffffff; padding: 6px 12px; border-radius: 6px;">
                      <img src="${EMAIL_LOGO_URL}" width="190" height="26" alt="SARVIKA Logo" style="display: block; background-color: #ffffff; width: 190px; height: auto; max-height: 28px; border: 0; outline: none;" />
                    </div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <div style="display: inline-block; background-color: #eff6ff; border: 1px solid #bfdbfe; color: #0284c7; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 6px 14px; border-radius: 20px;">
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 36px 32px;">
              <h1 style="font-size: 22px; font-weight: 700; color: #0a2351; margin: 0 0 16px 0;">
                Thank You, ${firstName}!
              </h1>
              
              <p style="font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 18px 0;">
                We have received your demo request for <strong>${firmName}</strong>.
              </p>

              <p style="font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 24px 0;">
                One of our dedicated practice specialists for <strong>${country || 'your region'}</strong> will contact you shortly via email or at <strong>${fullPhone}</strong> to schedule a live, personalized walkthrough of the SARVIKA platform.
              </p>

              <p style="font-size: 14px; color: #64748b; line-height: 1.6; margin: 0 0 20px 0;">
                If you have immediate questions or urgent requirements, feel free to reply directly to this email or contact us at <a href="mailto:Info@sarvika.co.uk" style="color: #0b8fdd; text-decoration: none; font-weight: 600;">Info@sarvika.co.uk</a>.
              </p>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 14px; color: #334155;">
                Warm regards,<br>
                <strong style="color: #0a2351;">The SARVIKA Practice Team</strong><br>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0 0 4px 0;">You received this email because a demo walkthrough was requested for ${email}.</p>
              <p style="margin: 0;">© ${new Date().getFullYear()} SARVIKA. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

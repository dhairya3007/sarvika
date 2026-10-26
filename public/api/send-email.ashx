<%@ WebHandler Language="C#" Class="SendEmailHandler" %>

// =============================================================================
// SARVIKA Native Windows IIS ASP.NET Email Handler
// Dispatches responsive, beautifully styled HTML emails with brand logo
// Runs natively on IIS without Node.js
// =============================================================================

using System;
using System.Web;
using System.Net;
using System.Net.Mail;
using System.IO;
using System.Web.Script.Serialization;
using System.Collections.Generic;
using System.Text;

public class SendEmailHandler : IHttpHandler {

    private const string EMAIL_LOGO_URL = "https://cdn.jsdelivr.net/gh/dhairya3007/sarvika@main/public/logosarvika.png";

    public void ProcessRequest(HttpContext context) {
        context.Response.ContentType = "application/json; charset=utf-8";
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        context.Response.AddHeader("Access-Control-Allow-Methods", "POST, OPTIONS, GET");

        // 1. CORS Preflight
        if (context.Request.HttpMethod == "OPTIONS") {
            context.Response.StatusCode = 204;
            return;
        }

        // 2. Health check on GET
        if (context.Request.HttpMethod == "GET") {
            context.Response.StatusCode = 200;
            context.Response.Write("{\"status\":\"ok\",\"service\":\"SARVIKA IIS ASP.NET Email Handler\"}");
            return;
        }

        if (context.Request.HttpMethod != "POST") {
            context.Response.StatusCode = 405;
            context.Response.Write("{\"success\":false,\"error\":\"Method not allowed\"}");
            return;
        }

        try {
            string json;
            using (var reader = new StreamReader(context.Request.InputStream, Encoding.UTF8)) {
                json = reader.ReadToEnd();
            }

            var serializer = new JavaScriptSerializer();
            var data = serializer.Deserialize<Dictionary<string, object>>(json);

            if (data == null || !data.ContainsKey("name") || string.IsNullOrWhiteSpace(data["name"] != null ? data["name"].ToString() : "")) {
                context.Response.StatusCode = 400;
                context.Response.Write("{\"success\":false,\"error\":\"Name is required.\"}");
                return;
            }

            if (!data.ContainsKey("email") || string.IsNullOrWhiteSpace(data["email"] != null ? data["email"].ToString() : "")) {
                context.Response.StatusCode = 400;
                context.Response.Write("{\"success\":false,\"error\":\"Please enter a valid email address.\"}");
                return;
            }

            string name = data["name"].ToString().Trim();
            string email = data["email"].ToString().Trim();
            string phone = data.ContainsKey("phone") && data["phone"] != null ? data["phone"].ToString().Trim() : "N/A";
            string firmName = data.ContainsKey("organization") && data["organization"] != null ? data["organization"].ToString().Trim() : "N/A";
            string country = data.ContainsKey("country") && data["country"] != null ? data["country"].ToString().Trim() : "";
            string city = data.ContainsKey("city") && data["city"] != null ? data["city"].ToString().Trim() : "";
            string dialCode = data.ContainsKey("dialCode") && data["dialCode"] != null ? data["dialCode"].ToString().Trim() : "";
            string timeZone = data.ContainsKey("timeZone") && data["timeZone"] != null ? data["timeZone"].ToString().Trim() : "";
            string message = data.ContainsKey("message") && data["message"] != null ? data["message"].ToString().Trim() : "";

            string fullPhone = (dialCode + " " + phone).Trim();
            string locationDisplay = (!string.IsNullOrEmpty(city) ? city + ", " : "") + (!string.IsNullOrEmpty(country) ? country : "Global");
            string formattedDate = DateTime.UtcNow.ToString("dddd, d MMMM yyyy HH:mm:ss") + " UTC";

            // Enforce TLS 1.2
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | (SecurityProtocolType)3072;

            // Gmail SMTP credentials
            string smtpHost = "smtp.gmail.com";
            int smtpPort = 587;
            string smtpUser = "info@sarvika.co.uk";
            string smtpPass = "jldw npww glgx tdkx";

            using (var smtp = new SmtpClient(smtpHost, smtpPort)) {
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential(smtpUser, smtpPass);
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Timeout = 15000;

                // 1. Team Notification Email (Rich HTML Template)
                using (var adminMail = new MailMessage()) {
                    adminMail.From = new MailAddress(smtpUser, "SARVIKA Portal", Encoding.UTF8);
                    adminMail.To.Add("info@sarvika.co.uk");
                    adminMail.Subject = "SARVIKA Demo Request: " + name;
                    adminMail.SubjectEncoding = Encoding.UTF8;
                    adminMail.BodyEncoding = Encoding.UTF8;
                    adminMail.HeadersEncoding = Encoding.UTF8;
                    adminMail.IsBodyHtml = true;
                    adminMail.Body = BuildAdminHtml(firmName, name, fullPhone, email, locationDisplay, formattedDate, timeZone, message);

                    smtp.Send(adminMail);
                }

                // 2. Client Auto-confirmation Email (Rich HTML Template)
                try {
                    using (var clientMail = new MailMessage()) {
                        clientMail.From = new MailAddress(smtpUser, "SARVIKA Team", Encoding.UTF8);
                        clientMail.To.Add(email);
                        clientMail.Subject = "Thank you for requesting a SARVIKA Demo";
                        clientMail.SubjectEncoding = Encoding.UTF8;
                        clientMail.BodyEncoding = Encoding.UTF8;
                        clientMail.HeadersEncoding = Encoding.UTF8;
                        clientMail.IsBodyHtml = true;
                        clientMail.Body = BuildClientHtml(name, firmName, country, fullPhone, email);

                        smtp.Send(clientMail);
                    }
                } catch {
                    // Suppress client bounce so inquiry itself is not lost
                }
            }

            context.Response.StatusCode = 200;
            context.Response.Write("{\"success\":true,\"message\":\"Demo inquiry received and processed successfully.\"}");
        } catch (Exception ex) {
            context.Response.StatusCode = 500;
            string errMessage = ex.Message.Replace("\"", "'").Replace("\r", " ").Replace("\n", " ");
            context.Response.Write("{\"success\":false,\"error\":\"" + errMessage + "\"}");
        }
    }

    private string BuildAdminHtml(string firmName, string name, string fullPhone, string email, string locationDisplay, string formattedDate, string timeZone, string message) {
        string cleanNotes = !string.IsNullOrWhiteSpace(message) ? HttpUtility.HtmlEncode(message) : "<em>No additional notes provided by client.</em>";
        string callPhone = fullPhone.Replace(" ", "");
        string phoneRowValue = (!string.IsNullOrWhiteSpace(callPhone) && callPhone != "N/A")
            ? ("<a href=\"tel:" + callPhone + "\" style=\"color: #0a2351; text-decoration: none; font-weight: 600;\">" + HttpUtility.HtmlEncode(fullPhone) + "</a>")
            : HttpUtility.HtmlEncode(fullPhone);

        string callButtonHtml = (!string.IsNullOrWhiteSpace(callPhone) && callPhone != "N/A")
            ? ("<a href=\"tel:" + callPhone + "\" style=\"display: inline-block; background: #0a2351; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; margin: 0 6px 10px 6px;\">&#128222; Call " + HttpUtility.HtmlEncode(name) + "</a>")
            : "";

        return @"<!DOCTYPE html>
<html lang=""en"">
<head>
  <meta charset=""UTF-8"">
  <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
  <title>New SARVIKA Demo Request</title>
</head>
<body style=""margin: 0; padding: 0; background-color: #f3f6fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;"">
  <table role=""presentation"" width=""100%"" cellspacing=""0"" cellpadding=""0"" border=""0"" style=""background-color: #f3f6fa; padding: 30px 10px;"">
    <tr>
      <td align=""center"">
        <table role=""presentation"" width=""100%"" style=""max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 28px rgba(10, 35, 81, 0.08); border: 1px solid #e2e8f0;"">
          
          <!-- Header Banner -->
          <tr>
            <td style=""background-color: #ffffff; padding: 24px 32px; text-align: left; border-bottom: 2px solid #edf2f7;"">
              <img src=""" + EMAIL_LOGO_URL + @""" width=""190"" alt=""SARVIKA Logo"" style=""display: block; width: 190px; height: auto; max-height: 28px; border: 0; outline: none;"" />
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style=""padding: 32px;"">
              <h1 style=""font-size: 20px; font-weight: 700; color: #0a2351; margin: 0 0 16px 0;"">
                New Practice Walkthrough Request Received
              </h1>
              <p style=""font-size: 15px; color: #475569; margin: 0 0 24px 0; line-height: 1.5;"">
                A practice representative has submitted a demo request through the SARVIKA website. Details are summarised below:
              </p>

              <!-- Lead Info Card -->
              <table width=""100%"" cellspacing=""0"" cellpadding=""0"" border=""0"" style=""background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;"">
                <tr>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; width: 35%;"">Practice / Firm Name</td>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 700; color: #0a2351;"">" + HttpUtility.HtmlEncode(firmName) + @"</td>
                </tr>
                <tr>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;"">Contact Person</td>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 700; color: #0a2351;"">" + HttpUtility.HtmlEncode(name) + @"</td>
                </tr>
                <tr>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;"">Work Email</td>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 600;""><a href=""mailto:" + email + @""" style=""color: #0b8fdd; text-decoration: none;"">" + email + @"</a></td>
                </tr>
                <tr>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;"">Phone Number</td>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 600; color: #1e293b;"">" + phoneRowValue + @"</td>
                </tr>
                <tr>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;"">Location</td>
                  <td style=""padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #334155;"">" + HttpUtility.HtmlEncode(locationDisplay) + @"</td>
                </tr>
                <tr>
                  <td style=""padding: 14px 18px; font-size: 13px; font-weight: 600; color: #64748b;"">Submission Time</td>
                  <td style=""padding: 14px 18px; font-size: 13px; color: #64748b;"">" + formattedDate + @"</td>
                </tr>
              </table>

              <!-- Message Block -->
              <div style=""margin-bottom: 28px;"">
                <div style=""font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 8px;"">Practice Requirements / Notes</div>
                <div style=""background-color: #f1f5f9; border-left: 4px solid #0b8fdd; padding: 16px 18px; border-radius: 4px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;"">" + cleanNotes + @"</div>
              </div>

              <!-- Quick Action Buttons -->
              <table width=""100%"" cellspacing=""0"" cellpadding=""0"" border=""0"" style=""margin-top: 10px;"">
                <tr>
                  <td align=""center"">
                    <a href=""mailto:" + email + @"?subject=SARVIKA%20Demo%20Walkthrough"" style=""display: inline-block; background: #0b8fdd; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; margin: 0 6px 10px 6px;"">&#9993;&#65039; Reply via Email</a>
                    " + callButtonHtml + @"
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style=""background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;"">
              <p style=""margin: 0 0 4px 0;"">This notification was generated automatically by the SARVIKA Website Contact System.</p>
              <p style=""margin: 0;"">&copy; " + DateTime.UtcNow.Year + @" SARVIKA. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>";
    }

    private string BuildClientHtml(string name, string firmName, string country, string fullPhone, string email) {
        string firstName = !string.IsNullOrWhiteSpace(name) ? name.Split(' ')[0] : "there";
        string targetRegion = !string.IsNullOrWhiteSpace(country) ? country : "your region";
        string phoneClean = fullPhone.Replace(" ", "");
        string phoneNotice = (!string.IsNullOrWhiteSpace(fullPhone) && fullPhone != "N/A")
            ? (" or at <strong style=\"color: #0a2351;\"><a href=\"tel:" + phoneClean + "\" style=\"color: #0b8fdd; text-decoration: none;\">" + HttpUtility.HtmlEncode(fullPhone) + "</a></strong>")
            : "";

        return @"<!DOCTYPE html>
<html lang=""en"">
<head>
  <meta charset=""UTF-8"">
  <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
  <title>Thank you for requesting a SARVIKA Demo</title>
</head>
<body style=""margin: 0; padding: 0; background-color: #f3f6fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;"">
  <table role=""presentation"" width=""100%"" cellspacing=""0"" cellpadding=""0"" border=""0"" style=""background-color: #f3f6fa; padding: 30px 10px;"">
    <tr>
      <td align=""center"">
        <table role=""presentation"" width=""100%"" style=""max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 28px rgba(10, 35, 81, 0.08); border: 1px solid #e2e8f0;"">
          
          <!-- Header Banner -->
          <tr>
            <td style=""background-color: #ffffff; padding: 24px 32px; text-align: left; border-bottom: 2px solid #edf2f7;"">
              <img src=""" + EMAIL_LOGO_URL + @""" width=""190"" alt=""SARVIKA Logo"" style=""display: block; width: 190px; height: auto; max-height: 28px; border: 0; outline: none;"" />
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style=""padding: 36px 32px;"">
              <h1 style=""font-size: 22px; font-weight: 700; color: #0a2351; margin: 0 0 16px 0;"">
                Thank You, " + HttpUtility.HtmlEncode(firstName) + @"!
              </h1>
              
              <p style=""font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 18px 0;"">
                We have received your demo request" + (!string.IsNullOrWhiteSpace(firmName) && firmName != "N/A" ? " for <strong>" + HttpUtility.HtmlEncode(firmName) + "</strong>" : "") + @".
              </p>

              <p style=""font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 24px 0;"">
                One of our dedicated practice specialists for <strong>" + HttpUtility.HtmlEncode(targetRegion) + @"</strong> will contact you shortly via email" + phoneNotice + @" to schedule a live, personalized walkthrough of the SARVIKA platform.
              </p>

              <p style=""font-size: 14px; color: #64748b; line-height: 1.6; margin: 0 0 20px 0;"">
                If you have immediate questions or urgent requirements, feel free to reply directly to this email or contact us at <a href=""mailto:Info@sarvika.co.uk"" style=""color: #0b8fdd; text-decoration: none; font-weight: 600;"">Info@sarvika.co.uk</a>.
              </p>

              <div style=""border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 14px; color: #334155;"">
                Warm regards,<br>
                <strong style=""color: #0a2351;"">The SARVIKA Practice Team</strong><br>
                <span style=""font-size: 13px; color: #64748b;""><a href=""https://sarvika.co.uk"" style=""color: #0b8fdd; text-decoration: none;"">https://sarvika.co.uk</a></span>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style=""background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;"">
              <p style=""margin: 0 0 4px 0;"">You received this email because a demo walkthrough was requested for " + HttpUtility.HtmlEncode(email) + @".</p>
              <p style=""margin: 0;"">&copy; " + DateTime.UtcNow.Year + @" SARVIKA. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>";
    }

    public bool IsReusable {
        get { return false; }
    }
}

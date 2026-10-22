import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sendDemoInquiryEmail } from './server/emailService.js';

function emailApiPlugin() {
  const handler = async (req, res, next) => {
    // Only handle /api/send-email
    const url = req.url ? req.url.split('?')[0] : '';
    if (url !== '/api/send-email') {
      return next();
    }

    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
      return;
    }

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');

        // Fast payload validation
        if (!data || !data.name) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Name is required' }));
          return;
        }

        // 1. Respond immediately with 200 OK for instant asynchronous UX
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true, message: 'Demo request received successfully' }));

        // 2. Dispatch emails asynchronously in the background
        sendDemoInquiryEmail(data).catch((err) => {
          console.error('[ViteDev] Background email sending error:', err);
        });
      } catch (err) {
        console.error('Error in /api/send-email:', err);
        if (!res.headersSent) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message || 'Invalid JSON' }));
        }
      }
    });
  };

  return {
    name: 'email-api-plugin',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), emailApiPlugin()],
  server: {
    port: 3000,
    host: true,
  },
});

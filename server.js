// =============================================================================
// SARVIKA™ Production Node Server
// Serves static Vite build (dist/) & handles /api/send-email
// Run with: node server.js
// =============================================================================

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendDemoInquiryEmail } from './server/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const server = http.createServer(async (req, res) => {
  const url = req.url ? req.url.split('?')[0] : '/';

  // API Route: POST /api/send-email
  if (url === '/api/send-email') {
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
      return;
    }

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');

        // Fast payload validation
        const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!payload || !payload.name) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Name is required' }));
          return;
        }
        if (!payload.email || !EMAIL_REGEX.test(String(payload.email).trim())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }));
          return;
        }

        // 1. Respond immediately with 200 OK for instant asynchronous UX
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Demo request received successfully' }));

        // 2. Dispatch emails asynchronously in the background
        sendDemoInquiryEmail(payload).catch((err) => {
          console.error('[Server] Background email dispatch error:', err);
        });
      } catch (err) {
        console.error('API Error in send-email:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message || 'Invalid JSON' }));
      }
    });
    return;
  }

  // Static file serving from dist/
  let filePath = path.join(DIST_DIR, url === '/' ? 'index.html' : url);
  const ext = path.extname(filePath).toLowerCase();

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for Single Page Application client routing
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const contentType = MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`SARVIKA server is live on http://localhost:${PORT}`);
});

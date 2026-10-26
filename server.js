// =============================================================================
// SARVIKA Production Node.js Server
// Serves static Vite build (dist/) & handles /api/send-email (Plesk IIS / Node.js)
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
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.mjs': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.xml': 'application/xml; charset=UTF-8',
};

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

const server = http.createServer(async (req, res) => {
  const url = req.url ? req.url.split('?')[0] : '/';

  // 1. CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    res.end();
    return;
  }

  // 2. Health Check Endpoint
  if (url === '/api/health') {
    res.writeHead(200, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'SARVIKA Server (Node.js)' }));
    return;
  }

  // 3. Email API Route: /api/send-email
  if (url === '/api/send-email') {
    if (req.method === 'GET') {
      res.writeHead(200, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', endpoint: 'POST /api/send-email' }));
      return;
    }

    if (req.method !== 'POST') {
      res.writeHead(405, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
      return;
    }

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      // Safeguard against oversized payloads (max 1MB)
      if (body.length > 1e6) {
        req.socket.destroy();
      }
    });

    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');

        // Fast payload validation
        const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!payload || !payload.name) {
          res.writeHead(400, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Name is required' }));
          return;
        }
        if (!payload.email || !EMAIL_REGEX.test(String(payload.email).trim())) {
          res.writeHead(400, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }));
          return;
        }

        // Fast immediate acknowledgment for responsive UX
        res.writeHead(200, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Demo request received successfully' }));

        // Dispatch emails asynchronously in the background
        sendDemoInquiryEmail(payload).catch((err) => {
          console.error('[Server] Background email dispatch error:', err);
        });
      } catch (err) {
        console.error('API Error in send-email:', err);
        res.writeHead(400, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message || 'Invalid JSON' }));
      }
    });
    return;
  }

  // 4. Static file serving from dist/
  // Prevent directory traversal attacks
  const safeSuffix = path.normalize(url).replace(/^(\.\.[/\\])+/, '');
  let filePath = path.join(DIST_DIR, safeSuffix === '/' ? 'index.html' : safeSuffix);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Single Page Application (SPA) fallback to index.html
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      res.writeHead(200, {
        'Content-Type': contentType,
        ...(ext === '.html' ? { 'Cache-Control': 'no-cache' } : { 'Cache-Control': 'public, max-age=31536000, immutable' }),
      });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`SARVIKA production server is running on port ${PORT}`);
});

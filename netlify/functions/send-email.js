// =============================================================================
// Netlify Serverless Function: POST /api/send-email
// Dual-mode compatibility (v1 handler & v2 export) to eliminate 502 Bad Gateway
// =============================================================================

import { sendDemoInquiryEmail } from '../../server/emailService.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

// 1. Classic Netlify Lambda Handler (v1) - Guaranteed 100% compatible with Netlify rewrites
export async function handler(event, context) {
  // CORS Preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ status: 'ok' }),
    };
  }

  // Only POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ success: false, error: 'Method not allowed' }),
    };
  }

  try {
    let payload = {};
    try {
      payload = typeof event.body === 'string' ? JSON.parse(event.body) : event.body || {};
    } catch {
      payload = {};
    }

    if (!payload || !payload.name) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ success: false, error: 'Name is required' }),
      };
    }

    const result = await sendDemoInquiryEmail(payload);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.error('[Netlify Function send-email] Error:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        error: err.message || 'Failed to dispatch email',
      }),
    };
  }
}

// 2. Netlify Functions v2 Default Export Fallback
export default async (req, context) => {
  if (req && typeof req.json === 'function') {
    if (req.method === 'OPTIONS') {
      return new Response(JSON.stringify({ status: 'ok' }), { status: 200, headers: corsHeaders });
    }
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
    }
    try {
      const payload = await req.json().catch(() => ({}));
      if (!payload || !payload.name) {
        return new Response(JSON.stringify({ success: false, error: 'Name is required' }), { status: 400, headers: corsHeaders });
      }
      const result = await sendDemoInquiryEmail(payload);
      return new Response(JSON.stringify(result), { status: 200, headers: corsHeaders });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message || 'Failed to dispatch email' }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  }

  return handler(req, context);
};

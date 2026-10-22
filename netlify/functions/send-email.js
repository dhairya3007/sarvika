// =============================================================================
// Netlify Serverless Function: POST /api/send-email
// Netlify Functions v2 format with full CORS, preflight, and error handling
// =============================================================================

import { sendDemoInquiryEmail } from '../../server/emailService.js';

export default async (req, context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // 1. Handle browser CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(JSON.stringify({ status: 'ok' }), {
      status: 200,
      headers: corsHeaders,
    });
  }

  // 2. Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      {
        status: 405,
        headers: corsHeaders,
      }
    );
  }

  try {
    let payload = {};
    try {
      payload = await req.json();
    } catch {
      payload = {};
    }

    // Basic validation
    if (!payload || !payload.name) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name is required' }),
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Dispatch email
    const result = await sendDemoInquiryEmail(payload);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error('[Netlify Function send-email] Error:', err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || 'Failed to dispatch email',
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
};

export const config = {
  path: ['/api/send-email', '/.netlify/functions/send-email'],
};

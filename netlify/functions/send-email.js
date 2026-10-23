// =============================================================================
// Netlify Serverless Function: POST /api/send-email
// Universal handler: handles both Netlify v1 (event) and v2 (Web Request)
// =============================================================================

import { sendDemoInquiryEmail } from '../../server/emailService.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

export async function handler(eventOrReq, context) {
  // 1. Check if invoked as Netlify Functions v2 (Web Request)
  if (eventOrReq && typeof eventOrReq.json === 'function') {
    if (eventOrReq.method === 'OPTIONS') {
      return new Response(JSON.stringify({ status: 'ok' }), { status: 200, headers: corsHeaders });
    }
    if (eventOrReq.method !== 'POST') {
      return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
    }
    try {
      const payload = await eventOrReq.json().catch(() => ({}));
      if (!payload || !payload.name) {
        return new Response(JSON.stringify({ success: false, error: 'Name is required' }), { status: 400, headers: corsHeaders });
      }
      const result = await sendDemoInquiryEmail(payload);
      return new Response(JSON.stringify(result), { status: 200, headers: corsHeaders });
    } catch (err) {
      console.error('[Netlify Function send-email v2] Error:', err);
      return new Response(JSON.stringify({ success: false, error: err.message || 'Failed to dispatch email' }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  }

  // 2. Otherwise invoked as Netlify Lambda v1 (event object with httpMethod, body)
  const event = eventOrReq || {};
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ status: 'ok' }),
    };
  }

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
    console.error('[Netlify Function send-email v1] Error:', err);
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

export default handler;

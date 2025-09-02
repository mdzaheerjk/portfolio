# AI Chat Proxy Setup (Cloudflare Workers)

Never expose your Gemini API key directly in client-side JS. Use a tiny proxy.

1) Create a Cloudflare Worker named `gemini-proxy`.

2) Set an environment variable in the Worker dashboard:

- `GEMINI_API_KEY` = your Gemini key

3) Worker code (paste this in your Worker editor):

```js
export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });
    }
    try {
      const { prompt } = await req.json();
      if (!prompt) return new Response(JSON.stringify({ error: 'Missing prompt' }), { status: 400, headers: jsonHeaders() });

      const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
      const res = await fetch(`${url}?key=${env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
      return new Response(JSON.stringify({ text }), { headers: jsonHeaders() });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Proxy error' }), { status: 500, headers: jsonHeaders() });
    }
  }
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };
}
function jsonHeaders() {
  return { 'Content-Type': 'application/json', ...corsHeaders() };
}
```

4) Deploy, then set the URL in `app.js` at `PROXY_ENDPOINT`.

Done. Your client app can safely call the Worker without exposing the key.



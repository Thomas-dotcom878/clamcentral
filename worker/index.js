// Serves the download files (ZIPs, PDFs, etc.) from the R2 bucket "clamcentral-files".
// Website pages and images are served first by Cloudflare's static assets;
// this code only runs when a path isn't part of the website itself,
// e.g. /all-access/new-testament/clambake-curriculum-1nt.zip
export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 });
    }
    const url = new URL(request.url);
    const key = decodeURIComponent(url.pathname.slice(1));
    if (!key || key.endsWith('/')) return notFound();

    if (request.method === 'HEAD') {
      const head = await env.FILES.head(key);
      if (!head) return notFound();
      const headers = baseHeaders(head);
      headers.set('content-length', String(head.size));
      return new Response(null, { headers });
    }

    const obj = await env.FILES.get(key, { range: request.headers, onlyIf: request.headers });
    if (!obj) return notFound();
    const headers = baseHeaders(obj);
    if (!('body' in obj)) return new Response(null, { status: 304, headers });

    let status = 200;
    if (request.headers.has('range') && obj.range) {
      const offset = obj.range.offset ?? obj.size - obj.range.suffix;
      const length = obj.range.length ?? obj.size - offset;
      headers.set('content-range', `bytes ${offset}-${offset + length - 1}/${obj.size}`);
      status = 206;
    }
    return new Response(obj.body, { status, headers });
  },
};

function baseHeaders(obj) {
  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set('etag', obj.httpEtag);
  headers.set('accept-ranges', 'bytes');
  headers.set('cache-control', 'public, max-age=86400');
  return headers;
}

function notFound() {
  return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain' } });
}

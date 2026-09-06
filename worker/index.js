/**
 * Edge middleware for desigr.monster
 * - Canonical host: www → apex (fixes "Alternate page with proper canonical")
 * - Path aliases that would otherwise 404 or duplicate
 * - Never emit 403 for public GET/HEAD (Search Console "Blocked due to access forbidden")
 */
const CANONICAL_HOST = 'desigr.monster';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Prefer HTTPS in Location targets (Cloudflare usually terminates TLS already)
    url.protocol = 'https:';

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      return redirect(url, 301);
    }

    // Keep non-canonical hosts from serving duplicate HTML without a redirect
    if (url.hostname !== CANONICAL_HOST && url.hostname.endsWith(`.${CANONICAL_HOST}`)) {
      url.hostname = CANONICAL_HOST;
      return redirect(url, 301);
    }

    const { pathname } = url;

    if (pathname === '/index.html') {
      url.pathname = '/';
      return redirect(url, 301);
    }

    if (pathname === '/sitemap.xml') {
      url.pathname = '/sitemap-index.xml';
      return redirect(url, 301);
    }

    // Normalize accidental double slashes (except protocol)
    if (pathname.includes('//')) {
      url.pathname = pathname.replace(/\/{2,}/g, '/');
      return redirect(url, 301);
    }

    const response = await env.ASSETS.fetch(request);

    // Defensive: never surface 403 to crawlers for public asset GETs.
    // Remap through assets not_found_handling so Search Console sees a clean 404.
    if (response.status === 403 && (request.method === 'GET' || request.method === 'HEAD')) {
      const notFound = await env.ASSETS.fetch(
        new Request(new URL('/__forbidden-as-not-found__', url.origin), {
          method: 'GET',
          headers: request.headers,
        }),
      );
      return new Response(notFound.body, {
        status: 404,
        statusText: 'Not Found',
        headers: notFound.headers,
      });
    }

    return response;
  },
};

function redirect(url, status) {
  return Response.redirect(url.toString(), status);
}

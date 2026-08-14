import { homeHtml } from "./_content/home";

// Main RAMS 7729 team website, served at "/".
// Dynamic (serverless function) so Vercel reliably routes the path to it:
// force-static route handlers are not mapped to their path on Vercel.
export const dynamic = "force-dynamic";

export function GET() {
  return new Response(homeHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

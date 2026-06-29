import { strategyHtml } from "../_content/strategy";

// Alias for /strategy. Dynamic so Vercel reliably routes the path to it.
export const dynamic = "force-dynamic";

export function GET() {
  return new Response(strategyHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

import { strategyHtml } from "../_content/strategy";

// Alias for /strategy.
export const dynamic = "force-static";

export function GET() {
  return new Response(strategyHtml, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

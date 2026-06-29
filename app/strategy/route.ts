import { strategyHtml } from "../_content/strategy";

// FRC Scouting Platform, served at "/strategy". Self-contained; stores all user
// data in localStorage on this single origin.
export const dynamic = "force-static";

export function GET() {
  return new Response(strategyHtml, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

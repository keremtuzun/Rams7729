import { homeHtml } from "./_content/home";

// Main RAMS 7729 team website, served at "/".
export const dynamic = "force-static";

export function GET() {
  return new Response(homeHtml, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Everything lives in one Next.js app on one origin:
  //   /          -> main team website        (app/route.ts)
  //   /strategy  -> FRC Scouting Platform     (app/strategy/route.ts, alias /scouting)
  //   /ai        -> RAMS AI assistant         (app/ai/page.tsx)
  //   /api/chat  -> RAMS AI backend           (app/api/chat/route.ts)
  // The static pages are embedded as bundled string modules (see
  // scripts/embed-content.mjs) and served via route handlers, which deploy
  // reliably on Vercel.
};

module.exports = nextConfig;

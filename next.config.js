/** @type {import('next').NextConfig} */
const nextConfig = {
  // The main team website and the Scouting Platform are self-contained static
  // HTML apps served from /public. The AI tool runs as a real Next.js route at
  // /ai with its server-side API at /api/chat. Everything lives on one origin,
  // so the Scouting Platform's localStorage data persists reliably.
  async rewrites() {
    return {
      beforeFiles: [
        // Main team website at the root.
        { source: "/", destination: "/home.html" },
        // Scouting Platform at clean URLs.
        { source: "/strategy", destination: "/strategy/index.html" },
        { source: "/scouting", destination: "/strategy/index.html" },
      ],
    };
  },
};

module.exports = nextConfig;

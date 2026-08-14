# RAMS 7729: Unified Team Website

One Next.js app, one domain. It hosts all three RAMS 7729 projects so they share
a single origin (important: the Scouting Platform stores all user data in the
browser's `localStorage`, which is per-origin, so keeping everything on one
domain is what makes that data persist reliably).

## Routes

| Path        | What it is                          | How it's served                          |
| ----------- | ----------------------------------- | ---------------------------------------- |
| `/`         | Main team website                   | Static `public/home.html` (via rewrite)  |
| `/strategy` | FRC Scouting Platform               | Static `public/strategy/index.html`      |
| `/ai`       | RAMS AI assistant                   | Next.js route (`app/ai`)                 |
| `/api/chat` | RAMS AI backend (Anthropic + TBA)   | Next.js route handler (`app/api/chat`)   |

`/scouting` is an alias for `/strategy`.

The main site and the Scouting Platform are fully self-contained static HTML
apps (the Scouting Platform inlines its logos as base64 and needs no backend),
so they are served untouched from `/public`. Only the AI tool needs a server,
which is why the whole thing is a Next.js app deployed to Vercel.

## Environment variables

Copy `.env.local.example` to `.env.local` for local dev, and set these in the
hosting provider (Vercel) for production:

- `ANTHROPIC_API_KEY`: **required** for RAMS AI to work.
- `TBA_API_KEY`: optional; enables live The Blue Alliance data lookups in RAMS AI.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

Deployed on Vercel.

// Embeds the static HTML pages (content/*.html) into TypeScript string modules
// (app/_content/*.ts) so they are bundled into the Next.js build and served by
// route handlers. This is reliable on Vercel, unlike rewriting "/" to a static
// file in /public. Runs automatically via the "prebuild" npm script.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "app", "_content");
mkdirSync(outDir, { recursive: true });

const pages = [
  { src: "content/home.html", out: "home.ts", name: "homeHtml" },
  { src: "content/strategy.html", out: "strategy.ts", name: "strategyHtml" },
];

for (const { src, out, name } of pages) {
  const html = readFileSync(join(root, src), "utf-8");
  // JSON.stringify produces a fully-escaped, valid JS string literal — safe for
  // any content including backticks and ${...} sequences in the embedded JS.
  const module = `// AUTO-GENERATED from ${src} by scripts/embed-content.mjs — do not edit by hand.\nexport const ${name} = ${JSON.stringify(html)};\n`;
  writeFileSync(join(outDir, out), module);
  console.log(`embed-content: ${src} -> app/_content/${out} (${html.length} bytes)`);
}

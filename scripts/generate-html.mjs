// Post-build script: generates index.html for static SPA deployment
// Reads the client build assets and creates a minimal HTML shell
import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const clientDir = join(process.cwd(), "dist/client");
const assetsDir = join(clientDir, "assets");

const files = readdirSync(assetsDir);
const cssFiles = files.filter((f) => f.endsWith(".css"));
const jsEntries = files.filter(
  (f) => f.startsWith("index-") && f.endsWith(".js"),
);

// The larger index-*.js is the main bundle (React + framework)
// The smaller one is the page-specific code
jsEntries.sort((a, b) => {
  // Sort by size descending so main bundle loads first
  return b.length - a.length;
});

const cssLinks = cssFiles
  .map((f) => `    <link rel="stylesheet" href="/assets/${f}" />`)
  .join("\n");

const scriptTags = jsEntries
  .map((f) => `    <script type="module" src="/assets/${f}"></script>`)
  .join("\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sohan Pal — UX Designer</title>
    <meta name="description" content="Portfolio of Sohan Pal, a UX Designer crafting intuitive digital experiences." />
    <meta name="author" content="Sohan Pal" />
    <meta property="og:title" content="Sohan Pal — UX Designer" />
    <meta property="og:description" content="Selected work in product, branding and motion design." />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" />
${cssLinks}
  </head>
  <body>
    <div id="root"></div>
${scriptTags}
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log("✓ Generated dist/client/index.html");
console.log("  CSS:", cssFiles);
console.log("  JS:", jsEntries);

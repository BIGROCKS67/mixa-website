#!/usr/bin/env node
/**
 * Local SEO sanity check — run after build or against live URL.
 * Usage: node scripts/seo-check.mjs [baseUrl]
 */
const baseUrl = (process.argv[2] || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);

const paths = ["/", "/menu", "/about", "/gallery", "/book", "/contact", "/robots.txt", "/sitemap.xml"];

const checks = [];

async function fetchText(path) {
  const url = `${baseUrl}${path}`;
  const res = await fetch(url, { headers: { "User-Agent": "MIXA-SEO-Check/1.0" } });
  const text = await res.text();
  return { url, status: res.status, text };
}

function hasJsonLd(html, type) {
  return html.includes(`"@type":"${type}"`) || html.includes(`"@type": "${type}"`);
}

console.log(`\nMIXA SEO check → ${baseUrl}\n`);

for (const path of paths) {
  try {
    const { url, status, text } = await fetchText(path);
    const ok = status === 200;
    checks.push({ path, status, ok });

    if (path === "/" && ok) {
      const schema = {
        Restaurant: hasJsonLd(text, "Restaurant"),
        FAQPage: hasJsonLd(text, "FAQPage"),
        WebSite: hasJsonLd(text, "WebSite"),
      };
      const meta = {
        canonical: text.includes('rel="canonical"') || text.includes("canonical"),
        ogTitle: text.includes('property="og:title"') || text.includes('name="og:title"'),
        description: text.includes('name="description"'),
      };
      console.log(`  ${path} — ${status} OK`);
      console.log(`    Schema: ${JSON.stringify(schema)}`);
      console.log(`    Meta:   ${JSON.stringify(meta)}`);
      if (text.toLowerCase().includes("winchester")) console.log("    ✓ Winchester in HTML");
      if (text.toLowerCase().includes("st george")) console.log("    ✓ St George's in HTML");
    } else {
      console.log(`  ${path} — ${status} ${ok ? "OK" : "FAIL"}`);
    }
  } catch (err) {
    checks.push({ path, status: 0, ok: false });
    console.log(`  ${path} — ERROR: ${err.message}`);
  }
}

const failed = checks.filter((c) => !c.ok);
console.log(`\n${checks.length - failed.length}/${checks.length} passed`);
if (failed.length) {
  console.log("Failed:", failed.map((f) => f.path).join(", "));
  process.exit(1);
}

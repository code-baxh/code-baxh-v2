/**
 * IndexNow ping — tells Bing/Yandex/Seznam (and everything powered by them,
 * e.g. DuckDuckGo) to recrawl immediately. Google does NOT use IndexNow;
 * Google discovery goes through Search Console + sitemap.
 *
 * Run after a deploy with content changes:
 *   npm run indexnow
 *
 * Reads the LIVE sitemap so only actually-published URLs are submitted.
 */
const SITE = "https://codebaxh.com";
const KEY = "5c60235930b44dac96c7c2f63656cedc"; // must match public/<key>.txt

const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Failed to fetch sitemap: HTTP ${sitemapRes.status}`);
  process.exit(1);
}
const xml = await sitemapRes.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error("No URLs found in sitemap — aborting.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
});

// 200 = submitted, 202 = accepted (key will be validated async)
console.log(`IndexNow: HTTP ${res.status} — submitted ${urls.length} URLs`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}

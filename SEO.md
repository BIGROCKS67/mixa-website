# MIXA Winchester — Local SEO Playbook

This document covers what is **on the website**, what **Google actually indexes**, and how to win queries like *"best places to eat Winchester"* (including Reddit-style recommendations).

---

## What we built on the site

| Item | Location | Purpose |
|------|----------|---------|
| **LocalBusiness + Restaurant JSON-LD** | `layout.tsx` | Google Maps / Knowledge Panel signals |
| **FAQPage JSON-LD** | `layout.tsx` + homepage FAQ | "People also ask" + long-tail queries |
| **WebSite + ReserveAction JSON-LD** | `layout.tsx` | Sitelinks + booking action |
| **Per-page metadata** | `buildPageMetadata()` | Canonical URLs, OG, Twitter, keywords |
| **Sitemap** | `/sitemap.xml` | All 6 pages with priorities |
| **robots.txt** | `/robots.txt` | Allow crawl, point to sitemap |
| **Visible FAQ section** | Homepage | Matches Reddit/Google question phrasing |
| **Local keywords** | `site.ts`, page titles | Winchester, St George's St, SO23 8AH |

Run local validation:

```bash
npm run build && npm start
node scripts/seo-check.mjs http://localhost:3000
```

After deploy (production domain):

```bash
node scripts/seo-check.mjs https://www.mixarestaurant.com
```

---

## Why the Vercel preview URL won't rank

Google rarely indexes `*.vercel.app` for local business queries. **You need the live domain** connected and verified:

1. Point `mixarestaurant.com` → GitHub Pages (GoDaddy DNS)
2. Set build env: `NEXT_PUBLIC_SITE_URL=https://www.mixarestaurant.com`
3. Redeploy so canonicals, sitemap, and schema use the production URL

---

## Google Search Console (critical — do this week)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.mixarestaurant.com`
3. Verify via DNS TXT record (GoDaddy) or HTML file
4. Submit sitemap: `https://www.mixarestaurant.com/sitemap.xml`
5. Request indexing for: `/`, `/menu`, `/book`, `/contact`
6. Monitor: **Performance** → queries containing "Winchester", "restaurant", "wine bar"

---

## Google Business Profile (GBP) — #1 local ranking factor

This matters more than on-page SEO for *"best restaurant Winchester"*.

**Claim/optimise:** [Google Business Profile](https://business.google.com)

| Field | Use |
|-------|-----|
| Business name | Yiayias MIXA (or official registered name — no keyword stuffing) |
| Category | Restaurant, Wine bar |
| Secondary | Mediterranean restaurant, Greek restaurant |
| Address | 56 St George's Street, Winchester SO23 8AH |
| Phone | 01962 582592 |
| Website | https://www.mixarestaurant.com |
| Hours | Mon–Sat 12:00–22:00, Sun closed |
| Attributes | Outdoor seating, vegan options, cocktails, live music |
| Photos | Upload 20+ from `/public/photos` — food, interior, exterior, menu |
| Posts | Weekly: dish of the week, wine feature, events |
| Q&A | Pre-answer FAQs from `src/data/faq.ts` |

**Reviews:** Ask happy guests to leave Google reviews mentioning "Winchester" and what they ate. Respond to every review within 48 hours.

---

## Reddit & "best places to eat Winchester"

You **cannot SEO Reddit from your website**. Reddit threads rank because:

- Real people ask authentic questions
- Multiple restaurants get named in comments
- Google surfaces Reddit for "best X in Y" queries

### What MIXA can do (ethical, effective)

1. **Be genuinely recommendable** — great food, service, and consistency so guests mention you organically
2. **Monitor threads** (don't spam):
   - r/winchester
   - r/Hampshire
   - r/UKFood
   - Search: `"best restaurant" Winchester site:reddit.com`
3. **When relevant**, a owner/staff account can reply helpfully: location, what makes MIXA different (small plates, wine bar, St George's St), link only if Reddit rules allow
4. **Match FAQ content to Reddit questions** — our homepage FAQ already targets:
   - "best Mediterranean restaurant Winchester"
   - "date night Winchester"
   - "wine bar Winchester city centre"
   - "vegan restaurant Winchester"

When someone Googles a Reddit thread, Google may also show your site if GBP + website + reviews align with the same intent.

---

## Local citations (NAP consistency)

Ensure **Name, Address, Phone** match everywhere:

| Platform | Action |
|----------|--------|
| TripAdvisor | Already linked — keep hours/photos updated |
| Google Maps / GBP | Primary listing |
| Facebook | Fix placeholder URL in `site.ts` when ready |
| Apple Maps | [Apple Business Connect](https://businessconnect.apple.com) |
| Bing Places | [bingplaces.com](https://www.bingplaces.com) |
| Yelp UK | Optional |
| Visit Winchester / local directories | Submit listing |

NAP must be identical:

```
Yiayias MIXA
56 St George's Street, Winchester SO23 8AH
01962 582592
https://www.mixarestaurant.com
```

---

## Competitor landscape (Winchester)

Typical competitors for your queries:

- **Ottoman / Rick Stein / Chesil Rectory** — established brands, strong backlinks
- **Independent wine bars & tapas** — direct competition for "small plates" and "date night"
- **TripAdvisor & Google Maps pack** — top 3 map results get most clicks

**MIXA advantages to emphasise in content:**

- St George's Street city-centre location
- Mediterranean + Greek small plates (distinct from generic pub food)
- Wine bar + cocktails + terrace
- Sharing-plates format (good for groups and dates)
- Live music (differentiator)

---

## Content ideas for ongoing SEO (no new pages required yet)

1. **Menu page** — seasonal updates (Google recrawls `/menu` weekly in sitemap)
2. **Gallery** — new dish photos with alt text: `"Scotch egg small plate at MIXA Winchester"`
3. **GBP posts** — mirror homepage offers/events
4. **Blog (future)** — "Guide to St George's Street dining", "Winchester date night restaurants" — only if you commit to monthly posts

---

## Technical checklist before go-live

- [ ] `NEXT_PUBLIC_SITE_URL` = production domain on Vercel
- [ ] Search Console verified + sitemap submitted
- [ ] GBP claimed, photos uploaded, categories set
- [ ] TripAdvisor hours match website
- [ ] Facebook URL updated in `siteConfig.social.facebook`
- [ ] Optional: GA4 property + link in Search Console
- [ ] Run `node scripts/seo-check.mjs https://www.mixarestaurant.com`

---

## Expected timeline

| Timeframe | What to expect |
|-----------|----------------|
| 1–2 weeks | Domain indexed, brand searches ("MIXA Winchester") appear |
| 4–8 weeks | Long-tail: "Mediterranean restaurant Winchester", "wine bar St George's Street" |
| 3–6 months | Competitive: "best restaurant Winchester" — needs GBP reviews + citations + backlinks |
| Ongoing | Reddit mentions are organic; focus on reviews and local PR |

---

## Files reference

- `src/data/faq.ts` — FAQ copy + target phrases
- `src/lib/seo/metadata.ts` — page metadata helper
- `src/components/seo/` — JSON-LD components
- `src/app/sitemap.ts` / `robots.ts`
- `scripts/seo-check.mjs` — post-deploy validation

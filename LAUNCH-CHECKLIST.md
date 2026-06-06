# CodeBaxh — Launch Checklist & SEO Notes

This site was repositioned from a recruitment+build studio to a **full-stack
software development agency** (SaaS / AI / Next.js / React Native / Stripe),
with a full technical-SEO and AEO/GEO foundation. Below is everything you must
fill in before launch, plus the off-site work that moves the needle most.

## 1. Values to fill in (placeholders in code)

All centralized in **`app/lib/site.ts`** (single source of truth):

- [ ] **Production domain** — set env `NEXT_PUBLIC_SITE_URL` (e.g. `https://codebaxh.com`). Currently defaults to `https://www.codebaxh.com`. Drives canonicals, sitemap, OG, schema.
- [ ] **Social profile URLs** — fill `SOCIALS` (Facebook, Instagram, Upwork, GitHub). These power the Organization `sameAs` entity signal that Google + AI engines use to confirm who you are. You said you have FB / IG / LinkedIn / Upwork — paste them in.
- [ ] **Booking link** — set env `NEXT_PUBLIC_BOOKING_URL` to your Cal.com / Calendly URL. The contact page auto-embeds the scheduler when set (instant booking lifts conversions ~30%+); until then it falls back to an email CTA.
- [ ] **OG image** — add a 1200×630 image at `public/og.png` (referenced by `SITE.ogImage`). Without it, social/link previews have no image.
- [ ] **Brand name consistency** — code uses **"CodeBaxh"** everywhere (matches domain). Your logo image + LinkedIn say "Code Baxh". Pick ONE spelling and make it identical across site, logo, LinkedIn, Upwork, Clutch — entity consistency directly affects AI citation.

## 2. Content to replace

- [ ] **Testimonials** — `app/sections/marketing/testimonials-data.ts` has clearly-marked PLACEHOLDER quotes. Replace with your real, verbatim Upwork/client reviews (with permission). Quotes near CTAs are a top trust + conversion lever.
- [ ] **Case studies** — `app/lib/work.ts` is built from the approved proof (Zoneomics, 11-week MVP, legal RAG, AI call analysis). Add the richer details + metrics from your Upwork profile when ready (concrete numbers help a lot).
- [ ] **Founder bio/photo** — `FOUNDER` in `app/lib/site.ts`. Consider adding a real photo on `/about`.
- [ ] **Legal pages** — `app/policy` and `app/tos` were rewritten from recruitment templates to dev-agency versions. **Have a lawyer review** before relying on them.

## 3. After deploy (technical SEO)

- [ ] Verify the site in **Google Search Console** and submit `https://<domain>/sitemap.xml`.
- [ ] Confirm `robots.txt`, `sitemap.xml`, and `llms.txt` resolve in production.
- [ ] Test rich results / schema with Google's Rich Results Test + Schema.org validator.
- [ ] Watch **Core Web Vitals (field data)** in Search Console — especially **INP ≤ 200ms** (the metric most at risk on a React-heavy site). Targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

## 4. Off-site work (not code — but the biggest 2025-26 levers)

Per live research, these drive more AI citations + rankings than publishing more
pages on your own site:

- [ ] **Clutch + G2 profiles** with verified reviews. Add their URLs to `SOCIALS`/`sameAs`.
- [ ] **Earned media / third-party mentions** (guest posts, podcasts, dev-community/Reddit presence). Off-site mentions drove up to ~325% more AI citations than self-publishing in studies.
- [ ] **YouTube** — a few case-study / "how we built X" walkthroughs with strong titles + transcripts. YouTube is the single strongest correlate with AI Overview citations.
- [ ] **Comparison / "best-of" editorial** ("best SaaS development companies", "top AI integration partners") — where the highest-intent buying queries + AI citations concentrate.

## 5. What's already built

- Hub-and-spoke architecture: homepage → `/services` hub → **10 service landing pages** → `/work` (4 case studies) → `/blog` (5 cornerstone posts), plus `/about`, `/process`, `/engagement`, `/tech-stack`, `/contact`.
- Technical SEO: per-page metadata + canonicals, `metadataBase`, OpenGraph/Twitter, dynamic `sitemap.ts`, `robots.ts` (AI crawlers explicitly allowed), `llms.txt`.
- Structured data via single `@graph` per page: Organization+ProfessionalService, WebSite, Person (founder), Service, BreadcrumbList, FAQPage, Article/BlogPosting.
- AEO formatting (direct-answer-first FAQ blocks), booking-first contact, client logos + CTA above the fold, founder/E-E-A-T trust layer.

> Note: Google removed FAQ rich results (2026), so FAQ markup here is for AI
> answer engines + on-page conversion, not a Google SERP feature.

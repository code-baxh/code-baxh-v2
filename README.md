# CodeBaxh website

Marketing site for CodeBaxh, a software development and AI company.
Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4 · Motion · MDX blog.

## Setup

```bash
pnpm install
cp .env.example .env.local   # then fill in the values
pnpm dev                     # http://localhost:5300
```

Checks to run before every deploy:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical URLs, sitemap, Open Graph |
| `CONTACT_TO_EMAIL` | no | Overrides the enquiry inbox. Default is `baxhcode@gmail.com`, set in `src/config/site.ts` |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | one of | Gmail SMTP: `smtp.gmail.com`, `465`, the Gmail address and a Google app password |
| `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` | one of | Resend instead of SMTP; needs a verified sending domain |
| `NEXT_PUBLIC_TURNSTILE_ENABLED`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | no | Cloudflare Turnstile on the contact form |
| `NEXT_PUBLIC_CAL_LINK` | no | Cal.com booking embed on `/contact`, e.g. `codebaxh/discovery` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | no | Cookieless Plausible analytics |

Without an email provider the contact form validates and then shows its error state, keeping what the visitor typed.

## Forms

There are two forms, and both email the enquiry inbox and send the visitor an auto-reply:

- `/contact`: the short "Contact us" form (name, email, optional phone, message).
- `/start-a-project`: the project brief (contact details, services, budget, timeline, description). Every "Start a project" button on the site leads here.

Fields and validation for both live in `src/lib/contact-schema.ts`; the server actions are in `src/app/contact/actions.ts`.

**Help prompt.** `src/components/help-prompt.tsx` slides in from the corner after 20 seconds, once per browser session, and stays available as a round button. It asks what the visitor needs and sends a short message through the same action as `/contact`. It is hidden on `/contact` and `/start-a-project`. Change `OPEN_AFTER_MS` or the `topics` list at the top of that file.

## SEO

- Titles, descriptions, canonicals and social tags come from `pageMetadata()` in `src/lib/seo.ts`. Descriptions are fitted to 120 to 160 characters automatically.
- Canonical URLs use `NEXT_PUBLIC_SITE_URL`. Leave it unset locally; set it to the live domain in Vercel.
- Structured data: Organization and WebSite on every page; Service, FAQ, Article, Person, CreativeWork and Breadcrumb where they apply (`src/lib/schema.ts`).
- Generated files: `/sitemap.xml`, `/robots.txt`, `/blog/rss.xml`, `/manifest.webmanifest`, `/llms.txt`.
- After launch: add the site in Google Search Console and Bing Webmaster Tools, paste the verification codes into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`, and submit `/sitemap.xml`.

## Where things live

```
content/blog/*.mdx          Blog posts (frontmatter + MDX)
public/images, public/videos Photos, hero clips, world map
src/config/site.ts          Company name, legal entity, contacts, markets, departments
src/content/                Typed data: services, case studies, team, FAQs, pricing, images
src/app/                    Routes (pages are generated from the data above)
src/components/             UI, sections, hero, cards, art
src/lib/                    SEO, JSON-LD, blog loader, contact schema, email, rate limit
```

## Editing content

**Company details.** Everything legal or contact related is in `src/config/site.ts`. The footer, Privacy Policy, Terms and JSON-LD all read from it.

**Add a service.** Add an object to `src/content/services.ts` (the `Service` type in `types.ts` documents each field). Give it a photo in `serviceImage` in `src/content/images.ts`. For a core service, optionally add a small illustration in `src/components/art/service-art.tsx`. The detail page, sitemap entry, OG image and contact-form option are generated.

**Add a case study.** Add an object to `src/content/case-studies.ts` and a photo in `caseStudyImage` (`images.ts`). Set `clientNamePermission: false` to hide the client name. Set `role` honestly: `founder-engineer` when a co-founder worked on someone else's product. Any outcome figure needs `needsVerification: true` until confirmed; it then shows a visible `[TODO: verify figure]` tag.

**Add a team member.** Add to `src/content/team.ts`. An author page appears at `/team/<slug>`; use the slug as `author` in blog posts.

**Add a blog post.** Create `content/blog/<slug>.mdx`:

```mdx
---
title: "Post title"
description: "140 to 160 character summary."
date: "2026-11-12"
updated: "2026-11-12"
author: "bilal-khursheed"
category: "AI"          # AI, SaaS, Web, Mobile or Business
tags: ["rag", "llm"]
cover: ""
---

## First heading (start at H2)
```

**Hero clips.** `public/videos/hero-1..5.mp4` with posters `hero-1..5.jpg`. Replace both files and keep the names. Slide copy is in `src/components/hero/hero.tsx`.

**Photos.** Register a file in `src/content/images.ts` with meaningful alt text, then use `<Photo name="key" />`.

## Deploy (Vercel)

The code lives on GitHub (`mustafausman9785-stack/codebaxh-website`, private) and the Vercel project is connected to it. Every push to `main` deploys to production automatically; other branches get preview deployments.

```bash
pnpm ship
```

`pnpm ship` refuses to run with uncommitted changes, then runs typecheck and lint and pushes `main`. Commit first, then ship.

Environment variables are set in the Vercel project (Settings → Environment Variables); `.env.local` is never uploaded. Old URLs (`/policy`, `/tos`, `/tech-stack`, renamed service and case-study pages) redirect permanently.

The contact rate limit is in memory, so on serverless it applies per instance. Turn on Turnstile for stronger protection.

## Before and after launch

There are no placeholders left on the site. These are the values to revisit:

- `src/config/site.ts` → `legal`: the site currently names "CodeBaxh" as operator and data controller with no organisation number. Add the registered company name and number once incorporated; they then appear in the footer, Privacy Policy and Terms.
- `src/content/engagement.ts`: pricing is described, not quoted. Add figures to `pricing` if you want to publish them.
- `src/content/case-studies.ts`: outcome figures from the old site were replaced with unquantified wording. Restore numbers only where you can evidence them. Confirm each `role` and `clientNamePermission`.
- `src/content/legal.ts`: confirm the processor list matches the providers you use; have the Privacy Policy and Terms reviewed.
- Images in the "Supplied by the company" group of `src/content/images.ts`: confirm you hold a licence for each.
- `content/blog`: check the bylines; the ten newest posts were drafted for the two founders to review.

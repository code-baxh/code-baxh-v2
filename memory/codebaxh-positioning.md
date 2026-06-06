---
name: codebaxh-positioning
description: CodeBaxh site is being repositioned from recruitment to a pure software dev agency
metadata:
  type: project
---

CodeBaxh's site (code-baxh repo) is being fully repositioned (decided 2026-06-06). The old site sold "Tech Recruitment & Software Studio" (recruitment + build). Per the SEO strategy doc, it is now a **pure full-stack software development agency** — SaaS, AI integration, Next.js, React Native, AWS/cloud, Stripe — selling to US/EU buyers. **Recruitment is dropped entirely.**

IMPORTANT correction (2026-06-06): **Zoneomics is the founder's employer/product, NOT a CodeBaxh client deliverable.** Do not present it as a CodeBaxh case study, and never list Zoneomics' enterprise clients (Redfin/CBRE/Moody's/Cushman & Wakefield) as CodeBaxh proof. It may appear only as a light founder credential ("works as a full-stack developer on Zoneomics, a production geospatial SaaS").

Real CodeBaxh proof to feature (owned products + clients — details to be supplied by Bilal):
- Nary AI (his own/team project), Fabrication Flow (his own/team project), Galaxy Digital (client, 6+ months, galaxydigital.com), plus more he will share.
- Upwork Top Rated Plus badge; 6+ years experience.
- 11-week multi-tenant SaaS MVP, legal-contract RAG, AI call analysis (existing scaffolded case studies — confirm details).
- Founder: Bilal Khursheed (bilalkhursheed.com).
Only name a client publicly with permission. CLIENT_LOGOS in app/lib/site.ts is empty pending confirmation.

Architecture target: hub-and-spoke — homepage hub → /services hub → 8-10 service landing pages → /work case studies → /blog. Plus full technical SEO (Next.js Metadata API, dynamic sitemap, robots, JSON-LD: Organization/Service/FAQPage/BreadcrumbList/Review/Person, OG cards) and GEO/AEO (FAQ blocks). Strategy doc: compass_artifact_wf-94c3958b-...md in repo root.

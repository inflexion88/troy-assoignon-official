# SEO Research and Strategy (Nov 13, 2025)

Purpose: Compile cutting‑edge (2024–2025) SEO principles and convert them into a specific, actionable strategy for a Positioning Frameworks website (thought leadership + service acquisition + lead magnets).

Audience: Troy Assoignon’s site (Positioning expert). Content types: service pages, frameworks, diagnostics/assessments, thought‑leadership blog, lead magnets/downloads, testimonials/case signals.

---

1) 2025 SEO Landscape: What’s Changed and What Matters

- Helpful Content rolled into Core: Google’s “Helpful Content” signals are now part of core ranking systems (2024). Prioritize first‑hand expertise, clarity of purpose, and demonstrable value over word count/keyword density.
- E‑E‑A‑T Operationalization: Experience and Expertise signals include: bylines with real credentials, client evidence, interviews/podcasts, published frameworks, and consistent topical depth. YMYL standards apply to business/finance claims.
- AI Overviews/SGE & SERP Volatility: Focus on information gain, unique frameworks, visual explainers, and credibility signals that make your content selected/linked in AI summaries and news/Top Stories/Discover.
- Information Gain & Novelty: Pages that add net‑new insights (original research, proprietary frameworks, decision trees, calculators) earn higher “gain” than summary posts.
- INP replaces FID (Mar 2024): Core Web Vitals now prioritize Interaction to Next Paint (INP) along with LCP and CLS. Optimize for fast responsiveness under user interaction.
- Site Reputation Abuse & UGC Shifts: Google cracked down on third‑party content farms and reputation abuse. Maintain tight editorial control; do not host irrelevant guest content.
- Entity‑First, Not Just Keywords: Semantic SEO, entities, and knowledge graph alignment matter: ensure Organization/Person identity is consistent across site and external profiles; cover topic clusters thoroughly.
- Structured Data: Schema remains critical for eligibility in rich results where applicable: Organization, Person, Article/BlogPosting, Service, FAQPage, BreadcrumbList, Speakable (select), and Video.
- Indexation & Crawl Budget: Static, clean HTML is good. Avoid heavy client‑side rendering for critical content; ensure pre-rendered HTML includes primary copy and links.

---

2) Principles to Follow in 2025 (Synthesis from leading SEOs, including but not limited to Kyle Roof, and cross‑validated with Google guidance)

- Topical Authority via Clusters:
  - Build hub-and-spoke clusters around “Strategic Positioning,” “Investor‑Ready Positioning,” “Positioning Diagnostics,” and “Category Creation.”
  - Each hub has canonical guides, supporting use cases, FAQs, and case‑signal pages.
  - Interlink within clusters with descriptive anchors; surface related reads.

- Information Gain & Originality:
  - Publish proprietary frameworks, checklists, diagnostic rubrics, and decision matrices.
  - Include original commentary, counterpoints to common advice, and examples from Troy’s practice.
  - Convert workshop artifacts to public knowledge: mini‑case vignettes, anonymized before/after positioning statements.

- E‑E‑A‑T Evidence:
  - Author schema for Troy with sameAs links (LinkedIn, podcasts, media mentions).
  - Organization schema with logo, social profiles, contact, and founding info.
  - Prominently link to About, Contact, Privacy, Terms; add Editorial Standards.
  - Showcase testimonials plus verifiable credentials (conferences, podcasts, awards, companies helped). Avoid fabricated ratings.

- Practical On‑Page Fundamentals:
  - One primary intent per URL. H1 reflects core query; subheads support sub‑intents.
  - Write for scanning: short paragraphs, lists, decision boxes, visuals.
  - Include quick‑answer sections and rich media (diagrams, video transcriptions where relevant).
  - Use FAQs judiciously where the page truly answers them.

- Structured Data & Eligibility:
  - Service: for service pages (Strategic Brand Positioning, Investor‑Ready Positioning, Diagnostics).
  - Organization + Person: sitewide (JSON‑LD in head). BreadcrumbList on all inner pages.
  - Article/BlogPosting on blog posts, with author, datePublished, dateModified.
  - FAQPage only on pages containing explicit Q&A sections users would find helpful.

- Technical Excellence (Vite/Vercel stack):
  - Pre-render primary content; avoid content hidden behind JS.
  - Core Web Vitals: target LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile.
  - Image optimization: explicit width/height, modern formats where possible, lazy‑load below‑the‑fold; preload hero and critical CSS.
  - Cache policies & headers: use immutable caching for hashed assets; sensible cache for HTML; security headers are already configured.
  - Clean URLs, proper canonicals, consistent trailing slash policy, and hreflang if expanding to other locales.

- Link Acquisition & Visibility:
  - Digital PR around frameworks and research (e.g., “Positioning Diagnostic Benchmarks 2025”).
  - Podcast guesting; conference decks with embedded links; expert roundups where Troy contributes unique frameworks.
  - Include quotable stats and visuals to encourage natural linking.

- Ethical AI Use:
  - Use AI for briefs/outlines and consistency, not final drafts. Always inject first‑hand experience, data, and unique insights.

---

3) Specific Strategy for “Positioning Frameworks” Site

3.1 Topical Map (Primary Hubs -> Spokes)

- Hub A: Strategic Positioning Framework
  - Spokes: positioning vs. branding; positioning vs. marketing strategy; category design vs. leadership; strategic vs. tactical positioning; implementation roadmap; mistakes to avoid; case mini‑studies.
- Hub B: Investor‑Ready Positioning
  - Spokes: capital‑raising messaging, ROI narratives, diligence Q&A, valuation story, credibility signals, metrics that matter, board alignment.
- Hub C: Positioning Diagnostics
  - Spokes: audit checklist, revenue analysis lens, diagnostics methodology, assessment scoring, how to read results, remediation plans.
- Hub D: Category Creation & Leadership
  - Spokes: when to create vs. lead; competitive narrative design; demand creation; pricing power; switching costs.

Actions:
- Create pillar pages for each hub (canonical long‑form with diagrams and workflows). Each pillar links out to its spokes and back.
- Add “Read next” modules on spokes; surface “Related frameworks.”

3.2 Content Types & Templates

- Framework Guides (Pillars):
  - Structure: Hook → Problem framing → Framework model → Step‑by‑step → Common pitfalls → Case vignette → Next steps (service/lead magnet) → FAQ.
  - Schema: Article + BreadcrumbList; internal links to spokes; table of contents.

- Diagnostic Assets:
  - Interactive assessment (existing) + static explainer pages per diagnostic dimension.
  - Output pages linking to service offers and consultation booking.
  - Schema: FAQPage when explicit Q&A; Service where applicable.

- Services Pages:
  - Clear ICP definition, engagement model, deliverables, outcomes, proof.
  - CTA to book consultation; link to relevant frameworks and case vignettes.
  - Schema: Service + Organization; consider PriceSpecification if publishing ranges.

- Thought Leadership Blog:
  - Information gain policy: each post must provide at least one original insight, calculation, or artifact.
  - Include diagrams, examples, and internal links to hubs/spokes.
  - Schema: BlogPosting with author and modification dates.

- Lead Magnets:
  - Checklists, frameworks in PDF/HTML; ensure indexable landing pages with descriptive copy; add noindex to generic thank‑you pages.

3.3 On‑Page/UX Standards

- Titles: 55–60 char target; compelling, clarity > curiosity.
- Meta descriptions: 140–160 chars; benefit + action + differentiation.
- H1s match search intent; one per page.
- Short intro that answers “Who is this for? What problem? What result?”
- Visual framework blocks: reusable components for diagrams.
- Internal link policy: at least 2 → hub, 2 → sibling spokes, 1 → conversion page.
- Use jump links (id anchors) for TOC and FAQ.

3.4 Technical/Schema Standards

- Global JSON‑LD (head): Organization (logo, url, sameAs), Person (author), Website, and potential SitelinksSearchBox if site search added.
- Per‑page JSON‑LD: Service (services/*), Article/BlogPosting (blog/*), FAQPage (only when used), BreadcrumbList.
- Canonical tags and self‑referential canonicals; avoid duplicate blog paths.
- XML sitemap: ensure all indexable pages listed; exclude thank‑you and test pages.
- robots.txt: disallow private/test paths; allow everything else; include sitemap line.
- Performance budgets: JS < 150KB, CSS < 150KB on key pages if possible.

3.5 Measurement & Governance

- KPIs:
  - Organic clicks/impressions (GSC), non‑branded growth, conversions from organic, scroll depth and time on task, return visitors.
  - Topic coverage: percent of spokes published per hub; internal link completeness.
- Cadence: monthly content review; quarterly pruning/refresh.
- Content Decay & Update Policy: refresh posts at 6–12 months; update stats and examples; add internal links to newer pieces.
- QA Checklist: accessibility (a11y), link integrity, schema validation, CWV field data (CrUX/LH). Use repository scripts to catch regressions.

---

4) Implementation Plan for This Repository (Vite + Vercel)

- Immediate:
  1) Add global Organization/Person JSON‑LD and BreadcrumbList to all inner pages.
  2) Audit titles/meta/headers on key hubs/services already in repo (services/*.html, blog/*.html, resources/*, lead‑magnets/*).
  3) Verify sitemap.xml and robots.txt include/exclude rules (thank‑you pages likely noindex).
  4) Run check_seo.sh, check_schema.sh, check_links.sh; fix errors.

- Short Term (2–4 weeks):
  1) Publish/expand pillar pages for the four hubs; convert internal pages to hub/spoke model.
  2) Build reusable FAQ component + JSON‑LD emitter.
  3) Add author bylines and bio block on blog posts; link to About.
  4) Add canonical tags and ensure consistent blog paths (vercel rewrites already covered legacy paths).

- Medium Term (4–12 weeks):
  1) Launch an annual “Positioning Diagnostic Benchmarks” research post/asset for linkable authority.
  2) Create visual framework components (SVG/Canvas) for diagrams.
  3) Add programmatic “mini‑explainers” cautiously for long‑tail, each with unique value.
  4) Build podcast/PR page with earned media links.

---

5) References & Influences (non‑exhaustive)

- Google Search Central: Helpful Content guidance, Core updates (2024–2025), site reputation abuse.
- Core Web Vitals: web.dev on LCP/INP/CLS; INP replacing FID in 2024.
- Entity/semantic SEO: Kalicube, WordLift, inLinks; knowledge graph alignment.
- Information Gain & originality: patent discussions and practitioner research; Lily Ray, Marie Haynes, Kevin Indig, Aleyda Solis.
- Technical SEO leaders: Martin Splitt, Barry Adams (news), Tomek Rudzki (JS SEO), Rick Viscomi (CWV).
- Framework practitioners: Kyle Roof (testing methodologies), but cross‑checked with Google’s guidance to avoid over‑optimization.

---

6) Quick Checklist (to use with this repo’s scripts)

- Titles/H1s aligned and unique; meta descriptions present.
- One primary intent per page; scannable layout.
- Organization/Person/Service/Article/FAQ/Breadcrumb schema as appropriate.
- Internal links: hub ↔ spokes; related content surfaced.
- Sitemap and robots configured; thank‑you/test pages noindex.
- Images optimized, dimensions set, lazy‑load below‑fold; preload hero and critical CSS.
- CWV: LCP < 2.5s, INP < 200ms, CLS < 0.1 (mobile first).
- Validate with check_seo.sh, check_schema.sh, check_links.sh; fix regressions.

End of document.

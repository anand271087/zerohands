# ZeroHands — AI Automation Revamp (Design Spec)

Date: 2026-09-30 · Status: awaiting review

## 1. Goal

Reposition the ZeroHands landing page from "AI video studio" to **AI automation agency**. AI avatar video stays as one secondary service. The page must convert mid-sized Indian companies (≈20–1,000 staff, no in-house AI team) — buyers are delivery/project managers or founders — into a **free 20-min call** (Calendly).

Success = a visitor understands in 5 seconds: *we save companies lakhs by automating manual work, here's proof (Spinny, Beroe), book a call.*

## 2. Decisions (agreed with Anand)

| Topic | Decision |
|---|---|
| Client names/logos | Show **Spinny** and **Beroe** names + logos (logos sourced from their public websites) |
| Fees | **Never shown.** Payback periods are shown instead |
| Hero headline | "We saved Spinny ₹80 lakh a year. What could AI save you?" |
| Headcount result | "25 → 5 people" shown prominently in the proof strip + case study |
| Beroe ₹ figure | Not shown (earlier ₹20L/day calc was wrong; per-lookup time is shown instead) |
| Guarantee | No money-back promise. Timeline claim only: "working prototype in week 1" |
| Testimonials | Claude drafts quotes; section is **hidden behind a flag** until the real VP Sales (Beroe) and Delivery Manager (Spinny) approve them |
| Pricing section | None |
| Stack | Keep React 19 + Vite, single page, existing dark theme tokens and fonts |

## 3. Proof numbers (source of truth)

Assumptions: 1 FTE = 176 hrs/month; Spinny ops salary ₹25K/month.

| Case | Before → After | Time | Man-hours saved | ₹ / year | Payback |
|---|---|---|---|---|---|
| Spinny · Invoice scan & match | 20–25 people → 5 | ~32 min → <1 min per invoice; a day's volume in ~1 hr | ~2,600–3,500 hrs/mo | ₹45–60 L | ~1–2 weeks |
| Spinny · OEM parts crawler | 10 people → 1 | multi-day manual task → overnight (~3.5 hr run) | ~1,600 hrs/mo | ~₹27 L | ~2 weeks |
| Beroe · Knowledge chatbot (RAG) | ~1 hr search → <1 min | 725+ docs, 800+ staff | — | not shown | — |
| Beroe · Account Workbench | scattered tools → one hub per account | auto-generated QBR/MBR decks | — | — | — |

Headline "₹80 lakh" = Spinny combined (₹72–87 L), rounded.

Verified supporting facts (from code):
- **Invoice:** n8n + Google Gemini vision; reads handwritten invoices; per-field confidence score; <75 confidence → human review queue; 1,072 vendors; statuses MATCHED / NOT_MATCHED / STILL_OPEN; CHECK / EXCEEDS overcharge flags; async webhook from CRM.
- **Crawler:** 26 sources (19 aftermarket brands e.g. Bosch, Valeo, ZF, Exide, Uno Minda + 7 OEMs: Ford, Hyundai, Mahindra, Maruti, MG, Tata, Toyota); ~120K parts; offline captcha solving; layout-change alerts; monthly full refresh + weekly health check; Python, Scrapy, Playwright.
- **Beroe RAG:** 725+ docs; PDF, Word, SharePoint, XML, JSON, EML; upload pipeline; internal & confidential. *(Stated by Anand; not in the analysed folders.)*
- **Beroe AWB:** Claude-powered extraction from 12 file types (docx, pptx, xlsx, pdf, eml, vtt…); 11 user roles; row-level security; OWASP-checked; React + FastAPI + Supabase.

## 4. Page structure

| # | Section (component) | Content |
|---|---|---|
| 1 | Header | Nav: Work · Services · Process · About · CTA "Book a free call" |
| 2 | **Hero** | Eyebrow "AI Automation Agency". H1 headline (above). Sub: "We find the manual work draining your team — invoices, data entry, document search — and automate it. Live in weeks, not quarters." CTA "Book a free 20-min call" + secondary "See our work ↓". Clickable chip "Spinny · ₹80L/yr saved · paid back in 2 weeks" → #work. Visual: animated **invoice-flow card** (photo → AI reads → parts matched ✓ → ₹ flag) replacing the avatar video |
| 3 | **Proof** | "Trusted by" Spinny + Beroe logos (monochrome white). 3 stats: 25→5 people · 120K+ parts tracked · 1 hr → <1 min |
| 4 | **Problem** | For delivery managers/founders. 3 pain cards: re-typing invoices; logging into dozens of portals; digging through hundreds of PDFs. Line: "If it's repetitive, it can be automated." |
| 5 | **Case studies** (`#work`) | Results table (section 3) + 4 cards: client logo, title, Problem → What we built → Results (big numbers) → tech chips. Invoice card is featured (wide) |
| 6 | **Savings calculator** | Inputs: people on the task, % of their time, monthly salary (₹). Output: current yearly cost and estimated yearly saving at 75% automation, labelled "estimate". CTA "Get your exact number — book a call" |
| 7 | **Services** (`#services`) | 6 outcome-first cards: Invoice & document processing · Knowledge chatbots on your docs · Web data crawlers · Workflow automation (n8n) · Custom AI apps & agents · AI avatar videos |
| 8 | **Process** (`#process`) | 4 steps with durations: Free call (day 0) → Working prototype (week 1) → Live in production (weeks 2–4) → Support & improve (ongoing) |
| 9 | **MidCTA** | Existing band, copy updated |
| 10 | **Comparison** | ZeroHands vs Big IT firm vs Freelancer vs In-house hire. Rows: time to live, upfront cost, AI expertise, ownership of code/data, support |
| 11 | **Testimonials** | 2 quotes (drafts below). Rendered only if `TESTIMONIALS_APPROVED = true` |
| 12 | **VideoProduction** (`#video`) | Existing section, condensed; eyebrow "Also from ZeroHands" |
| 13 | About | Founders, unchanged |
| 14 | **FAQ** | Is our data safe? · What if the AI gets it wrong? (human review queue) · How fast can we go live? · Which tools do you use? · Do we need an AI team? |
| 15 | FinalCTA + Footer | Copy updated to automation |

### Draft testimonials (pending approval)
- **VP, Sales — Beroe:** "Our teams used to spend close to an hour hunting through documents for a single answer. Now they ask the chatbot and get it in under a minute. ZeroHands understood our confidentiality needs from day one."
- **Delivery Manager — Spinny:** "Invoice processing that needed a team of 25 now runs with 5 people checking exceptions. It even reads handwritten vendor invoices. It paid for itself in the first couple of weeks."

## 5. Architecture

- `src/config.js` — `CALENDAR_URL`, `TESTIMONIALS_APPROVED` (removes the URL duplicated in 4 files).
- `src/data/content.js` — case studies, stats, services, FAQ, comparison rows as plain data; components map over it.
- `src/lib/savings.js` — pure `estimateSavings({ people, timeShare, monthlySalary, automationRate = 0.75 })` → `{ currentYearly, savedYearly }`.
- New components: `InvoiceFlow`, `Proof`, `Problem`, `CaseStudies`, `SavingsCalculator`, `Services` (replaces `Automation.jsx`), `Process`, `Comparison`, `Testimonials`, `FAQ`.
- Updated: `Header`, `Hero`, `MidCTA`, `VideoProduction`, `FinalCTA`, `Footer`, `App`.
- Assets: `public/logos/spinny.svg|png`, `public/logos/beroe.svg|png`.
- Styles: extend `src/index.css` using existing tokens; mobile-first, no horizontal scroll at 360px.

## 6. Design direction

Keep the dark, premium look (#050608 background, blue→cyan gradient, Bricolage Grotesque headings / Hanken Grotesk body). Big, confident numbers in the display font; ₹ figures highlighted with the gradient. Subtle motion only: the hero invoice-flow animation and fade-in on scroll; respect `prefers-reduced-motion`. Avoid: keyword-stuffed headings, vague "transform your business" copy, unexplained stat counters, tool-logo walls.

## 7. Verification

- `estimateSavings` checked with sample inputs via node.
- `npm run lint` and `npm run build` pass.
- Visual check in dev server at 375px, 768px, 1280px: every nav link scrolls to its section, all CTAs open Calendly, testimonials hidden while flag is false, no console errors.

## 8. Out of scope

Separate case-study/industry pages, blog, pricing, CMS, analytics changes, a live chatbot demo.

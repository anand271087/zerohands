# AI Automation Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (native, chosen by Anand: "go and build"). Steps use checkbox (`- [ ]`) syntax.

**Goal:** Rebuild the ZeroHands landing page as an AI automation agency site with Spinny/Beroe proof.

**Architecture:** Single-page React app. Copy/data lives in `src/data/content.js`; config in `src/config.js`; pure savings math in `src/lib/savings.js`; one component per section; styles appended to `src/index.css` using existing tokens.

**Tech Stack:** React 19, Vite 7, plain CSS, ESLint.

**Spec:** `docs/superpowers/specs/2026-09-30-ai-automation-revamp-design.md`

## Global Constraints

- Never show fees. Payback periods only.
- Numbers must match spec §3 exactly (₹80 lakh headline; 25 → 5; 10 → 1; 120K+ parts; 26 sources; 1,072 vendors; 725+ docs; 1 hr → <1 min).
- Testimonials render only when `TESTIMONIALS_APPROVED === true` (default `false`).
- All CTAs use `CALENDAR_URL` from `src/config.js`; external links `target="_blank" rel="noopener noreferrer"`.
- No horizontal scroll at 360px; animations disabled under `prefers-reduced-motion`.

## Review Focus

- Calculator with empty / zero / negative / huge inputs → shows ₹0 or a sane value, never NaN or "Infinity". (Task 1 tests)
- Calculator % time > 100 → clamped to 100. (Task 1 tests)
- Logos failing to load → text name still visible (alt text + name label). (Task 3)
- Comparison table on a 360px phone → scrolls inside its own wrapper, page does not scroll sideways. (Task 6)
- Nav anchor targets exist for every nav link (#work, #services, #process, #about). (Task 8 check)

---

### Task 1: Config + savings math

**Files:** Create `src/config.js`, `src/lib/savings.js`, `src/lib/savings.test.mjs`

**Produces:** `CALENDAR_URL`, `TESTIMONIALS_APPROVED`; `estimateSavings({ people, timeShare, monthlySalary, automationRate = 0.75 }) → { currentYearly, savedYearly }` (numbers in ₹, `timeShare` 0–100); `formatINR(n) → string` ("₹12.5 L", "₹1.2 Cr", "₹45,000").

- [ ] Write test script (node:assert) covering: normal case (5 people, 50%, ₹30,000 → current 9,00,000, saved 6,75,000), zeros, negatives → 0, NaN/"" → 0, timeShare 150 → clamped 100, formatINR lakh/crore/thousand.
- [ ] Run `node src/lib/savings.test.mjs` → fails (module missing).
- [ ] Implement.
- [ ] Run → passes. Commit.

### Task 2: Content data

**Files:** Create `src/data/content.js` exporting `stats`, `caseStudies`, `resultsTable`, `problems`, `services`, `steps`, `comparison`, `testimonials`, `faqs` — copy taken verbatim from spec §3–4.

- [ ] Write file. Build passes. Commit together with Task 3.

### Task 3: Header, Hero + InvoiceFlow, Proof (logos)

**Files:** Modify `Header.jsx`, `Hero.jsx`; create `InvoiceFlow.jsx`, `Proof.jsx`; add `public/logos/spinny.*`, `public/logos/beroe.*` (downloaded from spinny.com / beroeinc.com).

- [ ] Download logos; verify they open.
- [ ] Build components; CSS for hero chip, invoice-flow animation (reduced-motion safe), logo strip (monochrome via CSS filter, name label as fallback).
- [ ] Check in dev server. Commit.

### Task 4: Problem + CaseStudies

**Files:** Create `Problem.jsx`, `CaseStudies.jsx` (results table + 4 cards, invoice card featured).

- [ ] Build + style (table wrapped in `.table-scroll`). Check. Commit.

### Task 5: SavingsCalculator + Services

**Files:** Create `SavingsCalculator.jsx` (uses Task 1), `Services.jsx`; delete `Automation.jsx`.

- [ ] Build + style. Manually try empty/zero/huge inputs. Commit.

### Task 6: Process, Comparison, Testimonials, FAQ

**Files:** Create `Process.jsx`, `Comparison.jsx`, `Testimonials.jsx`, `FAQ.jsx` (native `<details>`).

- [ ] Build + style. Commit.

### Task 7: Update MidCTA, VideoProduction, FinalCTA, Footer, App order

- [ ] Copy updates, use `CALENDAR_URL`, wire section order per spec §4. Commit.

### Task 8: Verify

- [ ] `node src/lib/savings.test.mjs`, `npm run lint`, `npm run build` all pass.
- [ ] Browser check at 375 / 768 / 1280: anchors, CTAs, no sideways scroll, testimonials hidden, no console errors.
- [ ] Commit.

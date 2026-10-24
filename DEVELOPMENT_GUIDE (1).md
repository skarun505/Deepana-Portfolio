# DEVELOPMENT_GUIDE.md — Deepana Chandrasekar Portfolio

> Drop this file into Antigravity and tell the agent: **"Read DEVELOPMENT_GUIDE.md fully, then execute the prompts in Section 9 one by one, in order."**

---

## 1. Project Brief

| Item | Detail |
|---|---|
| Person | **Deepana Chandrasekar** |
| Role | Performance Marketer (Paid Media) |
| Target jobs | Junior Performance Marketer / Paid Media Executive (entry to executive level) |
| Platforms | Meta Ads, Google Ads, LinkedIn Ads |
| Scale handled | **₹25 Lakh cumulative ad budget per month** |
| Experience | 6-month internship at **Subix** (subix.in) |
| Goal | Get shortlisted by recruiters and agency owners in under 30 seconds |
| Priority | **Mobile first** (recruiters open links on WhatsApp / LinkedIn on phones) |

### About Subix (use this in the Experience section)
- Subix (SUBIX°PMaaS) positions itself as **India's 1st Performance Marketing as a Service (PMaaS) company**.
- It is a **white-label Meta and Google Ads execution engine for digital marketing agencies** — tagline: *"Your clients. Your brand. Our engine."*
- Verticals served include eCommerce, Real Estate, and Healthcare lead generation.
- Based in Bengaluru with Tamil Nadu connections.
- Website: https://www.subix.in

> Deepana's internship story: she worked inside a white-label performance engine, meaning she ran ads across multiple agency clients and industries instead of just one brand. That is a strong selling point. Highlight it.

---

## 2. Content (Single Source of Truth)

Put ALL text in `src/data/content.ts`. Never hardcode copy inside components.

> **Placeholders:** anything in `[BRACKETS]` is still unknown. Keep it exactly as written; Deepana replaces it before launch. Do NOT invent client names or certificates.
>
> **Case-study numbers are SAMPLE BENCHMARKS** (realistic ranges for each industry). Mark each one in code with `// SAMPLE: replace with real figure`. Deepana must swap in her real results before sharing the link with recruiters.

### Hero
- Eyebrow: `Performance Marketer · Meta · Google · LinkedIn`
- Headline: `I turn ad budgets into measurable growth.`
- Subline: `Managing ₹25L+ in monthly ad spend across Meta, Google and LinkedIn. Open to Junior and Executive Paid Media roles.`
- CTAs: **Download Resume** (primary), **Let's Talk** (secondary, scrolls to contact)
- Quick stats row: `₹25L+ / month managed` · `3 ad platforms` · `6 months at Subix` · `8 industries`

### About
Short, first person, 3 to 4 lines:
> I'm Deepana, a performance marketer who learned the craft by running real budgets, not just courses. During my 6-month internship at Subix, India's first PMaaS company, I handled campaigns across Meta, Google and LinkedIn for multiple agency clients, together managing around ₹25 lakh in monthly spend. I care about clean tracking, tight CPL/ROAS, and reports that clients actually read.

### Skills
- **Platforms:** Meta Ads Manager, Google Ads (Search, Display, YouTube, Performance Max), LinkedIn Campaign Manager
- **Strategy:** Funnel planning, audience building, budget allocation, A/B testing, creative testing
- **Analytics:** GA4, Google Tag Manager, Looker Studio `[confirm]`
- **Reporting:** Weekly and monthly performance reports, KPI tracking (CPL, CPA, CTR, ROAS)
- **Tools:** `[Excel / Sheets, CRM, WhatsApp automation — confirm]`

### Experience
**Performance Marketing Intern — Subix (SUBIX°PMaaS)**
**May 2026 – Oct 2026** · 6 months · Bengaluru / Remote `[confirm]`
- Ran and optimised paid campaigns on Meta, Google and LinkedIn for agency clients under a white-label model
- Contributed to a cumulative monthly ad budget of ~₹25 Lakh
- Planned, launched and optimised campaigns across **8 industries**: eCommerce, Real Estate, Education, Healthcare, B2B SaaS, BFSI, Fashion and Events
- Ran A/B tests on creatives, audiences and landing pages to bring down CPL and lift ROAS
- Prepared weekly performance reports with CPL, CPA, CTR and ROAS for agency partners
- Tools: Meta Ads Manager, Google Ads, LinkedIn Campaign Manager, GA4, Google Sheets `[confirm]`

### Industries Worked In (8)
Show as a chip strip right under the Stats row, and again in the Experience card.

| # | Industry | Platforms | Approx. monthly budget |
|---|---|---|---|
| 1 | eCommerce | Meta, Google | ₹5.0L |
| 2 | Real Estate | Meta, Google | ₹4.5L |
| 3 | Education / Admissions | Meta, Google | ₹3.5L |
| 4 | Healthcare / Wellness | Meta, Google | ₹3.0L |
| 5 | Fashion / Apparel | Meta, Google | ₹2.5L |
| 6 | B2B SaaS / IT Services | LinkedIn, Google | ₹2.5L |
| 7 | BFSI (Loans / Insurance leads) | Google, Meta | ₹2.5L |
| 8 | Events / Exhibitions | Meta, Google | ₹1.5L |
| | **Total** | | **₹25.0L / month cumulative** |

> The budgets add up to the ₹25L cumulative figure. This is a cumulative number across clients, NOT one client's budget. Say "cumulative" in the UI.

### Case Studies (6 cards, tap to expand)
Industry-level only, no client names (confidentiality). **All numbers are SAMPLE BENCHMARKS, replace with real data.** Time window for every case: 8 to 12 weeks.

**1. eCommerce: Scaling profitable sales**
- Platforms: Meta (Advantage+ Shopping, retargeting) + Google (Shopping, Performance Max) · Budget: ₹5.0L/month
- Goal: Increase purchases at a healthy ROAS
- What I did: Split campaigns into prospecting, retargeting and catalogue. Tested 12 creatives in 3 angles (offer, UGC, product demo). Moved budget to winning ad sets weekly and excluded recent purchasers.
- Result: **ROAS 2.1 → 3.4** · **CPA ↓ 27%** · Purchases **+38%**

**2. Real Estate: Cheaper, better quality leads**
- Platforms: Meta Lead Ads + Google Search · Budget: ₹4.5L/month
- Goal: Qualified site-visit leads for a residential project
- What I did: Switched from instant forms to higher-intent forms with budget and BHK questions. Added location-based Search campaigns and negative keywords. Retargeted video viewers.
- Result: **CPL ₹850 → ₹540 (↓ 36%)** · Qualified lead rate **18% → 27%** · Site visits **+30%**

**3. Education / Admissions: Filling the intake**
- Platforms: Meta + Google Search · Budget: ₹3.5L/month
- Goal: Admission enquiries before the deadline
- What I did: Built parent and student audiences separately, ran course-wise ad copy, and set up a WhatsApp click-to-chat flow for faster follow-up.
- Result: **CPL ₹620 → ₹400 (↓ 35%)** · Enquiries **+44%** · Enquiry-to-application **+19%**

**4. Healthcare / Wellness: Appointment bookings**
- Platforms: Meta + Google Search (local intent) · Budget: ₹3.0L/month
- Goal: Consultation and programme bookings
- What I did: Followed ad policy for health claims. Used local geo-targeting, testimonial-style creatives and call extensions. Paused low-intent keywords.
- Result: **CPL ₹480 → ₹330 (↓ 31%)** · Bookings **+33%** · CTR **1.1% → 1.8%**

**5. B2B SaaS / IT Services: Demo requests from LinkedIn**
- Platforms: LinkedIn Ads (Lead Gen Forms) + Google Search · Budget: ₹2.5L/month
- Goal: Demo bookings from decision makers
- What I did: Targeted by job title, seniority and company size. Tested document ads vs single-image ads. Added a Google Search layer on high-intent terms.
- Result: **CPL ₹3,400 → ₹2,350 (↓ 31%)** · Demo requests **+40%** · Lead-to-meeting rate **22%**

**6. BFSI: Quality lead generation**
- Platforms: Google Search + Meta · Budget: ₹2.5L/month
- Goal: Qualified loan / insurance enquiries
- What I did: Intent-based keyword groups, strict negative keywords, short lead forms with phone validation, and weekly review of lead quality with the sales team.
- Result: **Cost per qualified lead ↓ 29%** · Junk leads **↓ 34%** · Conversion to call **+21%**

*(Fashion and Events appear in the industries strip only. Add case studies later if she wants.)*

### Services / What I can do for you
Campaign setup · Audience and creative testing · Budget scaling · Conversion tracking setup · Weekly reporting · Landing page feedback

### Education and Certifications
- **B.E. Electronics and Communication Engineering (ECE)**: Sri Shanmugha College of Engineering, graduating **2027**
- Certifications: `[Google Ads, Meta Blueprint, GA4, HubSpot: add only the ones she actually has]`

### Contact
- Email: **deepanachandraseker@gmail.com**
- Phone / WhatsApp: **+91 96598 59886** (WhatsApp link: `https://wa.me/919659459886`)
- LinkedIn: **https://www.linkedin.com/in/deepana-chandrasekar-29419b3a7/**
- Location: `[City]`

---

## 3. Design System

### Colour Palette (clean, light, professional)
Single recommendation: **Warm white + Indigo + Coral accent.** It looks fresh, is readable on any phone in sunlight, and doesn't scream "template".

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FAFAF8` | Page background |
| `--surface` | `#FFFFFF` | Cards |
| `--surface-soft` | `#F1F0FB` | Alternate sections, chips |
| `--ink` | `#14142B` | Headings and body text |
| `--ink-muted` | `#5C5C7A` | Secondary text |
| `--primary` | `#5B5BD6` | Links, key highlights, icons |
| `--primary-dark` | `#4646B8` | Hover / pressed |
| `--accent` | `#FF6B4A` | Primary CTA button only |
| `--border` | `#E6E4F2` | Card borders, dividers |
| `--success` | `#1F9D6B` | Positive result numbers (↑ ROAS, ↓ CPL) |

Contrast: `--ink` on `--bg` and white on `--accent` must pass WCAG AA. Check it.

### Typography
- Headings: **Sora** (600/700)
- Body: **Inter** (400/500)
- Load via `next/font/google`, with `display: swap`.
- Mobile scale: H1 `34px/1.1`, H2 `26px`, body `16px/1.6`. Desktop: H1 `64px`, H2 `40px`.

### Shape and spacing
- Radius: `16px` cards, `999px` buttons and chips
- Section padding: `64px` mobile, `112px` desktop
- Soft shadow only: `0 6px 24px rgba(20,20,43,0.06)`
- 8px spacing grid

### Mobile rules (non-negotiable)
1. Design at **375px width first**, then scale up (`sm 640 / md 768 / lg 1024 / xl 1280`).
2. Tap targets minimum **44×44px**.
3. No horizontal scroll at any width.
4. Sticky bottom bar on mobile with two buttons: **Resume** and **WhatsApp**.
5. Hamburger menu opens a full-screen sheet.
6. Use `100svh` for the hero, not `100vh`.
7. Images lazy-loaded, WebP/AVIF, with explicit width/height.
8. Respect `prefers-reduced-motion`.

---

## 4. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14 (App Router) + TypeScript** | Fast, SEO friendly, easy Vercel deploy |
| Styling | **Tailwind CSS** | Mobile-first utilities |
| Animation | **Framer Motion** | Subtle reveals only |
| Icons | **lucide-react** | Clean and lightweight |
| Contact | `mailto:` + WhatsApp `wa.me` link | No backend needed |
| Hosting | **Vercel** (free) | One-click deploy |
| Analytics | Vercel Analytics or GA4 | See who opens the portfolio |

No database. No backend. Fully static.

---

## 5. Folder Structure

```
deepana-portfolio/
├─ DEVELOPMENT_GUIDE.md
├─ public/
│  ├─ resume/Deepana_Chandrasekar_Resume.pdf     # placeholder
│  ├─ images/
│  │  ├─ profile.webp                            # placeholder
│  │  └─ og-image.png                            # 1200x630
│  └─ favicon.ico
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          # fonts, metadata, JSON-LD
│  │  ├─ page.tsx            # composes all sections
│  │  ├─ globals.css         # CSS variables (palette)
│  │  ├─ sitemap.ts
│  │  └─ robots.ts
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ MobileMenu.tsx
│  │  │  ├─ MobileActionBar.tsx   # sticky bottom CTA bar
│  │  │  └─ Footer.tsx
│  │  ├─ sections/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ StatsStrip.tsx
│  │  │  ├─ Industries.tsx
│  │  │  ├─ About.tsx
│  │  │  ├─ Skills.tsx
│  │  │  ├─ Experience.tsx
│  │  │  ├─ CaseStudies.tsx
│  │  │  ├─ Services.tsx
│  │  │  ├─ Education.tsx
│  │  │  └─ Contact.tsx
│  │  └─ ui/
│  │     ├─ Button.tsx
│  │     ├─ Chip.tsx
│  │     ├─ SectionHeading.tsx
│  │     ├─ Reveal.tsx            # Framer Motion wrapper
│  │     └─ StatCard.tsx
│  ├─ data/
│  │  └─ content.ts               # ALL copy lives here
│  └─ lib/
│     └─ utils.ts
├─ tailwind.config.ts
├─ next.config.mjs
└─ package.json
```

---

## 6. Architecture

```
content.ts (typed data)
      │
      ▼
page.tsx ──► Navbar
         ──► Hero ──► StatsStrip ──► Industries
         ──► About
         ──► Skills
         ──► Experience
         ──► CaseStudies
         ──► Services
         ──► Education
         ──► Contact
         ──► Footer
         ──► MobileActionBar (mobile only, fixed bottom)
```

- Every section is a **server component** reading from `content.ts`.
- Only `Navbar/MobileMenu`, `Reveal`, and `CaseStudies` (expand/collapse) are **client components** (`"use client"`).
- Section order = recruiter reading order: *Who → Proof → Skills → Contact.*
- Anchor navigation (`#about`, `#experience`, `#work`, `#contact`) with smooth scroll and `scroll-margin-top`.

---

## 7. Page Sections: Spec

| # | Section | Mobile layout | Key detail |
|---|---|---|---|
| 1 | Navbar | Logo "DC" + hamburger | Transparent → white blur on scroll |
| 2 | Hero | Stacked: photo, headline, CTAs | Accent CTA = Download Resume |
| 3 | Stats strip | 2×2 grid | Animated count-up for ₹25L+ |
| 3b | Industries strip | Horizontal scroll chips (8) | Each chip shows platform icons |
| 4 | About | Single column | Max 4 lines |
| 5 | Skills | Chip groups by category | Platform logos as icons or text chips |
| 6 | Experience | Vertical timeline | Subix card with link to subix.in |
| 7 | Case studies | 6 stacked cards, tap to expand | Result numbers in `--success`; small "Sample data" note until real numbers are added |
| 8 | Services | 1 column → 2 → 3 grid | Icon + 1 line each |
| 9 | Education | Compact list | Sri Shanmugha College of Engineering, ECE, 2027 |
| 10 | Contact | Big buttons: Email / WhatsApp / LinkedIn | No form needed |
| 11 | Footer | One line | © 2026 Deepana Chandrasekar |

---

## 8. Build Plan

| Phase | Task | Output |
|---|---|---|
| 0 | Scaffold Next.js + Tailwind + fonts + palette tokens | App runs on localhost |
| 1 | `content.ts` with typed data and placeholders | Data layer ready |
| 2 | UI primitives (Button, Chip, SectionHeading, Reveal, StatCard) | Reusable kit |
| 3 | Navbar, MobileMenu, MobileActionBar, Footer | Shell done |
| 4 | Hero + StatsStrip + About | Above-the-fold done |
| 5 | Skills + Experience (Subix) | Credibility done |
| 6 | CaseStudies + Services + Education | Proof done |
| 7 | Contact + resume download | Conversion done |
| 8 | SEO, OG image, JSON-LD, sitemap, a11y | Discoverable |
| 9 | Mobile QA + Lighthouse + fixes | Score 90+ |
| 10 | Deploy to Vercel + custom domain | Live link |

---

## 9. Prompts for Antigravity (run in order)

> Rule for the agent: after each prompt, run `npm run build` and fix errors before moving on. Keep all copy in `src/data/content.ts`. Do not invent client names. Case-study numbers are sample benchmarks flagged with // SAMPLE. Keep `[PLACEHOLDER]` text exactly as written.

### Prompt 0: Scaffold
```
Read DEVELOPMENT_GUIDE.md completely. Create a Next.js 14 (App Router, TypeScript) project named deepana-portfolio with Tailwind CSS, framer-motion and lucide-react. Set up the folder structure from Section 5. In globals.css define the colour palette from Section 3 as CSS variables and map them into tailwind.config.ts as semantic colours (bg, surface, surfaceSoft, ink, inkMuted, primary, primaryDark, accent, border, success). Load Sora (headings) and Inter (body) with next/font/google. Set the body background to --bg and text to --ink. Confirm npm run dev works.
```

### Prompt 1: Content layer
```
Create src/data/content.ts with fully typed exports (hero, stats, about, skills, experience, caseStudies, services, education, contact, seo) using the exact copy from Section 2 of DEVELOPMENT_GUIDE.md. Keep every [BRACKETED] placeholder as is. Add a // SAMPLE: replace with real figure comment next to every case-study metric. Export TypeScript types for each. No component should contain hardcoded copy after this step.
```

### Prompt 2: UI primitives
```
Build src/components/ui: Button (variants: primary=accent coral, secondary=outlined primary, ghost; min height 44px; pill radius), Chip, SectionHeading (eyebrow + title), Reveal (framer-motion fade-up on scroll, disabled when prefers-reduced-motion), StatCard. Mobile-first Tailwind. Cards use 16px radius, 1px border colour --border, soft shadow from Section 3.
```

### Prompt 3: Layout shell
```
Build Navbar (logo "DC", anchor links About, Experience, Work, Contact, transparent then white with backdrop blur after scroll), MobileMenu (full-screen sheet, opens from hamburger, closes on link tap and on Escape, traps focus), MobileActionBar (fixed bottom, visible only below md, two equal buttons: Resume and WhatsApp, respects safe-area-inset-bottom), and Footer. Add bottom padding to the page on mobile so the action bar never covers content.
```

### Prompt 4: Hero, Stats, About
```
Build Hero, StatsStrip and About from content.ts. Mobile: stacked layout, profile image (use a placeholder at public/images/profile.webp, rounded, 160px) then eyebrow, H1 (34px), subline, two CTA buttons full width. Desktop: two columns, text left, image right. Hero min-height 100svh on desktop only. StatsStrip: 2x2 grid on mobile, 4 columns on md+, with a count-up animation for numeric values that runs once when visible. About: single column, max-w-prose.
```

### Prompt 5: Skills and Experience
```
Build Skills (grouped chips: Platforms, Strategy, Analytics, Reporting, Tools) and Experience (vertical timeline). The Experience card for Subix must include role, dates, bullets and a visible "About Subix" note: "India's 1st Performance Marketing as a Service (PMaaS) company, a white-label Meta and Google Ads engine for agencies" with an external link to https://www.subix.in (rel noopener noreferrer, target _blank). Timeline line on the left on mobile.
```

### Prompt 6: Case studies, Services, Education
```
Build Industries (horizontal scroll chip strip on mobile, wrapping grid on md+, 8 industries from content.ts). Build CaseStudies as a client component with all 6 case studies: stacked cards on mobile, 3 columns on lg. Each card shows industry, platform badge, goal, budget and a headline result in the success colour; tap to expand and reveal "What I did". Build Services (icon grid, 1/2/3 columns) and Education (compact list plus certification chips). All data from content.ts.
```

### Prompt 7: Contact and resume
```
Build Contact with three large tappable buttons: Email (mailto), WhatsApp (https://wa.me/919659459886 with prefilled message "Hi Deepana, I saw your portfolio and would like to talk."), LinkedIn. Add a Download Resume button pointing to /resume/Deepana_Chandrasekar_Resume.pdf using the download attribute. No form, no backend. Wire the Hero secondary CTA to scroll to #contact.
```

### Prompt 8: SEO and accessibility
```
Add metadata in layout.tsx (title: "Deepana Chandrasekar | Performance Marketer, Meta, Google and LinkedIn Ads", description, canonical, Open Graph, Twitter card using /images/og-image.png). Add JSON-LD Person schema (name Deepana Chandrasekar, jobTitle Performance Marketer, alumniOf Sri Shanmugha College of Engineering, sameAs LinkedIn URL). Create sitemap.ts and robots.ts. Run an accessibility pass: heading order, alt text, aria-labels on icon buttons, visible focus rings, colour contrast AA, skip-to-content link.
```

### Prompt 9: Mobile QA and performance
```
Test the site at 360px, 375px, 390px, 414px, 768px and 1280px. Fix any horizontal overflow, text clipping, tap target under 44px, or sticky bar overlap. Convert images to WebP/AVIF with width/height set, lazy load below the fold. Run Lighthouse mobile and fix issues until Performance, Accessibility, Best Practices and SEO are all 90+. Report the final scores.
```

### Prompt 10: Deploy
```
Prepare for Vercel: confirm npm run build passes with no warnings, add a README with run and deploy steps, and list every [PLACEHOLDER] still left in content.ts as a checklist for me to fill in.
```

---

## 10. Pre-Launch Checklist (Deepana fills these)

- [x] Email, phone/WhatsApp, LinkedIn: done
- [x] Internship dates (May to Oct 2026) and education (ECE, 2027): done
- [ ] **Replace every `// SAMPLE` case-study number with her real results** (recruiters may ask about them in interviews)
- [ ] Profile photo (square, good light, plain background)
- [ ] Resume PDF in `public/resume/`
- [ ] Certifications she actually holds
- [ ] City / location
- [ ] Get **written OK from Subix** before sharing client-level numbers
- [ ] Open the live link on a real phone and tap every button
- [ ] Add the link to her LinkedIn headline, Featured section and resume header

---

## 11. Do and Don't

**Do**
- Lead with the ₹25L/month number. It's her strongest hook.
- Use result numbers (CPL, ROAS, leads) wherever possible.
- Keep copy short. Recruiters skim.

**Don't**
- No fake testimonials or fake client logos. Case-study figures are sample benchmarks until she swaps in real ones.
- No heavy animations, autoplay video, or parallax (slow on mobile).
- No dark-mode toggle or extra pages in v1.

---

*Stack: Next.js · Tailwind · Framer Motion · Vercel. Palette: Warm white + Indigo `#5B5BD6` + Coral `#FF6B4A`.*

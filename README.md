# FARIDTECH — Portfolio

Personal portfolio & resume site for **Farid Fehresti** (Full Stack Developer · Technical Lead · AI Integration).

Its centerpiece is a **scroll-scrubbed brand promo** — the logo video's timeline is tied directly to scroll position (scroll down plays it forward, scroll up rewinds), driven by GSAP ScrollTrigger.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4**
- **GSAP / ScrollTrigger** — scroll-driven video scrub
- `next/font` — Orbitron · Rajdhani · Geist

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build
pnpm start   # serve the build
```

## Structure

```
app/
  layout.tsx        # fonts, metadata, theme
  page.tsx          # section composition
  globals.css       # neon-red theme, glow/grid, animations
components/
  ScrollPromo.tsx   # ⭐ scroll-scrubbed promo video
  Nav · Hero · About · Experience · Projects · Skills · Contact · Footer
  Reveal · SectionHeading
lib/
  resume.ts         # typed resume content (single source of truth)
public/
  logo.png · promo.mp4 · skull.png · resume-farid.pdf
```

## Notes

- Images use `unoptimized` so the build needs no native `sharp` binary.
- The promo respects `prefers-reduced-motion` (falls back to a poster + native controls) and includes an iOS `play()`-unlock so seeking works on Safari.

## Deploy

Deploy on [Vercel](https://vercel.com/new) — set the project root to this directory. To enable absolute OG image URLs, set `NEXT_PUBLIC_SITE_URL` to the deployed origin.

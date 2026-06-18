# FARIDTECH — Portfolio

Personal portfolio & resume site for **Farid Fehresti** (Full Stack Developer · Technical Lead · AI Integration).

A single-page, neon-red portfolio: hero, about, experience, projects, skills, and contact.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4**
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
  Nav · Hero · About · Experience · Projects · Skills · Contact · Footer
  Reveal · SectionHeading
lib/
  resume.ts         # typed resume content (single source of truth)
public/
  logo.png · skull.png · resume-farid.pdf
```

## Notes

- Images use `unoptimized` so the build needs no native `sharp` binary.

## Deploy

Deploy on [Vercel](https://vercel.com/new) — set the project root to this directory. To enable absolute OG image URLs, set `NEXT_PUBLIC_SITE_URL` to the deployed origin.

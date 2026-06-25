"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { Dictionary } from "@/lib/i18n";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { MagneticButton } from "./MagneticButton";

const HeroParticles = dynamic(
  () => import("./HeroParticles").then((m) => m.HeroParticles),
  { ssr: false },
);

export function Hero({ dict }: { dict: Dictionary }) {
  const { profile, ui } = dict;
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const { gsap } = getGsap();

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(targets, { opacity: 0, y: 24 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 text-center"
    >
      {/* Ambient 3D particle field (lazy, client-only, decorative) */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
        <HeroParticles />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div data-hero className="animate-float">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-skull.webp"
            alt={`${profile.brand} logo`}
            width={640}
            height={682}
            className="animate-pulse-glow h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-64 md:w-64"
          />
        </div>

        <p
          data-hero
          dir="ltr"
          className="font-mono mt-6 text-xs uppercase tracking-[0.4em] text-red-bright neon-soft"
        >
          {profile.brand}
        </p>

        <h1
          data-hero
          className="font-display mt-3 text-4xl font-black uppercase leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </h1>

        <p
          data-hero
          className="font-heading mt-4 text-base font-medium uppercase tracking-[0.18em] text-muted sm:text-lg md:text-xl"
        >
          {profile.title}
        </p>

        <p
          data-hero
          className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted/90 sm:text-base"
        >
          {profile.tagline}
        </p>

        <div data-hero className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            href="#projects"
            className="group relative overflow-hidden rounded-full border border-red/60 bg-red/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-red-bright transition-colors hover:bg-red/20 hover:shadow-[0_0_24px_-4px_rgba(255,34,51,0.7)]"
          >
            {ui.hero.viewWork}
          </MagneticButton>
          <MagneticButton
            href="/resume-farid.pdf"
            external
            className="rounded-full border border-border bg-panel px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-red/50"
          >
            {ui.hero.downloadResume} ↓
          </MagneticButton>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label={ui.hero.scrollAria}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-red/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-red-bright motion-reduce:animate-none" />
        </span>
      </a>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"] as const;

export function Nav({ dict }: { dict: Dictionary }) {
  const { ui, locale } = dict;
  const links = SECTIONS.map((id) => ({ href: `#${id}`, label: ui.nav[id] }));

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const doc = document.documentElement;
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${p})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-[#07070a]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      {/* Scroll progress */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent">
        <div
          ref={progressRef}
          className="nav-progress h-full origin-left bg-gradient-to-r from-red-deep to-red-bright rtl:origin-right"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            width={34}
            height={34}
            className="h-8 w-8 object-contain drop-shadow-[0_0_8px_rgba(255,34,51,0.6)]"
          />
          <span
            className="brand-latin font-display text-sm font-bold tracking-widest text-foreground"
            dir="ltr"
          >
            FARIDTECH
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-xs uppercase tracking-wider transition-colors hover:text-red-bright ${
                    isActive ? "text-red-bright neon-soft" : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LangSwitch locale={locale} />
          <a
            href="/resume-farid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-red/50 bg-red/10 px-4 py-1.5 text-xs uppercase tracking-wider text-red-bright transition-colors hover:bg-red/20 sm:inline-block"
          >
            {ui.nav.resume} ↓
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          >
            <span className="font-mono text-lg leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-[#07070a]/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm uppercase tracking-wider text-muted hover:text-red-bright"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume-farid.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm uppercase tracking-wider text-red-bright"
              >
                {ui.nav.resume} ↓
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

/** EN | FA toggle — links to the same page in the other locale. */
function LangSwitch({ locale }: { locale: "en" | "fa" }) {
  const base =
    "px-1.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider transition-colors";
  return (
    <div className="flex items-center rounded-full border border-border" dir="ltr">
      <Link
        href="/en"
        aria-current={locale === "en" ? "true" : undefined}
        className={`${base} rounded-l-full ${
          locale === "en" ? "bg-red/15 text-red-bright" : "text-muted hover:text-red-bright"
        }`}
      >
        EN
      </Link>
      <Link
        href="/fa"
        aria-current={locale === "fa" ? "true" : undefined}
        className={`${base} rounded-r-full ${
          locale === "fa" ? "bg-red/15 text-red-bright" : "text-muted hover:text-red-bright"
        }`}
      >
        فا
      </Link>
    </div>
  );
}

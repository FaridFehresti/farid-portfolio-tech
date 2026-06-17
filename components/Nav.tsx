"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/resume";

const LINKS = [
  { href: "#promo", label: "Promo" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-[#07070a]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
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
          <span className="font-display text-sm font-bold tracking-widest text-foreground">
            {profile.brand}
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-red-bright"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume-farid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-red/50 bg-red/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-red-bright transition-colors hover:bg-red/20 sm:inline-block"
          >
            Resume ↓
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
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-mono text-sm uppercase tracking-wider text-muted hover:text-red-bright"
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
                className="block py-2.5 font-mono text-sm uppercase tracking-wider text-red-bright"
              >
                Download Resume ↓
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

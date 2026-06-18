import { profile } from "@/lib/resume";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 text-center"
    >
      {/* Logo */}
      <div className="animate-float">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt={`${profile.brand} logo`}
          width={260}
          height={260}
          className="animate-pulse-glow h-52 w-52 object-contain sm:h-64 sm:w-64 md:h-72 md:w-72"
        />
      </div>

      <p className="font-mono mt-6 text-xs uppercase tracking-[0.4em] text-red-bright neon-soft">
        {profile.brand}
      </p>

      <h1 className="font-display mt-3 text-4xl font-black uppercase leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
        {profile.name}
      </h1>

      <p className="font-heading mt-4 text-base font-medium uppercase tracking-[0.18em] text-muted sm:text-lg md:text-xl">
        {profile.title}
      </p>

      <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted/90 sm:text-base">
        {profile.tagline}
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="group relative overflow-hidden rounded-full border border-red/60 bg-red/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-red-bright transition-all hover:bg-red/20 hover:shadow-[0_0_24px_-4px_rgba(255,34,51,0.7)]"
        >
          View Work
        </a>
        <a
          href="/resume-farid.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-panel px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-red/50"
        >
          Download Resume ↓
        </a>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-red/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-red-bright" />
        </span>
      </a>
    </section>
  );
}

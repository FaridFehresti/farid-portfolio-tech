import type { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function Projects({ dict }: { dict: Dictionary }) {
  const { projects, ui } = dict;
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="03"
        kicker={ui.sections.projects.kicker}
        title={ui.sections.projects.title}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const idx = `_${String(i + 1).padStart(2, "0")}`;
          const inner = (
            <>
              {/* meta header row */}
              <div className="flex items-center justify-between font-mono text-[0.7rem]">
                <span className="tracking-widest text-red">{idx}</span>
                <span
                  className={`transition ${
                    p.url
                      ? "text-muted group-hover:-translate-y-0.5 group-hover:text-red-bright"
                      : "text-muted/40"
                  }`}
                  aria-hidden
                >
                  {p.url ? "↗" : "■"}
                </span>
              </div>

              <h3 className="font-heading mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-red-bright">
                {p.name}
              </h3>
              <p className="font-mono mt-1 text-[0.7rem] lowercase tracking-wide text-muted">
                &gt; {p.tagline}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

              {/* stack as a terminal comment line */}
              <p className="font-mono mt-5 text-[0.72rem] leading-relaxed text-red/75" dir="ltr">
                <span className="text-muted/50">// </span>
                {p.stack.map((s) => s.toLowerCase()).join("  ")}
              </p>

              {/* footer rule + domain */}
              <div className="mt-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                {p.display ? (
                  <span className="font-mono text-[0.7rem] tracking-wide text-muted" dir="ltr">
                    {p.display}
                  </span>
                ) : null}
              </div>
            </>
          );

          const cover = p.cover ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.cover}
                alt={`${p.name} — cover`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
            </div>
          ) : undefined;

          return (
            <Reveal key={p.name} delay={(i % 3) * 80} className="h-full">
              <TiltCard href={p.url} external={Boolean(p.url)} cover={cover}>
                {inner}
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

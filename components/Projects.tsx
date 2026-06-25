import type { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { MediaHeader } from "./MediaHeader";

export function Projects({ dict }: { dict: Dictionary }) {
  const { projects, ui } = dict;
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="03"
        kicker={ui.sections.projects.kicker}
        title={ui.sections.projects.title}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 80} className="h-full">
            <TiltCard
              href={p.url}
              external={Boolean(p.url)}
              cover={<MediaHeader name={p.name} index={i} cover={p.cover} />}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-red-bright">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-muted">
                    {p.tagline}
                  </p>
                </div>
                {p.url ? (
                  <span
                    className="mt-1 text-base text-muted transition group-hover:-translate-y-0.5 group-hover:text-red-bright"
                    aria-hidden
                  >
                    ↗
                  </span>
                ) : null}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

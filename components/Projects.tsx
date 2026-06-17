import { projects } from "@/lib/resume";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="03"
        kicker="Selected work"
        title="Projects"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const inner = (
            <>
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
                  <span className="font-mono text-base text-muted transition-transform group-hover:-translate-y-0.5 group-hover:text-red-bright">
                    ↗
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              {p.display ? (
                <p className="font-mono mt-4 text-[0.7rem] tracking-wide text-red/80">
                  {p.display}
                </p>
              ) : null}
            </>
          );

          return (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card group flex h-full flex-col p-6"
                >
                  {inner}
                </a>
              ) : (
                <div className="tech-card group flex h-full flex-col p-6">{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

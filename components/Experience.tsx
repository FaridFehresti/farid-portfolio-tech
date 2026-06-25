import type { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience({ dict }: { dict: Dictionary }) {
  const { experience, ui } = dict;
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="02"
        kicker={ui.sections.experience.kicker}
        title={ui.sections.experience.title}
      />

      <div className="relative ms-2 border-s border-border ps-8 md:ms-3 md:ps-10">
        {experience.map((job, i) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            delay={i * 60}
            className="relative pb-10 last:pb-0"
          >
            {/* node */}
            <span
              className={`absolute -start-[2.55rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full md:-start-[3.05rem] ${
                job.current ? "bg-red-bright" : "bg-panel"
              }`}
              style={{ boxShadow: "0 0 0 4px #07070a, 0 0 0 5px var(--border)" }}
            >
              {job.current ? (
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-red-bright/60" />
              ) : null}
            </span>

            <p className="font-mono text-xs uppercase tracking-widest text-red">{job.period}</p>
            <h3 className="font-heading mt-1 text-xl font-semibold text-foreground md:text-2xl">
              {job.role}
            </h3>
            <p className="mt-0.5 text-sm text-muted">
              {job.company} · {job.location}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

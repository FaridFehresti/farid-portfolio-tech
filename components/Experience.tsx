import type { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { MediaHeader } from "./MediaHeader";

export function Experience({ dict }: { dict: Dictionary }) {
  const { experience, ui } = dict;
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="02"
        kicker={ui.sections.experience.kicker}
        title={ui.sections.experience.title}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.period}`} delay={(i % 3) * 80} className="h-full">
            <TiltCard
              cover={
                <MediaHeader
                  name={job.company}
                  index={i}
                  badge={
                    job.current ? (
                      <span className="flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-bright/70" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-bright" />
                        </span>
                        Present
                      </span>
                    ) : undefined
                  }
                />
              }
            >
              <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-red-bright">
                {job.role}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted">
                {job.company} · {job.location}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-red" dir="ltr">
                {job.period}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

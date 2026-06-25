import type { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function About({ dict }: { dict: Dictionary }) {
  const { profile, stats, ui } = dict;
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="01" kicker={ui.sections.about.kicker} title={ui.sections.about.title} />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {profile.summary}
          </p>
          <p className="mt-6 font-heading text-base uppercase tracking-wide text-red-bright neon-soft">
            {ui.about.line}
          </p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.label} className="card group p-5">
              <Counter
                value={s.value}
                className="font-display block text-3xl font-black text-red-bright neon-soft md:text-4xl"
              />
              <p className="mt-2 text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

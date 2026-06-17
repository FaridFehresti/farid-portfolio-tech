import { profile, stats } from "@/lib/resume";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="01" kicker="Who I am" title="About" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {profile.summary}
          </p>
          <p className="mt-6 font-heading text-base uppercase tracking-wide text-red-bright neon-soft">
            Code should solve real problems — not just run.
          </p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.label} className="tech-card p-5">
              <p className="font-display text-3xl font-black text-red-bright neon-soft md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

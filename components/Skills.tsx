import type { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { StackMarquee } from "./StackMarquee";

export function Skills({ dict }: { dict: Dictionary }) {
  const { skillGroups, languages, education, ui } = dict;
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          kicker={ui.sections.skills.kicker}
          title={ui.sections.skills.title}
        />
      </div>

      {/* Full-bleed auto-scrolling stack */}
      <Reveal>
        <StackMarquee groups={skillGroups} />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl gap-5 px-5 md:grid-cols-2 md:px-8">
        <Reveal className="card p-6">
          <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            {ui.skills.languages}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between text-sm">
                <span className="text-foreground">{l.name}</span>
                <span className="font-mono text-xs text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="card p-6">
          <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            {ui.skills.education}
          </h3>
          <ul className="mt-4 space-y-3">
            {education.map((e) => (
              <li key={e.title} className="text-sm">
                <p className="text-foreground">{e.title}</p>
                <p className="font-mono text-xs text-muted">
                  {[e.org, e.year].filter(Boolean).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

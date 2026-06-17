import { skillGroups, languages, education } from "@/lib/resume";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="04" kicker="What I work with" title="Skills" />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 80} className="tech-card p-6">
            <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal className="tech-card p-6">
          <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            Languages
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

        <Reveal delay={80} className="tech-card p-6">
          <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            Education
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

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

      {/* Full-bleed auto-scrolling stack widget */}
      <Reveal>
        <StackMarquee groups={skillGroups} />
      </Reveal>

      {/* Categorised stack in Masonry layout */}
      <div className="mx-auto mt-16 max-w-6xl px-5 md:px-8 columns-1 md:columns-2 lg:columns-3 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 80} className="card group p-6 break-inside-avoid mb-5">
            <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2" dir="ltr">
              {group.items.map((item) => (
                <span key={item} className="chip bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal delay={160} className="card p-6 break-inside-avoid mb-5">
          <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            {ui.skills.languages}
          </h3>
          <ul className="mt-5 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-foreground">{l.name}</span>
                <span className="font-mono text-[11px] text-muted/70 uppercase tracking-widest">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240} className="card p-6 break-inside-avoid mb-5">
          <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            {ui.skills.education}
          </h3>
          <ul className="mt-5 space-y-4">
            {education.map((e) => (
              <li key={e.title} className="text-sm">
                <p className="text-foreground font-medium">{e.title}</p>
                <p className="font-mono text-[11px] mt-1.5 text-muted/60 uppercase tracking-wide">
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

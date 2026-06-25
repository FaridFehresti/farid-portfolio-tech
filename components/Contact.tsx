import type { Dictionary } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { ContactForm } from "./ContactForm";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact, references, ui, locale } = dict;

  const channels = [
    { label: ui.contact.channels.email, value: contact.email, href: `mailto:${contact.email}`, ltr: true },
    { label: ui.contact.channels.github, value: contact.githubLabel, href: contact.github, ltr: true },
    { label: ui.contact.channels.twitter, value: contact.twitterLabel, href: contact.twitter, ltr: true },
    { label: ui.contact.channels.location, value: contact.location, href: undefined, ltr: false },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="05"
        kicker={ui.sections.contact.kicker}
        title={ui.sections.contact.title}
      />

      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        {/* Left: intro + form */}
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/90">{ui.contact.intro}</p>

          <div className="card mt-7 p-6 md:p-7">
            <h3 className="mb-5 font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
              {ui.contact.form.heading}
            </h3>
            <ContactForm t={ui.contact.form} locale={locale} />
          </div>
        </Reveal>

        {/* Right: direct channels, resume, references */}
        <Reveal delay={120} className="self-start">
          <ul className="divide-y divide-border border-y border-border">
            {channels.map((c) => (
              <li key={c.label} className="flex items-center justify-between gap-4 py-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    dir={c.ltr ? "ltr" : undefined}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground transition-colors hover:text-red-bright"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground">{c.value}</span>
                )}
              </li>
            ))}
          </ul>

          <MagneticButton
            href="/resume-farid.pdf"
            external
            className="mt-7 inline-block rounded-full border border-red/60 bg-red/10 px-7 py-3 font-mono text-xs uppercase tracking-widest text-red-bright transition-colors hover:bg-red/20 hover:shadow-[0_0_24px_-4px_rgba(255,34,51,0.7)]"
          >
            {ui.contact.download} ↓
          </MagneticButton>

          <h3 className="mt-10 font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            {ui.contact.references}
          </h3>
          <div className="mt-4 space-y-3">
            {references.map((r) => (
              <div key={r.name} className="card group p-4">
                <p className="text-sm font-medium text-foreground">{r.name}</p>
                <p className="font-mono text-xs text-muted">
                  {r.role} · {r.org}
                </p>
              </div>
            ))}
            <p className="font-mono text-[0.7rem] tracking-wide text-muted/70">
              {ui.contact.refereeNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

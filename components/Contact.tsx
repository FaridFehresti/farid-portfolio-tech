import { contact, references } from "@/lib/resume";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "GitHub", value: contact.githubLabel, href: contact.github },
  { label: "Twitter / X", value: contact.twitterLabel, href: contact.twitter },
  { label: "Location", value: contact.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="05" kicker="Let's talk" title="Contact" />

      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/90">
            Open to full-stack, technical-lead and AI-integration work. The
            fastest way to reach me:
          </p>

          <ul className="mt-7 divide-y divide-border border-y border-border">
            {channels.map((c) => (
              <li key={c.label} className="flex items-center justify-between gap-4 py-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
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

          <a
            href="/resume-farid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-red/60 bg-red/10 px-7 py-3 font-mono text-xs uppercase tracking-widest text-red-bright transition-all hover:bg-red/20 hover:shadow-[0_0_24px_-4px_rgba(255,34,51,0.7)]"
          >
            Download Full Resume (PDF) ↓
          </a>
        </Reveal>

        <Reveal delay={120} className="self-start">
          <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-red-bright">
            References
          </h3>
          <div className="mt-4 space-y-3">
            {references.map((r) => (
              <div key={r.name} className="tech-card p-4">
                <p className="text-sm font-medium text-foreground">{r.name}</p>
                <p className="font-mono text-xs text-muted">
                  {r.role} · {r.org}
                </p>
              </div>
            ))}
            <p className="font-mono text-[0.7rem] tracking-wide text-muted/70">
              Referee contact details available on request.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { Dictionary } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  const { profile, contact, ui } = dict;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain drop-shadow-[0_0_8px_rgba(255,34,51,0.6)]"
          />
          <div>
            <p
              className="brand-latin font-display text-sm font-bold tracking-widest text-foreground"
              dir="ltr"
            >
              {profile.brand}
            </p>
            <p className="font-mono text-[0.7rem] text-muted">{profile.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs text-muted">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-bright"
          >
            {ui.footer.github}
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-bright"
          >
            {ui.footer.twitter}
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-red-bright">
            {ui.footer.email}
          </a>
        </div>

        <p className="font-mono text-[0.7rem] text-muted/70" dir="ltr">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}

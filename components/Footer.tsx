import { profile, contact } from "@/lib/resume";

export function Footer() {
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
            <p className="font-display text-sm font-bold tracking-widest text-foreground">
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
            GitHub
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-bright"
          >
            Twitter
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-red-bright">
            Email
          </a>
        </div>

        <p className="font-mono text-[0.7rem] text-muted/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}

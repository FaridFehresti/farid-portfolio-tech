import type { Dictionary } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  const { profile, contact, ui } = dict;
  return (
    <footer className="relative bg-[#07070a] pt-16">
      {/* Subtle top gradient border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red/30 to-transparent"></div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 pb-12 pt-8 text-center md:flex-row md:justify-between md:text-left md:px-8">
        
        {/* Brand & Logo */}
        <div className="flex flex-col items-center gap-4 md:items-start md:flex-row md:gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(255,34,51,0.8)]"
          />
          <div>
            <p
              className="brand-latin font-display text-lg font-bold tracking-widest text-foreground drop-shadow-md"
              dir="ltr"
            >
              {profile.brand}
            </p>
            <p className="font-mono text-xs tracking-wider text-muted/70">{profile.name}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs tracking-widest text-muted">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-colors hover:text-red-bright"
          >
            {ui.footer.github}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-bright transition-all group-hover:w-full"></span>
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-colors hover:text-red-bright"
          >
            {ui.footer.twitter}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-bright transition-all group-hover:w-full"></span>
          </a>
          <a 
            href={`mailto:${contact.email}`} 
            className="group relative transition-colors hover:text-red-bright"
          >
            {ui.footer.email}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-bright transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-1 md:items-end">
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted/50" dir="ltr">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-muted/30">
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

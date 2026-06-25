import type { ReactNode } from "react";

const GRADIENTS = [
  "linear-gradient(135deg, #2a0d11 0%, #0c0c11 100%)",
  "linear-gradient(135deg, #1c0a0e 0%, #150509 100%)",
  "linear-gradient(135deg, #230b0d 0%, #0a0a0f 100%)",
  "linear-gradient(135deg, #1f0b13 0%, #0f0a11 100%)",
  "linear-gradient(135deg, #260c0c 0%, #100a0d 100%)",
];

/** Two-letter monogram from a name (works for Latin + Persian). */
function monogram(name: string): string {
  const cleaned = name
    .replace(/&/g, " ")
    .replace(/\s+(و|and)\s+/gi, " ") // drop "and" / Persian "و" connectors
    .replace(/\.[a-z]{2,4}\b/gi, "")
    .trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  let m = words.slice(0, 2).map((w) => w[0]).join("");
  if (m.length < 2 && words[0]) m = words[0].slice(0, 2);
  return m.toUpperCase();
}

type MediaHeaderProps = {
  name: string;
  index: number;
  cover?: string;
  /** Small label shown in the top corner (e.g. period or "Live"). */
  badge?: ReactNode;
};

/** Card media: a cover image when available, else a gradient monogram. */
export function MediaHeader({ name, index, cover, badge }: MediaHeaderProps) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
      {cover ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt={`${name} — cover`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/15 to-transparent" />
        </>
      ) : (
        <div
          className="monogram flex h-full w-full items-center justify-center"
          style={{ background: GRADIENTS[index % GRADIENTS.length] }}
        >
          <span
            className="font-display text-6xl font-black tracking-tight text-red-bright/85 transition-transform duration-500 group-hover:scale-110 sm:text-7xl"
            style={{ textShadow: "0 0 28px rgba(255,34,51,0.45)" }}
            dir="ltr"
          >
            {monogram(name)}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-panel/80 via-transparent to-transparent" />
        </div>
      )}

      {badge ? (
        <span className="absolute end-3 top-3 z-10 rounded-full border border-red/40 bg-[#07070a]/70 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-red-bright backdrop-blur-sm">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

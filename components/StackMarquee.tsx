import type { CSSProperties } from "react";
import type { SkillGroup } from "@/lib/resume";

const ROWS: { dur: string; dir: "normal" | "reverse" }[] = [
  { dur: "70s", dir: "normal" },
  { dur: "85s", dir: "reverse" },
];

/** Auto-scrolling rows cycling through the full tech stack with fading edges. */
export function StackMarquee({ groups }: { groups: SkillGroup[] }) {
  const all = groups.flatMap((g) => g.items);

  // Round-robin the stack into 2 rows.
  const rows: string[][] = [[], []];
  all.forEach((item, i) => rows[i % 2].push(item));

  return (
    <div 
      className="relative left-1/2 w-screen -translate-x-1/2 space-y-4 py-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]" 
      dir="ltr"
    >
      {rows.map((row, i) => {
        // Duplicate enough to fill the viewport and loop seamlessly.
        const half = [...row, ...row];
        const track = [...half, ...half];
        const style = { "--dur": ROWS[i].dur, "--dir": ROWS[i].dir } as CSSProperties;
        return (
          <div key={i} className="marquee">
            <div className="marquee-track" style={style}>
              {track.map((tech, j) => (
                <span
                  key={`${tech}-${j}`}
                  className="inline-flex shrink-0 items-center rounded-xl border border-white/5 bg-white/[0.02] px-5 py-2.5 font-mono text-[13px] tracking-wide text-muted/80 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:border-red/40 hover:bg-red/5 hover:text-red-bright"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}


import type { CSSProperties } from "react";
import type { SkillGroup } from "@/lib/resume";

const ROWS: { dur: string; dir: "normal" | "reverse" }[] = [
  { dur: "38s", dir: "normal" },
  { dur: "54s", dir: "reverse" },
  { dur: "44s", dir: "normal" },
  { dur: "62s", dir: "reverse" },
];

/** Four auto-scrolling rows cycling through the full tech stack. */
export function StackMarquee({ groups }: { groups: SkillGroup[] }) {
  const all = groups.flatMap((g) => g.items);

  // Round-robin the stack into 4 rows.
  const rows: string[][] = [[], [], [], []];
  all.forEach((item, i) => rows[i % 4].push(item));

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 space-y-3 py-2" dir="ltr">
      {rows.map((row, i) => {
        // Duplicate enough to fill the viewport and loop seamlessly at -50%.
        const half = [...row, ...row];
        const track = [...half, ...half];
        const style = { "--dur": ROWS[i].dur, "--dir": ROWS[i].dir } as CSSProperties;
        return (
          <div key={i} className="marquee">
            <div className="marquee-track" style={style}>
              {track.map((tech, j) => (
                <span
                  key={`${tech}-${j}`}
                  className="inline-flex shrink-0 items-center rounded-lg border border-border bg-panel/60 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-red/40 hover:text-red-bright"
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

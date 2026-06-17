import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  kicker?: string;
};

export function SectionHeading({ index, title, kicker }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-red">{index}</span>
        <span className="divider-glow w-12" />
        {kicker ? (
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            {kicker}
          </span>
        ) : null}
      </div>
      <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-wide text-foreground md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

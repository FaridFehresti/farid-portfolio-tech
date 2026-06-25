"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CounterProps = {
  value: string;
  className?: string;
};

/**
 * Counts up to a numeric stat the first time it scrolls into view.
 * Non-numeric values (e.g. "1:500") render as-is.
 */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const match = value.match(/^(\d+)(\+?)$/);

  useEffect(() => {
    if (!match || reduced) return;
    const el = ref.current;
    if (!el) return;

    const target = Number(match[1]);
    const suffix = match[2];
    const { gsap } = getGsap();
    const obj = { n: 0 };
    el.textContent = `0${suffix}`;
    let played = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !played) {
            played = true;
            gsap.to(obj, {
              n: target,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${Math.round(obj.n)}${suffix}`;
              },
            });
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.6 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [match, reduced]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

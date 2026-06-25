"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type TiltCardProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  /** Optional full-bleed banner rendered above the padded content. */
  cover?: ReactNode;
};

/**
 * Wraps a HUD card in a perspective container that tilts toward the cursor
 * and tracks a soft radial glare. Pointer devices only; respects reduced motion.
 */
export function TiltCard({ children, href, external, className = "", cover }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduced || e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(py - 0.5) * -7}deg) rotateY(${(px - 0.5) * 9}deg)`;
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }

  const cardClass = `hud-card group relative flex h-full flex-col overflow-hidden ${className}`;
  const content = (
    <>
      <span className="tilt-glare" aria-hidden />
      {cover}
      <div className="relative z-10 flex flex-1 flex-col p-6">{children}</div>
    </>
  );

  return (
    <div ref={ref} className="tilt-wrap h-full" onPointerMove={onMove} onPointerLeave={reset}>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cardClass}
        >
          {content}
        </a>
      ) : (
        <div className={cardClass}>{content}</div>
      )}
    </div>
  );
}

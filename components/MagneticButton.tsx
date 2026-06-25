"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

/** Anchor that eases toward the cursor while hovered (pointer devices only). */
export function MagneticButton({
  href,
  children,
  className = "",
  external,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  function onMove(e: PointerEvent<HTMLAnchorElement>) {
    if (reduced || e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${mx * 0.22}px, ${my * 0.32}px)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`magnetic ${className}`}
    >
      {children}
    </a>
  );
}

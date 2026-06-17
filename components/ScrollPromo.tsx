"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/lib/resume";

gsap.registerPlugin(ScrollTrigger);

export function ScrollPromo() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prefersReduced);
    if (prefersReduced) return;

    const video = videoRef.current;
    const track = trackRef.current;
    if (!video || !track) return;

    // iOS Safari only allows programmatic seeking after a play() gesture.
    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      video.play().then(() => video.pause()).catch(() => {});
    };
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("click", unlock, { once: true });

    const ctx = gsap.context(() => {
      const build = () => {
        const duration = video.duration || 0;

        ScrollTrigger.create({
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // slight lerp = smoother seeks than a hard 1:1 map
          onUpdate: (self) => {
            const t = self.progress * duration;
            if (Number.isFinite(t) && Math.abs(video.currentTime - t) > 0.01) {
              video.currentTime = t;
            }
            // Drive the overlay imperatively — no React re-render per frame.
            const p = Math.round(self.progress * 100);
            if (barRef.current) barRef.current.style.width = `${p}%`;
            if (pctRef.current) pctRef.current.textContent = `${p}%`;
            if (captionRef.current) {
              // fade the caption in at the edges, out in the middle
              const edge = Math.min(self.progress, 1 - self.progress);
              captionRef.current.style.opacity = `${1 - Math.min(edge * 4, 1)}`;
            }
          },
        });

        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) build();
      else video.addEventListener("loadedmetadata", build, { once: true });
    }, track);

    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("click", unlock);
      ctx.revert();
    };
  }, []);

  return (
    <section id="promo" ref={trackRef} className={reduced ? "" : "h-[400vh]"}>
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4">
        {/* Frame around the square video */}
        <div className="glow-frame relative aspect-square w-full max-w-[min(82vh,640px)] overflow-hidden rounded-2xl bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src="/promo.mp4"
            poster="/skull.png"
            muted
            playsInline
            preload="auto"
            controls={reduced}
          />

          {/* Corner brackets */}
          <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-red/70" />
          <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-red/70" />
          <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-red/70" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-red/70" />

          {/* Center caption (only meaningful while scrubbing) */}
          {!reduced ? (
            <div
              ref={captionRef}
              className="pointer-events-none absolute inset-x-0 bottom-6 text-center"
            >
              <p className="font-display text-lg font-bold tracking-[0.35em] text-foreground neon-soft md:text-2xl">
                {profile.brand}
              </p>
            </div>
          ) : null}
        </div>

        {/* Hint + scrub progress bar */}
        {reduced ? (
          <p className="font-mono mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
            {profile.brand} — brand promo
          </p>
        ) : (
          <div className="mt-7 w-full max-w-[min(82vh,640px)]">
            <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-widest text-muted">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-bright" />
                Scroll to play the promo
              </span>
              <span ref={pctRef}>0%</span>
            </div>
            <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
              <div
                ref={barRef}
                className="h-full w-0 rounded-full bg-gradient-to-r from-red-deep to-red-bright shadow-[0_0_12px_rgba(255,34,51,0.8)]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

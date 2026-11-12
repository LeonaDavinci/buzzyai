"use client";

import { useEffect, useRef } from "react";

/**
 * Fires a `showcase_impression` event once when a category block scrolls into
 * view. Gives impression-level demand data (which categories users actually
 * look at) on top of the per-detail-page `work_view` events.
 */
export default function CategoryImpression({ category }: { category: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fire = () => {
      if (fired.current) return;
      fired.current = true;
      const payload = JSON.stringify({
        event: "showcase_impression",
        category,
      });
      try {
        if (typeof navigator !== "undefined" && navigator.sendBeacon) {
          navigator.sendBeacon(
            "/api/track",
            new Blob([payload], { type: "application/json" })
          );
        } else {
          fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
            keepalive: true,
          });
        }
      } catch {
        /* best-effort */
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fire();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [category]);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        height: 1,
        width: 1,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
      }}
    />
  );
}

"use client";

import { useEffect } from "react";

/**
 * Fires a `work_view` event to /api/track on mount so the owner can measure
 * demand per category from the server logs. sendBeacon keeps the ping alive
 * across client-side navigation / page unload.
 */
export default function WorkViewTracker({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  useEffect(() => {
    const payload = JSON.stringify({
      event: "work_view",
      slug,
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
      /* tracking is best-effort; never block the page */
    }
  }, [slug, category]);

  return null;
}

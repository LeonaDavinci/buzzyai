"use client";

import type { ReactNode } from "react";

/**
 * Work-entry CTA — hands the user off to the gen app, which owns the login,
 * workspace and creation flow. The www site is promotional only.
 */
export default function PricingJump({
  className = "btn btn-primary",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href="https://gen.buzzyai.video" className={className}>
      {children}
    </a>
  );
}

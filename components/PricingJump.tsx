"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Internal CTA button — jumps to this site's own pricing section.
 * (Never link to third-party pricing pages: that reads as impersonation.)
 */
export default function PricingJump({
  className = "btn btn-primary",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href="/#pricing" className={className}>
      {children}
    </Link>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { plans } from "@/lib/data";
import styles from "./PaymentLanding.module.css";

type CheckoutKey = string;

export default function PaymentLanding({ plan }: { plan?: string }) {
  const key = ((plan ?? "creator").toLowerCase()) as CheckoutKey;
  const data = plans.find((p) => p.name.toLowerCase() === key) ?? plans.find((p) => p.featured) ?? plans[0];

  // Fire tracking on page load (begin_checkout) — this is what tells you a
  // user actually clicked "Continue to secure checkout" from /pricing.
  useEffect(() => {
    track("begin_checkout", data.name);
  }, [data.name]);

  const handlePay = () => {
    track("payment_click", data.name);
  };

  return (
    <section className="section" id="payment">
      <div className="container">
        <div className={styles.box}>
          <span className="eyebrow">Checkout</span>
          <h1 className={styles.title}>
            You&apos;re subscribing to{" "}
            <span className="gold">BuzzyAI.Video</span>
          </h1>

          <div className={styles.planCard}>
            <div className={styles.planTop}>
              <span className={styles.planName}>{data.name}</span>
              <span className={styles.planTag}>Selected</span>
            </div>
            <p className={styles.planDesc}>{data.desc}</p>
            <div className={styles.priceRow}>
              <span className={styles.price}>
                {data.priceYearly ? data.priceYearly : data.priceMonthly}
              </span>
              <span className={styles.unit}>/mo billed annually</span>
              {data.priceYearly && (
                <s className={styles.strike}>{data.priceMonthly}</s>
              )}
            </div>
            <ul className={styles.features}>
              {data.features.map((f) => (
                <li key={f}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/updating?plan=${key}`}
            className={`btn btn-primary ${styles.payBtn}`}
            onClick={handlePay}
          >
            Pay with Stripe
          </Link>

          <p className={styles.note}>
            We&apos;re scaling to meet record demand and have temporarily paused
            payments. Tap continue and leave your email to get priority access
            the moment we reopen.
          </p>

          <Link href="/pricing" className={styles.back}>
            ← Back to plans
          </Link>
        </div>
      </div>
    </section>
  );
}

// Send the event to both GA4 (if configured) and our /api/track server log.
function track(event: string, planName: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (gtag) gtag("event", event, { plan: planName, currency: "USD" });
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, plan: planName }),
    keepalive: true,
  }).catch(() => {});
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  plans,
  usd,
  monthlyEquivalent,
  annualSaving,
  billedNote,
  PAYMENT_NOTE,
  REFUND_NOTE,
} from "@/lib/data";
import type { BillingCycle } from "@/lib/data";
import styles from "./PaymentLanding.module.css";

export default function PaymentLanding({
  plan,
  billing,
}: {
  plan?: string;
  billing?: string;
}) {
  const key = (plan ?? "creator").toLowerCase();
  const data =
    plans.find((p) => p.name.toLowerCase() === key) ??
    plans.find((p) => p.featured) ??
    plans[0];
  // The cycle is passed through from /pricing so the amount on this checkout
  // page is exactly the amount the visitor just saw on the pricing page.
  const cycle: BillingCycle = billing === "monthly" ? "monthly" : "yearly";
  const perMonth = monthlyEquivalent(data, cycle);
  const saving = annualSaving(data);

  // Fire tracking on page load (begin_checkout) — this is what tells you a
  // user actually clicked "Continue to secure checkout" from /pricing.
  useEffect(() => {
    track("begin_checkout", data.name, cycle);
  }, [data.name, cycle]);

  const handlePay = () => {
    track("payment_click", data.name, cycle);
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
              <span className={styles.price}>{usd(perMonth)}</span>
              <span className={styles.unit}>
                {data.unit} ·{" "}
                {cycle === "yearly" ? "annual billing" : "monthly billing"}
              </span>
              {cycle === "yearly" && (
                <s className={styles.strike}>{usd(data.priceMonthly)}/mo</s>
              )}
            </div>
            <p className={styles.billed}>{billedNote(data, cycle)}</p>
            {cycle === "yearly" && (
              <p className={styles.billed}>
                That is {usd(data.priceYearly)}/mo, saving {saving}% versus
                paying monthly.
              </p>
            )}
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
            Continue
          </Link>

          <p className={styles.note}>
            {PAYMENT_NOTE}. {REFUND_NOTE}. Cancel anytime. Full refund terms are
            in our <Link href="/terms">Terms of Service</Link>.
          </p>

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
function track(event: string, planName: string, cycle: BillingCycle) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (gtag) gtag("event", event, { plan: planName, billing: cycle, currency: "USD" });
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, plan: planName, billing: cycle }),
    keepalive: true,
  }).catch(() => {});
}

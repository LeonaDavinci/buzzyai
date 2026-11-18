"use client";

import { useState } from "react";
import {
  plans,
  usd,
  monthlyEquivalent,
  annualSaving,
  billedNote,
  MAX_ANNUAL_SAVING,
  PAYMENT_NOTE,
  REFUND_NOTE,
} from "@/lib/data";
import type { BillingCycle } from "@/lib/data";
import styles from "./Pricing.module.css";

export default function Pricing() {
  // Keep the default cycle identical to /pricing and /payment so the same plan
  // always shows the same price no matter where a visitor lands.
  const [billing, setBilling] = useState<BillingCycle>("yearly");

  return (
    <section className="section" id="pricing">
      <div className="container">
        <span className="eyebrow">Pricing</span>
        <h2 className="section-title">
          Pick the <span className="gold">plan that fits your craft</span>
        </h2>
        <p className="section-sub">
          Every plan is available with monthly or annual billing. Annual plans
          are charged once a year at a lower per-month rate.
        </p>

        {/* ShipAny-style billing toggle */}
        <div className={styles.toggle} role="tablist" aria-label="Billing period">
          <button
            type="button"
            role="tab"
            aria-selected={billing === "monthly"}
            className={`${styles.toggleBtn} ${
              billing === "monthly" ? styles.toggleActive : ""
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={billing === "yearly"}
            className={`${styles.toggleBtn} ${
              billing === "yearly" ? styles.toggleActive : ""
            }`}
            onClick={() => setBilling("yearly")}
          >
            Annually
            <span className={styles.save}>Save up to {MAX_ANNUAL_SAVING}%</span>
          </button>
        </div>

        <div className={styles.grid}>
          {plans.map((p) => {
            const perMonth = monthlyEquivalent(p, billing);
            const saving = annualSaving(p);
            return (
              <div
                key={p.name}
                className={`${styles.card} ${p.featured ? styles.featured : ""}`}
              >
                {p.featured && <span className={styles.tag}>Most popular</span>}
                <h3 className={styles.name}>{p.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{usd(perMonth)}</span>
                  <span className={styles.unit}>{p.unit}</span>
                </div>
                <span className={styles.billedNote}>{billedNote(p, billing)}</span>
                {billing === "yearly" && (
                  <span className={styles.billedNote}>
                    <s className={styles.strike}>{usd(p.priceMonthly)}/mo</s>{" "}
                    monthly · save {saving}%
                  </span>
                )}
                <p className={styles.desc}>{p.desc}</p>
                <a
                  href={p.href ?? "#"}
                  className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} ${
                    styles.cta
                  }`}
                >
                  {p.cta}
                </a>
                <ul className={styles.features}>
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className={styles.check}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className={styles.footnote}>
          All plans include the Director Canvas, storyboard, multi-angle camera
          control and real-time relighting. These prices are the same on the
          pricing page and at checkout. Cancel anytime.
        </p>
        <p className={styles.footnote}>
          {PAYMENT_NOTE} · {REFUND_NOTE}. Full refund terms are in our{" "}
          <a href="/terms">Terms of Service</a>.
        </p>
      </div>
    </section>
  );
}

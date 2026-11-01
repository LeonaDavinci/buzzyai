"use client";

import { useState } from "react";
import { plans } from "@/lib/data";
import styles from "./Pricing.module.css";

type Billing = "monthly" | "yearly";

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="section" id="pricing">
      <div className="container">
        <span className="eyebrow">Pricing</span>
        <h2 className="section-title">
          Pick the <span className="gold">plan that fits your craft</span>
        </h2>
        <p className="section-sub">
          From free trials to studio collaboration, scale up as you create more.
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
            <span className={styles.save}>Save 20%</span>
          </button>
        </div>

        <div className={styles.grid}>
          {plans.map((p) => {
            const showYearly = billing === "yearly" && p.priceYearly;
            const price = showYearly ? p.priceYearly! : p.priceMonthly;
            const original = billing === "monthly" ? p.priceYearly : p.priceMonthly;
            return (
              <div
                key={p.name}
                className={`${styles.card} ${p.featured ? styles.featured : ""}`}
              >
                {p.featured && <span className={styles.tag}>Most popular</span>}
                <h3 className={styles.name}>{p.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{price}</span>
                  <span className={styles.unit}>{p.unit}</span>
                </div>
                {original && original !== price && (
                  <span className={styles.billedNote}>
                    <s className={styles.strike}>{original}</s> billed {billing}
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
          control and real-time relighting. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

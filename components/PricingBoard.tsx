"use client";

import { useState } from "react";
import { plans, CHECKOUT } from "@/lib/data";
import pricing from "./Pricing.module.css";
import styles from "./PricingBoard.module.css";

type Billing = "monthly" | "yearly";

export default function PricingBoard() {
  const [billing, setBilling] = useState<Billing>("yearly");
  const [selected, setSelected] = useState<string>(
    plans.find((p) => p.featured)?.name ?? plans[0].name
  );

  const plan = plans.find((p) => p.name === selected) ?? plans[0];
  const showYearly = billing === "yearly" && plan.priceYearly;
  const price = showYearly ? plan.priceYearly! : plan.priceMonthly;
  const original = billing === "monthly" ? plan.priceYearly : plan.priceMonthly;
  const checkoutHref = plan.checkoutUrl ?? plan.href ?? "#";

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="section" id="plans">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1 className="section-title">
            Choose your <span className="gold">plan</span>
          </h1>
          <p className="section-sub">
            Start free, upgrade when you are ready. Cancel anytime.
          </p>

          {/* ShipAny-style billing toggle */}
          <div
            className={pricing.toggle}
            role="tablist"
            aria-label="Billing period"
          >
            <button
              type="button"
              role="tab"
              aria-selected={billing === "monthly"}
              className={`${pricing.toggleBtn} ${
                billing === "monthly" ? pricing.toggleActive : ""
              }`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={billing === "yearly"}
              className={`${pricing.toggleBtn} ${
                billing === "yearly" ? pricing.toggleActive : ""
              }`}
              onClick={() => setBilling("yearly")}
            >
              Annually
              <span className={pricing.save}>Save 20%</span>
            </button>
          </div>

          <div className={pricing.grid}>
            {plans.map((p) => {
              const pShowYearly = billing === "yearly" && p.priceYearly;
              const pPrice = pShowYearly ? p.priceYearly! : p.priceMonthly;
              const pOrig =
                billing === "monthly" ? p.priceYearly : p.priceMonthly;
              const cardLabel = p.checkoutUrl ? "Choose plan" : p.cta;
              return (
                <div
                  key={p.name}
                  className={`${pricing.card} ${p.featured ? pricing.featured : ""} ${
                    selected === p.name ? styles.selected : ""
                  }`}
                >
                  {p.featured && <span className={pricing.tag}>Most popular</span>}
                  <h3 className={pricing.name}>{p.name}</h3>
                  <div className={pricing.priceRow}>
                    <span className={pricing.price}>{pPrice}</span>
                    <span className={pricing.unit}>{p.unit}</span>
                  </div>
                  {pOrig && pOrig !== pPrice && (
                    <span className={pricing.billedNote}>
                      <s className={pricing.strike}>{pOrig}</s> billed {billing}
                    </span>
                  )}
                  <p className={pricing.desc}>{p.desc}</p>
                  <button
                    type="button"
                    className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} ${pricing.cta}`}
                    onClick={() => {
                      setSelected(p.name);
                      scrollToCheckout();
                    }}
                  >
                    {cardLabel}
                  </button>
                  <ul className={pricing.features}>
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className={pricing.check}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className={pricing.footnote}>
            All plans include the Director Canvas, storyboard, multi-angle camera
            control and real-time relighting.
          </p>
        </div>
      </section>

      {/* ---------- 付费板块 / Checkout board ---------- */}
      <section className="section tight" id="checkout">
        <div className="container">
          <div className={styles.board}>
            <div className={styles.head}>
              <span className="eyebrow">Checkout</span>
              <h2 className={styles.title}>
                Subscribe to <span className="gold">BuzzyAI.Video</span>
              </h2>
              <p className={styles.sub}>Pick a plan and continue to secure payment.</p>
            </div>

            <div className={styles.picker} role="radiogroup" aria-label="Select plan">
              {plans.map((p) => {
                const pickPrice =
                  billing === "yearly" && p.priceYearly
                    ? p.priceYearly
                    : p.priceMonthly;
                return (
                  <button
                    key={p.name}
                    type="button"
                    role="radio"
                    aria-checked={selected === p.name}
                    className={`${styles.pick} ${
                      selected === p.name ? styles.pickActive : ""
                    }`}
                    onClick={() => setSelected(p.name)}
                  >
                    <span className={styles.pickName}>{p.name}</span>
                    <span className={styles.pickPrice}>
                      {pickPrice}
                      {p.unit}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={styles.summary}>
              <div className={styles.sumItem}>
                <span className={styles.sumLabel}>Selected plan</span>
                <span className={styles.sumValue}>
                  {plan.name} · {billing === "yearly" ? "Annual" : "Monthly"}
                </span>
              </div>
              <div className={styles.sumItem}>
                <span className={styles.sumLabel}>Price</span>
                <span className={styles.sumPrice}>
                  {price}
                  {plan.unit}
                  {original && original !== price && (
                    <s className={styles.sumStrike}>{original}</s>
                  )}
                </span>
              </div>
            </div>

            <a
              href={checkoutHref}
              className={`btn btn-primary ${styles.payBtn}`}
              target={plan.checkoutUrl ? "_blank" : undefined}
              rel={plan.checkoutUrl ? "noopener noreferrer" : undefined}
            >
              {plan.checkoutUrl ? "Continue to secure checkout" : plan.cta}
            </a>
            <p className={styles.secure}>
              Secure payment via Stripe / Lemonsqueezy · 30-day money-back ·
              Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

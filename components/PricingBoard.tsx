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
import pricing from "./Pricing.module.css";
import styles from "./PricingBoard.module.css";

export default function PricingBoard() {
  // Same default cycle as the homepage and the /payment checkout page.
  const [billing, setBilling] = useState<BillingCycle>("yearly");
  const [selected, setSelected] = useState<string>(
    plans.find((p) => p.featured)?.name ?? plans[0].name
  );

  const plan = plans.find((p) => p.name === selected) ?? plans[0];
  const perMonth = monthlyEquivalent(plan, billing);
  const saving = annualSaving(plan);

  // Carry the selected cycle through to the checkout page so the amount shown
  // there is exactly the amount shown here.
  const checkoutHref = plan.checkoutUrl
    ? plan.checkoutUrl.startsWith("/")
      ? `${plan.checkoutUrl}&billing=${billing}`
      : plan.checkoutUrl
    : plan.href ?? "#";

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
            Choose monthly or annual billing. Cancel anytime.
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
              <span className={pricing.save}>
                Save up to {MAX_ANNUAL_SAVING}%
              </span>
            </button>
          </div>

          <div className={pricing.grid}>
            {plans.map((p) => {
              const pPerMonth = monthlyEquivalent(p, billing);
              const pSaving = annualSaving(p);
              const cardLabel = p.checkoutUrl ? "Choose plan" : p.cta;
              return (
                <div
                  key={p.name}
                  className={`${pricing.card} ${
                    p.featured ? pricing.featured : ""
                  } ${selected === p.name ? styles.selected : ""}`}
                >
                  {p.featured && <span className={pricing.tag}>Most popular</span>}
                  <h3 className={pricing.name}>{p.name}</h3>
                  <div className={pricing.priceRow}>
                    <span className={pricing.price}>{usd(pPerMonth)}</span>
                    <span className={pricing.unit}>{p.unit}</span>
                  </div>
                  <span className={pricing.billedNote}>
                    {billedNote(p, billing)}
                  </span>
                  {billing === "yearly" && (
                    <span className={pricing.billedNote}>
                      <s className={pricing.strike}>{usd(p.priceMonthly)}/mo</s>{" "}
                      monthly · save {pSaving}%
                    </span>
                  )}
                  <p className={pricing.desc}>{p.desc}</p>
                  <button
                    type="button"
                    className={`btn ${
                      p.featured ? "btn-primary" : "btn-ghost"
                    } ${pricing.cta}`}
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
            All plans include the Director Canvas, storyboard, multi-angle
            camera control and real-time relighting. Monthly plans are billed
            every month; annual plans are billed once a year at the total shown.
            The same prices appear on the homepage and at checkout.
          </p>
        </div>
      </section>

      {/* ---------- Checkout board ---------- */}
      <section className="section tight" id="checkout">
        <div className="container">
          <div className={styles.board}>
            <div className={styles.head}>
              <span className="eyebrow">Checkout</span>
              <h2 className={styles.title}>
                Subscribe to <span className="gold">BuzzyAI.Video</span>
              </h2>
              <p className={styles.sub}>
                Pick a plan and continue to secure payment.
              </p>
            </div>

            <div
              className={styles.picker}
              role="radiogroup"
              aria-label="Select plan"
            >
              {plans.map((p) => (
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
                    {usd(monthlyEquivalent(p, billing))}
                    {p.unit}
                  </span>
                </button>
              ))}
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
                  {usd(perMonth)}
                  {plan.unit}
                  {billing === "yearly" && (
                    <s className={styles.sumStrike}>
                      {usd(plan.priceMonthly)}/mo
                    </s>
                  )}
                </span>
              </div>
              <div className={styles.sumItem}>
                <span className={styles.sumLabel}>You pay</span>
                <span className={styles.sumValue}>
                  {billedNote(plan, billing)}
                </span>
              </div>
            </div>

            <a
              href={checkoutHref}
              className={`btn btn-primary ${styles.payBtn}`}
            >
              {plan.checkoutUrl ? "Continue to secure checkout" : plan.cta}
            </a>
            <p className={styles.secure}>
              {PAYMENT_NOTE} · {REFUND_NOTE} · Cancel anytime
            </p>
            <p className={styles.secure}>
              {billing === "yearly"
                ? `Annual billing saves ${saving}% versus paying monthly. `
                : `Switch to annual billing to save ${saving}% per month. `}
              Full refund terms are in our{" "}
              <a href="/terms">Terms of Service</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

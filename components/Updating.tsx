"use client";

import { useState } from "react";
import styles from "./Updating.module.css";

export default function Updating({ plan }: { plan?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), plan: plan ?? "" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="updating">
      <div className="container">
        <div className={styles.box}>
          <span className="eyebrow">Service Update</span>
          <h1 className={styles.title}>
            We&apos;re Scaling Up —{" "}
            <span className="gold">Be Right Back</span>
          </h1>

          <p className={styles.lead}>
            Buzzy AI Video is experiencing record demand. With more creators
            joining every day than our systems can comfortably handle, our
            resources are stretched to the limit.
          </p>
          <p className={styles.lead}>
            We&apos;re expanding capacity and rolling out service upgrades right
            now, so everyone gets the quality they deserve.
          </p>

          {status === "done" ? (
            <div className={styles.thanks}>
              <div className={styles.thanksIcon}>✓</div>
              <p>
                Thanks! We&apos;ll email you the moment we&apos;re back online.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit}>
              <p className={styles.formLabel}>
                Want to be the first to know when we reopen? Leave your email and
                we&apos;ll notify you the moment everything is ready.
              </p>
              <div className={styles.row}>
                <input
                  type="email"
                  required
                  className={styles.input}
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submit}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Notify me"}
                </button>
              </div>
              {status === "error" && (
                <p className={styles.err}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

          <div className={styles.eta}>
            <span className={styles.etaBadge}>Estimated completion</span>
            <span className={styles.etaText}>within one week</span>
          </div>

          <p className={styles.signoff}>
            Thank you for your trust.{" "}
            <span className={styles.goldText}>
              Good things are worth the wait.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

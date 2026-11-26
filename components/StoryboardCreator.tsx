"use client";

import { useEffect, useState } from "react";
import styles from "./StoryboardCreator.module.css";

const GENERATE_MS = 2600;
const PLAY_MS = 3000;

export default function StoryboardCreator() {
  const [phase, setPhase] = useState<"generating" | "playing">("generating");

  useEffect(() => {
    const t = setTimeout(
      () => setPhase((p) => (p === "generating" ? "playing" : "generating")),
      phase === "generating" ? GENERATE_MS : PLAY_MS
    );
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <section className="section" id="storyboard">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.visual}>
            <div className={styles.board}>
              <div className={styles.leftNode}>
                <span className={styles.nodeTag}>image</span>
                <div className={styles.thumb}>
                  <div className={styles.thumbScene}>
                    <div className={styles.figure} />
                    <div className={styles.ball} />
                  </div>
                </div>
              </div>
              <div className={styles.connector}>
                <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
                  <path
                    d="M0 40 C40 40, 40 10, 80 10"
                    stroke="url(#lineGold)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M0 40 C40 40, 40 70, 80 70"
                    stroke="url(#lineGold)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <defs>
                    <linearGradient id="lineGold" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f5c518" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#f5c518" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className={styles.nodeDot} />
                <div className={styles.nodeDot} />
              </div>
              <div className={styles.rightGrid}>
                <div className={styles.gridHead}>
                  <span className={styles.gridTag}>Video Clips</span>
                  <span className={styles.gridTitle}>
                    {phase === "playing"
                      ? "AI clip · 3s cinematic preview"
                      : "3×3 Grid Multi-cam View"}
                  </span>
                </div>
                {phase === "playing" ? (
                  <video
                    className={styles.clip}
                    src="/media/ai-clip.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <div className={styles.gridBody}>
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className={styles.cell}>
                        <span className={styles.cellNum}>0{i + 1}</span>
                        <span className={styles.cellStatus}>Generating…</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.text}>
            <span className="eyebrow">Storyboard Creator</span>
            <h2 className="section-title">
              One storyboard, <span className="gold">consistent scenes</span>
            </h2>
            <p className="section-sub">
              A detailed storyboard is generated from your image or prompt. It
              locks characters, objects, locations, and other components so
              every generated clip keeps the same visual identity—just like a
              simplified ComfyUI node flow, built for directors.
            </p>
            <ul className={styles.points}>
              <li>
                <span className={styles.check}>✓</span>
                Drop an image or prompt to generate a multi-cam shot grid
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Track characters, props, and locations across scenes
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Edit any shot and let the whole board update automatically
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Render with 30+ models while keeping the same visual DNA
              </li>
            </ul>
            <a href="https://gen.buzzyai.video" className="btn btn-primary">
              Try it →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

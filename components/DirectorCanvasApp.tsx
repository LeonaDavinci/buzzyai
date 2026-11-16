"use client";

import { useRef, useState } from "react";
import { models } from "@/lib/data";
import PricingJump from "./PricingJump";
import styles from "./DirectorCanvasApp.module.css";

type Status = "idle" | "storyboard" | "rendering" | "done";

const SHOT_NAMES = ["Opening", "Mid shot", "Close-up", "End card"];

type ScanVerdict = {
  action: "allow" | "review" | "block";
  reasonCode: string;
  requestId: string;
};

/**
 * Screens the script through our Prompt Sift moderation endpoint before any
 * generation. Returns true only on an explicit "allow". "block" surfaces a
 * friendly message; transient "review"/degraded verdicts are retried a few
 * times (holding the request) rather than generating without a verdict.
 */
async function screenPrompt(prompt: string): Promise<{ ok: boolean; message?: string }> {
  const friendlyBlock =
    "This content doesn't meet our usage guidelines. Please edit your script and try again.";
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch("/api/scan-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, locale: "en" }),
      });
      if (!res.ok) throw new Error(`scan status ${res.status}`);
      const verdict = (await res.json()) as ScanVerdict;
      if (verdict.action === "allow") return { ok: true };
      if (verdict.action === "block") return { ok: false, message: friendlyBlock };
      // "review" / service_degraded: hold briefly and retry, never generate
      // without a verdict.
      await new Promise((r) => setTimeout(r, 900 * (attempt + 1)));
    } catch {
      // Network error: do not generate unmoderated; retry then hold.
      await new Promise((r) => setTimeout(r, 900 * (attempt + 1)));
    }
  }
  return {
    ok: false,
    message:
      "We're checking this script for safety right now. Please try again in a moment.",
  };
}

export default function DirectorCanvasApp() {
  const [script, setScript] = useState(
    "A lone traveler walks through a golden desert at sunset, then looks up as light blooms across the sky."
  );
  const [status, setStatus] = useState<Status>("idle");
  const [board, setBoard] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [model, setModel] = useState("Seedance 2.5");
  const [scanning, setScanning] = useState(false);
  const [notice, setNotice] = useState("");

  // camera
  const [angle, setAngle] = useState(-22);
  const [tilt, setTilt] = useState(14);
  const [zoom, setZoom] = useState(50);
  const drag = useRef<{ x: number; y: number; a: number; t: number } | null>(null);

  // lighting
  const [key, setKey] = useState(70);
  const [temp, setTemp] = useState(40); // 0 cool -> 100 warm
  const [rim, setRim] = useState(true);

  async function buildStoryboard() {
    if (!script.trim()) return;
    setNotice("");
    setScanning(true);
    const verdict = await screenPrompt(script.trim());
    setScanning(false);
    if (!verdict.ok) {
      setNotice(verdict.message ?? "Please revise your script and try again.");
      return;
    }
    setStatus("storyboard");
    setBoard([]);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setBoard(SHOT_NAMES.slice(0, i));
      if (i >= SHOT_NAMES.length) clearInterval(id);
    }, 320);
  }

  function generate() {
    if (status === "idle") buildStoryboard();
    setStatus("rendering");
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 9 + 4;
        if (next >= 100) {
          clearInterval(id);
          setStatus("done");
          return 100;
        }
        return next;
      });
    }, 180);
  }

  function onPointerDown(e: React.PointerEvent) {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, a: angle, t: tilt };
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    setAngle(drag.current.a + dx * 0.6);
    setTilt(Math.max(-60, Math.min(60, drag.current.t - dy * 0.6)));
  }
  function onPointerUp() {
    drag.current = null;
  }

  const warmR = Math.round(150 + (255 - 150) * (temp / 100));
  const warmG = Math.round(200 + (200 - 200) * (temp / 100));
  const warmB = Math.round(255 - (255 - 120) * (temp / 100));
  const lightColor = `rgb(${warmR}, ${warmG}, ${warmB})`;
  const keyAlpha = (key / 100) * 0.85 + 0.1;

  return (
    <div className={styles.app}>
      {/* LEFT: viewport / preview */}
      <div className={styles.stage}>
        <div className={styles.stageHead}>
          <span className={styles.dotLive} /> Canvas · {model}
        </div>
        <div className={styles.viewport}>
          {status === "done" ? (
            <div
              className={styles.clip}
              style={{
                background: `radial-gradient(120% 90% at 30% 30%, ${lightColor}, #141414 60%)`,
              }}
            >
              <div className={styles.clipScene}>
                <div className={styles.sun} style={{ background: lightColor }} />
                <div className={styles.horizon} />
                <div
                  className={styles.figure}
                  style={{
                    boxShadow: rim ? "6px 0 14px rgba(245,197,24,0.7)" : "none",
                  }}
                />
              </div>
              <button className={styles.play} aria-label="Play clip">
                ▶
              </button>
              <span className={styles.clipTag}>Your clip is ready · 4K · 30s</span>
            </div>
          ) : status === "rendering" ? (
            <div className={styles.renderBox}>
              <div className={styles.renderBar}>
                <div
                  className={styles.renderFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p>Rendering clip with {model}… {Math.round(progress)}%</p>
            </div>
          ) : (
            <div className={styles.placeholder}>
              <div className={styles.phIcon}>◐</div>
              <p>Your generated clip will appear here.</p>
              <span>Write a script, set the camera & light, then Generate.</span>
            </div>
          )}
        </div>
        <div className={styles.stageFoot}>
          <span>Camera: {Math.round(angle)}° / {Math.round(tilt)}°</span>
          <span>Light: {key}% · {rim ? "Rim on" : "Rim off"}</span>
        </div>
      </div>

      {/* RIGHT: controls */}
      <div className={styles.controls}>
        <div className={styles.block}>
          <label className={styles.label}>Script / Prompt</label>
          <textarea
            className={styles.textarea}
            value={script}
            onChange={(e) => setScript(e.target.value)}
            rows={3}
          />
          <button
            className="btn btn-ghost"
            onClick={buildStoryboard}
            disabled={scanning}
          >
            {scanning ? "Checking safety…" : "Generate storyboard"}
          </button>
          {notice && <p className={styles.notice}>{notice}</p>}
          {board.length > 0 && (
            <div className={styles.shots}>
              {SHOT_NAMES.map((s, i) => (
                <div
                  key={s}
                  className={`${styles.shot} ${i < board.length ? styles.shotOn : ""}`}
                >
                  <span>Shot {i + 1}</span>
                  <em>{i < board.length ? s : "—"}</em>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.block}>
          <label className={styles.label}>Model</label>
          <div className={styles.modelRow}>
            {models.slice(0, 6).map((m) => (
              <button
                key={m.name}
                className={`${styles.chip} ${model === m.name ? styles.chipOn : ""}`}
                onClick={() => setModel(m.name)}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <label className={styles.label}>
            Camera <span className={styles.hint}>drag the cube</span>
          </label>
          <div
            className={styles.cubeWrap}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            <div
              className={styles.cube}
              style={
                {
                  "--angle": `${angle}deg`,
                  "--tilt": `${tilt}deg`,
                } as React.CSSProperties
              }
            >
              <div className={`${styles.face} ${styles.front}`} />
              <div className={`${styles.face} ${styles.back}`} />
              <div className={`${styles.face} ${styles.right}`} />
              <div className={`${styles.face} ${styles.left}`} />
              <div className={`${styles.face} ${styles.top}`} />
              <div className={`${styles.face} ${styles.bottom}`} />
            </div>
          </div>
          <div className={styles.sliders}>
            <Slider label="Angle" value={angle} min={-180} max={180} onChange={setAngle} />
            <Slider label="Tilt" value={tilt} min={-60} max={60} onChange={setTilt} />
            <Slider label="Zoom" value={zoom} min={0} max={100} onChange={setZoom} />
          </div>
        </div>

        <div className={styles.block}>
          <label className={styles.label}>Lighting</label>
          <div className={styles.lightRow}>
            <div
              className={styles.lightPreview}
              style={{
                background: `radial-gradient(circle at 32% 38%, rgba(${warmR},${warmG},${warmB},${keyAlpha}), #202020 62%)`,
                boxShadow: rim ? "inset -10px 0 22px rgba(245,197,24,0.55)" : "none",
              }}
            />
            <div className={styles.sliders}>
              <Slider label="Key" value={key} min={0} max={100} onChange={setKey} />
              <Slider label="Temp" value={temp} min={0} max={100} onChange={setTemp} />
              <button
                className={`${styles.rimBtn} ${rim ? styles.rimOn : ""}`}
                onClick={() => setRim((r) => !r)}
              >
                Rim light: {rim ? "On" : "Off"}
              </button>
            </div>
          </div>
        </div>

        <PricingJump className={`btn btn-primary ${styles.generate}`}>
          {status === "done" ? "Generate again" : "Generate video"}
        </PricingJump>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className={styles.slider}>
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <em>{Math.round(value)}</em>
    </label>
  );
}

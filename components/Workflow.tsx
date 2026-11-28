import styles from "./Workflow.module.css";

const steps = [
  { n: "1", t: "Drop a prompt or image", d: "Start with a single idea. The AI turns it into a detailed multi-cam storyboard, like a simplified ComfyUI node flow." },
  { n: "2", t: "Lock consistency", d: "Characters, objects, locations, and props are tagged and locked across every shot so nothing drifts between scenes." },
  { n: "3", t: "Direct camera & light", d: "Open any shot in the Director Canvas, drag the camera cube, and tune key light to match the mood." },
  { n: "4", t: "Render with any model", d: "Pick the best engine from 30+ models and export consistent 4K clips, all from the same storyboard." },
];

export default function Workflow() {
  return (
    <section className="section" id="workflow" style={{ background: "var(--bg-elev)" }}>
      <div className="container">
        <span className="eyebrow">Director workflow</span>
        <h2 className="section-title">
          Storyboard first, <span className="gold">then shoot</span>
        </h2>
        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.step}>
              <span className={styles.num}>{s.n}</span>
              <h3 className={styles.t}>{s.t}</h3>
              <p className={styles.d}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import styles from "./DirectorCanvas.module.css";

const points = [
  "Open any shot from the storyboard on the canvas",
  "Drag the camera cube to set angle, tilt and motion",
  "Tune key light, temperature and rim light in real time",
  "Render with any of 11+ models and export 4K clips",
];

export default function DirectorCanvas() {
  return (
    <section className="section" id="canvas">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <span className="eyebrow">Director Canvas</span>
            <h2 className="section-title">
              From storyboard to <span className="gold">motion</span>
            </h2>
            <p className="section-sub">
              The Director Canvas turns your locked storyboard into animated
              shots. Open a panel, move the camera, adjust light, and generate
              — all while the characters and locations stay consistent.
            </p>
            <ul className={styles.points}>
              {points.map((p) => (
                <li key={p}>
                  <span className={styles.check}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/director" className="btn btn-primary">
              Open the Director Canvas
            </Link>
          </div>
          <div className={styles.visual}>
            <img
              src="/director-canvas.gif"
              alt="BuzzyAI.Video Director Canvas demo showing storyboard, camera and lighting controls generating a clip"
              className={styles.gif}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

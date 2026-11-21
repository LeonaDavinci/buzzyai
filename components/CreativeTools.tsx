import { tools } from "@/lib/data";
import styles from "./CreativeTools.module.css";

function Visual({ index }: { index: string }) {
  if (index === "01") {
    return (
      <div className={styles.storyboardGrid}>
        <div className={styles.inputNode}>
          <span>image</span>
        </div>
        <div className={styles.flowLine} />
          <div className={styles.grid3x3}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={styles.miniCell}>
                <span>0{i + 1}</span>
              </div>
            ))}
          </div>
      </div>
    );
  }
  if (index === "02") {
    return (
      <div className={styles.camera}>
        <div className={styles.cube}>
          <div className={styles.cubeFace} />
          <div className={styles.cubeFace} />
          <div className={styles.cubeFace} />
        </div>
        <div className={styles.orbit} />
      </div>
    );
  }
  return (
    <div className={styles.light}>
      <div className={styles.subject} />
      <div className={styles.rim} />
      <div className={styles.keyLight} />
    </div>
  );
}

export default function CreativeTools() {
  return (
    <section className="section" id="tools">
      <div className="container">
        <span className="eyebrow">Creative Agent for storytelling</span>
        <h2 className="section-title">
          A ComfyUI-simple canvas, <span className="gold">for directors</span>
        </h2>
        <p className="section-sub">
          Three connected tools that mirror a real director's workflow: plan the
          storyboard, move the camera, then light the scene. Each step feeds the
          next like a node graph, without the complexity.
        </p>

        <div className={styles.list}>
          {tools.map((t, i) => (
            <div
              key={t.index}
              className={`${styles.row} ${i % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.text}>
                <span className={styles.index}>{t.index}</span>
                <h3 className={styles.title}>{t.title}</h3>
                <p className={styles.desc}>{t.desc}</p>
                <a href="https://gen.buzzyai.video" className="btn btn-ghost">
                  Try it
                </a>
              </div>
              <div className={styles.visualWrap}>
                <Visual index={t.index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

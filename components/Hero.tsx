import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} film-grain`} id="top">
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Creative Agent for storytelling</span>
        <h1 className={styles.title}>
          <span className="gold">BuzzyAI.Video</span>
          <br />
          Direct with a storyboard that stays consistent
        </h1>
        <p className={styles.sub}>
          BuzzyAI.Video is the simplest ComfyUI-style canvas for directors: drop
          an image, generate a multi-cam storyboard, and render consistent clips
          where characters, objects, and locations stay locked across every
          shot.
        </p>
        <div className={styles.cta}>
          <a href="/director" className="btn btn-primary">
            Try the storyboard canvas
          </a>
          <a href="#storyboard" className="btn btn-ghost">
            See how it works
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>3×3</strong>
            <span>multi-cam grid</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <strong>11+</strong>
            <span>AI models</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <strong>4K</strong>
            <span>cinematic output</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <strong>1</strong>
            <span>consistent canvas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

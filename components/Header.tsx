import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>◐</span>
          <span className={styles.logoText}>
            BuzzyAI<span className="gold">.Video</span>
          </span>
        </a>
        <nav className={styles.nav}>
          <a href="/#models">Models</a>
          <a href="/director">Director Canvas</a>
          <a href="/#showcase">Showcase</a>
          <a href="/#tools">Creative Tools</a>
          <a href="/skills">Skills</a>
          <a href="/blog">Blog</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
        </nav>
        <div className={styles.actions}>
          <a href="/" className={styles.signin}>
            Sign in
          </a>
          <a href="/director" className="btn btn-primary">
            Open Canvas
          </a>
        </div>
      </div>
    </header>
  );
}

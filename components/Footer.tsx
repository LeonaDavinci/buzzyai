import styles from "./Footer.module.css";

type FooterLink = { label: string; href: string };
type FooterCol = { title: string; links: FooterLink[] };

const cols: FooterCol[] = [
  {
    title: "Product",
    links: [
      { label: "Models", href: "/#models" },
      { label: "Director Canvas", href: "/director" },
      { label: "Creative Tools", href: "/#tools" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Skills", href: "/skills" },
      { label: "Tutorials", href: "/" },
      { label: "Community", href: "/" },
      { label: "Developer API", href: "/" },
      { label: "FAQ", href: "/#faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Privacy", href: "/" },
      { label: "Terms", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <span className="gold">◐</span> BuzzyAI
            <span className="gold">.Video</span>
          </a>
          <p className={styles.tagline}>
            Direct consistent AI video in your browser.
            <br />
            Every idea deserves to be filmed.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className={styles.col}>
            <h4>{c.title}</h4>
            {c.links.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="divider" />
      <div className={`container ${styles.bottom}`}>
        <span>© 2026 BuzzyAI.Video. All rights reserved.</span>
        <span>Direct consistent AI video</span>
      </div>
    </footer>
  );
}

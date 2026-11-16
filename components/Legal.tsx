import Link from "next/link";
import styles from "./Legal.module.css";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export default function Legal({ doc }: { doc: LegalDoc }) {
  return (
    <div className={styles.wrap}>
      <section className={`section ${styles.head}`}>
        <div className="container">
          <span className="eyebrow">{doc.eyebrow}</span>
          <h1 className={styles.title}>{doc.title}</h1>
          <p className={styles.updated}>Last updated: {doc.updated}</p>
          <p className={styles.intro}>{doc.intro}</p>
        </div>
      </section>

      <div className="divider" />

      <section className={`section ${styles.body}`}>
        <div className={`container ${styles.cols}`}>
          <aside className={styles.toc}>
            <span className={styles.tocTitle}>On this page</span>
            <nav>
              {doc.sections.map((s, i) => (
                <a key={s.heading} href={`#s${i + 1}`}>
                  {i + 1}. {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          <div className={styles.content}>
            {doc.sections.map((s, i) => (
              <article key={s.heading} id={`s${i + 1}`} className={styles.article}>
                <h2>
                  <span className={styles.num}>{i + 1}.</span> {s.heading}
                </h2>
                {s.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <div className={styles.contact}>
              Questions about this document?{" "}
              <a href="mailto:hello@buzzyai.video">hello@buzzyai.video</a>
            </div>
            <div className={styles.back}>
              <Link href="/">← Back to BuzzyAI.Video</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

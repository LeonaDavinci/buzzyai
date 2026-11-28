import Link from "next/link";
import styles from "./Legal.module.css";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "sub"; heading: string; blocks: LegalBlock[] }
  | { type: "callout"; text: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  legalName: string;
  version: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  footerNote?: string;
};

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "bullets":
      return (
        <ul>
          {block.items.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "sub":
      return (
        <div className={styles.sub}>
          <h3>{block.heading}</h3>
          {block.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
      );
    case "callout":
      return <div className={styles.callout}>{block.text}</div>;
  }
}

export default function Legal({ doc }: { doc: LegalDoc }) {
  return (
    <div className={styles.wrap}>
      <section className={`section ${styles.head}`}>
        <div className="container">
          <span className="eyebrow">{doc.eyebrow}</span>
          <h1 className={styles.title}>{doc.title}</h1>
          <p className={styles.meta}>
            {doc.legalName} &nbsp;·&nbsp; {doc.version} &nbsp;·&nbsp; Last
            updated: {doc.updated}
          </p>
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
                {s.blocks.map((b, j) => (
                  <Block key={j} block={b} />
                ))}
              </article>
            ))}

            {doc.footerNote && <p className={styles.footerNote}>{doc.footerNote}</p>}

            <div className={styles.contact}>
              Questions about this document?{" "}
              <a href="mailto:support@buzzyai.video">support@buzzyai.video</a>
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

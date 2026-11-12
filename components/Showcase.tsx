import Link from "next/link";
import {
  videoWorks,
  workCategories,
  categoryOf,
  categoryLabel,
  VideoWork,
} from "@/lib/data";
import CategoryImpression from "./CategoryImpression";
import styles from "./Showcase.module.css";

function WorkCard({ w }: { w: VideoWork }) {
  const cat = categoryOf(w);
  return (
    <Link
      href={`/works/${w.slug}`}
      className={styles.card}
      aria-label={`Open ${w.title} by ${w.author}`}
    >
      <div className={styles.thumb}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={w.image}
          alt={`${w.title} — ${categoryLabel(cat)} screenshot`}
          className={styles.img}
          loading="lazy"
        />
        <span className={styles.play} aria-hidden="true">
          ▶
        </span>
        <span className={styles.tag}>{categoryLabel(cat)}</span>
        <span className={styles.duration}>{w.duration}</span>
      </div>
      <div className={styles.meta}>
        <div>
          <h4 className={styles.title}>{w.title}</h4>
          <p className={styles.author}>by {w.author}</p>
        </div>
        <span className={styles.workflow}>View work →</span>
      </div>
    </Link>
  );
}

export default function Showcase() {
  return (
    <section
      className="section"
      id="showcase"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container">
        <span className="eyebrow">Showcase</span>
        <h2 className="section-title">
          From idea to screen, <span className="gold">see what you can make</span>
        </h2>
        <p className="section-sub">
          Pick a format and see how the AI director handles it — every piece
          below opens its own breakdown so you can study the shot list, model,
          and prompt.
        </p>

        {workCategories.map((c) => {
          const items = videoWorks.filter((w) => categoryOf(w) === c.id);
          if (items.length === 0) return null;
          return (
            <div className={styles.block} id={`cat-${c.id}`} key={c.id}>
              <CategoryImpression category={c.id} />
              <div className={styles.catHead}>
                <h3 className={styles.cat}>{c.label}</h3>
                <p className={styles.catBlurb}>{c.blurb}</p>
              </div>
              <div className={styles.grid}>
                {items.map((w) => (
                  <WorkCard key={w.slug} w={w} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

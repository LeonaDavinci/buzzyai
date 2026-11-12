import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkViewTracker from "@/components/WorkViewTracker";
import { videoWorks, categoryOf, categoryLabel, VideoWork } from "@/lib/data";
import styles from "./work.module.css";

export function generateStaticParams() {
  return videoWorks.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const w = videoWorks.find((x) => x.slug === params.slug);
  if (!w) return { title: "Work not found · BuzzyAI.Video" };
  const cat = categoryOf(w);
  return {
    title: `${w.title} — ${w.author} · BuzzyAI.Video`,
    description: w.description,
    keywords: [
      "buzzyai.video works",
      `${w.title} AI video`,
      categoryLabel(cat),
      "AI video director",
    ],
    openGraph: {
      title: `${w.title} — ${w.author}`,
      description: w.description,
      images: [w.image],
      type: "video.other",
    },
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work: VideoWork | undefined = videoWorks.find(
    (x) => x.slug === params.slug
  );
  if (!work) notFound();

  const cat = categoryOf(work);
  const catLabel = categoryLabel(cat);

  // Related: same category first, then pad with others to reach 3.
  const sameCat = videoWorks.filter(
    (x) => x.slug !== work.slug && categoryOf(x) === cat
  );
  const others = videoWorks.filter(
    (x) => x.slug !== work.slug && categoryOf(x) !== cat
  );
  const related = [...sameCat, ...others].slice(0, 3);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className="container">
          <Link href="/#showcase" className={styles.back}>
            ← Back to works
          </Link>

          <WorkViewTracker slug={work.slug} category={cat} />

          <div className={styles.hero}>
            <div className={styles.poster}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.image}
                alt={`${work.title} — ${catLabel} screenshot`}
                className={styles.posterImg}
              />
              <button
                type="button"
                className={styles.playBtn}
                aria-label={`Play ${work.title}`}
                title="Preview clip coming soon"
              >
                ▶
              </button>
            </div>

            <div className={styles.info}>
              <span className={styles.tag}>{catLabel}</span>
              <h1 className={styles.title}>{work.title}</h1>
              <p className={styles.author}>Directed by {work.author}</p>

              <ul className={styles.stats}>
                <li>
                  <span className={styles.statLabel}>Length</span>
                  <span className={styles.statValue}>{work.duration}</span>
                </li>
                <li>
                  <span className={styles.statLabel}>Model</span>
                  <span className={styles.statValue}>{work.model}</span>
                </li>
                <li>
                  <span className={styles.statLabel}>Released</span>
                  <span className={styles.statValue}>{work.createdAt}</span>
                </li>
                <li>
                  <span className={styles.statLabel}>Views</span>
                  <span className={styles.statValue}>{work.views}</span>
                </li>
              </ul>

              <a href="/director" className="btn btn-primary">
                Make your own
              </a>
            </div>
          </div>

          <section className={styles.body}>
            <div className={styles.block}>
              <h2 className={styles.h2}>About this work</h2>
              <p className={styles.desc}>{work.description}</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>Prompt used</h2>
              <pre className={styles.prompt}>{work.prompt}</pre>
            </div>
          </section>

          <section className={styles.related}>
            <h2 className={styles.h2}>More in {catLabel}</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/works/${r.slug}`}
                  className={styles.relCard}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={`${r.title} screenshot`}
                    className={styles.relImg}
                    loading="lazy"
                  />
                  <div className={styles.relMeta}>
                    <span className={styles.relTitle}>{r.title}</span>
                    <span className={styles.relAuthor}>
                      by {r.author} · {categoryLabel(categoryOf(r))}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

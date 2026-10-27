import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectorCanvasApp from "@/components/DirectorCanvasApp";
import styles from "./director.module.css";

export const metadata: Metadata = {
  title:
    "Director Canvas - BuzzyAI.Video | Direct animation & generate video",
  description:
    "The BuzzyAI.Video Director Canvas is a browser-based Web UI to direct animation: write a script, build a storyboard, control camera and lighting, and generate 4K video with any leading model.",
  keywords: [
    "buzzyai.video director canvas",
    "director canvas",
    "AI storyboard",
    "camera control AI video",
    "generate AI video",
  ],
};

const features = [
  {
    t: "Script to storyboard",
    d: "Describe the scene and get a consistent shot list in seconds.",
  },
  {
    t: "Drag-to-direct camera",
    d: "Rotate the cube to set angle, tilt and motion for each shot.",
  },
  {
    t: "Real-time lighting",
    d: "Shape key light, color temperature and rim light live.",
  },
  {
    t: "Any model, 4K out",
    d: "Render with Seedance, Kling, Veo and more, then export 4K.",
  },
];

export default function DirectorPage() {
  return (
    <>
      <Header />
      <main>
        <section className={`${styles.hero} film-grain`}>
          <div className={styles.glow} />
          <div className={`container ${styles.heroInner}`}>
            <span className="eyebrow">Product · Director Canvas</span>
            <h1 className={styles.title}>
              Direct your <span className="gold">animation</span>.
              <br />
              Generate video.
            </h1>
            <p className={styles.sub}>
              The BuzzyAI.Video Director Canvas is a browser-based Web UI that
              turns a sentence into a directed, lit, camera-aware clip. No
              timeline, no render farm, just you and the canvas.
            </p>
            <a href="#canvas" className="btn btn-primary">
              Jump into the canvas
            </a>
            <img
              src="/director-canvas.gif"
              alt="BuzzyAI.Video Director Canvas demo"
              className={styles.heroGif}
            />
          </div>
        </section>

        <section className="section" id="canvas">
          <div className="container">
            <span className="eyebrow">Try it now</span>
            <h2 className="section-title">
              The <span className="gold">Director Canvas</span>
            </h2>
            <p className="section-sub">
              This is a live interface. Write a script, set the camera and
              light, then generate a clip.
            </p>
            <div className={styles.appWrap}>
              <DirectorCanvasApp />
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-elev)" }}>
          <div className="container">
            <span className="eyebrow">What is inside</span>
            <h2 className="section-title">
              Everything you need to <span className="gold">direct</span>
            </h2>
            <div className={styles.featGrid}>
              {features.map((f) => (
                <div key={f.t} className={styles.feat}>
                  <span className={styles.featDot} />
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={`${styles.cta} film-grain`}>
              <div className={styles.glow} />
              <h2>
                Ready to roll <span className="gold">camera?</span>
              </h2>
              <p>Open the canvas and direct your first animated clip free.</p>
              <a href="#canvas" className="btn btn-primary">
                Open Director Canvas
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

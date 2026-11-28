import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./tutorials.module.css";

export const metadata: Metadata = {
  title: "AI Video Tutorials - BuzzyAI.Video Step-by-Step Guides",
  description:
    "Buzzy now AI video tutorials and step-by-step guides: learn text-to-video, image-to-video, storyboarding, camera and lighting control, music videos, rap videos and product ads with BuzzyAI.Video.",
  keywords: [
    "buzzy now ai video tutorials",
    "buzzy ai video tutorials",
    "AI video tutorial",
    "text to video tutorial",
    "image to video guide",
    "AI storyboard tutorial",
    "how to make AI music video",
    "AI rap video tutorial",
    "AI product ad tutorial",
  ],
  alternates: { canonical: "/tutorials" },
  openGraph: {
    title: "AI Video Tutorials - BuzzyAI.Video",
    description:
      "Step-by-step guides to direct cinematic AI videos: prompts, storyboards, camera, lighting, music videos, rap videos and product ads.",
    type: "website",
    url: "https://buzzyai.video/tutorials",
    siteName: "BuzzyAI.Video",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Tutorials - BuzzyAI.Video",
    description:
      "Learn to direct cinematic AI videos with practical step-by-step guides.",
  },
};

const tutorials = [
  {
    tag: "Getting started",
    level: "Beginner",
    time: "5 min",
    title: "Your first AI video in under five minutes",
    intro:
      "Go from a blank canvas to a finished clip. This is the fastest way to understand the BuzzyAI.Video workflow.",
    steps: [
      "Sign in at gen.buzzyai.video and open the Director Canvas.",
      "Write a single clear sentence describing the subject, the action and the setting.",
      "Pick a model — start with a flagship option for the best first result.",
      "Set the shot length and aspect ratio, then generate.",
      "Review the clip, keep the seed if you like it, and iterate on the prompt.",
    ],
  },
  {
    tag: "Text to video",
    level: "Beginner",
    time: "8 min",
    title: "Write prompts that actually direct the camera",
    intro:
      "A weak prompt gives generic footage. A structured prompt tells the model exactly what to frame, light and move.",
    steps: [
      "Lead with the subject: who or what is on screen.",
      "Add the action and the environment in one sentence each.",
      "Describe the camera: wide shot, close-up, tracking, or handheld.",
      "Set the lighting and mood — golden hour, neon, soft studio light.",
      "Keep visual anchors identical across shots so the scene stays consistent.",
    ],
  },
  {
    tag: "Image to video",
    level: "Intermediate",
    time: "7 min",
    title: "Turn a single image into a moving scene",
    intro:
      "Use a reference image to lock the look, then let the model supply motion, depth and rhythm.",
    steps: [
      "Upload a clean, high-resolution reference image.",
      "Describe how the subject should move, not how it should look.",
      "Choose a model that supports image-guided generation.",
      "Keep motion subtle on the first pass, then increase it.",
      "Generate a few variations and keep the most stable one.",
    ],
  },
  {
    tag: "Storyboarding",
    level: "Intermediate",
    time: "10 min",
    title: "Build a consistent storyboard across shots",
    intro:
      "The secret to a coherent short film is planning all the shots before rendering any of them.",
    steps: [
      "Write the beat sheet: the key moments of your story in order.",
      "Describe visual anchors you will reuse in every shot prompt.",
      "Generate low-resolution angles first and pick the best composition.",
      "Set camera and lighting once, then render each selected shot.",
      "Assemble the winners into a single sequence.",
    ],
  },
  {
    tag: "Music videos",
    level: "Intermediate",
    time: "9 min",
    title: "Make an AI music video from script to export",
    intro:
      "Match visual rhythm to the beat and keep the performer consistent from verse to chorus.",
    steps: [
      "Map your lyrics or beats to a simple shot list.",
      "Lock the performer's visual anchors in every prompt.",
      "Alternate wide performance shots with tight detail shots.",
      "Generate each shot separately and render at the same resolution.",
      "Edit to the beat, export, and add the track in your editor.",
    ],
  },
  {
    tag: "Rap videos",
    level: "Intermediate",
    time: "8 min",
    title: "Direct a two-person rap video",
    intro:
      "Two performers, one location, and a clear back-and-forth rhythm — the formula behind high-retention rap clips.",
    steps: [
      "Set a single location so the scene feels continuous.",
      "Define two distinct performers with fixed visual anchors.",
      "Alternate shots between performer A and performer B on each bar.",
      "Vary the camera angle to keep the exchange dynamic.",
      "Render all shots, then cut on the beat.",
    ],
  },
  {
    tag: "Product ads",
    level: "Advanced",
    time: "12 min",
    title: "Produce a product ad without a studio",
    intro:
      "Take a product from unboxing to hero shot using reference images and controlled camera moves.",
    steps: [
      "Upload clear product reference images from several angles.",
      "Write a short script: hook, demonstration, and call to action.",
      "Use slow, deliberate camera moves for the hero moments.",
      "Keep lighting consistent so the product never changes appearance.",
      "Generate, select the strongest takes, and assemble the final ad.",
    ],
  },
  {
    tag: "Camera & lighting",
    level: "Advanced",
    time: "10 min",
    title: "Control camera angle and relight a scene",
    intro:
      "The Director Canvas lets you set angle, tilt, motion and light before you generate. Here is how to use each control.",
    steps: [
      "Choose the focal length: wide for context, long for compression.",
      "Set a motivated camera move that matches the action.",
      "Place the key light to shape the subject, then add a rim light.",
      "Adjust colour temperature to match the mood of the scene.",
      "Generate a test frame, refine, then render the final clip.",
    ],
  },
];

const faqs = [
  {
    q: "Are these Buzzy AI video tutorials free to follow?",
    a: "Yes. Every guide on this page is free to read. Creating the videos takes place at gen.buzzyai.video, where you can sign in and open the Director Canvas.",
  },
  {
    q: "Do I need any filmmaking experience?",
    a: "No. The guides start from a blank canvas and explain each control. The Director Canvas handles storyboarding, camera and lighting so you can focus on the idea.",
  },
  {
    q: "Which tutorial should I start with?",
    a: "Start with 'Your first AI video in under five minutes', then move to prompt writing and image-to-video. The storyboard and camera guides are best once you are comfortable generating single clips.",
  },
  {
    q: "Can I follow these tutorials on any device?",
    a: "Yes. The workspace runs in the browser, so you can read the guides and create on desktop, tablet or mobile.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TutorialsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={`${styles.hero} film-grain`}>
          <div className={styles.glow} />
          <div className={`container ${styles.heroInner}`}>
            <span className="eyebrow">Learn · Buzzy AI Video Tutorials</span>
            <h1 className={styles.title}>
              AI video <span className="gold">tutorials</span> that get you from idea to clip
            </h1>
            <p className={styles.sub}>
              Practical, step-by-step Buzzy AI video tutorials for text-to-video,
              image-to-video, storyboarding, camera control, music videos, rap
              videos and product ads. No film school required.
            </p>
            <a href="https://gen.buzzyai.video" className="btn btn-primary">
              Open the workspace
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Step-by-step guides</span>
            <h2 className="section-title">
              Pick a skill and <span className="gold">start learning</span>
            </h2>
            <p className="section-sub">
              Each tutorial is a short, repeatable workflow you can apply in
              the Director Canvas right away.
            </p>
            <div className={styles.list}>
              {tutorials.map((t) => (
                <article key={t.title} className={styles.card}>
                  <div className={styles.meta}>
                    <span className={styles.tag}>{t.tag}</span>
                    <span className={styles.level}>{t.level}</span>
                    <span className={styles.time}>{t.time}</span>
                  </div>
                  <h3>{t.title}</h3>
                  <p className={styles.intro}>{t.intro}</p>
                  <ol className={styles.steps}>
                    {t.steps.map((s, i) => (
                      <li key={s}>
                        <span className={styles.stepNum}>{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-elev)" }}>
          <div className="container">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">
              Questions about <span className="gold">AI video tutorials</span>
            </h2>
            <div className={styles.faq}>
              {faqs.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
            <div className={styles.links}>
              <a href="/blog">More guides on the blog</a>
              <a href="/director">Director Canvas</a>
              <a href="/faq">General FAQ</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.cta}>
              <h2>
                Put the tutorials into <span className="gold">practice</span>
              </h2>
              <p>Open the workspace and direct your first clip today.</p>
              <a href="https://gen.buzzyai.video" className="btn btn-primary">
                Start creating
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

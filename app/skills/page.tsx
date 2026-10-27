import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./skills.module.css";

export const metadata: Metadata = {
  title: "Skills & Techniques - BuzzyAI.Video | Master AI Video Directing",
  description:
    "BuzzyAI.Video is where you learn pro AI video techniques: prompt engineering for cinematic shots, storyboard consistency, multi-camera control, real-time relighting, model selection tips and a full directing workflow.",
  keywords: [
    "buzzyai.video skills",
    "AI video tips",
    "AI video techniques",
    "prompt engineering video",
    "storyboard consistency",
    "AI directing skills",
    "cinematic AI prompts",
  ],
  openGraph: {
    title: "Skills & Techniques - BuzzyAI.Video",
    description:
      "Master AI video directing with practical techniques for prompts, storyboards, camera control and lighting.",
    type: "website",
    url: "https://buzzyai.video/skills",
  },
};

const categories = [
  {
    num: "01",
    title: "Prompt Engineering",
    desc: "Write prompts that produce cinematic, consistent shots every time.",
    tips: [
      {
        icon: "CL",
        heading: "Cinematic Language",
        body: "Use film terms like 'dolly zoom', 'low-angle tracking shot', or 'golden hour backlight'. AI models trained on film data respond to real cinematography vocabulary far better than casual descriptions.",
        tag: "Essential",
      },
      {
        icon: "SP",
        heading: "Specificity Over Volume",
        body: "One precise sentence beats a paragraph of adjectives. Describe subject, action, lens, lighting and mood in that order. Example: 'A woman in a red coat walks through neon-lit rain, 35mm lens, shallow depth of field, moody.'",
        tag: "Pro Tip",
      },
      {
        icon: "RC",
        heading: "Reference Chains",
        body: "When generating a sequence, reuse the same character description verbatim across shots. Lock hair color, clothing, and distinguishing features into a template string you paste into every prompt.",
        tag: "Consistency",
      },
    ],
  },
  {
    num: "02",
    title: "Storyboard & Consistency",
    desc: "Keep characters, objects and locations locked across every shot.",
    tips: [
      {
        icon: "SB",
        heading: "Storyboard First",
        body: "Always build a 3x3 storyboard before generating final clips. Draft shots at low resolution to validate composition, then upscale only the frames that work. This saves render credits and time.",
        tag: "Workflow",
      },
      {
        icon: "LK",
        heading: "Lock Key Elements",
        body: "Identify 3-5 visual anchors per scene (character face, signature prop, location color palette) and describe them identically in every shot. The model treats repeated text as a stronger constraint.",
        tag: "Essential",
      },
      {
        icon: "SE",
        heading: "Seed Reuse",
        body: "When a shot looks right, note its seed value. Reusing the same seed with slight prompt variations keeps the visual style consistent while letting you iterate on small details.",
        tag: "Advanced",
      },
    ],
  },
  {
    num: "03",
    title: "Camera & Lighting Control",
    desc: "Direct like a cinematographer using the Director Canvas tools.",
    tips: [
      {
        icon: "MC",
        heading: "Multi-Cam Grid",
        body: "Use the 3x3 multi-cam grid to generate the same scene from nine angles simultaneously. Pick the best three for your edit. This mimics a real multi-camera set and gives you coverage without extra prompt iterations.",
        tag: "Pro Tip",
      },
      {
        icon: "LT",
        heading: "Light in Layers",
        body: "Set your key light first, then add rim light and fill. Adjust color temperature warm (3200K) for intimate scenes or cool (5600K) for clinical, modern looks. The real-time lighting panel shows changes before you render.",
        tag: "Technique",
      },
      {
        icon: "MT",
        heading: "Motion Timing",
        body: "Keep camera movement duration under 4 seconds for punchy cuts, or 8-12 seconds for establishing sweeps. Avoid mid-shot direction changes - they confuse the model and produce warping.",
        tag: "Advanced",
      },
    ],
  },
  {
    num: "04",
    title: "Model Selection",
    desc: "Pick the right AI model for each shot type and style.",
    tips: [
      {
        icon: "SD",
        heading: "Seedance for Motion",
        body: "Seedance excels at fluid, natural motion - water, hair, fabric, crowd scenes. Use it when movement quality matters more than fine detail. Best for music videos and nature shots.",
        tag: "Motion",
      },
      {
        icon: "KL",
        heading: "Kling for Detail",
        body: "Kling produces sharper textures and better facial consistency. Choose it for close-ups, product shots, and any frame where the audience will pause and look closely.",
        tag: "Detail",
      },
      {
        icon: "VE",
        heading: "Veo for Realism",
        body: "Veo handles photorealistic environments and complex physics well. Use it for wide establishing shots, architectural fly-throughs, and scenes with multiple interacting objects.",
        tag: "Realism",
      },
    ],
  },
];

const quickTips = [
  {
    text: "Always generate at <strong>low resolution first</strong>, then upscale the winner.",
  },
  {
    text: "Keep prompts under <strong>60 words</strong> - longer prompts dilute focus.",
  },
  {
    text: "Use <strong>negative prompts</strong> to remove blur, watermark, and text artifacts.",
  },
  {
    text: "Render in <strong>4K only for final output</strong>, not for iteration.",
  },
  {
    text: "Save your best prompts in a <strong>prompt library</strong> for future projects.",
  },
  {
    text: "Match <strong>frame rate to output</strong>: 24fps for cinematic, 30fps for web, 60fps for sports.",
  },
];

const workflow = [
  {
    num: 1,
    title: "Write the Script",
    desc: "Draft your scene in 1-2 sentences. Define subject, action, setting and mood.",
  },
  {
    num: 2,
    title: "Build Storyboard",
    desc: "Generate a 3x3 grid of shot variations at low resolution. Pick the best angles.",
  },
  {
    num: 3,
    title: "Direct & Light",
    desc: "Set camera angle, motion path and lighting on the Director Canvas.",
  },
  {
    num: 4,
    title: "Render & Export",
    desc: "Generate final clips in 4K with your chosen model. Export and edit.",
  },
];

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={`${styles.hero} film-grain`}>
          <div className={styles.glow} />
          <div className={`container ${styles.heroInner}`}>
            <span className="eyebrow">Skills & Techniques</span>
            <h1 className={styles.title}>
              Direct like a <span className="gold">pro</span>.
              <br />
              Generate like a studio.
            </h1>
            <p className={styles.sub}>
              Practical techniques for getting cinematic, consistent results
              from BuzzyAI.Video. From prompt engineering to multi-camera
              workflows, this is everything we have learned from directing
              thousands of AI clips.
            </p>
            <a href="/director" className="btn btn-primary">
              Open Director Canvas
            </a>
          </div>
        </section>

        {/* Technique Categories */}
        {categories.map((cat) => (
          <section key={cat.num} className={`section ${styles.catSection}`}>
            <div className="container">
              <div className={styles.catHeader}>
                <span className={styles.catNum}>{cat.num}</span>
                <div>
                  <h2 className={styles.catTitle}>{cat.title}</h2>
                  <p className={styles.catDesc}>{cat.desc}</p>
                </div>
              </div>
              <div className={styles.tipGrid}>
                {cat.tips.map((tip) => (
                  <div key={tip.heading} className={styles.tipCard}>
                    <div className={styles.tipIcon}>{tip.icon}</div>
                    <h3>{tip.heading}</h3>
                    <p>{tip.body}</p>
                    <span className={styles.tipTag}>{tip.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Quick Tips */}
        <section className={`section ${styles.quickSection}`}>
          <div className="container">
            <span className="eyebrow">Quick Wins</span>
            <h2 className="section-title">
              6 rules that <span className="gold">always</span> help
            </h2>
            <p className="section-sub">
              Short, battle-tested principles. Apply these to every project and
              your output quality will jump immediately.
            </p>
            <div className={styles.quickList}>
              {quickTips.map((tip, i) => (
                <div key={i} className={styles.quickItem}>
                  <span className={styles.quickCheck}>{i + 1}</span>
                  <p dangerouslySetInnerHTML={{ __html: tip.text }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">The Workflow</span>
            <h2 className="section-title">
              From idea to <span className="gold">4K clip</span> in 4 steps
            </h2>
            <p className="section-sub">
              The recommended directing workflow inside BuzzyAI.Video. Follow
              this order for the best balance of speed and quality.
            </p>
            <div className={styles.steps}>
              {workflow.map((step) => (
                <div key={step.num} className={styles.step}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className={`${styles.cta} film-grain`}>
              <div className={styles.glow} />
              <h2>
                Put these <span className="gold">skills</span> to work
              </h2>
              <p>
                Open the Director Canvas and try every technique above on your
                own scene. Your first directed clip is free.
              </p>
              <a href="/director" className="btn btn-primary">
                Start directing now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

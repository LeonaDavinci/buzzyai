import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./crear-video.module.css";

export const metadata: Metadata = {
  title: "Buzzy Crear Video con IA | Genera videos virales en segundos",
  description:
    "Buzzy crear video: crea videos con IA a partir de texto o imágenes con más de 30 modelos, entre ellos MAGI-2, Seedance 2.0, Veo 3.1 y Kling. Guion, cámara e iluminación en un solo lienzo. Empieza en gen.buzzyai.video.",
  keywords: [
    "buzzy crear video",
    "crear video con IA",
    "generador de videos con inteligencia artificial",
    "buzzy ai video",
    "crear video viral",
    "texto a video",
    "imagen a video",
    "crear videos musicales con IA",
  ],
  alternates: { canonical: "/crear-video" },
  openGraph: {
    title: "Buzzy Crear Video con IA",
    description:
      "Crea videos virales con IA: más de 30 modelos, guion, cámara e iluminación en un solo lienzo.",
    type: "website",
    url: "https://buzzyai.video/crear-video",
    siteName: "BuzzyAI.Video",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzy Crear Video con IA",
    description:
      "Crea videos virales con IA a partir de texto o imágenes con BuzzyAI.Video.",
  },
};

const features = [
  {
    t: "De texto a video",
    d: "Escribe una idea y conviértela en un clip con movimiento, cámara y sonido.",
  },
  {
    t: "De imagen a video",
    d: "Sube una imagen de referencia y dale vida con estilo, ritmo y movimiento.",
  },
  {
    t: "Videos musicales y rap",
    d: "Crea videos musicales y rap de dos personas listos para publicar.",
  },
  {
    t: "Anuncios de producto",
    d: "Del guion al anuncio: muestra tu producto en escenas cinematográficas.",
  },
  {
    t: "Director Canvas",
    d: "Guion, storyboard, ángulo de cámara e iluminación en un mismo lienzo.",
  },
  {
    t: "Más de 30 modelos",
    d: "MAGI-2, Seedance 2.0, Veo 3.1, Kling, Wan, MiniMax H3 y muchos más.",
  },
];

const steps = [
  {
    t: "Escribe tu idea",
    d: "Describe la escena o sube una imagen. No necesitas experiencia en edición.",
  },
  {
    t: "Elige tu modelo",
    d: "Selecciona entre más de 30 modelos y ajusta cámara, luz y duración.",
  },
  {
    t: "Descarga y comparte",
    d: "Genera el clip y publícalo en tus canales en minutos.",
  },
];

const magiFacts = [
  "Número 1 en el ranking de generación imagen-a-video de Artificial Analysis.",
  "Videos nativos de 4 a 30 segundos en 1080p con audio sincronizado.",
  "Hasta 20 materiales de referencia: imágenes, video y audio.",
  "Una tarifa pública de unos CNY 0,5 por segundo: cerca de una décima parte de Seedance 2.5.",
];

const faqs = [
  {
    q: "¿Qué es Buzzy crear video?",
    a: "Es la forma de crear videos con IA en BuzzyAI.Video. Escribes una idea o subes una imagen y la plataforma genera un clip usando más de 30 modelos de IA en un solo lienzo.",
  },
  {
    q: "¿Necesito saber editar video?",
    a: "No. El Director Canvas incluye guion, storyboard, control de cámara e iluminación para que cualquier persona pueda dirigir un clip.",
  },
  {
    q: "¿Qué modelos puedo usar?",
    a: "Hay más de 30 modelos de video e imagen, entre ellos MAGI-2, Seedance 2.0, Veo 3.1, Kling, Wan, MiniMax H3, Runway y Grok Imagine. La disponibilidad exacta depende de tu plan.",
  },
  {
    q: "¿Puedo crear un video a partir de una imagen?",
    a: "Sí. Puedes usar una imagen como referencia para el estilo y el movimiento, o empezar solo con texto.",
  },
  {
    q: "¿Dónde empiezo?",
    a: "Entra en gen.buzzyai.video, crea tu cuenta con correo o con Google y abre el lienzo. Este sitio es la página de información y precios.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CrearVideoPage() {
  return (
    <>
      <Header />
      <main lang="es">
        <section className={`${styles.hero} film-grain`}>
          <div className={styles.glow} />
          <div className={`container ${styles.heroInner}`}>
            <span className="eyebrow">Buzzy · Crear Video con IA</span>
            <h1 className={styles.title}>
              Crea videos virales con <span className="gold">Buzzy</span>
            </h1>
            <p className={styles.sub}>
              Buzzy crear video lo hace todo en un solo lugar: escribe una idea,
              elige entre más de 30 modelos de IA y genera clips con cámara, luz
              y sonido. Sin línea de tiempo, sin complicaciones.
            </p>
            <a href="https://gen.buzzyai.video" className="btn btn-primary">
              Empezar a crear
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Qué puedes hacer</span>
            <h2 className="section-title">
              Todo lo que necesitas para <span className="gold">crear video</span>
            </h2>
            <p className="section-sub">
              Del texto al clip, de la imagen al movimiento: una sola plataforma
              para cada tipo de video.
            </p>
            <div className={styles.grid}>
              {features.map((f) => (
                <div key={f.t} className={styles.card}>
                  <span className={styles.dot} />
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-elev)" }}>
          <div className="container">
            <span className="eyebrow">Modelo destacado</span>
            <h2 className="section-title">
              MAGI-2: <span className="gold">calidad de primer nivel</span> por mucho menos
            </h2>
            <p className="section-sub">
              Uno de los modelos disponibles en Buzzy crear video, ideal cuando
              necesitas muchos intentos sin disparar el coste.
            </p>
            <ul className={styles.factList}>
              {magiFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Cómo funciona</span>
            <h2 className="section-title">
              De la idea al video en <span className="gold">tres pasos</span>
            </h2>
            <div className={styles.steps}>
              {steps.map((s, i) => (
                <div key={s.t} className={styles.step}>
                  <span className={styles.stepNum}>0{i + 1}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="section-title">
              Todo sobre <span className="gold">Buzzy crear video</span>
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
              <a href="/pricing">Ver precios</a>
              <a href="/director">Director Canvas</a>
              <a href="/faq">Más preguntas</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.cta}>
              <h2>
                Empieza a <span className="gold">crear video</span> hoy mismo
              </h2>
              <p>Abre el lienzo en gen.buzzyai.video y genera tu primer clip.</p>
              <a href="https://gen.buzzyai.video" className="btn btn-primary">
                Ir al estudio
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

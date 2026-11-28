import type { Metadata } from "next";
import styles from "./tr.module.css";

export const metadata: Metadata = {
  title: "Buzzy Yapay Zeka Video Oluşturucu | Viral Videoları Saniyeler İçinde Yap",
  description:
    "Buzzy yapay zeka video oluşturucu: metin veya görselden, 30'dan fazla modelle (MAGI-2, Seedance 2.0, Veo 3.1, Kling) saniyeler içinde viral video yap. Senaryo, kamera ve ışık tek tuvalde. gen.buzzyai.video adresinden başla.",
  keywords: [
    "yapay zeka video oluşturucu",
    "AI video oluşturucu",
    "yapay zeka ile video yapma",
    "metinden videoya",
    "görselden videoya",
    "buzzy ai video",
    "viral video oluşturucu",
  ],
  alternates: {
    canonical: "/tr",
    languages: {
      tr: "/tr",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Buzzy Yapay Zeka Video Oluşturucu",
    description:
      "Yapay zeka ile viral video yap: 30'dan fazla model, senaryo, kamera ve ışık tek tuvalde.",
    type: "website",
    url: "https://buzzyai.video/tr",
    siteName: "BuzzyAI.Video",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzy Yapay Zeka Video Oluşturucu",
    description:
      "Metin veya görselden yapay zeka ile viral video yap — BuzzyAI.Video.",
  },
};

const features = [
  {
    t: "Metinden videoya",
    d: "Bir fikir yaz; hareket, kamera ve sesle bir klip oluştur.",
  },
  {
    t: "Görselden videoya",
    d: "Referans bir görsel yükle; stíl, ritim ve hareketle hayat ver.",
  },
  {
    t: "Müzik ve rap videoları",
    d: "Yayına hazır müzik videoları ve iki kişilik rap videoları oluştur.",
  },
  {
    t: "Ürün reklamları",
    d: "Senaryodan reklama: ürününü sinematik sahnelerde göster.",
  },
  {
    t: "Director Canvas",
    d: "Senaryo, hikâye panosu, kamera açısı ve aydınlatma tek tuvalde.",
  },
  {
    t: "30'dan fazla model",
    d: "MAGI-2, Seedance 2.0, Veo 3.1, Kling, Wan, MiniMax H3 ve daha fazlası.",
  },
];

const magiFacts = [
  "Artificial Analysis görselden videoya sıralamasında birinci.",
  "4–30 saniyelik 1080p video, senkronize sesle.",
  "20'ye kadar referans materyal: görsel, video ve ses.",
  "Yaklaşık 0,5 CNY/saniyelik açık tarife: Seedance 2.5'in onda biri civarında.",
];

const steps = [
  {
    t: "Fikrini yaz",
    d: "Sahneyi anlat veya bir görsel yükle. Düzenleme deneyimi gerekmez.",
  },
  {
    t: "Modelini seç",
    d: "30'dan fazla model arasından seç; kamera, ışık ve süreyi ayarla.",
  },
  {
    t: "İndir ve paylaş",
    d: "Klibi oluştur ve dakikalar içinde kanallarında yayınla.",
  },
];

const faqs = [
  {
    q: "Buzzy yapay zeka video oluşturucu nedir?",
    a: "BuzzyAI.Video içinde video üretmenin yoludur. Bir fikir yazarsın veya bir görsel yüklersin; platform tek tuvalde 30'dan fazla yapay zeka modeliyle bir klip oluşturur.",
  },
  {
    q: "Video düzenlemeyi bilmem gerekiyor mu?",
    a: "Hayır. Director Canvas; senaryo, hikâye panosu, kamera ve aydınlatma kontrollerini bir araya getirir, böylece herkes bir klip yönetebilir.",
  },
  {
    q: "Hangi modelleri kullanabilirim?",
    a: "MAGI-2, Seedance 2.0, Veo 3.1, Kling, Wan, MiniMax H3, Runway ve Grok Imagine dâhil 30'dan fazla video ve görsel modeli vardır. Kesin kullanılabilirlik planına bağlıdır.",
  },
  {
    q: "Bir görselden video oluşturabilir miyim?",
    a: "Evet. Bir görseli stil ve hareket referansı olarak kullanabilir veya sadece metinle başlayabilirsin.",
  },
  {
    q: "Nereden başlayabilirim?",
    a: "gen.buzzyai.video adresine git, e-posta veya Google ile hesap aç ve tuvali aç. Bu site bilgi ve fiyat sayfasıdır.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "tr",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TrHomePage() {
  return (
    <>
      <section className={`${styles.hero} film-grain`}>
        <div className={styles.glow} />
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Buzzy · Yapay Zeka Video Oluşturucu</span>
          <h1 className={styles.title}>
            Viral videoları <span className="gold">Buzzy</span> ile oluştur
          </h1>
          <p className={styles.sub}>
            Buzzy yapay zeka video oluşturucu her şeyi tek yerde yapar: bir fikir
            yaz, 30'dan fazla yapay zeka modelinden birini seç ve kamera, ışık ve
            sesle klip üret. Zaman çizelgesi yok, karmaşıklık yok.
          </p>
          <a href="https://gen.buzzyai.video" className="btn btn-primary">
            Oluşturmaya başla
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Neler yapabilirsin</span>
          <h2 className="section-title">
            <span className="gold">Video oluşturmak</span> için ihtiyacın olan her şey
          </h2>
          <p className="section-sub">
            Metinden klibe, görselden harekete: her video türü için tek platform.
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
          <span className="eyebrow">Öne çıkan model</span>
          <h2 className="section-title">
            MAGI-2: <span className="gold">üst düzey kalite</span> çok daha az maliyetle
          </h2>
          <p className="section-sub">
            Buzzy yapay zeka video oluşturucuda bulunan modellerden biri; çok sayıda
            deneme yapman gerektiğinde ideal.
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
          <span className="eyebrow">Nasıl çalışır</span>
          <h2 className="section-title">
            Fikirden videoya <span className="gold">üç adımda</span>
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
          <span className="eyebrow">Sıkça sorulan sorular</span>
          <h2 className="section-title">
            <span className="gold">Buzzy video oluşturucu</span> hakkında her şey
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
            <a href="/pricing">Fiyatları gör</a>
            <a href="/director">Director Canvas</a>
            <a href="/faq">Daha fazla soru</a>
            <a href="/tr/video-olusturucu">Video oluşturucu</a>
            <a href="/tr/ogreticiler">Eğitimler</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2>
              Bugün <span className="gold">video oluşturmaya</span> başla
            </h2>
            <p>Tuvali gen.buzzyai.video adresinde aç ve ilk klibini oluştur.</p>
            <a href="https://gen.buzzyai.video" className="btn btn-primary">
              Stüdyoya git
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

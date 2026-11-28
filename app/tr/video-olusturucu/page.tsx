import type { Metadata } from "next";
import styles from "../tr.module.css";

export const metadata: Metadata = {
  title: "AI Video Oluşturucu | Metinden ve Görselden Video — Buzzy",
  description:
    "Buzzy AI video oluşturucu ile metinden videoya veya görselden videoya dönüşümü tek tuvalde yap. 30'dan fazla model, kamera ve ışık kontrolü; ücretsiz deneme yok, gen.buzzyai.video adresinden başla.",
  keywords: [
    "AI video oluşturucu",
    "metinden videoya",
    "görselden videoya",
    "yapay zeka video oluşturucu",
    "video oluşturma aracı",
    "yapay zeka video yapıcı",
    "buzzy video oluşturucu",
  ],
  alternates: {
    canonical: "/tr/video-olusturucu",
    languages: {
      tr: "/tr/video-olusturucu",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "AI Video Oluşturucu — Buzzy",
    description:
      "Metinden veya görselden yapay zeka ile video oluştur: 30'dan fazla model, kamera ve ışık tek tuvalde.",
    type: "website",
    url: "https://buzzyai.video/tr/video-olusturucu",
    siteName: "BuzzyAI.Video",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Oluşturucu — Buzzy",
    description:
      "Metinden ve görselden video oluşturan yapay zeka aracı: BuzzyAI.Video.",
  },
};

const modes = [
  {
    t: "Metinden videoya",
    d: "Sahneyi sözlerle anlat; model hareketi, kamerayı ve sesi senin için kurar.",
  },
  {
    t: "Görselden videoya",
    d: "Bir görsel yükle ve ona stil, ritim ve hareket katarak canlandır.",
  },
  {
    t: "Hikâye panosu ile",
    d: "Birden fazla sahneyi sıraya koy, kamera ve aydınlatmayı her çekimde kontrol et.",
  },
];

const features = [
  {
    t: "30'dan fazla model",
    d: "Seedance, Veo, Kling, Wan, MAGI-2, MiniMax H3 ve daha fazlası tek tuvalde.",
  },
  {
    t: "MAGI-2 ile düşük maliyet",
    d: "Artificial Analysis sıralamasında birinci; açık tarife yaklaşık 0,5 CNY/saniye.",
  },
  {
    t: "Kamera ve ışık kontrolü",
    d: "Açı, hareket ve aydınlatmayı ayarla; her çekimi yeniden yönlendir.",
  },
  {
    t: "Müzik, rap ve reklam",
    d: "Müzik videosu, iki kişilik rap ve ürün reklamı şablonlarıyla hızlı üretim.",
  },
  {
    t: "Sahne tutarlılığı",
    d: "Hikâye panosu kurgusal karakter, mekân ve nesneleri sahneler arasında tutarlı tutar.",
  },
  {
    t: "Tarayıcıda çalışır",
    d: "Kurulum yok; gen.buzzyai.video adresinde hesap açar açmaz tuval hazır.",
  },
];

const faqs = [
  {
    q: "Metinden video oluşturucu nasıl çalışır?",
    a: "Sahneyi bir prompt ile tarif edersin; Buzzy yapay zeka modeli bu tarifeyi hareket, kamera ve sesle bir klipe dönüştürür. Sonucu tuvalde izleyip yeniden üretebilirsin.",
  },
  {
    q: "Görselden video oluşturabilir miyim?",
    a: "Evet. Bir referans görsel yükleyip stil ve hareketi buna göre yönlendirebilirsin; bu, görselden videoya iş akışının temelidir.",
  },
  {
    q: "Hangi video modelleri var?",
    a: "MAGI-2, Seedance 2.0, Veo 3.1, Kling, Wan, MiniMax H3, Runway, Grok Imagine ve diğer 30'dan fazla model bulunur. Kullanılabilir modeller planına göre değişir.",
  },
  {
    q: "En uygun maliyetli model hangisi?",
    a: "MAGI-2, yayımlanan açık tarifesiyle (yaklaşık 0,5 CNY/saniye) öne çıkar ve Artificial Analysis görselden videoya sıralamasında birinci olmuştur. Bu tarife model sağlayıcısınındır; Buzzy fiyatları için fiyat sayfasına bak.",
  },
  {
    q: "Ücretsiz sürüm var mı?",
    a: "Hayır. Tüm planlar ücretlidir; başlangıç planı aylık 10 ABD dolarından başlar. Ayrıntılar için fiyat sayfasına bak.",
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

export default function VideoOlusturucuPage() {
  return (
    <>
      <section className={`${styles.hero} film-grain`}>
        <div className={styles.glow} />
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Buzzy · AI Video Oluşturucu</span>
          <h1 className={styles.title}>
            Metinden ve görselden <span className="gold">video oluştur</span>
          </h1>
          <p className={styles.sub}>
            Buzzy AI video oluşturucu ile fikrini yaz veya bir görsel yükle; 30'dan
            fazla modelden birini seç ve kamera, ışık ve sesle gerçek bir klip
            oluştur. Hepsi tek tuvalda.
          </p>
          <a href="https://gen.buzzyai.video" className="btn btn-primary">
            Video oluşturmaya başla
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Oluşturma yöntemleri</span>
          <h2 className="section-title">
            İki yolla <span className="gold">video oluştur</span>
          </h2>
          <p className="section-sub">
            Sadece metinle başla veya kendi görselini referans olarak kullan.
          </p>
          <div className={styles.grid}>
            {modes.map((m) => (
              <div key={m.t} className={styles.card}>
                <span className={styles.dot} />
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <span className="eyebrow">Neden Buzzy</span>
          <h2 className="section-title">
            Tek bir <span className="gold">video oluşturucu</span>, tüm araçlar
          </h2>
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

      <section className="section">
        <div className="container">
          <span className="eyebrow">Sıkça sorulan sorular</span>
          <h2 className="section-title">
            <span className="gold">Video oluşturucu</span> hakkında sorular
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
            <a href="/pricing">Fiyatlar</a>
            <a href="/tr">Yapay zeka video oluşturucu</a>
            <a href="/tr/ogreticiler">Eğitimler</a>
            <a href="/faq">SSS</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2>
              <span className="gold">Video oluşturucuyu</span> şimdi dene
            </h2>
            <p>Tuvali gen.buzzyai.video adresinde aç ve ilk klibini üret.</p>
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

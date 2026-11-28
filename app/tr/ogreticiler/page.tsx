import type { Metadata } from "next";
import styles from "../tr.module.css";

export const metadata: Metadata = {
  title: "AI Video Eğitimleri ve Öğreticiler | Buzzy Rehberi",
  description:
    "Buzzy AI video eğitimleri: metinden videoya, görselden videoya, prompt yazma, hikâye panosu, müzik ve rap videosu, ürün reklamı için adım adım öğreticiler. Başla: gen.buzzyai.video.",
  keywords: [
    "AI video eğitimleri",
    "yapay zeka video öğretici",
    "video oluşturma rehberi",
    "metinden videoya nasıl yapılır",
    "AI video nasıl oluşturulur",
    "buzzy.video eğitimleri",
  ],
  alternates: {
    canonical: "/tr/ogreticiler",
    languages: {
      tr: "/tr/ogreticiler",
      en: "/tutorials",
      "x-default": "/tutorials",
    },
  },
  openGraph: {
    title: "AI Video Eğitimleri — Buzzy",
    description:
      "Yapay zeka ile video oluşturmak için adım adım öğreticiler ve pratik rehberler.",
    type: "website",
    url: "https://buzzyai.video/tr/ogreticiler",
    siteName: "BuzzyAI.Video",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Eğitimleri — Buzzy",
    description: "Buzzy ile yapay zeka videosu oluşturma rehberi ve öğreticiler.",
  },
};

const tutorials = [
  {
    t: "İlk yapay zeka videonu 5 dakikada oluştur",
    d: "Hiç deneyim olmadan ilk klibini üretmenin en kısa yolu.",
    steps: [
      "gen.buzzyai.video adresinde e-posta veya Google ile hesap aç.",
      "Director Canvas'ı aç ve tek cümlelik bir sahne tarif et.",
      "Bir model seç, süreyi ayarla ve Oluştur'a bas.",
      "Sonucu izle, beğenmediysen prompt'u düzenleyip yeniden üret.",
    ],
  },
  {
    t: "İyi bir video prompt'u nasıl yazılır",
    d: "Modelin tam istediğin görüntüyü üretmesi için net tarifler.",
    steps: [
      "Özne, mekân ve eylemi tek cümlede tanımla.",
      "Kamera açısını ve hareketini ekle: yakın plan, takip, yukarı açı.",
      "Işık ve atmosferi belirt: altın saat, neon, yumuşak stüdyo ışığı.",
      "Gereksiz detayları at; kısa ve görsel prompt daha iyi sonuç verir.",
    ],
  },
  {
    t: "Görselden videoya geçiş",
    d: "Referans bir görseli hareketli klipe dönüştürme.",
    steps: [
      "Yüksek çözünürlüklü, net bir referans görsel yükle.",
      "Model olarak görselden videoya desteği olan bir seçenek belirle.",
      "Hareket miktarını düşük tutarak görselin kimliğini koru.",
      "Farklı hareket güçleriyle birkaç varyant dene.",
    ],
  },
  {
    t: "Sahneler arası tutarlılık",
    d: "Hikâye panosunda karakter ve mekânı birden fazla çekimde aynı tut.",
    steps: [
      "Karakter, mekân ve nesneleri hikâye panosunda önceden tanımla.",
      "Her yeni sahne için aynı tarif ve stil anahtarlarını kullan.",
      "Çekimleri sırayla üret ve tutarlılığı panoda kontrol et.",
      "Tutarlılık copy'si bozulursa sahneyi aynı referansla yeniden oluştur.",
    ],
  },
  {
    t: "Müzik videosu oluştur",
    d: "Parçana uygun ritmik bir video yap.",
    steps: [
      "Parçanın ruh halini ve temposunu birkaç kelimeyle yaz.",
      "Ritimle uyumlu sahne değişimlerini hikâye panosuna yerleştir.",
      "Işık ve renk paletini şarkının enerjisine göre seç.",
      "Klibi üret ve geçişleri müzikle senkronize et.",
    ],
  },
  {
    t: "İki kişilik rap videosu oluştur",
    d: "İki karakterli, yayına hazır bir rap klipi çek.",
    steps: [
      "İki karakteri ve mekânı net biçimde tarif et.",
      "Sahneleri sırayla kur: giriş, nakarat, verse ve final.",
      "Kamera açılarını değiştirerek diyalog hissini güçlendir.",
      "Ses ve görüntüyü birlikte üret, ardından klibi indir.",
    ],
  },
  {
    t: "Ürün reklamı çek",
    d: "Ürününü sinematik sahnelerle tanıt.",
    steps: [
      "Ürünün en güçlü özelliğini tek cümlede vurgula.",
      "Açılış, kullanım ve kapanış olmak üzere üç sahne planla.",
      "Arka plan ve aydınlatmayı markanın renklerine göre ayarla.",
      "Kısa versiyonu üret ve sosyal kanallara uygun biçimde indir.",
    ],
  },
  {
    t: "Kamera ve aydınlatma kontrolü",
    d: "Her çekimde açı, hareket ve ışığı yönet.",
    steps: [
      "Sahne için bir kamera açısı seç: düşük, göz hizası veya yukarıdan.",
      "Hareketi ekle: sabit, yavaş kaydırma veya takip.",
      "Ana ışığın yönünü ve sertliğini ayarla.",
      "Aynı ayarları sonraki sahnelerde tekrar kullanarak tutarlı kal.",
    ],
  },
];

const faqs = [
  {
    q: "Bu eğitimleri takip etmek için deneyim gerekir mi?",
    a: "Hayır. Öğreticiler sıfırdan başlayanlar için yazıldı; her adım uygulanabilir ve Director Canvas'ın kontrollerini anlatır.",
  },
  {
    q: "Eğitimler hangi videoları kapsıyor?",
    a: "Metinden videoya, görselden videoya, müzik ve rap videoları, ürün reklamları, hikâye panosu tutarlılığı ve kamera/aydınlatma kontrolü.",
  },
  {
    q: "Eğitimleri nerede uygulayabilirim?",
    a: "Tüm adımlar gen.buzzyai.video adresindeki Director Canvas içinde uygulanır. Bu site yalnızca rehber ve bilgi sayfasıdır.",
  },
  {
    q: "Hangi modelle başlamalıyım?",
    a: "Yeni başlayanlar için MAGI-2 iyi bir seçimdir: düşük açık tarifeye sahiptir ve 30 saniyeye kadar 1080p video üretir. Modelin Buzzy içindeki kullanılabilirliği planına bağlıdır.",
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

export default function OgreticilerPage() {
  return (
    <>
      <section className={`${styles.hero} film-grain`}>
        <div className={styles.glow} />
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Buzzy · AI Video Eğitimleri</span>
          <h1 className={styles.title}>
            Yapay zeka ile video yapmayı <span className="gold">öğren</span>
          </h1>
          <p className={styles.sub}>
            Adım adım AI video öğreticileri: ilk klibini oluştur, prompt yazmayı
            öğren, görseli hareketlendir, müzik ve rap videosu çek, ürün reklamı
            hazırla. Hepsi Buzzy Director Canvas içinde.
          </p>
          <a href="https://gen.buzzyai.video" className="btn btn-primary">
            Tuvali aç
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Öğreticiler</span>
          <h2 className="section-title">
            Başlangıçtan ileri seviyeye <span className="gold">8 rehber</span>
          </h2>
          <p className="section-sub">
            Her öğretici, sonuç alabileceğin kısa ve uygulanabilir adımlarla yazıldı.
          </p>
          <div className={styles.tutorialGrid}>
            {tutorials.map((item, i) => (
              <div key={item.t} className={styles.tutorial}>
                <span className={styles.tutorialNum}>DERSE {String(i + 1).padStart(2, "0")}</span>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
                <ol className={styles.bullets}>
                  {item.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <span className="eyebrow">Sıkça sorulan sorular</span>
          <h2 className="section-title">
            <span className="gold">AI video eğitimleri</span> hakkında sorular
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
            <a href="/tutorials">English tutorials</a>
            <a href="/tr">Yapay zeka video oluşturucu</a>
            <a href="/tr/video-olusturucu">Video oluşturucu</a>
            <a href="/pricing">Fiyatlar</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2>
              Öğrendiklerini <span className="gold">şimdi uygula</span>
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

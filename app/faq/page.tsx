import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ - BuzzyAI.Video | Frequently Asked Questions",
  description:
    "Answers about BuzzyAI.Video: how to start creating at gen.buzzyai.video, supported models, credits and video quotas, plan pricing (Starter, Creator, Studio), billing, cancellation, payments via Waffo Pancake and our refund policy.",
  keywords: [
    "BuzzyAI.Video FAQ",
    "AI video maker questions",
    "AI video credits",
    "AI video pricing FAQ",
    "AI video subscription cancel",
  ],
  openGraph: {
    title: "FAQ - BuzzyAI.Video",
    description:
      "Frequently asked questions about BuzzyAI.Video plans, credits, billing and creating AI videos at gen.buzzyai.video.",
    type: "website",
    url: "https://buzzyai.video/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FAQ />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

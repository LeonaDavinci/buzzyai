import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingBoard from "@/components/PricingBoard";

export const metadata: Metadata = {
  title: "Pricing - BuzzyAI.Video | Plans & Subscription",
  description:
    "Pick a BuzzyAI.Video plan: Starter, Creator and Studio tiers with storyboard, multi-angle camera control and real-time relighting. Subscribe monthly or annually, pay securely via Waffo Pancake, and cancel anytime.",
  keywords: [
    "BuzzyAI.Video pricing",
    "AI video subscription",
    "AI video plans",
    "Creator plan AI video",
    "Studio plan AI video",
    "AI video monthly yearly",
  ],
  openGraph: {
    title: "Pricing - BuzzyAI.Video",
    description:
      "Subscribe to BuzzyAI.Video: Starter, Creator and Studio plans for consistent AI video creation, with monthly and annual billing.",
    type: "website",
    url: "https://buzzyai.video/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingBoard />
      </main>
      <Footer />
    </>
  );
}

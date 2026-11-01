import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentLanding from "@/components/PaymentLanding";

export const metadata: Metadata = {
  title: "Subscribe - BuzzyAI.Video",
  description:
    "Complete your BuzzyAI.Video subscription. Choose your plan and continue to secure payment.",
  robots: { index: false, follow: false },
};

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = searchParams.plan;
  return (
    <>
      <Header />
      <main>
        <PaymentLanding plan={plan} />
      </main>
      <Footer />
    </>
  );
}

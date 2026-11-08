import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Updating from "@/components/Updating";

export const metadata: Metadata = {
  title: "Scaling Up — BuzzyAI.Video",
  description:
    "Buzzy AI Video is scaling its infrastructure to serve record demand. Leave your email to be notified the moment we reopen.",
  robots: { index: false, follow: false },
};

export default function UpdatingPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = searchParams.plan;
  return (
    <>
      <Header />
      <main>
        <Updating plan={plan} />
      </main>
      <Footer />
    </>
  );
}

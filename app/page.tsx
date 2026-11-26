import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoryboardCreator from "@/components/StoryboardCreator";
import ModelGrid from "@/components/ModelGrid";
import DirectorCanvas from "@/components/DirectorCanvas";
import Showcase from "@/components/Showcase";
import CreativeTools from "@/components/CreativeTools";
import UseCases from "@/components/UseCases";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Force SSR for SEO and first meaningful paint.
export const dynamic = "force-dynamic";

function GoogleDisclosure() {
  return (
    <section className="section" aria-label="Google sign-in data disclosure">
      <div className="container">
        <div
          style={{
            border: "1px solid var(--border)",
            borderLeft: "3px solid var(--gold, #f5c518)",
            borderRadius: 12,
            padding: "18px 20px",
            fontSize: 14,
            lineHeight: 1.7,
            color: "var(--text-dim, #9aa0a6)",
            background: "var(--bg-elev, transparent)",
          }}
        >
          <strong style={{ color: "var(--text, inherit)" }}>
            Sign-in with Google — what we receive and how it is used:
          </strong>{" "}
          When you sign in with Google, BuzzyAI.Video receives only your Google account name, email
          address and profile picture, solely to create and identify your account. We never read your
          Gmail, Drive, photos or any other Google service, and we never sell or share this data. Our
          use of Google user data adheres to the Google API Services User Data Policy, including its
          Limited Use requirements. BuzzyAI.Video does not generate, and does not permit the use of
          Google APIs for, AI-generated non-consensual intimate imagery (AI NCII) or any
          non-consensual synthetic content of real people. See our{" "}
          <a href="/privacy" style={{ color: "var(--gold, #f5c518)" }}>Privacy Policy</a> and{" "}
          <a href="/terms" style={{ color: "var(--gold, #f5c518)" }}>Terms of Use</a>.
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GoogleDisclosure />
        <StoryboardCreator />
        <ModelGrid />
        <DirectorCanvas />
        <Showcase />
        <CreativeTools />
        <UseCases />
        <Workflow />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

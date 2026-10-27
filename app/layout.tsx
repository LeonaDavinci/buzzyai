import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-KJ4CMGF5QB";

export const metadata: Metadata = {
  metadataBase: new URL("https://buzzyai.video"),
  applicationName: "BuzzyAI.Video",
  title: {
    default:
      "BuzzyAI.Video - AI Video Director | Storyboard, Camera & Relighting in One Canvas",
    template: "%s | BuzzyAI.Video",
  },
  description:
    "BuzzyAI.Video is an AI video directing workspace: it aggregates Seedance, Kling, Runway, Veo and more into one canvas, with storyboard, multi-angle camera control and real-time relighting so anyone can direct 4K cinematic shorts, animations and music videos.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  keywords: [
    "buzzyai.video",
    "buzzyai",
    "AI video generator",
    "AI director",
    "text to video",
    "image to video",
    "cinematic AI video",
    "storyboard generator",
    "AI short film maker",
    "multi-model AI video platform",
    "AI animation",
    "AI music video",
  ],
  authors: [{ name: "BuzzyAI.Video" }],
  openGraph: {
    title: "BuzzyAI.Video - AI Video Director",
    description:
      "BuzzyAI.Video is the multi-model AI video directing workspace where you storyboard, direct the camera and relight shots in one canvas, then export 4K films in your browser.",
    type: "website",
    url: "https://buzzyai.video",
    siteName: "BuzzyAI.Video",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzyAI.Video - AI Video Director",
    description:
      "BuzzyAI.Video aggregates Seedance, Kling, Runway and Veo, so you can direct a consistent 4K AI film from a single storyboard canvas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

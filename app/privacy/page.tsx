import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Legal, { LegalDoc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy - BuzzyAI.Video",
  description:
    "How BuzzyAI.Video collects, uses and protects your information, including account data, AI processing, cookies, analytics and your privacy rights.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy - BuzzyAI.Video",
    description: "How BuzzyAI.Video collects, uses and protects your information.",
    type: "website",
    url: "https://buzzyai.video/privacy",
  },
};

const doc: LegalDoc = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  updated: "November 16, 2026",
  intro:
    "This Privacy Policy explains what information BuzzyAI.Video (\"we\", \"us\", \"our\") collects when you use the Service at https://www.buzzyai.video, how we use and share it, and the choices and rights you have. If you have questions, contact us at hello@buzzyai.video.",
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: [
        "We collect information you give us directly, information collected automatically when you use the Service, and information we receive from third parties such as payment processors.",
      ],
      bullets: [
        "Account and contact details, such as your email address and any profile information you provide.",
        "Content you submit, including prompts, text, images and other material you upload to generate video.",
        "Usage and device data, such as pages visited, features used, browser type, IP address and general location.",
        "Billing information needed to process a subscription. Full card details are handled by our payment processor and are not stored on our servers.",
        "Messages you send us, such as support requests or emails you sign up for updates with.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: [
        "We use the information we collect to provide and operate the Service, process subscriptions, generate the videos you request, communicate with you, keep the Service secure, and comply with legal obligations. We also use aggregated information to understand how the Service is used and to improve it.",
      ],
      bullets: [
        "To create and maintain your account and deliver the features you use.",
        "To transmit your prompts and content to third-party AI models so they can generate outputs for you.",
        "To process payments, manage renewals and respond to billing questions.",
        "To detect fraud, prevent abuse and enforce our Terms of Service.",
        "To send service notices and, where you have opted in, product updates.",
      ],
    },
    {
      heading: "AI Processing and Third-Party Model Providers",
      paragraphs: [
        "To generate video, we must send the content and prompts you provide to third-party AI model providers. Those providers process the data on our instructions to produce your output. We choose providers that offer appropriate safeguards, but their own privacy practices also apply. Please do not submit information you are not comfortable having processed by these providers.",
      ],
    },
    {
      heading: "Cookies and Analytics",
      paragraphs: [
        "We use cookies and similar technologies to keep the Service working and to understand usage. We use Google Analytics to collect aggregated information about how visitors use the site. You can control cookies through your browser settings, and you can opt out of Google Analytics using tools provided by Google.",
      ],
    },
    {
      heading: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We share it only where needed to run the Service or where the law requires it.",
      ],
      bullets: [
        "With third-party AI model providers to generate outputs you request.",
        "With payment processors to handle subscriptions and refunds.",
        "With hosting, storage and analytics providers that support the Service.",
        "With authorities if we are legally required to disclose information, or to protect the rights, safety and property of users or the public.",
        "In connection with a merger, acquisition or sale of assets, subject to appropriate confidentiality protections.",
      ],
    },
    {
      heading: "Data Retention",
      paragraphs: [
        "We keep personal information for as long as we need it to provide the Service, manage your account, comply with legal obligations and resolve disputes. Content you delete may persist in backups for a limited period before being removed. You can request deletion of your account and associated data by contacting us.",
      ],
    },
    {
      heading: "Your Privacy Rights",
      paragraphs: [
        "Depending on where you live, you may have rights to access, correct, export or delete the personal information we hold about you, to object to or restrict certain processing, and to withdraw consent where processing is based on consent. You may also have the right to lodge a complaint with a data protection authority. To exercise any of these rights, contact us at hello@buzzyai.video and we will respond within the time required by applicable law.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We use reasonable technical and organizational measures to protect information against unauthorized access, loss or misuse. No system is completely secure, so we cannot guarantee absolute security. Please help protect your account by keeping your credentials confidential.",
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        "The Service is not intended for children under 16. We do not knowingly collect personal information from children below this age. If you believe a child has provided us with personal information, contact us and we will take steps to remove it.",
      ],
    },
    {
      heading: "International Transfers",
      paragraphs: [
        "We and our providers may process information in countries other than the one you live in, including countries with different data protection laws. Where required, we use appropriate safeguards to protect information transferred across borders.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The current version is always available at https://www.buzzyai.video/privacy with the \"Last updated\" date above. If we make material changes, we will take reasonable steps to notify you before they take effect.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "For any privacy question, request or complaint, email hello@buzzyai.video. We aim to respond within a reasonable time and in line with applicable law.",
      ],
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <Legal doc={doc} />
      </main>
      <Footer />
    </>
  );
}

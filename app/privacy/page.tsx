import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Legal, { LegalDoc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy - BuzzyAI.Video",
  description:
    "How BuzzyAI.Video collects, uses, stores and shares personal information. GDPR/CCPA-aware: data controller, legal bases, cookies, retention, your rights and contact details.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy - BuzzyAI.Video",
    description:
      "How BuzzyAI.Video collects, uses, stores and shares your personal information, and the rights available to you.",
    type: "website",
    url: "https://buzzyai.video/privacy",
  },
};

const doc: LegalDoc = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  legalName: "BuzzyAI.Video",
  version: "Version 1.0",
  updated: "November 16, 2026",
  intro:
    "BuzzyAI.Video (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal information when you use the BuzzyAI.Video service at https://www.buzzyai.video (the \"Service\"), and the rights available to you.",
  sections: [
    {
      heading: "Data Controller",
      blocks: [
        {
          type: "p",
          text: "The data controller for this Service is:",
        },
        {
          type: "table",
          headers: ["Field", "Detail"],
          rows: [
            ["Operator", "BuzzyAI.Video (individual / sole trader)"],
            ["Registered Address", "Not applicable — operated as an individual / sole trader; correspondence by email"],
            ["Privacy Email", "buzzyai.llc@gmail.com"],
            ["Data Protection Officer (DPO)", "Not applicable"],
          ],
        },
      ],
    },
    {
      heading: "Personal Information We Collect",
      blocks: [
        {
          type: "sub",
          heading: "2.1 Information You Provide Directly",
          blocks: [
            {
              type: "bullets",
              items: [
                "Account info: email address, password (stored encrypted), and any profile details you provide.",
                "Generated content: the prompts, text, images and other inputs you submit, and the videos/outputs generated from them.",
                "Payment info: transaction amount and payment status. Full card numbers are not stored by us — card data is processed by our payment processor (see Section 5).",
                "Communications: emails, support requests, and feedback you send us, including an email address you leave to receive product updates.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "2.2 Information We Collect Automatically",
          blocks: [
            {
              type: "bullets",
              items: [
                "Device & network: IP address, device model, operating system, browser type, time zone.",
                "Usage data: pages visited, features used, activity logs, session duration, and which showcase categories or works you view.",
                "Log data: request timestamps, error logs, and performance metrics.",
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      blocks: [
        {
          type: "table",
          headers: ["Purpose", "Legal Basis"],
          rows: [
            ["Service delivery & maintenance", "Contract performance"],
            ["Billing & payment processing", "Contract performance"],
            ["Customer support", "Contract / Legitimate interests"],
            ["Service notifications (billing, security, policy)", "Legitimate interests"],
            ["Security & fraud prevention", "Legitimate interests"],
            ["Product analytics & improvement", "Legitimate interests"],
            ["Legal compliance", "Legal obligation"],
            ["Marketing — product updates (optional)", "Your consent"],
          ],
        },
        {
          type: "p",
          text: "We may aggregate or anonymize data for statistical purposes. Such data cannot be linked to any individual.",
        },
        {
          type: "p",
          text: "We use third-party AI model providers (including Veo, Kling, Seedance, Runway and Google models) to process the prompts and content you submit in order to generate the videos you request. We do not use your Inputs to train AI models without your explicit consent.",
        },
      ],
    },
    {
      heading: "Cookies & Tracking Technologies",
      blocks: [
        {
          type: "table",
          headers: ["Type", "Purpose", "Disableable"],
          rows: [
            ["Strictly necessary", "Login sessions, core functionality", "No"],
            ["Functional", "Language preferences, personalization", "Yes"],
            ["Analytics", "Anonymous usage statistics, product optimization", "Yes"],
            ["Marketing (optional)", "Product update communications", "Yes"],
          ],
        },
        {
          type: "p",
          text: "Analytics tools in use: Google Analytics (link to its privacy policy: https://policies.google.com/privacy). You can manage your preferences via your browser settings or by opting out of Google Analytics. Disabling non-essential cookies may limit some features.",
        },
      ],
    },
    {
      heading: "Sharing & Disclosure",
      blocks: [
        {
          type: "p",
          text: "We do not sell your personal information, including as defined under applicable laws such as the CCPA. We share your information only in the following circumstances:",
        },
        {
          type: "bullets",
          items: [
            "Service Providers: cloud hosting, payment, support, analytics and AI-model vendors, bound by confidentiality. Payment card data is processed exclusively by our PCI-DSS certified payment processor and Merchant of Record, Waffo Pancake, and is not stored on our servers.",
            "AI Model Providers: prompts and content you submit are sent to the third-party models listed in Section 3 solely to generate your requested outputs.",
            "Legal Requirements: where required by law, court order, or a lawful regulatory request.",
            "Business Transactions: in a merger, acquisition, or similar event, with advance notice and continued protections.",
            "With Your Consent: for any other purpose, with your explicit prior consent.",
          ],
        },
      ],
    },
    {
      heading: "Data Security",
      blocks: [
        {
          type: "bullets",
          items: [
            "Encryption in transit: TLS / HTTPS.",
            "Secure storage: passwords and sensitive data are encrypted or hashed.",
            "Access controls: least-privilege principle.",
            "Regular security reviews and vulnerability assessments.",
          ],
        },
        {
          type: "p",
          text: "In the event of a security incident affecting your rights, we will notify you and the relevant authorities within 72 hours of discovery, as required by law. Please keep your credentials secure and do not share them.",
        },
      ],
    },
    {
      heading: "Data Retention",
      blocks: [
        {
          type: "table",
          headers: ["Data Type", "Retention Period", "Upon Expiry"],
          rows: [
            ["Account information", "While active; 90 days after deletion", "Delete or anonymize"],
            ["Generated content & prompts", "While your account is active; 90 days after deletion", "Delete"],
            ["Transaction records", "Per tax/accounting regulations, typically 7 years", "Delete or archive"],
            ["Support records", "2 years", "Secure deletion"],
            ["Security audit logs", "12 months", "Secure deletion"],
          ],
        },
      ],
    },
    {
      heading: "Your Data Rights",
      blocks: [
        {
          type: "p",
          text: "To exercise any right below, contact us at buzzyai.llc@gmail.com; we respond within 30 calendar days.",
        },
        {
          type: "table",
          headers: ["Right", "Description"],
          rows: [
            ["Right to be informed", "Know what data we collect and how we use it"],
            ["Right of access", "Obtain a copy of your personal information"],
            ["Right to rectification", "Correct inaccurate or incomplete data"],
            ["Right to erasure", "Request deletion under certain conditions"],
            ["Right to restrict processing", "Temporarily suspend processing in certain cases"],
            ["Right to data portability", "Receive your data in a machine-readable format"],
            ["Right to object", "Object to processing based on legitimate interests or marketing"],
            ["Right to withdraw consent", "Withdraw consent for consent-based processing"],
          ],
        },
        {
          type: "p",
          text: "You may also lodge a complaint with your local data protection authority.",
        },
      ],
    },
    {
      heading: "Marketing & Opt-Out",
      blocks: [
        {
          type: "p",
          text: "With your consent, we may send marketing communications about product updates via email. You can opt out at any time by clicking \"Unsubscribe\" in any email, or by contacting us at buzzyai.llc@gmail.com. Opting out does not affect essential service notifications (for example, billing and security alerts).",
        },
      ],
    },
    {
      heading: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Our servers and partners may be located in regions including the United States and Singapore. For international transfers, we safeguard your data through:",
        },
        {
          type: "bullets",
          items: [
            "Data processing agreements incorporating EU Standard Contractual Clauses (SCCs).",
            "Transfers only to recipients with an equivalent level of protection.",
          ],
        },
      ],
    },
    {
      heading: "Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "The Service is intended for users aged 18 and above. We do not knowingly collect information from children below that age. If you believe a child has provided us with information, contact us immediately at buzzyai.llc@gmail.com and we will promptly delete it.",
        },
      ],
    },
    {
      heading: "Third-Party Links & Services",
      blocks: [
        {
          type: "p",
          text: "The Service may include links to, or integrations with, third-party services (including AI model providers). This Policy applies only to data we directly collect. We are not responsible for third-party privacy practices and encourage you to review their policies before use.",
        },
      ],
    },
    {
      heading: "Policy Changes",
      blocks: [
        {
          type: "p",
          text: "For material changes, we will provide at least 15 days' advance notice via a platform announcement or your registered email, and update the \"Last Updated\" date at the top of this page. Continued use after the effective date constitutes acceptance.",
        },
      ],
    },
    {
      heading: "Contact Us",
      blocks: [
        {
          type: "table",
          headers: ["Field", "Detail"],
          rows: [
            ["Privacy Email", "buzzyai.llc@gmail.com"],
            ["Support Email", "buzzyai.llc@gmail.com"],
            ["Operator", "BuzzyAI.Video"],
            ["Mailing Address", "Not applicable — correspondence by email"],
            ["Business Hours", "Mon–Fri, 09:00–18:00 UTC+8"],
          ],
        },
      ],
    },
  ],
  footerNote:
    "This Privacy Policy is for general reference only and does not constitute legal advice. We strongly recommend having it reviewed by a qualified legal professional in your target market before publication.",
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

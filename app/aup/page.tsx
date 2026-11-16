import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Legal, { LegalDoc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Acceptable Use Policy - BuzzyAI.Video",
  description:
    "The Acceptable Use Policy for AI-generated content on BuzzyAI.Video: prohibited content categories, content moderation, reporting channels and enforcement.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Acceptable Use Policy - BuzzyAI.Video",
    description:
      "Content standards, moderation, reporting and enforcement for AI-generated content on BuzzyAI.Video.",
    type: "website",
    url: "https://buzzyai.video/aup",
  },
};

const doc: LegalDoc = {
  eyebrow: "Legal · Content Policy",
  title: "Acceptable Use Policy — AI-Generated Content",
  legalName: "BuzzyAI.Video",
  version: "Version 1.0",
  updated: "November 16, 2026",
  intro:
    "BuzzyAI.Video (\"Platform,\" \"we,\" \"us,\" or \"our\") is committed to providing safe, lawful, and responsible AI-generated content services. This Acceptable Use Policy (\"Policy\") applies to all content generated, published, distributed, or stored through the Platform, and sets out our content standards, moderation, reporting procedures, and enforcement actions. All users using the Platform must comply with this Policy. This Policy complements Section 10 (Acceptable Use) of our Terms of Service; the Terms point to this document as our full content policy.",
  sections: [
    {
      heading: "Scope",
      blocks: [
        {
          type: "p",
          text: "This Policy applies to all content types made available through the Platform, including:",
        },
        {
          type: "bullets",
          items: [
            "Text: AI-generated text, dialogue, code, articles, and scripts.",
            "Images: AI-generated or edited images and illustrations.",
            "Audio / Video: AI-synthesized voice, music, and video.",
            "User Inputs (Prompts): prompts and instructions submitted by users.",
          ],
        },
      ],
    },
    {
      heading: "Content Standards & Prohibited Categories",
      blocks: [
        {
          type: "p",
          text: "The Platform prohibits generating the following six categories of content:",
        },
        {
          type: "bullets",
          items: [
            "Pornography / NSFW content.",
            "Violence / gore.",
            "Hate speech.",
            "Child-unsafe content (CSAM).",
            "Deepfakes / impersonation of real people.",
            "Content infringing copyright or trademarks.",
          ],
        },
        {
          type: "p",
          text: "The clauses below break these categories and other violations down further.",
        },
        {
          type: "sub",
          heading: "2.1 Absolutely Prohibited — Zero Tolerance",
          blocks: [
            {
              type: "p",
              text: "The following will be actioned immediately and may be reported to authorities:",
            },
            {
              type: "bullets",
              items: [
                "Child sexual abuse material (CSAM) or any sexual content involving minors.",
                "Content that promotes or facilitates terrorism, extremism, or mass violence.",
                "Technical instructions for weapons of mass destruction.",
                "Content inciting genocide or ethnic hatred.",
                "Deepfakes of real individuals, including face swaps, nudification, intimate-scene compositing, and fabricated statements or actions, whether or not the individuals consent.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "2.2 Restricted — Subject to Review",
          blocks: [
            {
              type: "bullets",
              items: [
                "Violent content: must have a clear creative or educational context.",
                "Politically sensitive content: content that may be misleading.",
                "Medical / legal / financial advice: must comply with local regulations.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "2.3 Generally Prohibited Conduct",
          blocks: [
            {
              type: "bullets",
              items: [
                "Generating or spreading misinformation or disproven claims.",
                "Impersonating real individuals, brands, or organizations.",
                "Infringing intellectual property, publicity, or privacy rights.",
                "Deceiving users by passing AI-generated content off as human-created.",
                "Bulk-generating spam or deceptive commercial content.",
                "Jailbreak prompts designed to bypass the Platform's safety measures.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "2.4 Source of Uploaded Material",
          blocks: [
            {
              type: "p",
              text: "You may only upload your own photos or voice, or material for which you have explicit permission from the people depicted. Uploading another person's photos or voice without their consent is prohibited. Before uploading, you must confirm that the material is your own or that you have permission. Permission does not authorize generating the deepfake content prohibited under Section 2.1. The Platform does not offer face-swap, nudify, or intimate-scene synthesis features.",
            },
          ],
        },
      ],
    },
    {
      heading: "Content Moderation",
      blocks: [
        {
          type: "p",
          text: "We operate a multi-layer moderation system: automated review, human review, and periodic audits.",
        },
        {
          type: "sub",
          heading: "3.1 Automated Review (real-time)",
          blocks: [
            {
              type: "p",
              text: "All requests and generated content are scanned in real time by safety filters.",
            },
            {
              type: "bullets",
              items: [
                "Input filtering: keyword, semantic, and intent detection on prompts.",
                "Output filtering: real-time safety assessment of generated content.",
                "Usage pattern analysis: monitoring for anomalous API usage.",
                "Safety tooling used: Waffo Prompt Sift (content-safety screening of user prompts before generation), together with an actively updated local blocklist of prohibited terms and prompt patterns. Generated outputs receive a separate moderation step before being shown.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "3.2 Human Review",
          blocks: [
            {
              type: "bullets",
              items: [
                "Auto-flagged content enters a human review queue.",
                "User-reported content is reviewed manually by our trust & safety team.",
                "Reviewers complete content-safety training and are bound by confidentiality obligations.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "3.3 Periodic Audits",
          blocks: [
            {
              type: "bullets",
              items: [
                "Random content sampling is performed monthly.",
                "We regularly evaluate and improve classifier accuracy and update the blocklist.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "3.4 Content Severity Levels",
          blocks: [
            {
              type: "table",
              headers: ["Level", "Description", "Review", "Action"],
              rows: [
                ["L1 — Critical", "Child safety, terrorism", "Auto-block + human confirmation", "Immediate ban + report"],
                ["L2 — High", "Severe violations", "Auto-flag + priority review", "Remove + suspend account"],
                ["L3 — Medium", "General violations", "Human review", "Warning + removal"],
                ["L4 — Low", "Minor violations", "Report-triggered", "Warning + edit required"],
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Reporting",
      blocks: [
        {
          type: "sub",
          heading: "4.1 When to Report",
          blocks: [
            {
              type: "bullets",
              items: [
                "Content or behavior violating this Policy's content standards.",
                "Critical violations involving child safety or terrorism.",
                "AI impersonation or infringement of your own rights.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "4.2 Reporting Principles",
          blocks: [
            {
              type: "bullets",
              items: [
                "Confidentiality: reporter identity is strictly protected.",
                "Impartiality: all reports receive independent, objective review.",
                "Anti-abuse: malicious or false reports are recorded and actioned.",
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Reporting Channels",
      blocks: [
        {
          type: "p",
          text: "You can report violating content or behavior through the following monitored channel:",
        },
        {
          type: "bullets",
          items: [
            "Dedicated safety & report email: hello@buzzyai.video (monitored; please include the content link or request ID, and a short description).",
            "General support: hello@buzzyai.video.",
          ],
        },
        {
          type: "callout",
          text: "For critical violations involving child safety or terrorism, email hello@buzzyai.video with \"URGENT SAFETY REPORT\" in the subject line. These reports are prioritized ahead of all other queues.",
        },
      ],
    },
    {
      heading: "Response & Processing Timelines",
      blocks: [
        {
          type: "table",
          headers: ["Violation Type", "Initial Response", "Resolution"],
          rows: [
            ["L1 — Critical", "Within 2 hours", "Within 24 hours"],
            ["L2 — High", "Within 24 hours", "Within 3 business days"],
            ["L3 — Medium", "Within 3 business days", "Within 7 business days"],
            ["L4 — Low", "Within 5 business days", "Within 15 business days"],
          ],
        },
        {
          type: "p",
          text: "If extended processing is required, we will notify the reporter proactively with reasons. Processing workflow: received (auto-acknowledge) → triage (classify L1–L4) → review (auto + human) → decision → enforcement → notification.",
        },
      ],
    },
    {
      heading: "Enforcement Actions",
      blocks: [
        {
          type: "table",
          headers: ["Action", "Measure", "Applies to"],
          rows: [
            ["1. Warning", "Written notice requiring removal or edit", "First-time minor violation"],
            ["2. Content removal", "Violating content taken down", "Confirmed L3–L4"],
            ["3. Feature restriction", "Reduced quota or model access", "Repeat minor or single L3"],
            ["4. Account suspension", "Temporary suspension pending review", "L2 or cumulative violations"],
            ["5. Permanent ban", "Permanent termination of access", "L1 or repeat L2"],
            ["6. Legal action", "Report to authorities; cooperate with investigation", "Criminal-level L1"],
          ],
        },
        {
          type: "p",
          text: "Where a violation involves paid credits, we may also forfeit credits associated with the offending generation, in addition to the actions above and to the remedies described in the Terms of Service.",
        },
      ],
    },
    {
      heading: "Appeals",
      blocks: [
        {
          type: "p",
          text: "You may appeal an enforcement decision within 14 days of receiving notice:",
        },
        {
          type: "bullets",
          items: [
            "Appeal channel: hello@buzzyai.video (include your account email and the decision reference).",
            "Timeline: reviewed within 10 business days.",
            "Review method: reviewed by a reviewer independent of the original decision.",
          ],
        },
      ],
    },
    {
      heading: "Transparency & Policy Updates",
      blocks: [
        {
          type: "p",
          text: "Material changes to this Policy are notified at least 15 days in advance by posting an update on this page. Continued use of the Platform constitutes acceptance of updates.",
        },
        {
          type: "callout",
          text: "This Policy is for general reference only and does not constitute legal advice. We recommend having it reviewed by a qualified AI-compliance attorney before publication.",
        },
      ],
    },
    {
      heading: "Contact Us",
      blocks: [
        {
          type: "bullets",
          items: [
            "Safety & Reports: hello@buzzyai.video",
            "Appeals: hello@buzzyai.video",
            "Company Name: BuzzyAI.Video (operated as an individual / sole trader)",
            "Address: Not applicable — contact us via email for our current contact details.",
          ],
        },
      ],
    },
  ],
  footerNote:
    "This Acceptable Use Policy works together with our Terms of Service and Privacy Policy. Underlying AI models used on the Platform are disclosed in the Terms of Service.",
};

export default function AupPage() {
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

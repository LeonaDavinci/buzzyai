import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Legal, { LegalDoc } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Terms of Service - BuzzyAI.Video",
  description:
    "The Terms of Service governing your use of BuzzyAI.Video, an AI video directing workspace. Covers subscriptions, recurring billing, cancellation, refunds, AI outputs, acceptable use and liability.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service - BuzzyAI.Video",
    description:
      "The terms that govern your use of BuzzyAI.Video and its AI-powered video creation services.",
    type: "website",
    url: "https://buzzyai.video/terms",
  },
};

const doc: LegalDoc = {
  eyebrow: "Legal",
  title: "Terms of Service — AI-Powered Services",
  legalName: "BuzzyAI.Video",
  version: "Version 1.1",
  updated: "November 18, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your access to and use of BuzzyAI.Video, an AI-powered video directing workspace available at https://www.buzzyai.video (the \"Service\"). By creating an account, subscribing to a plan, or otherwise using the Service, you agree to these Terms and to our Privacy Policy. If you do not agree, you may not use the Service.",
  sections: [
    {
      heading: "Introduction & Acceptance of Terms",
      blocks: [
        {
          type: "p",
          text: "Welcome to BuzzyAI.Video (\"BuzzyAI.Video\" / \"we\" / \"us\" / \"our\"). We operate the Service as an individual / sole trader under applicable law. These Terms govern your access to and use of our AI-powered services, including AI video storyboarding, camera control, relighting and video generation, available at https://www.buzzyai.video (the \"Service\").",
        },
        {
          type: "p",
          text: "By creating an account, subscribing to any plan, or otherwise using the Service, you confirm that you: (a) are at least 18 years of age; (b) have read, understood, and agree to be bound by these Terms; (c) agree to our Privacy Policy; and (d) are authorized to enter into this agreement on behalf of yourself or any organization you represent.",
        },
        {
          type: "callout",
          text: "Important: If you do not agree to these Terms, you may not use the Service. Continued use after any update constitutes acceptance of the revised Terms.",
        },
      ],
    },
    {
      heading: "Service Description",
      blocks: [
        {
          type: "sub",
          heading: "2.1 What We Provide",
          blocks: [
            {
              type: "p",
              text: "BuzzyAI.Video provides an AI-powered platform that enables users to plan and generate cinematic AI video — including storyboards, multi-angle camera control, real-time relighting and text-to-video generation. The Service is a digital software-as-a-service (SaaS) product delivered via the internet.",
            },
          ],
        },
        {
          type: "sub",
          heading: "2.2 Nature of the Service",
          blocks: [
            {
              type: "p",
              text: "The Service is a digital, intangible product. Upon confirmed payment, access is granted immediately. Due to the immediate digital delivery, specific limitations apply to refunds as described in Section 7.",
            },
          ],
        },
        {
          type: "sub",
          heading: "2.3 AI Model Dependency",
          blocks: [
            {
              type: "p",
              text: "Our Service utilizes third-party AI model providers, including Veo, Kling, Seedance, Runway and Google models. We are an independent product and are not affiliated with, endorsed by, or operated by any of these model providers. Service performance and availability may be affected by the operational status of these providers. We will endeavor to communicate significant disruptions in a timely manner.",
            },
          ],
        },
      ],
    },
    {
      heading: "Account Registration & Eligibility",
      blocks: [
        {
          type: "sub",
          heading: "3.1 Account Creation",
          blocks: [
            {
              type: "p",
              text: "To use the Service, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
            },
          ],
        },
        {
          type: "sub",
          heading: "3.2 Account Security",
          blocks: [
            {
              type: "bullets",
              items: [
                "Notify us immediately of any unauthorized use at hello@buzzyai.video.",
                "Do not share your credentials with any third party.",
                "Keep your billing email address up to date.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "3.3 Business Accounts",
          blocks: [
            {
              type: "p",
              text: "If you register on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.",
            },
          ],
        },
      ],
    },
    {
      heading: "Subscription Plans",
      blocks: [
        {
          type: "p",
          text: "We offer subscription plans for access to the Service (currently Starter, Creator and Studio), each with a monthly allowance of generations. Every plan is available with either monthly or annual billing. The amounts below are the exact amounts charged, excluding applicable taxes; the same figures are displayed on our homepage, pricing page and checkout page at https://www.buzzyai.video/pricing.",
        },
        {
          type: "table",
          headers: [
            "Plan",
            "Monthly billing",
            "Annual billing (charged once a year)",
          ],
          rows: [
            [
              "Starter",
              "$12 per month, billed monthly",
              "$120 once a year (equivalent to $10 per month)",
            ],
            [
              "Creator",
              "$25 per month, billed monthly",
              "$240 once a year (equivalent to $20 per month)",
            ],
            [
              "Studio",
              "$49 per month, billed monthly",
              "$468 once a year (equivalent to $39 per month)",
            ],
          ],
        },
        {
          type: "p",
          text: "Monthly plans are charged once every month; annual plans are charged once every year for the full yearly total shown above. The per-month price displayed for an annual plan is the yearly total divided by 12, not an additional monthly charge. Annual billing is cheaper per month than monthly billing. The plan, billing cycle and amount you select are repeated on the checkout page before payment. We reserve the right to modify plan features or introduce new plans at any time. Price changes are governed by Section 5.1.",
        },
      ],
    },
    {
      heading: "Billing & Payment",
      blocks: [
        {
          type: "sub",
          heading: "5.1 Recurring Billing Authorization",
          blocks: [
            {
              type: "p",
              text: "By providing your payment method and subscribing to a paid plan, you expressly authorize BuzzyAI.Video to charge your payment method on a recurring basis for the applicable subscription fee. This recurring authorization remains in effect until you cancel in accordance with Section 6. Your subscription renews automatically at the end of each billing period unless cancelled. We will send you advance notice before the renewal of any annual subscription.",
            },
          ],
        },
        {
          type: "sub",
          heading: "5.2 Taxes",
          blocks: [
            {
              type: "p",
              text: "Prices are exclusive of applicable taxes (including VAT, GST, sales tax, or similar) unless otherwise stated. As our Merchant of Record, Waffo Pancake calculates and remits applicable taxes where required by law, and the applicable tax is shown at checkout.",
            },
          ],
        },
        {
          type: "sub",
          heading: "5.3 Payment Processor",
          blocks: [
            {
              type: "p",
              text: "Payments for all BuzzyAI.Video subscriptions are processed exclusively by our payment processor and Merchant of Record, Waffo Pancake. Waffo Pancake is the sole payment and checkout channel used by this website; no other payment processor collects subscription payments on our behalf. Your card details are submitted directly to Waffo Pancake's PCI-DSS compliant checkout and are not stored on our servers. The name that will appear on your card statement is BuzzyAI.Video / Waffo. The same payment channel is identified on our homepage, pricing page and checkout page.",
            },
          ],
        },
      ],
    },
    {
      heading: "Cancellation Policy",
      blocks: [
        {
          type: "sub",
          heading: "6.1 How to Cancel",
          blocks: [
            {
              type: "p",
              text: "You may cancel your subscription at any time through:",
            },
            {
              type: "bullets",
              items: [
                "Online (recommended): Account Settings → Subscription → Cancel Subscription; or",
                "Email: send a cancellation request from your registered email to hello@buzzyai.video.",
              ],
            },
            {
              type: "p",
              text: "Cancellation takes effect at the end of your current billing period, and a confirmation will be sent to your registered email.",
            },
          ],
        },
        {
          type: "sub",
          heading: "6.2 Effect of Cancellation",
          blocks: [
            {
              type: "bullets",
              items: [
                "Your subscription remains active until the end of the current billing period.",
                "You will not be charged for subsequent billing periods.",
                "Account data is retained for 90 days after cancellation, then deleted per our Privacy Policy.",
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Refund Policy",
      blocks: [
        {
          type: "sub",
          heading: "7.1 General Policy",
          blocks: [
            {
              type: "p",
              text: "Due to the immediate and intangible nature of our digital services, subscription fees are generally non-refundable, except as expressly stated in these Terms. Our money-back guarantee is a 3-day window from the date of purchase; we do not offer a 7-day or 30-day money-back guarantee. The same 3-day refund commitment is stated on our pricing and checkout pages.",
            },
          ],
        },
        {
          type: "sub",
          heading: "7.2 Eligible Refunds",
          blocks: [
            {
              type: "p",
              text: "Our refund commitment is: if you are unable to use this website's Service to generate videos, you may request a full refund within 3 days of your purchase. This is the only money-back guarantee we offer.",
            },
            {
              type: "bullets",
              items: [
                "3-day guarantee: a full refund is available when you are unable to use the Service to generate videos and you submit your request within 3 days of the purchase date. No usage-quota condition applies to this guarantee.",
                "Duplicate charge: a full refund for any billing error resulting in a duplicate charge.",
                "Verified service outage (≥72 hours): a pro-rated credit or refund for extended outages within our control.",
                "Statutory rights: nothing in this Section limits any non-waivable withdrawal or refund right granted by applicable law (for example, the 14-day withdrawal right in the EU/UK). Such statutory rights apply independently of, and are not shortened by, the 3-day guarantee above.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "7.3 How to Request a Refund",
          blocks: [
            {
              type: "p",
              text: "To request a refund, contact us at hello@buzzyai.video within 3 days of your purchase with your account email, transaction ID, purchase date, and a short description of why you were unable to generate videos. We acknowledge requests within 2 business days and process eligible refunds within 5–10 business days.",
            },
          ],
        },
        {
          type: "sub",
          heading: "7.4 Non-Refundable Items",
          blocks: [
            {
              type: "bullets",
              items: [
                "Requests under the 3-day guarantee submitted more than 3 days after the initial purchase.",
                "Fees for subscription periods already used, except as expressly noted in Section 7.2.",
                "Requests based only on dissatisfaction with output quality where the Service was in fact able to generate videos.",
                "Accounts terminated for violation of these Terms or the Acceptable Use Policy.",
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Billing Disputes",
      blocks: [
        {
          type: "p",
          text: "If you believe there is an error in a charge, please contact us at hello@buzzyai.video before disputing with your bank. We commit to responding within 2 business days and resolving confirmed billing errors within 5 business days.",
        },
      ],
    },
    {
      heading: "AI Output & Intellectual Property",
      blocks: [
        {
          type: "sub",
          heading: "9.1 Ownership of Outputs",
          blocks: [
            {
              type: "p",
              text: "Subject to these Terms, AI-generated content produced in response to your inputs (\"Outputs\") is owned by you. You may use Outputs for any lawful purpose consistent with Section 10.",
            },
          ],
        },
        {
          type: "sub",
          heading: "9.2 Input License",
          blocks: [
            {
              type: "p",
              text: "By submitting content to the Service (\"Inputs\"), you grant BuzzyAI.Video a limited, non-exclusive license to process your Inputs solely to deliver the Service. We do not use your Inputs to train AI models without your explicit consent.",
            },
          ],
        },
        {
          type: "sub",
          heading: "9.3 Third-Party AI Model Dependency",
          blocks: [
            {
              type: "p",
              text: "Our Service uses third-party AI model providers including Veo, Kling, Seedance, Runway and Google models. Outputs may be influenced by these providers' models. We do not guarantee specific output quality and accept no liability for outputs generated by third-party models.",
            },
          ],
        },
        {
          type: "sub",
          heading: "9.4 Accuracy of AI Outputs",
          blocks: [
            {
              type: "p",
              text: "AI-generated content may contain errors or inaccuracies. You are solely responsible for reviewing and verifying Outputs before relying on them.",
            },
          ],
        },
      ],
    },
    {
      heading: "Acceptable Use Policy",
      blocks: [
        {
          type: "callout",
          text: "Our full, standalone Acceptable Use Policy — covering all prohibited content categories, content moderation, reporting channels, response timelines and enforcement actions — is published at https://www.buzzyai.video/aup and is incorporated into these Terms by reference.",
        },
        {
          type: "sub",
          heading: "10.1 Permitted Uses",
          blocks: [
            {
              type: "p",
              text: "You may use the Service only for lawful purposes in accordance with these Terms.",
            },
          ],
        },
        {
          type: "sub",
          heading: "10.2 Prohibited Uses",
          blocks: [
            {
              type: "p",
              text: "You agree NOT to use the Service to generate, upload, or distribute any of the following:",
            },
            {
              type: "table",
              headers: ["Category", "Prohibited content"],
              rows: [
                ["Pornography / NSFW", "Sexually explicit or nude content, including sexualized depictions."],
                ["Violence / gore", "Graphic violence, gore, or content promoting harm to others."],
                ["Hate speech", "Content attacking or demeaning people based on protected characteristics."],
                ["Child-unsafe content (CSAM)", "Any sexualization of minors or content violating child protection laws."],
                ["Deepfakes / impersonation", "AI-synthesized audio, video, or images that impersonate real individuals or deceive viewers about their origin or authenticity — including face swap, character swap or likeness replacement in existing video footage, nudify, two-person intimate-scene synthesis, and fabricated statements or actions."],
                ["Copyright / trademark infringement", "Content that infringes the intellectual property or privacy rights of any third party."],
              ],
            },
            {
              type: "p",
              text: "You also agree NOT to produce malware, phishing content, or cyberattack tools; circumvent or interfere with security features of the Service; resell or sub-license access to the Service without prior written approval; or violate any applicable law, regulation, or card network rule.",
            },
          ],
        },
        {
          type: "sub",
          heading: "10.3 AI-Specific Prohibitions",
          blocks: [
            {
              type: "bullets",
              items: [
                "Use Service inputs, outputs, model responses, or any derivative thereof to train, fine-tune, benchmark, distil, or otherwise develop any AI or machine-learning model that competes, directly or indirectly, with the Service or BuzzyAI.Video's products.",
                "Systematically scrape, extract, or harvest model outputs at scale for purposes other than your own authorized use of the Service.",
                "Represent AI-generated outputs as the work of a human professional (e.g., a licensed doctor, lawyer, or financial adviser) in contexts where such misrepresentation could cause harm.",
                "Remove or conceal any AI-generation labels or disclosures we apply to Outputs.",
              ],
            },
          ],
        },
        {
          type: "sub",
          heading: "10.4 Real-Person Uploads",
          blocks: [
            {
              type: "p",
              text: "If the Service allows you to upload photos, voice recordings, or video clips of real people, you represent that the material is your own or that you have obtained permission from the people depicted. You may not upload another person's photo, voice, or video without their consent. The Service does not offer face-swap, character swap, character or likeness replacement in uploaded video, nudify, or intimate-scene synthesis features.",
            },
          ],
        },
        {
          type: "sub",
          heading: "10.5 Reporting & Enforcement",
          blocks: [
            {
              type: "p",
              text: "We screen user prompts through automated content-safety filtering (Waffo Prompt Sift plus an actively updated blocklist) before generation and apply a moderation step to generated outputs. If you encounter content that violates this policy, report it to hello@buzzyai.video. We review reports and may take enforcement actions including content removal, credit forfeiture, account suspension, or permanent bans. Users may appeal an enforcement decision by writing to the same address. The full process is described in our standalone Acceptable Use Policy at https://www.buzzyai.video/aup.",
            },
          ],
        },
      ],
    },
    {
      heading: "Data, Privacy & Security",
      blocks: [
        {
          type: "p",
          text: "Your use of the Service is governed by our Privacy Policy at https://www.buzzyai.video/privacy. Payment card data is processed exclusively by our PCI-DSS certified payment processor (Waffo Pancake) and is not stored on our servers. Account data is retained for 90 days following cancellation, then deleted.",
        },
      ],
    },
    {
      heading: "Disclaimers & Limitation of Liability",
      blocks: [
        {
          type: "sub",
          heading: "12.1 Disclaimer of Warranties",
          blocks: [
            {
              type: "p",
              text: "THE SERVICE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ACCURACY OF AI OUTPUTS.",
            },
          ],
        },
        {
          type: "sub",
          heading: "12.2 AI-Generated Content Disclaimer",
          blocks: [
            {
              type: "callout",
              text: "AI GENERATED CONTENT DISCLAIMER — Outputs may be inaccurate, incomplete, or outdated. Do not rely on them for legal, medical, financial, or other professional advice. Always verify AI-generated content with a qualified professional before acting on it.",
            },
          ],
        },
        {
          type: "sub",
          heading: "12.3 Limitation of Liability",
          blocks: [
            {
              type: "p",
              text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, BUZZYAI.VIDEO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
            },
          ],
        },
      ],
    },
    {
      heading: "Term & Termination",
      blocks: [
        {
          type: "p",
          text: "These Terms remain effective while you use the Service. We may suspend or terminate your account if you materially breach these Terms, we suspect fraudulent activity, or as required by law. If we terminate for reasons other than your breach, we will provide a pro-rated refund for any unused prepaid period. You may delete your account at any time by contacting hello@buzzyai.video.",
        },
      ],
    },
    {
      heading: "Governing Law & Dispute Resolution",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by applicable law, without limiting any mandatory consumer protections you have in your country of residence. Before initiating any formal proceedings, please contact us at hello@buzzyai.video to attempt informal resolution.",
        },
      ],
    },
    {
      heading: "General Provisions",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms at any time. Material changes will be notified by email at least 14 days before the effective date. Continued use constitutes acceptance. If any provision is found unenforceable, the remainder continues in full effect.",
        },
      ],
    },
    {
      heading: "Contact Information",
      blocks: [
        {
          type: "p",
          text: "For any questions about these Terms or billing, please contact us:",
        },
        {
          type: "table",
          headers: ["Purpose", "Channel"],
          rows: [
            ["General Support", "hello@buzzyai.video"],
            ["Billing", "hello@buzzyai.video"],
            ["Refunds", "hello@buzzyai.video"],
            ["Cancel Subscription", "Account Settings, or hello@buzzyai.video"],
            ["Legal & Privacy", "hello@buzzyai.video"],
            ["Security", "hello@buzzyai.video"],
            ["Website", "https://www.buzzyai.video"],
          ],
        },
        {
          type: "p",
          text: "By using the Service or checking \"I agree\" at checkout, you acknowledge and agree to these Terms.",
        },
      ],
    },
  ],
  footerNote:
    "These Terms of Service are provided for general reference and do not constitute legal advice. We recommend review by a qualified legal professional in your target market before publication.",
};

export default function TermsPage() {
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

export interface ModelItem {
  name: string;
  desc: string;
  featured?: boolean;
}

export const models: ModelItem[] = [
  { name: "2.5 Model", desc: "4K · 30s clips · 50 assets", featured: true },
  { name: "Seedance 2.5", desc: "Motion-driven video creation" },
  { name: "Google Omni", desc: "Cinematic video generation" },
  { name: "Kling", desc: "High-fidelity physics simulation" },
  { name: "Runway", desc: "Next-gen creative video tools" },
  { name: "Nano Banana 2", desc: "Lightweight video synthesis" },
  { name: "Veo 3.1", desc: "Google's advanced video generation" },
  { name: "GPT Image 2", desc: "Photorealistic image generation" },
  { name: "Hailuo", desc: "Fast & expressive drafting" },
  { name: "Wan", desc: "Open-source SOTA video model" },
  { name: "Pixverse", desc: "Stylized & dynamic video" },
];

export interface Tool {
  title: string;
  desc: string;
  index: string;
}

export const tools: Tool[] = [
  {
    title: "Storyboard Creator",
    desc: "Drop an image or prompt and get a multi-cam storyboard. Every character, object, and location is locked so your shots stay consistent.",
    index: "01",
  },
  {
    title: "Multi-angle Camera Control",
    desc: "Precisely control camera movement with a draggable cube for custom lens texture and motion across each storyboard panel.",
    index: "02",
  },
  {
    title: "Relighting in Real Time",
    desc: "Reposition the key light, tune brightness and color temperature, and add a rim light to keep every shot mood-matched.",
    index: "03",
  },
];

export interface Plan {
  name: string;
  priceMonthly: string; // e.g. "$15"
  priceYearly?: string; // per-month equivalent when billed annually, e.g. "$12"
  unit: string; // "/mo"
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
  href?: string; // CTA destination (homepage / nav jump)
  checkoutUrl?: string; // Real payment link for the /pricing checkout board
}

/**
 * Real payment destinations for the /pricing checkout board.
 * Replace with your Stripe Checkout or Lemonsqueezy subscription links.
 * (Set NEXT_PUBLIC_STRIPE_CREATOR_URL at build to override the placeholder.)
 */
export const CHECKOUT = {
  creator:
    process.env.NEXT_PUBLIC_STRIPE_CREATOR_URL ??
    "https://buy.stripe.com/your-creator-subscription-link",
  studio: "mailto:hello@buzzyai.video?subject=Studio%20plan%20inquiry",
};

export const plans: Plan[] = [
  {
    name: "Starter",
    priceMonthly: "$0",
    unit: "/mo",
    desc: "For first-time AI video creators.",
    features: [
      "20 generations / month",
      "720p export",
      "Core model access",
      "Community support",
    ],
    cta: "Start free",
    href: "/director",
  },
  {
    name: "Creator",
    priceMonthly: "$15",
    priceYearly: "$12",
    unit: "/mo",
    desc: "For serious everyday creators.",
    features: [
      "500 generations / month",
      "4K export · 30s clips",
      "Full model matrix",
      "Storyboard / Camera / Light",
      "Priority render queue",
    ],
    featured: true,
    cta: "Upgrade",
    href: "/pricing#checkout", // homepage / nav jump → standalone pricing board
    checkoutUrl: CHECKOUT.creator, // real payment link (Stripe / Lemonsqueezy)
  },
  {
    name: "Studio",
    priceMonthly: "$49",
    priceYearly: "$39",
    unit: "/mo",
    desc: "For studios & brand teams.",
    features: [
      "Unlimited generations",
      "4K export · team space",
      "API access",
      "Dedicated manager",
      "Commercial license",
    ],
    cta: "Contact us",
    href: "/pricing#checkout", // homepage / nav jump → standalone pricing board
    checkoutUrl: CHECKOUT.studio, // real payment link (mailto inquiry)
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Which AI video models are supported?",
    a: "We aggregate 11+ leading video and image models including Seedance, Kling, Runway, Veo, Google Omni, Hailuo, Wan, and Pixverse. Switch between them freely from one interface.",
  },
  {
    q: "Can I use it without any filmmaking background?",
    a: "Yes. BuzzyAI.Video acts as your AI director. With storyboard generation, visual camera control, and real-time lighting, anyone can produce cinematic shorts.",
  },
  {
    q: "Do you support text-to-video and image-to-video?",
    a: "Both. Type a prompt to generate video, or upload a reference image for image-to-video creation.",
  },
  {
    q: "What is the maximum output quality and length?",
    a: "Flagship models support up to 4K quality, 30-second clips per generation, and project management for up to 50 assets.",
  },
  {
    q: "How do you keep characters consistent across shots?",
    a: "The Storyboard Creator records characters, objects, and locations, and automatically maintains consistency when generating across scenes.",
  },
];

/* ---------- New sections ---------- */

export interface UseCase {
  title: string;
  desc: string;
  icon: string;
}

export const useCases: UseCase[] = [
  {
    title: "Short Films",
    desc: "Direct character-driven narratives with consistent looks from opening to end card.",
    icon: "🎬",
  },
  {
    title: "Animation",
    desc: "Bring stylized worlds and creatures to life without a render farm.",
    icon: "✨",
  },
  {
    title: "Music Videos",
    desc: "Sync visuals to beats and build expressive performance clips in minutes.",
    icon: "🎵",
  },
  {
    title: "Explainers",
    desc: "Turn complex ideas into clear, branded educational videos.",
    icon: "💡",
  },
  {
    title: "Ads & Social",
    desc: "Produce scroll-stopping spots for campaigns and social feeds.",
    icon: "📣",
  },
  {
    title: "Concept Art in Motion",
    desc: "Pitch scenes and moods as moving references for bigger productions.",
    icon: "🎨",
  },
];

export interface Partner {
  name: string;
}

export const partners: Partner[] = [
  { name: "Seedance" },
  { name: "Kling" },
  { name: "Runway" },
  { name: "Veo" },
  { name: "Google Omni" },
  { name: "Hailuo" },
  { name: "Wan" },
  { name: "Pixverse" },
  { name: "GPT Image" },
  { name: "Nano Banana" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "BuzzyAI.Video replaced three tools in my pipeline. The storyboard + camera control finally let me direct instead of just prompting.",
    name: "Maya R.",
    role: "Independent Filmmaker",
  },
  {
    quote:
      "We shipped a 40-second brand film over a weekend. The real-time relighting alone saved us a day in post.",
    name: "Daniel K.",
    role: "Creative Director, Studio North",
  },
  {
    quote:
      "As a musician I had zero video skills. The Director Canvas walked me through shots and the MV looked pro.",
    name: "Lia S.",
    role: "Artist & Producer",
  },
];

/* ---------- Video Works (homepage screenshot gallery + detail pages) ---------- */

export interface VideoWork {
  slug: string;
  title: string;
  author: string;
  tag: string; // category: AI Film | Animation | MV
  image: string; // screenshot file in /public/works
  duration: string; // "1:48"
  model: string; // model used to render
  createdAt: string; // "2026-08"
  views: string; // "24.6K"
  description: string;
  prompt: string; // generation prompt snippet
}

export const videoWorks: VideoWork[] = [
  {
    slug: "ember-lane",
    title: "Ember Lane",
    author: "Nocturne",
    tag: "AI Film",
    image: "/works/backroom.png",
    duration: "1:48",
    model: "Seedance 2.5",
    createdAt: "2026-08",
    views: "24.6K",
    description:
      "A lamplighter walks a smoldering side street while cinders drift like slow snow. The lane geometry and ember cadence were blocked shot-by-shot in the Storyboard Creator, so all 30+ cuts share one continuous mood.",
    prompt:
      "A quiet cobblestone side street at night, drifting orange embers, warm lantern pools of light, gentle smoke haze, cinematic 35mm grain, widescreen.",
  },
  {
    slug: "glass-harbor",
    title: "Glass Harbor",
    author: "Mira Voss",
    tag: "AI Film",
    image: "/works/before-rome-sunset.png",
    duration: "2:12",
    model: "Kling",
    createdAt: "2026-07",
    views: "18.2K",
    description:
      "Fishing boats of translucent glass glide into a harbor at last light. Real-time relighting kept the low sun key consistent from the opening aerial to the final hull close-up.",
    prompt:
      "Translucent glass fishing boats entering a calm harbor at sunset, warm amber reflections on water, distant lighthouse, dramatic orange and violet sky, filmic grading.",
  },
  {
    slug: "copper-season",
    title: "Copper Season",
    author: "Juniper Ray",
    tag: "AI Film",
    image: "/works/pink-lemon.png",
    duration: "0:58",
    model: "Veo 3.1",
    createdAt: "2026-09",
    views: "31.9K",
    description:
      "A surreal autumn fable — copper leaves fall upward through pastel mist while a fox watches from a paper moon. Camera choreography was staged on the Director Canvas cube before rendering.",
    prompt:
      "Surreal pastel autumn scene, copper leaves floating upward through cream mist, a fox on a paper moon, whimsical storybook mood, ethereal soft lighting.",
  },
  {
    slug: "signal-bloom",
    title: "Signal Bloom",
    author: "Atelier K",
    tag: "Animation",
    image: "/works/neomorph.png",
    duration: "1:05",
    model: "Runway",
    createdAt: "2026-06",
    views: "42.7K",
    description:
      "A radio antenna blossoms into a luminous mechanical flower each midnight. Material and glow references were pinned in the storyboard so the petal shader reads identically from every turntable angle.",
    prompt:
      "Mechanical flower blooming from a vintage radio antenna, glowing teal and violet petals, dark midnight rooftop, stylized 3D render, moody atmosphere.",
  },
  {
    slug: "vessel-of-light",
    title: "Vessel of Light",
    author: "Hana Ito",
    tag: "Animation",
    image: "/works/liquid-forms.png",
    duration: "0:42",
    model: "Google Omni",
    createdAt: "2026-08",
    views: "15.3K",
    description:
      "A ceramic vessel pours liquid light instead of water, folding reflections into itself. A minimal dark studio was relit in real time to shape the highlights without clipping the curves.",
    prompt:
      "Ceramic vessel pouring glowing liquid light, iridescent reflections folding in a minimal dark studio, smooth organic curves, elegant futuristic 3D render.",
  },
  {
    slug: "midnight-frequency",
    title: "Midnight Frequency",
    author: "DJ Halo",
    tag: "MV",
    image: "/works/beatmaster.png",
    duration: "3:24",
    model: "Seedance 2.5",
    createdAt: "2026-09",
    views: "58.1K",
    description:
      "A rooftop radio set synced to the bassline. The crowd silhouettes and antenna light beams were locked to the beat map in the storyboard, then multi-angle camera control timed every push-in to the kick.",
    prompt:
      "Rooftop late-night radio set, crowd silhouettes under magenta and cyan beams, antenna glowing against the skyline, volumetric haze, vibrant club atmosphere.",
  },
  {
    slug: "cartographers-daughter",
    title: "The Cartographer's Daughter",
    author: "Wren",
    tag: "AI Film",
    image: "/works/beyond-the-moment.png",
    duration: "2:05",
    model: "Kling",
    createdAt: "2026-09",
    views: "22.8K",
    description:
      "A girl redraws the coastline of a fading map and the world outside her window obeys. The map room geography was locked in the Storyboard Creator so every reverse angle matched, and the Director Canvas pushed the camera through candle haze.",
    prompt:
      "Girl drawing a glowing coastline on an old map in a candlelit map room, ink lines turning real outside the window, melancholic wonder, cinematic 35mm grain, muted teal and amber grading.",
  },
  {
    slug: "terracotta-sky",
    title: "Terracotta Sky",
    author: "Studio Parable",
    tag: "Animation",
    image: "/works/paper-city.png",
    duration: "1:33",
    model: "Google Omni",
    createdAt: "2026-07",
    views: "19.4K",
    description:
      "A clay village bakes under a kiln-orange sky while potters fly kites between chimneys. Stop-motion timing and clay textures were preserved shot-to-shot by pinning material references inside the storyboard panels.",
    prompt:
      "Charming clay village with terracotta rooftops under a kiln-orange sky, tiny flying kites, soft warm daylight, stop-motion style, gentle depth of field, cozy earthy tones.",
  },
  {
    slug: "chorus-of-cells",
    title: "Chorus of Cells",
    author: "Nova Lab",
    tag: "MV",
    image: "/works/biolearn.png",
    duration: "4:01",
    model: "Veo 3.1",
    createdAt: "2026-08",
    views: "36.2K",
    description:
      "An audio-reactive choir of glowing cells sings the vocal hook. Neon membrane pulses were layered in real time so the visuals never fight the melody.",
    prompt:
      "Audio-reactive glowing cells singing in a dark void, neon membrane pulses, cyan and magenta bioluminescence, clean dark tech aesthetic, widescreen.",
  },
];

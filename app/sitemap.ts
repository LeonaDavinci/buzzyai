import type { MetadataRoute } from "next";
import { videoWorks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buzzyai.video";
  const now = new Date();

  const workEntries: MetadataRoute.Sitemap = videoWorks.map((w) => ({
    url: `${base}/works/${w.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...workEntries,
    {
      url: `${base}/director`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/skills`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}

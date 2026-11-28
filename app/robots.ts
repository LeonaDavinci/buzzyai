import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allow = [
    { userAgent: "Googlebot", allow: "/" },
    { userAgent: "Bingbot", allow: "/" },
    { userAgent: "OAI-SearchBot", allow: "/" },
    { userAgent: "ChatGPT-User", allow: "/" },
    { userAgent: "GPTBot", allow: "/" },
    { userAgent: "PerplexityBot", allow: "/" },
    { userAgent: "ClaudeBot", allow: "/" },
    { userAgent: "Claude-SearchBot", allow: "/" },
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
  ];

  return {
    rules: allow,
    sitemap: "https://www.buzzyai.video/sitemap.xml",
  };
}

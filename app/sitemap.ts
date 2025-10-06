import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about-me",
  "/contact",
  "/helpful-links",
  "/privacy-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jfwoxfordcounselling.co.uk";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    // changeFrequency: "weekly",
    // lastModified: new Date().toISOString(),
  }));
}

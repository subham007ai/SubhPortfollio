import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://subhamsarangi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/work", "/journey", "/notes", "/contact"].map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routeMeta: Record<
  string,
  { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
> = {
  "": { changeFrequency: "weekly", priority: 1 },
  "/menu": { changeFrequency: "weekly", priority: 0.95 },
  "/book": { changeFrequency: "weekly", priority: 0.9 },
  "/contact": { changeFrequency: "monthly", priority: 0.85 },
  "/about": { changeFrequency: "monthly", priority: 0.8 },
  "/gallery": { changeFrequency: "monthly", priority: 0.75 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(routeMeta);

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: routeMeta[route].changeFrequency,
    priority: routeMeta[route].priority,
  }));
}

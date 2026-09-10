import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { mockProjects, mockPsalms } from "@/data/mock-psalms";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => new URL(path, env.siteUrl).toString();

  const staticPages = ["/", "/about", "/contact", "/library", "/projects"].map(
    (path) => ({ url: u(path), changeFrequency: "weekly" as const, priority: path === "/" ? 1 : 0.7 })
  );

  const psalmPages = mockPsalms.map((p) => ({
    url: u(`/psalms/${p.slug}`),
    lastModified: p.releaseDate,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const projectPages = mockProjects.map((p) => ({
    url: u(`/projects/${p.slug}`),
    lastModified: p.releaseDate,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...psalmPages, ...projectPages];
}

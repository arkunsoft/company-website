// apps/web/src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { PROJECT_SLUGS_QUERY } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arkunsoft.com";

  const slugs = await sanityFetch<string[]>({
    query: PROJECT_SLUGS_QUERY,
  });

  const projectUrls = (slugs || []).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...projectUrls,
  ];
}

import type { MetadataRoute } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { PROJECT_SLUGS_QUERY } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://arkunsoft.com";

  // Statik Sayfalar
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const projectSlugs = await sanityFetch<string[]>({
      query: PROJECT_SLUGS_QUERY,
    });

    if (Array.isArray(projectSlugs)) {
      projectRoutes = projectSlugs.map((slug) => ({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error(
      "Sitemap generated without projects due to fetch error:",
      error,
    );
  }

  return [...routes, ...projectRoutes];
}

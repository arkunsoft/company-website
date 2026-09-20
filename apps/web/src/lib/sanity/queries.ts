// apps/web/src/lib/sanity/queries.ts
// Fetch all projects, sorted by priority (5 = highest), ties broken alphabetically
export const allProjectsQuery = `
  *[_type == "project"] | order(priority desc, title asc) {
    title,
    slug,
    summary,
    coverImage,
    industry,
    priority
  }
`;

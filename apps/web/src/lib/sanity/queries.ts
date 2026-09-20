// apps/web/src/lib/sanity/queries.ts

// Homepage/grid view — lightweight fields only, sorted by priority
export const allProjectsQuery = `
  *[_type == "project"] | order(priority desc, title asc) {
    title,
    slug,
    industry,
    summary,
    coverImage,
    priority
  }
`;

// Project detail page — full content including gallery and case study body
export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    title,
    slug,
    industry,
    summary,
    coverImage,
    gallery,
    caseStudy,
    techStack,
    liveUrl,
    priority
  }
`;

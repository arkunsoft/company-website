import { defineQuery } from "next-sanity";

// Homepage / Projects List Query
export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(priority desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    industry,
    summary,
    coverImage,
    priority,
    techStack,
    liveUrl
  }
`);

// Project Detail Query
export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    industry,
    summary,
    coverImage,
    gallery,
    caseStudy,
    techStack,
    liveUrl,
    priority
  }
`);

// Project Slugs Query (for generateStaticParams in App Router)
export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)][].slug.current
`);

// Clients / References Query
export const ALL_CLIENTS_QUERY = defineQuery(`
  *[_type == "client"] | order(order asc) {
    _id,
    name,
    "logoUrl": logo.asset->url,
    url,
    testimonial,
    personName,
    personRole
  }
`);

// Site Settings Query
export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    contactEmail,
    phone,
    address,
    socialLinks
  }
`);

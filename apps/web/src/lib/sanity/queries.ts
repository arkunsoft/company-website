import { defineQuery } from "next-sanity";

// Homepage / Projects List Query
export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(priority desc, title asc) {
    _id,
    title,
    slug,
    industry,
    summary,
    "imageUrl": coverImage.asset->url,
    priority,
    techStack
  }
`);

// Project Detail Query
export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    industry,
    summary,
    "imageUrl": coverImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    caseStudy,
    techStack,
    liveUrl,
    priority,
    client->{
      name,
      "logoUrl": logo.asset->url,
      url
    }
  }
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

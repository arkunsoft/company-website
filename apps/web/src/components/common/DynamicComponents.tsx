// apps/web/src/components/common/DynamicComponents.tsx
import dynamic from "next/dynamic";

// --- Home Components ---
export const DynamicReferenceMarquee = dynamic(
  () =>
    import("@/components/home/ReferenceMarquee").then(
      (mod) => mod.ReferenceMarquee,
    ),
  { ssr: true },
);

export const DynamicStatsSection = dynamic(
  () =>
    import("@/components/home/StatsSection").then((mod) => mod.StatsSection),
  { ssr: true },
);

export const DynamicServicesSection = dynamic(
  () =>
    import("@/components/home/ServicesSection").then(
      (mod) => mod.ServicesSection,
    ),
  { ssr: true },
);

export const DynamicProjectsCarousel = dynamic(
  () =>
    import("@/components/home/ProjectsCarousel").then(
      (mod) => mod.ProjectsCarousel,
    ),
  { ssr: true },
);

export const DynamicTechStackSection = dynamic(
  () =>
    import("@/components/home/TechStackSection").then(
      (mod) => mod.TechStackSection,
    ),
  { ssr: true },
);

export const DynamicContactSection = dynamic(
  () =>
    import("@/components/home/ContactSection").then(
      (mod) => mod.ContactSection,
    ),
  { ssr: true },
);

// --- Projects / Detail Components ---
export const DynamicProjectFilter = dynamic(
  () =>
    import("@/components/projects/ProjectFilter").then(
      (mod) => mod.ProjectFilter,
    ),
  { ssr: true },
);

export const DynamicProjectCaseStudy = dynamic(
  () =>
    import("@/components/projects/ProjectCaseStudy").then(
      (mod) => mod.ProjectCaseStudy,
    ),
  { ssr: true },
);

export const DynamicProjectHeroGallery = dynamic(
  () =>
    import("@/components/projects/ProjectHeroGallery").then(
      (mod) => mod.ProjectHeroGallery,
    ),
  { ssr: true },
);

// --- About Components ---
export const DynamicAboutContactCard = dynamic(
  () =>
    import("@/components/about/AboutContactCard").then(
      (mod) => mod.AboutContactCard,
    ),
  { ssr: true },
);

// --- Contact Components ---
export const DynamicContactForm = dynamic(
  () =>
    import("@/components/contact/ContactForm").then((mod) => mod.ContactForm),
  { ssr: true },
);

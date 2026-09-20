// apps/web/src/lib/sanity/types.ts
// Shared TypeScript types matching the project schema in packages/schema
import type { PortableTextBlock } from "sanity";

// Minimal shape for an unexpanded Sanity image reference
type SanityImageAsset = {
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
};

export type ProjectListItem = {
  title: string;
  slug: { current: string };
  industry?: string;
  summary?: string;
  coverImage: SanityImageAsset;
  priority: number;
};

export type ProjectDetail = ProjectListItem & {
  gallery?: SanityImageAsset[];
  caseStudy?: PortableTextBlock[];
  techStack?: string[];
  liveUrl?: string;
};

// apps/web/src/lib/sanity/env.ts

export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  throwEnvError("NEXT_PUBLIC_SANITY_PROJECT_ID");

export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  throwEnvError("NEXT_PUBLIC_SANITY_DATASET");

export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const sanityRevalidateSecret =
  process.env.SANITY_REVALIDATE_SECRET || "";

function throwEnvError(name: string): string {
  throw new Error(`Missing required environment variable: ${name}`);
}

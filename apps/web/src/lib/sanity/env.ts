// apps/web/src/lib/sanity/env.ts
// Validates required Sanity environment variables at startup,
// failing fast with a clear error instead of a silent undefined
function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const sanityProjectId = getEnvVar("NEXT_PUBLIC_SANITY_PROJECT_ID");
export const sanityDataset = getEnvVar("NEXT_PUBLIC_SANITY_DATASET");
export const sanityApiVersion = getEnvVar("NEXT_PUBLIC_SANITY_API_VERSION");

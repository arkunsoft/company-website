// apps/web/src/lib/sanity/client.ts
// Configured Sanity client for fetching content in Next.js
import { createClient } from "next-sanity";
import { sanityApiVersion, sanityDataset, sanityProjectId } from "./env";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
});

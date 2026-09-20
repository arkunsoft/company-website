// apps/web/src/lib/sanity/image.ts
// Builds optimized, transformable URLs for Sanity image assets
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

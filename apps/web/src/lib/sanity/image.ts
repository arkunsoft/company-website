import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const createBuilder =
  typeof imageUrlBuilder === "function"
    ? imageUrlBuilder
    : (imageUrlBuilder as unknown as { default: typeof imageUrlBuilder })
        .default;

const builder = createBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "bfhv4sta",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

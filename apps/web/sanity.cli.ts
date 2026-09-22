import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "bfhv4sta",
    dataset: "production",
  },
  typegen: {
    path: "./src/**/*.{ts,tsx}",
    generates: "./src/lib/sanity/sanity.types.ts",
    schema: "../studio/schema.json",
  },
});

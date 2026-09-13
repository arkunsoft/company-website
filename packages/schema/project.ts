// packages/schema/project.ts
// Content model for a single project/case-study entry
import { defineField, defineType } from "sanity";
import { slugifyTurkish } from "./lib/slugify";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: slugifyTurkish,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry / Category",
      description: "e.g. Banking, E-commerce, Healthcare — used for filtering",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Short Summary",
      description: "One or two sentences shown on the project card",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      description:
        "Composed device mockup shown on the project card — not a raw screenshot",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      description: "Additional screens/flows shown on the project detail page",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "caseStudy",
      title: "Case Study",
      description:
        "Free-form narrative for the project detail page — structure it however fits this project",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    }),
    defineField({
      name: "priority",
      title: "Priority",
      description:
        "5 = highest priority, 1 = lowest. Projects with the same priority are sorted alphabetically.",
      type: "number",
      initialValue: 1,
      options: {
        list: [
          { title: "5 — Highest", value: 5 },
          { title: "4", value: 4 },
          { title: "3", value: 3 },
          { title: "2", value: 2 },
          { title: "1 — Lowest", value: 1 },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "industry" },
  },
});

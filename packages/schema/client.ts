// packages/schema/reference.ts
import { defineField, defineType } from "sanity";

export const client = defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      description: "SVG preferred for consistent sizing in the grid",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Client Website",
      type: "url",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      description: "What this client said about working with us",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "personName",
      title: "Person Name",
      description: 'Who gave the testimonial, e.g. "Ahmet Yılmaz"',
      type: "string",
    }),
    defineField({
      name: "personRole",
      title: "Person Role",
      description: 'Their title at the client company, e.g. "Genel Müdür"',
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});

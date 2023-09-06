import { defineCollection, z } from "astro:content";

const braumCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    teaser: z.string(),
    tags: z.array(z.string()),
  }),
});

const jobCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  braum: braumCollection,
  job: jobCollections,
};

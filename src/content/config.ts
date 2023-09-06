import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const braumCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    teaser: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  braum: braumCollection,
};

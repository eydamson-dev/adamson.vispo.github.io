import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    stacks: z.array(z.string()),
  }),
});

export const collections = {
  projects
};

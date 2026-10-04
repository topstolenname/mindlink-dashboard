import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['opinion', 'ai-ethics', 'project-updates']),
    description: z.string(),
    author: z.string().default('Tristan Jessup'),
    tags: z.array(z.string()).default([]),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, research };

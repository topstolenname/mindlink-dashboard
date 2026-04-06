import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  integrations: [tailwind(), mdx()],
  content: {
    collections: {
      blog: {
        schema: {
          title: 'string',
          date: 'date',
          category: 'string',
          description: 'string',
        },
      },
      research: {
        schema: {
          title: 'string',
          date: 'date',
          description: 'string',
        },
      },
    },
  },
});

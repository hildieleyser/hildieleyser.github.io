import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Sort key: lower numbers surface first on the home page. */
      order: z.number(),
      year: z.string(),
      tag: z.string(),
      /** One line, outcome-first, used on cards and in meta descriptions. */
      summary: z.string(),
      /** What Hildelith personally did. Empty array hides the section. */
      role: z.array(z.string()).default([]),
      stack: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      /** Inline SVG diagram, rendered at full width on a light plate. */
      diagram: z.string().optional(),
      diagramAlt: z.string().optional(),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
      featured: z.boolean().default(true),
    }),
});

export const collections = { projects };

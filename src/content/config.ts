import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    blurb: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
    stamp: z.string().optional(),
    stickerColor: z.enum(['butter', 'mint', 'lilac', 'sky', 'rose']).optional(),
    accentMetric: z.object({
      label: z.string(),
      from: z.string(),
      to: z.string(),
    }).optional(),
    bullets: z.array(z.string()),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(0),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    date: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.string(),
    note: z.string().optional(),
    status: z.enum(['accepted', 'in progress', 'submitted', 'preprint']),
    stickerColor: z.enum(['butter', 'mint', 'lilac', 'sky', 'rose']).default('butter'),
    doi: z.string().optional(),
    pdfUrl: z.string().url().optional(),
  }),
});

export const collections = { projects, posts, publications };

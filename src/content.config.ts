import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  language: z.enum(['fr', 'en']),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  contentType: z.enum(['pillar', 'guide-achat', 'comparatif', 'tutoriel', 'projet']).default('tutoriel'),
  intent: z.enum(['informationnelle', 'transactionnelle', 'mixte']).default('informationnelle'),
  level: z.enum(['debutant', 'intermediaire', 'avance', 'mix', 'beginner', 'intermediate', 'advanced', 'mixed']).default('mix'),
  relatedEntry: z.string().optional(),
  hero: z.string().optional(),
  affiliateReady: z.boolean().default(false),
  affiliateCategory: z.enum(['tools','materials','mixed']).optional(),
});

const fr = defineCollection({
  loader: glob({ base: './src/content/fr', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

const en = defineCollection({
  loader: glob({ base: './src/content/en', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema,
});

export const collections = { fr, en };

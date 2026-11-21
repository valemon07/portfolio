/**
 * Content schemas: the typed contract between the facts in src/content/
 * and everything that renders them. Nothing here knows about markup or style.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** A calendar month, e.g. "2026-05". */
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);

/** A headline number with the fact it measures, e.g. "30%" / "faster order handling". */
const metric = z.object({
  value: z.string(),
  label: z.string(),
});

const experience = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/experience' }),
  schema: z.object({
    organization: z.string(),
    role: z.string(),
    /** One-word track this role belongs to, e.g. "Robotics". */
    lane: z.string(),
    location: z.string(),
    start: month,
    /** Omit while the role is ongoing. */
    end: month.optional(),
    summary: z.string(),
    highlights: z.array(z.string()).min(1),
    metrics: z.array(metric).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    /** Who or what the project was built for, e.g. "Personal Project". */
    context: z.string(),
    start: month,
    /** Omit while the project is ongoing. */
    end: month.optional(),
    summary: z.string(),
    highlights: z.array(z.string()).min(1),
    metrics: z.array(metric).default([]),
    stack: z.array(z.string()).default([]),
    /** Optional until real material exists. The UI must render without them. */
    repoUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = { experience, projects };

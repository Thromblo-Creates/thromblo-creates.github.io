import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects: one Markdown file per project under src/content/projects/.
// Add a project by dropping in a new .md file with this frontmatter.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.enum(['discord-bot', 'game', 'desktop-app']),
    status: z.enum(['live', 'in-development', 'released', 'beta']),
    tech: z.array(z.string()),
    /** Card accent color. */
    accent: z.string().default('#1f9fb0'),
    /** Optional corner-ribbon label, e.g. "Flagship" or "New". */
    badge: z.string().optional(),
    /** Featured projects surface on the home page. */
    featured: z.boolean().default(false),
    /** Lower numbers sort first. */
    order: z.number().default(100),
    year: z.number().optional(),
    /** Optional cover image path under /public. */
    cover: z.string().optional(),
    /** Slug of a related bot on the Bots hub, if any. */
    botId: z.string().optional(),
    links: z
      .object({
        github: z.string().optional(),
        topgg: z.string().optional(),
        invite: z.string().optional(),
        website: z.string().optional(),
        itch: z.string().optional(),
        googlePlay: z.string().optional(),
        download: z.string().optional(),
      })
      .default({}),
  }),
});

// Devlog: one Markdown file per post under src/content/devlog/.
const devlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, devlog };

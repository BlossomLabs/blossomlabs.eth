import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			slug: z.string().optional(),
			author: z.string().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			client: z.string(),
			period: z.string(),
			role: z.string(),
			partners: z.array(z.string()).optional(),
			stack: z.array(z.string()).optional(),
			links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
			metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
			heroImage: image().optional(),
			heroImageAlt: z.string().optional(),
			cardImage: image().optional(),
			cardImageAlt: z.string().optional(),
			slug: z.string().optional(),
		}),
});

export const collections = { blog, work };

import { z } from "zod";

export const blogMatterSchema = z.object({
  title: z.string(),
  tags: z.string().transform((tags) => tags.split(",")),
  summary: z.string(),
  draft: z.boolean().optional(),
  publishedAt: z.date(),
});

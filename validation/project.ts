import { z } from "zod";

export const projectMatterSchema = z.object({
  title: z.string(),
  skills: z.string().transform((skills) => skills.split(",")),
  summary: z.string(),
  featured: z.boolean().optional(),
  smallCover: z.string(),
  largeCover: z.string(),
  rank: z.number(),
});

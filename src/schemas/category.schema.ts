import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(1, { message: "Minimum 1 entity required." }),
  description: z.string().optional(),
});

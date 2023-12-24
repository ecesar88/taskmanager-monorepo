import { z } from "zod"

let envSchema = z.object({
  DATABASE_URL: z.string(),
})

export const ENV = envSchema.parse(process.env)

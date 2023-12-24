import { PrismaClient } from "@prisma/client"
import { userSeeds } from "./user.seed"
import { taskSeeds } from "./task.seed"

async function runSeeds(prisma: PrismaClient) {
  await taskSeeds(prisma, 10)
  await userSeeds(prisma, 10)

}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ["error", "info", "query", "warn"],
})

runSeeds(prisma)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

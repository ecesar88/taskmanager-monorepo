import { PrismaClient } from "@prisma/client"

export async function taskSeeds(prisma: PrismaClient, howMany: number) {
  const tasks = Array.from({ length: howMany }).map(async () => {
    return prisma.task.create({
      data: {
        done: Math.random() * 10 > 5,
        userId: (await prisma.user.findFirstOrThrow()).id,
      },
    })
  })

  return await Promise.all(tasks)
}

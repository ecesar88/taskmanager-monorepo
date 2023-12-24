import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

export async function userSeeds(prisma: PrismaClient, howMany: number) {
  const users = Array.from({ length: howMany }).map((arr) => {
    return prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        screenName: faker.lorem.lines(1),
      },
    })
  })

  return await Promise.all(users)
}

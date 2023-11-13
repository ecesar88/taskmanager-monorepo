import { BadRequestException, Injectable, InternalServerErrorException, Logger } from "@nestjs/common"
import { User } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userData: Omit<User, "id">) {
    try {
      const user = await this.prismaService.user.create({
        data: userData,
      })

      Logger.debug(`Created user with id ${user.id}`)

      return user
    } catch (error) {
      Logger.error(`Error creating user with data ${JSON.stringify(userData, null, 2)}`)
      throw new InternalServerErrorException("Error creating user")
    }
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findFirstOrThrow({
      where: {
        id,
      },
    })

    return user
  }

  async update(id: number, userData: User) {
    const { id: userId } = await this.prismaService.user.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        id: true,
      },
    })

    Logger.debug(`Updating user with id ${userId}`)

    try {
      return await this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: userData,
      })
    } catch (err) {
      Logger.error(`${JSON.stringify(err, null, 2)}`)
      throw new InternalServerErrorException("Could not update user")
    }
  }

  async remove(id: number) {
    try {
      const user = this.prismaService.user.delete({
        where: {
          id,
        },
      })

      Logger.debug(`Removed user with id ${id}`)

      return user
    } catch (err) {
      Logger.error(`${JSON.stringify(err)}`)
      throw new InternalServerErrorException("Could not remove user")
    }
  }
}

import { Module } from "@nestjs/common"
import { UserService } from "./user.service"
import { UserController } from "./user.controller"
import { PrismaService } from "src/prisma/prisma.service"
import { UserResolver } from "src/graphql/resolvers/User.resolver"

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, UserResolver],
})
export class UserModule {}

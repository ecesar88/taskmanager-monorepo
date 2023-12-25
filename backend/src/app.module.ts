import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UserController } from "./user/user.controller"
import { UserService } from "./user/user.service"
import { UserModule } from "./user/user.module"
import { ConfigModule } from "@nestjs/config"
import { PrismaService } from "./prisma/prisma.service"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { join } from "node:path"

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.development"],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
    }),
  ],
  controllers: [AppController, UserController],
  providers: [PrismaService, AppService, UserService],
})
export class AppModule {}

// function countArray(array: any[]) {
//   if (!array.length) return 0
//   return 1 + countArray(array.slice(1))
// }

// defmodule Length do
//   def of([]), do: 0
//   def of([_ | tail]), do: 1 + of(tail)
// end

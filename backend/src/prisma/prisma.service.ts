import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PrismaClient } from "@prisma/client"

export enum ENV {
  DEV,
  PROD,
  STAGING,
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private configService: ConfigService) {
    super({
      log: ["query", "error", "info", "warn"],
      errorFormat: "pretty",
      datasourceUrl: (() => {
        const isDevelopment = this.configService.get("ENV") === ENV.DEV

        if (isDevelopment) {
          // sqlite
          return this.configService.get("DATABASE_URL")
        }

        return "postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
      })(),
    })

    this.configService = configService
  }

  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}

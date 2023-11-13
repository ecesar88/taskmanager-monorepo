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
  // constructor(private configService: ConfigService) {
  constructor() {
    super({
      log: ["query", "error", "info", "warn"],
      errorFormat: "pretty",
    })

    // this.configService = configService
  }

  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}

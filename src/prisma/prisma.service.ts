import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  public client: PrismaClient | undefined

  constructor() {
    super({
      log: ['warn', 'error'], // e possivel utilizar o 'query', para verificar a query realizada
    })
  }

  onModuleDestroy() {
    return this.$connect()
  }

  onModuleInit() {
    return this.$disconnect()
  }
}

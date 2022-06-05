import Koa from 'koa'
import { PrismaClient } from '@prisma/client'
import appRouter from './router/index'

export const prismaConnection = new PrismaClient()

prismaConnection.$connect().then(() => {
  const app = new Koa()

  app.use(appRouter.routes())
  app.listen(3000)
})

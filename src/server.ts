import Koa from 'koa'
import { PrismaClient } from '@prisma/client'
import appRouter from './router/index'
import koaBody from "koa-body";

export const prismaConnection = new PrismaClient()

prismaConnection.$connect().then(() => {
  const app = new Koa()

  app.use(koaBody())
  app.use(appRouter.routes())
  app.listen(3000)
})

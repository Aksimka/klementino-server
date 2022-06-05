import { prismaConnection } from '../server'
import koaRouter from '@koa/router'

const router = koaRouter()

router.get('/', (ctx) => {
  ctx.body = 'simple / route'
})

router.get('/users', async (ctx) => {
  ctx.body = await prismaConnection.users.findMany()
})

router.post('/users', async (ctx) => {
  ctx.body = ctx.request.body
})

export default router

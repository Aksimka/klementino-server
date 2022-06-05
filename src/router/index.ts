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
  await prismaConnection.users.create({
    data: {
      email: 'qwe@mail.tu',
      name: 'qwe',
      birthDate: 'qwe',
      isOnline: false,
      business: 'sex',
      about: 'ab',
      interests: ['qwe'],
      images: ['img'],
    }
  })
})

export default router

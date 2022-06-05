import koaRouter from '@koa/router'
import users from '../controllers/Users/Users'

const router = koaRouter()
const { getAllUsers, createNewUser } = users()

router.get('/', (ctx) => {
  ctx.body = 'simple / route'
})

router.get('/users', async (ctx) => {
  ctx.body = await getAllUsers()
})

router.post('/users', async (ctx) => {
  const body = ctx.request.body
  const userBody = {
    email: body.email || '',
    name: body.name || 'No name',
    birthDate: body.birthDate || '',
    business: body.business || '',
    about: body.about || '',
    interests: body.interests || [],
    images: body.images || [],
  }

  ctx.body = await createNewUser({ userData: userBody })
})

export default router

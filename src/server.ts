const Koa = require('koa')
const appRouter = require('./router/index')

const app = new Koa()

app.use(appRouter.routes())

app.listen(3000)

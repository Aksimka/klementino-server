const router = require('@koa/router')()

console.log(router, 'router');

router.get('/', (ctx) => {
  ctx.body = 'simple / route'
})

module.exports = router

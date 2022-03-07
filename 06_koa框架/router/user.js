const Router = require('koa-router')

const router = new Router({ prefix: '/users' })

router.get('/', (ctx, next) => {
  ctx.response.body = 'USer Get'
})

router.put('/', (ctx, next) => {
  ctx.response.body = 'user put'
})

module.exports = router
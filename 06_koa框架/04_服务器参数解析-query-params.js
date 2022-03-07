const Koa = require('koa')

const app = new Koa();
const Router = require('koa-router')

const userRouter = new Router({ prefix: '/users' })

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
})

app.use(userRouter.routes())

app.listen(8000, () => {
  console.log('服务器启动》》》》');
})
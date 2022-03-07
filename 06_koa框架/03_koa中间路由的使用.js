const Koa = require('koa')

const userRouter = require('./router/user')

const app = new Koa()

app.use((cxt, next) => {
  next()
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
  console.log('服务器启动》》》》');
})
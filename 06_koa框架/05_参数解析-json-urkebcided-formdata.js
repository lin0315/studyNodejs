const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')
const Router = require('koa-router')

const app = new Koa();

const loginRouter = new Router({ prefix: "/login" })

const upload = multer();

app.use(bodyParser())
app.use(upload.any())

loginRouter.post('/', (ctx, next) => {
  console.log(ctx.request.body);
  console.log(ctx.req.body);
  ctx.response.body = 'hello'
})

app.use(loginRouter.routes())

app.listen(8000, () => {
  console.log('服务器启动》》》');
})
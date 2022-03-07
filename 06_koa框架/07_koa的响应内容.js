const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.response.status = 200
  // ctx.response.body = ['aa', 'bb']
  ctx.response.body = {
    naem: 'zhangsan',
    age: 18
  }

  // ctx.response.body = '响应内容'
  // ctx.body = '响应内容2'
})

app.listen(8000, () => {
  console.log('服务器启动成功——');
})
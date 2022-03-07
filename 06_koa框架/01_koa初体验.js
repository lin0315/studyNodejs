const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.response.body = 'Hello World'
})

app.listen(8000, () => {
  console.log('服务器启动》》》》');
})
const Koa = require('koa');
const staticAssets = require('koa-static')

const app = new Koa()

app.use(staticAssets('./build'))

app.listen(8000, () => {
  console.log('08服务器启动》》》');
})
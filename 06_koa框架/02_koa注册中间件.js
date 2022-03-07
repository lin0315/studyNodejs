const Koa = require('koa');

const app = new Koa()

app.use((cxt, next) => {
  if (cxt.request.url === '/login') {
    if (cxt.request.method === 'GET') {
      console.log('GET请求》》》》');
      cxt.response.body = 'login GET'
    }
  } else {
    cxt.response.body = 'other request>>'
  }
})

app.listen(8000, () => {
  console.log('服务器启动》》》》');
})
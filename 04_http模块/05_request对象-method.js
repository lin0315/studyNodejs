const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/login') {
    if (req.method === 'POST') {
      req.setEncoding('utf-8')

      req.on('data', (data) => {
        console.log('data>>>>', data);
        const { uname, psd } = JSON.parse(data)
        console.log(uname, psd)
      })

      res.end('Hello World')

    }
  }
})

server.listen(8080, () => {
  console.log('服务器启动成功>>>>');
})
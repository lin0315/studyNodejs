const http = require('http');
const url = require('url')
const qs = require("querystring")

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)
  const { psd, uname } = qs.parse(query)
  console.log('data>>', pathname, query);
  console.log('info>>>', psd, uname);
  if (req.url === '/login') {
    res.end('登录~')
  } else if (req.url == '/users') {
    res.end('用户列表~')
  } else {
    res.end('错误请求~')
  }
})

server.listen(8080, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})
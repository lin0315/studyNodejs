const http = require('http')

const server = http.createServer((req, res) => {
  res.write('响应结果')
  res.end('Hello World')
})

server.listen(8080, '0.0.0.0', () => {
  console.log('服务器启动成功》');
})
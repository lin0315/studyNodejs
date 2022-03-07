const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': "text/html;charset=utf8"
  })
  res.end('<h2>Hello World</h2>')
})

server.listen(8080, '0.0.0.0', () => {
  console.log('服务器启动成功》');
})
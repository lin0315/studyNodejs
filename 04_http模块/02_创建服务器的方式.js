const http = require('http')

const server = http.createServer((req, res) => {
  res.end('server1')
})

server.listen(8001, () => {
  console.log('服务器一启动');
})

// 方式二
const server2 = new http.Server((req, res) => {
  res.end('server2')
})

server2.listen(8002, () => {
  console.log('服务器二启动');
})
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end('server1')
})

server.listen(8001, () => {
  console.log('服务器一启动');
})


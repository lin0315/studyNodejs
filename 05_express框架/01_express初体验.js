const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.end('Hello Express')
})

app.post('/', (req, res, next) => {
  res.end('hello post Express')
})

app.post('/user', (req, res, next) => {
  res.end('hello user Express')
})

app.listen(8888, () => {
  console.log('express服务器启动>>>>');
})
const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('common middleware01');
  next()
})

app.get('/home', (req, res, next) => {
  console.log('get>>home>>>01');
  res.end('get')
  next()
})

app.post('/home', (req, res, next) => {
  console.log('POST>>home>>>01');
  res.end('post')
  next()
})

app.post('/login', (req, res, next) => {
  console.log('POST>>login>>>01');
  next()
  res.end('post')
})


app.listen(8000, () => {
  console.log('路径中间件服务启动》》》');
})
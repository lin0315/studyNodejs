const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('common middleware01');
  next()
})

app.use('/home', (req, res, next) => {
  console.log('home>>>01');
  next()
})

app.use('/home', (req, res, next) => {
  console.log('home>>>02');
  next()
  res.end('end>>>>')
})


app.listen(8000, () => {
  console.log('路径中间件服务启动》》》');
})
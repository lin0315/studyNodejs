const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('注册了第01个普通的中间件》》》');
  res.end('helloWorld')
  next()
})

app.use((req, res, next) => {
  console.log('注册了第02个普通的中间件》》》');
  next()
})



app.listen(8000, () => {
  console.log('普通中间件服务启动》》》');
})
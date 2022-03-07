const express = require('express')

const app = express()

app.get('/login', (req, res, next) => {
  console.log(req.query);

  // 设置响应码
  res.status(204)
  // res.end('登录成功-')
  // 设置内容
  // res.json({ name: 'hello', age: 18 })
  res.json(['abc', 'cba'])
})

app.listen(8000, () => {
  console.log('服务器启动——');
})
const express = require('express')

const app = express()

const USERNAME_DOES_NOT_EXISTS = 'username does not exists'
const USERNAME_ALREADY_EXISTS = 'username already exists'

app.post('/login', (req, res, next) => {
  let isLogin = false;
  if (isLogin) {
    res.json('user login success~')
  } else {
    // res.type(400)
    // res.json('username does not exists~')
    next(new Error(USERNAME_DOES_NOT_EXISTS))
  }
})

app.post('/register', (req, res, next) => {
  const isExists = false;
  if (!isExists) {
    res.json('user register success~')
  } else {
    // res.type(400)
    // res.json('username already exists~')
    next(new Error(USERNAME_ALREADY_EXISTS))

  }
})

app.use((err, req, res, next) => {
  let status = 400
  let message = ''

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = 'username does not exists'
      break;
    case USERNAME_ALREADY_EXISTS:
      message = 'username already exists'
      break;
    default:
      message = "NOT FOUND~"
      break;
  }

  res.status(status)
  res.json({
    errCode: status,
    errMessage: message
  })
})

app.listen(8000, () => {
  console.log('服务器启动——');
})
const express = require('express')

const app = express()

// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       const info = JSON.parse(data.toString())
//       req.body = info
//     })

//     req.on('end', () => {
//       next();
//     })
//   } else {
//     next()
//   }
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/home', (req, res, next) => {
  // req.on('data', (data) => {
  //   console.log('home>>>>', JSON.parse(data));
  // })
  // req.on('end', () => {
  //   console.log('home>>end');
  // })

  console.log('home>>data>>', req.body);

  res.end('home>>>>')
})

app.post('/login', (req, res, next) => {
  // req.on('data', (data) => {
  //   console.log('login>>>>', JSON.parse(data));
  // })
  // req.on('end', () => {
  //   console.log('login>>end');
  // })

  console.log('login>>data>>', req.body);


  res.end('login>>>>')
})

app.listen(8000, () => {
  console.log('路径中间件服务启动》》》');
})
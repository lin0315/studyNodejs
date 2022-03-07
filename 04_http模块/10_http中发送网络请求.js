const http = require('http')

// http发送get请求
// http.get('http://localhost:8080', (res) => {
//   res.on('data', (data) => {
//     console.log(data.toString());
//   })

//   res.on('end', (data) => {
//     console.log('获取了所有数据》》');
//   })
// })

// POST 请求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8080
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  });
  res.on('end', (data) => {
    console.log('请求了所有数据》》');
  })
})

req.end()
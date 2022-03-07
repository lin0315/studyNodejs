const fs = require('fs')

// 传统方法
// fs.readFile('./01_readable的使用.js', (data, err) => {
//   console.log(data);
//   console.log(err);
// })

// 流方式
const reader = fs.createReadStream('./foo.txt', {
  start: 3,
  end: 10,
  highWaterMark: 2
})

// 数据读取过程
reader.on('data', (data) => {
  console.log(data)

  reader.pause()

  setTimeout(() => {
    reader.resume()
  }, 1000);
})

reader.on('open', () => {
  console.log('文件被打开');
})

reader.on('close', () => {
  console.log('文件被关闭');
})

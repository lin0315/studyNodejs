const fs = require('fs')

// 传统写入方式
// fs.writeFile('./bar.txt', 'Hello Stream', { flag: 'a' }, (err) => {
//   console.log(err)
// })

// Stream 的方式写入
const writer = fs.createWriteStream('./bar.txt', {
  flags: 'r+',
  start: 4
})

writer.write('你好啊', 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('写入成功');
})

writer.write('来了', 'utf8')

// writer.close()

writer.end('end>>')

writer.on('close', () => {
  console.log('文件被关闭');
})
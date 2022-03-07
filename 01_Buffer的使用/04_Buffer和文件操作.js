const fs = require('fs');

fs.readFile('./foo.txt', (err, data) => {
  console.log(data);
  console.log(data.toString());
})

// 图片
fs.readFile('./cat.jpeg', (err, data) => {
  console.log(data)
  fs.writeFile('./foo.png', data, err => {
    console.log(err);
  })
})
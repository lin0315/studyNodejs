const message = '你好啊'

// 编码 utf8 默认
const buffer = Buffer.from(message);
console.log(buffer);
// 解码 utf8 默认
console.log(buffer.toString());

// 编码 utf16le
const buffer2 = Buffer.from(message, 'utf16le')
console.log(buffer2)
// 解码 utf16le
console.log(buffer2.toString('utf16le'));

// 2. 使用utf8编码 却用utf16le解码 有问题
console.log(buffer.toString('utf16le'))

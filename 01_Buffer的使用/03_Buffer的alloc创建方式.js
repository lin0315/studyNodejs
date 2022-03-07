const buffer = Buffer.alloc(8)
console.log(buffer);

// 这样会被转为16进制58
buffer[0] = 88
// 存储了16进制的88
buffer[1] = 0x88
console.log(buffer);
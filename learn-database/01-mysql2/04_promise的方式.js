const mysql = require('mysql2');

// 1. 创建数据库连接
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'qq',
  user: 'root',
  password: 'q1845948316',
  connectionLimit: 10
});

// 2. 使用连接池
const statement = `
SELECT * FROM products WHERE price > ? AND score > ?;
`;
connections.promise().execute(statement, [6000, 7]).then(([result]) => {
  console.log(result);
}).catch(err => {
  console.log(err);
})
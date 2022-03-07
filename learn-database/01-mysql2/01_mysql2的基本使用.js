const mysql = require('mysql2');

// 1. 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'qq',
  user: 'root',
  password: 'q1845948316'
});

// 2. 执行SQL语句
const statement = `
SELECT * FROM products WHERE price > 6000;
`;
connection.query(statement, (err, result, fields) => {
  console.log(result);
})
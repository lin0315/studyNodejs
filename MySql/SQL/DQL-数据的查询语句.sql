CREATE TABLE IF NOT EXISTS `products` (
id INT PRIMARY KEY AUTO_INCREMENT,
brand VARCHAR(20),
title VARCHAR(100) NOT NULL,
price DOUBLE NOT NULL,
score DECIMAL(2,1),
voteCnt INT,
url VARCHAR(100),
pid INT
);

# 1. 基本查询
# 查询表中所有字段的所有数据
SELECT * FROM `products`;
# 查询指定的字段
SELECT title, price FROM `products`;
# 对字段结果起一个别名
SELECT title AS phoneTitle, price AS currentPrice FROM `products`;


# 2. where 条件
# 查询价格小于1000的手机
SELECT title, price FROM `products` WHERE price < 1000;
# 查询价格等于999的手机
SELECT * FROM `products` WHERE price = 999;
# 查询价格不等于999的手机
SELECT * FROM `products` WHERE price != 999;
SELECT * FROM `products` WHERE price <> 999;
# 查询品牌是华为的手机
SELECT * FROM `products` WHERE brand = '华为';


# 2.2 逻辑运算语句
# 查询价格在1000到2000的手机
SELECT * FROM `products` WHERE price > 1000 AND price < 2000;
SELECT * FROM `products` WHERE price > 1000 && price < 2000;
# 包含等于
SELECT * FROM `products` WHERE price BETWEEN 1000 AND 2000;

# 价格大于5000 或者是华为手机
SELECT * FROM `products` WHERE price > 5000 || brand = '华为';

# 将某些值设置为Null
UPDATE `products` SET url = NULL WHERE id >= 85 AND id <= 88;

# 查询某一个值为null
SELECT * FROM `products` WHERE url IS NULL;
-- SELECT * FROM `products` WHERE url IS NOT NULL;

# 3. 模糊查询 % 表示任意个 _ 表示一个
SELECT * FROM `products` WHERE title LIKE '%M%';
SELECT * FROM `products` WHERE title LIKE '%p%';
SELECT * FROM `products` WHERE title LIKE '_p%';

# 4. in 的用法
SELECT * FROM `products` WHERE brand = '华为' || brand = '小米' || brand =  '苹果';
SELECT * FROM `products` WHERE brand IN('华为','小米','苹果');


# 对结果进行排序
SELECT * FROM `products` WHERE brand IN('华为','小米','苹果')
													ORDER BY price ASC, score DESC;
													
# 分页查询
SELECT * FROM `products` LIMIT 20 OFFSET 0;
SELECT * FROM `products` LIMIT 20 OFFSET 20;
# 第一个参数为 偏移量 第二个为条数
SELECT * FROM `products` LIMIT 40,20;











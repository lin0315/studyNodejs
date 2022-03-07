# 查看所有表
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS `students`(
	`name` VARCHAR(10),
	`age` INT,
	`score` INT
	);
	
	# 删除表
	DROP TABLE IF EXISTS `moment`;
	
	# 查看表结构
	DESC students;
	SHOW CREATE TABLE students;
	
	# 创建完整表
	CREATE TABLE IF NOT EXISTS `users`(
		id INT PRIMARY KEY AUTO_INCREMENT,
		`name` VARCHAR(20) NOT NULL,
		age INT DEFAULT 0,
		phoneNum VARCHAR(20) UNIQUE DEFAULT '',
		createTime TIMESTAMP
	);
	
	# 修改表
	# 1. 修改表的名字
	ALTER TABLE `users` RENAME TO `user`;
	# 2. 添加一个字段
	ALTER TABLE `user` ADD `updateTime` TIMESTAMP;
	# 3. 修改字段名称
	ALTER TABLE `user` CHANGE `phoneNum` `telPhone` VARCHAR(20);
	# 4. 修改字段的类型
	ALTER TABLE `user` MODIFY `name` VARCHAR(30);
	# 5. 删除某一个字段
	ALTER TABLE `user` DROP `age`;
	
	# 根据一个表结构创建一张表
	CREATE TABLE `user2` LIKE `user`;
	# 根据另外一张表中的所有内容 创建一个数据表(只复制内容 不复制结构）
	CREATE TABLE `user3` (SELECT * FROM `user`);
	
	
	
	
	
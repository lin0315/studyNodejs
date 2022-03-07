# 查看所有的数据
SHOW DATABASES;

# 选择某一个数据
USE qq;

# 查看当前正在使用的数据库
SELECT DATABASE();

# 创建一个新得到数据库
-- CREATE DATABASE weixin;
-- CREATE DATABASE IF NOT EXISTS weixin;
CREATE DATABASE IF NOT EXISTS taobao DEFAULT CHARACTER SET utf8mb4
			 COLLATE utf8mb4_0900_ai_ci;
			 
 # 删除数据库
 DROP DATABASE IF EXISTS taobao;
 
 # 修改数据库的编码
 ALTER DATABASE weixin CHARACTER SET = utf8
				COLLATE = utf8_unicode_ci;
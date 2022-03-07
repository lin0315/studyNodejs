# DML

# 插入数据
INSERT INTO `user` VALUES (11,'lin','123456', '2022-03-01','2022-02-01');
INSERT INTO `user` (name,telPhone,createTime,updateTime)
						VALUES ('shao','123','2022-02-02','2022-02-11');

INSERT INTO `user` (name, telPhone)
						VALUES ('bin','234');

# 需求 creteTime、updateTime自动设置值
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO `user` (name,telPhone)
						VALUES ('zs','121');
						
						
# 删除数据
# 删除所有的数据
DELETE FROM `user`;
# 删除符合条件的数据
DELETE FROM `user` WHERE id = 14;

# 更新数据
# 更新所有数据
UPDATE `user` SET name = 'lili', telPhone = '1001';
# 跟新符合条件的数据
UPDATE `user` SET name = 'lili', telPhone = '1002' WHERE id = 12;
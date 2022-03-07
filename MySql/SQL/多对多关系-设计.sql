CREATE TABLE IF NOT EXISTS students(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

CREATE TABLE IF NOT EXISTS courses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE
);

INSERT INTO `students` (name,age) VALUES('zhangsan',18);
INSERT INTO `students` (name,age) VALUES('lisi',22);
INSERT INTO `students` (name,age) VALUES('wangwu',25);
INSERT INTO `students` (name,age) VALUES('zhaoliu',16);
INSERT INTO `students` (name,age) VALUES('sunqi',17);

INSERT INTO `courses` (name, price) VALUES ('英语',100);
INSERT INTO `courses` (name, price) VALUES ('语文',666);
INSERT INTO `courses` (name, price) VALUES ('数学',888);
INSERT INTO `courses` (name, price) VALUES ('历史',80);


# 2. 建立关系表
CREATE TABLE IF NOT EXISTS `students_select_courses`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	students_id INT NOT NULL,
	courses_id INT NOT NULL,
	FOREIGN KEY (students_id) REFERENCES students(id) ON UPDATE CASCADE,
	FOREIGN KEY (courses_id) REFERENCES courses(id) ON UPDATE CASCADE
);

# 3. 学生选课
# zhangsan 选择了 英语 数学 历史
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1,1);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1,3);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1,4);

INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (3,2);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1,4);

INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (5,2);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (5,3);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (5,4);

# 4. 查询的需求
# 4.1 查询所有有选择的学生 选择了哪些课程
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId ,cs.`name` csName, cs.price scPrice FROM `students` stu JOIN `students_select_courses` ssc
ON stu.id = ssc.students_id
JOIN `courses` cs ON ssc.courses_id = cs.id;

# 4.2 查询所有的学生的选课情况
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId ,cs.`name` csName, cs.price scPrice
FROM `students` stu 
LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
LEFT JOIN `courses` cs ON ssc.courses_id = cs.id;

# 4.3 哪些学生没有选课
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId ,cs.`name` csName, cs.price scPrice
FROM `students` stu 
LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
LEFT JOIN `courses` cs ON ssc.courses_id = cs.id
WHERE cs.id IS NULL;

# 添加两门没人选的课程
INSERT INTO `courses` (name, price) VALUES ('物理',900);
INSERT INTO `courses` (name, price) VALUES ('化学',200);

# 4.4 查询哪些课程信息是没有被选择的
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId ,cs.`name` csName, cs.price scPrice
FROM `students` stu 
RIGHT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
RIGHT JOIN `courses` cs ON ssc.courses_id = cs.id
WHERE stu.id IS NULL;

# 4.5 某一个学生选择了哪些课程 zhangsan 
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId ,cs.`name` csName, cs.price scPrice
FROM `students` stu 
LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
LEFT JOIN `courses` cs ON ssc.courses_id = cs.id
WHERE stu.id = 1;

















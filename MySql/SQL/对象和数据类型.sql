# 将联合查询到的数据转成对象 一对多
SELECT
	products.id id, products.title title, products.price price,
	JSON_OBJECT('id',brand.id, 'name',brand.`name`,'website',brand.website) brand
	FROM `products`
	LEFT JOIN `brand` ON products.brand_id = brand.id;
	
# 将查询到的多条数据，组织成对象 放入到一个数组中
SELECT 
	stu.id, stu.`name`, stu.age,
	JSON_ARRAYAGG(JSON_OBJECT('id',cs.id,'name',cs.`name`,'price',price))
FROM `students` stu
JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
JOIN `courses` cs ON ssc.courses_id = cs.id
GROUP BY stu.id;

//引入查询字符串模块
const qs=require('querystring');
var str='lid=5&name=dell';
//获取查询字符串传递的数据
//将查询字符串解析为对象
var obj=qs.parse(str);
console.log(obj);
console.log(qs.stringify(obj));

var obj2={
	name:'tom',
	age:18
}
console.log(qs.stringify(obj2));

var str='ie=utf-8&f=8&rsv_bp=0&rsvidx=1&tn=baidu&wd=电脑';
console.log(qs.parse(str));
var obj=qs.parse(str);
console.log(obj.wd);
console.log(qs.stringify(obj));
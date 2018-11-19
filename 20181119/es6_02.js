//1、函数中的参数
function add(a,b,c){
	return a+b+c;
}
var res=add(2,1);
console.log(res);//NaN

function add1(a,b,c=5){//给c设置默认值，会自动调用
	return a+b+c;
}
var res=add1(2,7);
console.log(res);//14

//2.模板字符串
var year=2018;
var month=10;
var date=19;
var hour=10;
var minutes=47;
var seconds=5;
console.log(`${year}年${month+1}月${date}日
${hour}:${minutes}：${seconds<10?'0'+seconds:seconds}`);

//练习：创建一个员工对象，包含姓名性别生日工资使用模板字符串打印员工信息
var emp={
	name:'tom',
	sex:'1',
	birthday:'19920915',
	salary:8000
}
console.log(`姓名:${emp.name},性别:${emp.sex=1?'男':'女'},工资:${emp.salary}`);

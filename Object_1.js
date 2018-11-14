/*
var Obj1={
	name:'李雷',
	sayName:function(){
		console.log('我叫李雷');
	}

}
var Obj2={
	name:'韩梅梅',
	sayAge:function(){
		return 'I am 18';
	}
}
console.log(Obj2.sayAge());
*/
//创建一个手机对象
/*
var phone={
	color:'red',
	brand:'Apple',
	size:11,
	'made-in':'China'
}
console.log(phone);
phone['price']=3500;
console.log(phone);
phone.price=5500;
console.log(phone);
*/
//
/*
var dept={
	did:10,//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	dname:'研发部',
	dcount:5
}
var emp={
	id:'2',
	name:'jack',
	sex:'男',
	birthday:'1988-11-13',
	salary:5000,
	edept:10
}
	console.log(dept);
	console.log(emp);
*/
/*
//使用内置构造函数创建对象
//构造函数使用new来调用  new Object()
var book=new Object();
console.log(book);//‘.’可以翻译成‘的’
//book['name']='天龙八部';
book['id']=15;
book.name='天龙八部';
book['price']=25;
console.log(book);
*/
/*
var car = new Object();
car.id=1;
car.brand='大众';
car.color='black';
car.price=250000;

var laptop = new Object();
laptop.id='1111';
laptop.brand='dell';
laptop.size=15;
laptop.made_in='china';
console.log(car);
console.log(laptop);
*/
/*
//获取对象的属性值
var emp={
	eid:3,
	ename:'jack',
	sex:0,
	birthday:'1989-1-2',
	salary:5500
}
console.log(emp.birthday);
console.log(emp['eid']);

for(var proname in emp){
	console.log(proname,emp[proname]);//不能使用emp.proname
}

//
str = 'ABCDE';
str ='asdasd';
console.log(str.toLowerCase(str));//转化为小写
console.log(str.toUpperCase());//转化为大写
*/
/*
//练习：创建一个商品对象，包含编号，标题，价格，是否在售,商品库存
var goods={
	id:'1',
	title:'qwert',
	price:2500,
	isonsale:1,			
	stockCount:20
};
console.log(goods);
for(var key in goods){
	console.log(key);
	console.log(goods[key]);
	}
*/
/*
var code='xZxY';
while(true){
	str = prompt('请输入4个字符');
	if(str.toUpperCase()==code.toUpperCase()){
		alert('输入正确');
		break;
	}

}
*/
/*
var code='xZxY';
console.log(code.length);
var str = 'Im a student';
console.log(str.charAt(0));
*/
/*
//检测对象中的属性
var goods={
	id:'1',
	title:'qwert',
	price:2500,
	isonsale:1,
	stockCount:20
};
console.log('id' in goods);
console.log(goods.hasOwnProperty('id'));//hasOwnProperty
console.log(goods.id===undefined);
if(goods.id){
	console.log('属性存在');
}else{
	console.log('属性不存在');
}

var str='340223199209158111';
var a='3';
console.log(a.charCodeAt());
console.log(str.charCodeAt(5));//返回Unicode
if(str.charAt(16)%2==1){
		console.log('真男人');
}else{
	console.log('女性');
}
*/
/*
//创建一个人对象
var person ={
	name:'Tom',
	age:18,
	sex:'男',
	say:function(){
		console.log('我叫'+person.name+',性别'+this.sex+',年龄'+this.age);//this,避免对象改名
	},
};
person.say();
*/
var circle={
	PI:3.14,
	r:5,
	getLength:function(){
		//console.log(PI);PI is not defined
		console.log(typeof(this.PI));//number
		return 2*this.PI*this.r;
		
		
	},
	getArea:function(){
		return this.PI*this.r*this.r;
	}
}
console.log(circle.getLength());
console.log(circle.getArea());

//
var str = 'eeeeeqrr,qweqrt';
console.log(str.indexOf('e',1));//从第n个开始找，查找字符出现的位置的下标
console.log(str.lastIndexOf('e'));//查找字符最后一次出现的下标
console.log(str.indexOf('eq'));
console.log(str.slice(1,7));//从下标为1开始截取7-1位
console.log(str.split('e'))//转化成数组，以e分割[ '', '', '', '', '', 'qrr,qw', 'qrt' ]
							//join（'|'） 将数组分割用|分割
var str = '773868723@qq.com';
var n= str.indexOf('@');//9
console.log(str.slice(0,9));
console.log(str.slice(n+1));

var str='340223199209158111';
var str='hao hao hao hao hao';
console.log(str.split(' ',3));[ 'hao', 'hao', 'hao' ];
var str='|qw|qw|qw|qw|qw|';
console.log(str.split('|').length);//7





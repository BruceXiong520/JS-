//对象Object
var person ={name:'Tom',age:20,'class':'3年级2班'};//属性和属性名用:隔开,多组属性之间用,隔开
console.log(typeof(person));//返回object，//对象中包括一些保留字,特殊符号，可以用''引起来
//
var dog ={
	name:'大黄',
	age:10,
	color:'yellow'//属性与属性名之间一定要用::::::::::::隔开,不能用=号
	};
	console.log(dog);

//使用new Object
var laptop=new Object();//O要大写,Object(),括号内为空，()可以省略,写成 var laptop=new Objet;是可以的

console.log(typeof(laptop));//Object
laptop.name='dell';
laptop.color='yello';
laptop.size=14;
console.log(laptop);

var bookOj={
	bookname:'书名',
	author:'作者',
	introduce:'介绍',
	code:201811111,
	pubtime:'2018-11-1',
	price:20,
	color:'yellow'

}
//往对象中添加属性
//bookOj.pubname='图灵出版社';//这里用的是等号，自己理解就想当于，赋值了
bookOj['pubname']='图灵出版社';//添加属性,'pubname',需要加'',
console.log(bookOj);          //不加引号的话，显示pubname未定义。用的是[]
console.log(bookOj.color);
bookOj.author='罗贯中';
console.log(bookOj.author);
bookOj['author']='吴承恩';
console.log(bookOj.author);
//对象名.属性名>>对象名['属性名']
//创建分页对象pageObj，上页prev下页next当前页current总页数totalPage总数据totalNumber
//
var pageObj={
	prev:'上一页',
	next:'下一页',
	current:'当前页',
	totalPage:'总页数',
	totalNumber:'总数据',
	sayHi:function(){
		console.log('hello,world');
		console.log(this.current);
	}
}
console.log(pageObj);
pageObj.prev='prevpage';
pageObj['next']='nextpage';
pageObj.totalPage=10;
pageObj.totalNumber=100;
pageObj.color='blue';
console.log(pageObj);

//遍历/枚举
for (var n in pageObj )//可以不加var，只能遍历自定义属性，不能遍历预定义的属性（对象自带）
{
	console.log(n);//打印属性名
	console.log(pageObj[n]);//n不能加引号，打印属性值，不能用console.log(pageObj.n);
}
//查看对象中是否有该属性，第一第二种方法用的比较多
console.log('color' in pageObj);//true！！！！
console.log('name' in pageObj);//false
console.log(pageObj.hasOwnProperty('name'));//方法检测对象是否有该属性，P大写!!!!!
console.log(pageObj.prev===undefined);//false

if(pageObj.prev){//让是否有属性值的结果与true比较
	console.log('属性存在');
}else{
	console.log('不存在');
}
pageObj.sayHi();

var circleObj={
	r:5,
	pi:3.14,
	s:function(){
		console.log('圆的面积是'+this.pi*this.r*this.r)
	}
}
circleObj.s();

var cfxObj={//=一定不能更改
	l:5,
	h:3,
	c:function(){
		console.log(2*(this.l+this.h));
	},//,一定不能省略
	s:function(){
		console.log(this.l*this.h)
	}
}
cfxObj.c();
cfxObj.s();
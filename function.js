//console.log(3>'10a');//false 任何数与NaN比较都是 false
//console.log(Number('10a'));//返回NaN,一旦含有非数字就返回NaN
/*
function sayHi(){
	console.log('hello,world');
}
//只是创建未调用，函数体重的代码是无法执行的
sayHi();//调用sayHi()函数

function sum(a,b){
	console.log(a+b);
}
sum(10,20);
sum(10,20);
sum(10,20);


function sum1(a,b){
	for(var i=1;i<=3;i++){
	console.log(a+b);
	}
}

sum1(2,15);

function sum2(){
	for(i=1,sum2=0;i<=100;i++){
		sum2+=i;
	}
	console.log(sum2);


}
sum2();

function add(n){
	if(n==1){
		return 1;
	}
	return n+add(n-1);
	
}
add(100);
*/

//计算任意两个数字相加的和
/*
function sum(a,b){
	console.log(a+b);
}
sum(10,20);//调用的时候会把实参的值赋值给形参
sum(5,7);
sum(1,1);

function add(n){
	for(var i=1,sum=0;i<=n;i++){//定义变量var sum=0
		sum+=i;
		
	}
	console.log(sum);//注意打印语句的位置
}
add(100);
*/

/*
function getRunCount(year,j){
	for(var k=year,count=0;k<=j;k++){
		if(isRun(k)){//调用isRun函数，实参是k，不能写year
			count++;
		}
	}
	console.log(count);
}

function isRun(year){
	if(year%4==0||year%100!=0&&year%400==0){//4年一润，百年不润，4百年再润
		return true;
	}
	else 
		return false;
}

getRunCount(2000,3000);
console.log(isRun(1990));
*/

/*
function play(){
	console.log('qqq');//
	console.log('www');
	console.log('eee');
	return 'qwe';

}
console.log(play());//全都打印出来
*/

/*
function add(num1,num2){
	//在过程中执行打印，
	console.log(num1+num2);
	//return num1+num2;返回函数的执行结果

}
var a=add(2,3);//函数没有返回结果，打印出来的5，是过程中console.log(num1+num2);的执行
console.log(a);//没有return,打印5,undefined
*/

/*
function play(){
	console.log('qqq');//
	console.log('www');
	console.log('eee');
	//return 'qwe';

}
var p=play();
console.log(p);
*/
/*
function sum(i,j,k){

	return i+j+k;	//没有return或者没有值，打印结果为undefined。通常用在函数的最后。阻止函数函数提的执行
	console.log('hello,world');//这句话不执行
}
var res = sum(1,2,3);
console.log(res);
*/
/*
function getMax(num1,num2){
	if(num1>num2){
		return num1;
	}else{
		return num2;
	}

}
var res =getMax(52,100);
console.log(res);

//用三目运算返回最大值
function Max(num1,num2){
	return num1>num2?num1:num2;
}
var res=Max(21,32);
console.log(res);
*/
//
/*
function getMax(i,j,k){	
	var max;
	if(i>j){
		max=i;
		}else{
			max=j;
		}
	if(max>k){
		return max;
	}else{
		return k;
	}
}
var res=getMax(35,81,11);
console.log(res);
*/
/*
function getMax(i,j,k){
	return (i>j?i:j) > k ? (i>j?i:j) : k;
}
var res=getMax(11,55,12);
console.log(res);
*/
/*
//计算多少天
function getDays(year,month,day){
	var arr=[31,28,31,30,31,30,31,31,30,31,30,31];
	for(var i=0;i<month-1;i++){
			day+=arr[i];
	}
	if(month>=2&&isLeap(year)){
			day++;
	}
	return day;
}

function isLeap(year){
	if(year%4==0||year%100!=0&&year%400==0){
		return true;
	}else{
		return false;
	}
}
var res=getDays(2019,2,3);
console.log(res);
*/
/*
function getStaus(i){
	if(i==1){
		return '待付款';
	}
	if(i==2)
	{
		return '待发货';
	}
	if(i==3)
	{
		return '运输中';
	}
	if(i==4){
		return '已签收';
	}
	if(i==5){
		return '已取消';
	}else{
		return '无法查询';
	}
}
var res = getStaus(4);
console.log(res);
*/
/*
function getStaus(i){
	switch(i){
		case 1:
			return '待付款';//在函数内部使用return，不执行return后面的语句
			break;//这里可以省略
		case 2:
			return '待发货';
			break;//结束循环，或者结束switch语句
		case 3:
			return '运输中';//continue是跳过当前循环，继续下一次循环
			break;
		case 4:
			return '已签收';
			break;
		case 5:
			return '已取消';
			break;
		default:
			return '无法查询';
			break;
	}
}
var res = getStaus(4);
console.log(res);
*/
/*
//1-100的偶数和，用continue
for(var i=i,sum=0;i<=100;i++){
	if(i%2!=0){
		continue;
		//break;
	}
	sum+=i;
}
console.log(sum);//用continue 输出的2550，跳过当前循环，继续下一次循环
				//用break 输出的是0,break结束所有循环，结束switch
*/
/*
//函数的作用域
function fun(){
	var a=1;
	c=3;//在函数内不使用var 声明，是全局变量
}
//console.log(c);//函数未调用，函数体内的内容无法访问
fun();
//console.log(a);//a is undefined
console.log(c);

var num=2;
function func(){
	num =4;
}
//func();
console.log(num);//函数不执行，打印的是num=2//函数未调用，函数体内的内容无法访问

function myfun(a,b){
	//var a=3,b=4;函数中的参数也是局部变量
	return a+b;
}
myfun(3,4);
*/
//
/*
console.log(a);
//a=1;//a is not defined
var a=1;//undefined>>>变量提升 var a,b,c..;......a=1;
*/
/*
function fn(){
	console.log(b);//var b;
	var b=2;		//console.log(b);
}					//b=2;
fn();//undefined 
*/
/*
var a=1;
function fn(a){
	console.log(1+a);
}
fn(2);//3
*/
/*
var a=1;
function fn(){
	console.log(1+a);//使用了全局变量a
}
fn();//2  与上面对比
*/
/*
var a=1;
function fn(){
	var a=a+3;//var a;a=a+3;>>a undefined
	console.log(a);//undefined+3>>NaN
}
fn();
console.log(a);//1  打印当前作用域下的a，把函数体内的var去掉，打印的是4
*/
/*

/*
function fn(){
	console.log(1);
}
function fun(){
	fn();
	console.log(2);
	//fun();
}
fun();
*/
//创建局部函数
/*
function fn(){
	function fn1(){
		console.log(1);
	}
	fn1();//局部函数之能在局部调用
}
//fn1(); is not denifined
fn();
*/
/*
var a=10;
function fn(){
	var a=0;
	function fn1(){
		var a=1
		function fn2(){
			var a=2;
			function fn3(){
					var a=3;
					console.log(a);//局部函数之能在局部调用,现在当前作用域下找a，没有再去上一级去找
			};						//直到找到顶级作用域，如果没有返回is not defined
			fn3(); 
		}
		fn2();
	}
	fn1();
}
fn();
*/
/*
function sayHello(){
	 
	console.log('hello');//hello
		function sayHi(){
			console.log(a);//10
			console.log(b);//undefined
		}
		sayHi();
		var b=10;//声明变量提前，但是值还保留在当前位置
}
var a=10;//如果var a=10，在调用sayHello();之后，则上面打印的是undefined
sayHello();
//console.log(b);//b is not defined
*/
/*
function fun(){
	console.log(1);
}
console.log(typeof(fun));//fun is a function
var fun=10;
//fun();//fun is not a function
console.log(typeof(fun));//Number
//先提升函数声明  提升之后fun()的值是undefined，
//再提升变量声明  覆盖fun()
//如果函数的名称和var申明的变量的名称一致，则变量中的值会覆盖函数;

*/
//递归，在函数内部调用自身
/*
var i=0;
function sayStory(){
	alert('从前有座山，山里有个老和尚');
	i++;
	console.log(i);
	if(i==3){
		
		return;
	}
	
	sayStory();
}
sayStory();
*/
//递归求和
/*
function sum(n){
	if(n==1){
		return 1;
	}
	return n+sum(n-1);
}
var res = sum(50);
console.log(res);
*/
//
/*
function getJC(n){
	if(n==1){
		return 1;
	}

	return n*getJC(n-1);
}
var res= getJC(10);
console.log(res);
*/
/*
function getJC(n){
	return n==1?1:n*getJC(n-1);
}
var res= getJC(10);
console.log(res);
*/
//1、1、2、3、5、8、13、21、34、55、89、144、

/*
function show(){
	var a=123;
	console.log(a);//123
}
show();
//console.log(a);//a is not defined
*/
/*
var str ='string';
show();
function show(){
	console.log(str);//undefined
	var str='字符串';
	console.log(str);//字符串
}
*/
/*
if('a' == 1){
	var a=10;
}
console.log(a);//undefined
*/
/*
var a=1;
function show(){
	if(!a){
		var a=10;
	}
}
console.log(a);//1
console.log(show());//undefined
*/

/*
//
for(var i=1;i<=6;i++){
	for(var str=' ',j=1;j<=9;j++){	
		if((i+j)%2==0){
			str+='!';
		}else
			str+='—';
	}
	console.log(str);
}

function getSum(a,n){
	return n==1?2:(2*Math.pow(10,n-1)+getSum(2,n-1) );
}
var res = getSum(2,5);
console.log(res);
*/
/*
function getFS(n){
	return (n==1||n==2) ? 1:(getFS(n-1)+getFS(n-2));
}
var res= getFS(12);
console.log(res);
*/
/*
//匿名函数，没有名称的函数
//把创建的函数的地址地址到变量fn中
//function fn(){}函数声明
var fn=function(n){//函数表达式。由运算符连接操作的数据，所组成的形式就是表达式；
	console.log(typeof(fn));
	console.log(n)
}
fn(2);//function
//函数声明方式存在函数提升，在任何位置都可以调用用
//函数表达式方式不存在函数提升
*/
/*
var getSum=function(n){
	for(var i=1,sum=0;i<=n;i++){
		sum+=i;
	}
	return sum;
}
var res =getSum(100);
console.log(res);
*/
//轮播图

/*
var paly=function(a,b){
	
	return a+b;
}
console.log(paly());//NaN
console.log(typeof(undefined+undefined));
*/
/*
//回调函数
function fn(num1){
	//var num1=function(return 1){}
	var res =	num1();
	console.log(res);
}
//如果实参传递的是一个匿名函数，这个匿名函数叫回调函数，那么形参就成为一个函数。
//
fn(function(){
	return 1;
});
*/
//
/*
function add(a,b){
	return a+b;

}
console.log(add((function(){
	return 6;
})(),(function(){
	return 11;
})()));

str ='http://www.jd.com:80/Search?kw=手机'
str1 = encodeURI(str);
console.log(str1);
console.log(decodeURI(str1));
console.log(encodeURIComponent(str));

*/
/*
var res = parseInt('3a');
console.log(isNaN(res));
console.log(1/0);
console.log(isFinite(1/0));
console.log(-1/0);//-Infinite检测一个数据是否为有限制
console.log(eval('1+1'));
console.log(eval(function(){return 1})());
*/
//使用提示框输入一组运算，然后使用eval执行这组运算。
var str = prompt('请输入');//浏览器端函数
var res = eval(str);
alert(res);

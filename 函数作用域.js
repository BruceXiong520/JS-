/*
var num1=1;
function fn(){
	var num2=3;
	console.log(num2);
}
console.log(num1);//num2处在全局作用域，所以能打印
//console.log(num2);函数体内的变量没法打印，因为变量在局部作用域内

console.log(a);
var a=11;//打印出undefined，变量名的提升，执行顺序是
//var a;>>>>console.log(a);>>>a=11;

function fn1(){
	console.log(a);
	var a='tom';
}
fn1();//打印出undefined,同上
*/
function fn2(){
	num1=5;//不在var num1编程全局变量，下面打印num1，会出结果
	//var num1=5 局部变量，下面打印num1，显示num1，显示为num1 is defined
	console.log(num1);
}
fn2();
console.log(num1);//num1为全局变量是，如果之前为调用函数，也会打印显示
//fn2();

function fn3(a,b){
	var c;
	c=a;
	a=b;
	b=c;
	console.log(a,b);
	
}
fn3(5,6);

function fn4(x,y){
	for(var str='',i=1;i<=(12-2);i++){//打印斐波那契数列前12位数
		var z;
		z=x+y;
		x=y;
		y=z;
		str+=z+' ';
		
	}
	console.log('1 1'+' '+str);
}
fn4(1,1);

function fn5(){
	console.log('从前有座山，山里有座庙，庙里有个老和尚');
	fn5();
}
fn5();


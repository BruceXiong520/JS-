var a=1;
function fn(){
	console.log(123);
}
//a和fn()不是全局对象下的属性和方法
//NODEJS中，在一个文件中声明的变量和函数都是局部变量或者局部函数
//console.log(global.a);
//global.fn();


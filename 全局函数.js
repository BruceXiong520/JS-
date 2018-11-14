//全局函数
//encodeURI(编码) 与decodeURI(解码)--一般是对中文加码解码
var url='www.baidu.com/k/高级程序语言';
console.log(encodeURI(url));
var result =encodeURI(url);//URL必须大写
console.log(decodeURI(result));

//eval
var str = '1+2*5+3';
var num=3;
console.log(str);
str = eval(str);
num=eval(num);
console.log(str);//输出14，执行表达式里面的内容，表达式里的任何内容都能执行，包括运算，函数等等
console.log(num);

function sayHi(){
	console.log('hello,world');
}
str='sayHi()';
str=eval(str);
console.log(str);//输出hello

//isNaN,parseInt,parsefloat,isFinite
var num=1/0,num1=123.5555,str='asdad125.567',num2=123,str1='123.222aaaa';
var result =isFinite(num);//isFinite判断是否为有限值
console.log(result);//false
console.log(isNaN(num));//false
console.log(parseInt(num1));//打印123
console.log(parseFloat(num1));//打印123.555
console.log(parseInt(str));//NaN
console.log(parseFloat(str));//NaN
var str=parseInt(str);
console.log(isNaN(str));//true
console.log(num);//返回infinity无穷大，
console.log(isFinite(num));//false,isFinite F一定要大写
console.log(parseFloat(num2));//输出结果为123,注意结果没有小数点
console.log(parseFloat(str1));//123.222
console.log(parseInt(str1));//123
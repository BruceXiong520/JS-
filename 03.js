var a='hello';
//var b=typeof(a);
//console.log(b);
var b=true;
var g=false;
var c=1;
var d=a+b;
var e=a+c;
var f=b+c;
var x=b+g;//输出number

//boolean会转化为1/0,ture/false,相加结果输出的是number和string类型
console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(f),typeof(x));
//string boolean number string string number number

//指数形式
var num1=1.234E3
var num2=1234e-2
console.log(num1);
console.log(num2);

//字符串型
console.log('hello');
console.log(typeof('hello'));
console.log(typeof('2'));
//语法错误console.log(hello);

//查看一个字符的Unicode编码
console.log('a'.charCodeAt());//97
console.log('熊兆祥'.charCodeAt());//29006
console.log('斗破苍穹'.charCodeAt());
console.log('一'.charCodeAt());//最小19968
console.log('1'.charCodeAt());
console.log('A'.charCodeAt());//65

//布尔型
console.log(3>1);
console.log(1<0);
console.log(0.1==0.1);//需要用两个==号
console.log(0.3-0.1==0.2-0);//返回false

/*
function shuzi(){
var shu=('请您输入数字:'+);
}
console.log(shuzi.shu);
*/

//未定义性undefined
var total;
console.log(total);
console.log(typeof(total));//类型是undefined
var prodect1=20*30;
var prodect2=18*8;
total=prodect1+prodect2;
console.log(total);
console.log(typeof(true));//类型是boolean
console.log(typeof(false));

//空类型
console.log(null);
//console.log(NUll);//报错，null必须小写
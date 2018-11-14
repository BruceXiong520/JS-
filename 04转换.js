//强制转换成整型


console.log(parseInt('15.5'));//输出15

console.log(typeof(parseInt('15')));//输出number

console.log(parseInt('hello'));//输出NaN
console.log(typeof(parseInt('hello')));//输出number

console.log(parseInt('a15a'));//输出NaN
console.log(typeof(parseInt('a15a')));//输出number

console.log(parseInt('15a'));//输出15
console.log(typeof(parseInt('15a')));//输出number

console.log(toString('hello'));//[object Undefined]


console.log(parseFloat('1.5a'));//1.5

console.log(parseFloat('a1.5'));//NaN

console.log(parseFloat(true));//NaN

console.log(Number('1.5'));
console.log(Number('1.5aa'));//NaN
console.log(Number('a1.5'));//NaN

console.log(Number(true));//1

var num=10;
var isLogin=true;
var res1=num.toString(16)
console.log(res1);//输出a，16代表需要转化成的进制
console.log(typeof(res1));
var res2=isLogin.toString();
console.log(res2);//true
console.log(typeof(res2));//String

var num=[10,2,3];
console.log(num[0].toString(16));//a


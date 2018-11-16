//创建number对象
var num1=new Number(1);
var num2=1;
//console.log(num1);
//console.log(typeof(num1));//Object
console.log(num1+3);
console.log(num1+3);

var num3= new Number('10');
console.log(num3+2);

var num4=new Number(true);
console.log(num4);
//- * / 自动调用Number转为数组
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324
//保留小数点后几位，toFixed(n);
var num =2*5*3.14;
console.log(num.toFixed(2));
//将数字转为字符串
var num5 =10;
num=+'';
//console.log(num5.toString());
console.log(typeof num5);

//undefined NaN 0 '' null
var b1=new Boolean(undefined);
console.log(b1);
console.log(typeof b1);

var b2=Boolean();
console.log(b2);//false

var b3=Boolean('');
console.log(b3);

var b4=Boolean('  ');
console.log(b4);//true

var b5=Boolean([]);
console.log(b5);//true

var b6=Boolean({});
console.log(b6);//true

var b7=Boolean(!1);
console.log(b7);//false

var b8=Boolean(!!1);
console.log(b8);//true

console.log(typeof null);//Object
var b9=Boolean(null);
console.log(b9);

var b=true;
console.log(typeof(b.toString()));//string
console.log(typeof b);//boolean




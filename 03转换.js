console.log(typeof(1+1));//number
console.log(typeof(1+'1'));//string
console.log(1+'1');//输出的是'11'，但是是string类型
console.log(typeof('a'+'b'));

console.log(1+true);//输出的是2
console.log(typeof(1+true));//输出的是number
console.log(1+false);//输出结果是1
console.log(typeof(1+false));//输出的是number

console.log('hello'+true);//输出hellotrue
console.log(typeof('hello'+true));//输出的是string
console.log('1'+false);//输出1false
console.log(typeof('1'+false));//输出string

console.log('1'-1);//0
console.log(typeof('1'-1));//number

console.log('hello'-true); //NaN Not a Number
console.log(typeof('hello'-true));//number
 
console.log(1-true);//0
console.log(typeof(1-true));//number

console.log('1'*1);//1
console.log(typeof('1'*1));//number

console.log('hello'*true); //NaN
console.log(typeof('hello'*true));//number
 
console.log(1*true);//1
console.log(typeof(1*true));//number

console.log(1/false);//infinity
console.log(typeof(1/false));//number

var num1=3,num2=true,num3='tedu';
console.log(num1+num2+num3,num2+num3+num1,num3+num1+num2);//4tude,truetedu3,tedu3true
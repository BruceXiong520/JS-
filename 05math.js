//运算符

console.log(3%2);//1
console.log(-3%2);//-1
console.log(2%3);//2
console.log(5%3);//2

//var i=2;
//var j=i++;
//预算i=3,j=2
//console.log(i,j);//3,2

var i =2 ;
i++;
var j=i++ + ++i + i++;
//预算i=6，j=3+5+5=13
console.log(i,j);//6,13

var i=100;
i--;
var j=--i - i-- - --i;
//预算i=96,j=98-98-96=-96
console.log(i,j);//96,-96
/*
var a=3;
a++;
a++;
a--;
//4
console.log(a);
*/

var b=7;
//16
console.log(b++ + ++b);
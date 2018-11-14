/*
//声明变量
var a=5;
var a=a+1;
//变量声明后可以重新赋值
var b=2;
b=20;
b='tom';
//变量声明后未赋值，此时的值为undefined。变量未声明不允许使用
var c;
var eid=1;
var ename='tom';
var sex='男';
var birthday='1970-1-1';
var salary=6666.66;
var deptid=10;
var $_1c='hello';
//一次声明多个变量
var bid=10,title='红楼梦',price=300;
//创建一个变量保存语文成绩,在创建一个变量保存数学成绩，在创建一个变量保存总成绩，分别打印数学语文总成绩
var yuwen=100,math=99,zong=yuwen+math;

//int b=5; 不能用 int是保留字
//var break =3; 不能用，break是关键字
console.log(a,b,c,eid,ename,sex,birthday,salary,deptid,$_1c,bid,title,price,yuwen,math,zong);
//变量命名规则
*/
//声明常量
const d1='2019-1-1'
//d1='2019-1-2'; 报错常量不允许重新赋值
console.log(d1);

const a=3.14;
var r=3;
var l=2*a*r;
var s=a*r*r;
s=s.toFixed(2);//保留两位小数
console.log(l,s);

var num=017;
var num1=0x10;
var num2=0xfff;
var num3=0xff;
console.log(num,num1,num2,num3);

/*1、练习常量保存圆周率，使用程序分别计算半径为5（变量）
的30度60度90度的弧度有多长；
2、使用变量分别保存商品的单价为12.5、数量为20，单价为30、数量为8.5；计算总价是多少
*/
const pi=Math.PI;
var r =5;
var l1=2*pi*r*30/360;
l1=l1.toFixed(2);
var l2=2*pi*r*60/360;
l2=l2.toFixed(2);
var l3=2*pi*r*90/360;
l3=l3.toFixed(2);
console.log(pi,l1,l2,l3);

var p1=12.5;
var p2=30;
var c1=20;
var c2=8.5;
var s=p1*c1+p2*c2;
console.log('商品总价为:'+s);

//++i与i++
/*
var i=1;
var j=i++;
//j先取i的值=1，i在自加1=2
var l=++j;
//先加1，l=2
var k=++i;
//3
console.log(i,j,k,l);

//var q=2;
//var e=q++ + ++q;
//q=4,e=6
//var w=q++ + ++q + q++;
//q=2+1+1+1=5，w=2+4+4=10

var n=2;
var t=++n + n++ + ++n;
//n=2+1+1+1=5,t=3+3+5=11
console.log(n,t);
*/

var qw=111;
var wq=qw%2;
if (wq==0)
{
	console.log('是偶数');
}
else
   console.log('是奇数');



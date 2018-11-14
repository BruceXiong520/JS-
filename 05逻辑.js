
var num=38889;
console.log(num.toString());

//判断成绩优秀  90-100
var score=89;
score++;
console.log(score>=90&&score<=100);

//老人或者小孩半价，65以上，12岁以下
var age = 100;
console.log(age>=65 || age <=12);

//!反向，非
console.log(!3>1);

//声明两个变量，分别保存用户名和密码，如果用户名是'root',并且密码是'123456',打印true，否则打false；
var name='root';
var pasw='123456';
console.log(name=='root' && pasw=='123456');//注意一定要两个==号

//声明一个变量保存年龄，>80或者<3 xuyaojianhu
var age =80;
console.log(age>=80 || age<=3);

var begin='\u4E00';
var end='\u9FA5';
var c='熊';
var isChinese= c>=begin&&c<=end;
console.log('c是中文吗:'+isChinese);

//会不会报错，以下语句
var num=3;
num>5 && console.log(a);//不会报错，不执行&&后面的内容，逻辑短路
//num<1 || console.log(a);//报错，会执行||后面的内容，


//声明一个变量保存年龄，>18 打印成年人
var age=19;
age>=18 && console.log('成年人');

function hello(){
	console.log('hello');
	console.log('warld');
}
hello();
hello();


var num=57;
console.log(num.toString(2));
//1*1+ 0*2+1*4+0*8+1*16+1*32=53

console.log(3&5);
console.log(5&5);//5
console.log(3|5);//7
console.log(5^7);//2
console.log(7>>1);//3
console.log(60>>1);//30
console.log(60>>2);//15
console.log(57>>1);//28
console.log(7<<1);//14
//101
//111
//010
//111
// 11
//111100 60
//11110 2+4+8+16 30
//1111  1*1+1*2+1*4+1*8=1+2+4+8=15
//111001 57
//11100 1*0+2*0+4*1+8*1+16*1   =4+8+16=28

var pri=100;
//pri=pri*0.5;
pri*=0.5;
console.log(pri);

var age=10;

age>=18 ? console.log('他是成年人'):console.log('未成年人');

var num1=18;
var num2=9;
num1 > num2 ? console.log(num1):console.log(num2);

var name1='root';
var pasw2='123456';
name1=='roo' && pasw2=='123456' ? console.log('登录成功'):console.log('登录失败');

//闰年：4年一个润年（能被4整除，和4整除为0）并且能不被100年整除，或者能被400整除
var year=1900;
(year % 4==0 && year%100!=0)||year%400==0 ?console.log('是闰年'):console.log('不是闰年');
 
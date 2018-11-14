//1.弹出警示框
//alert('请输入验证码');
//弹出提示框
//通过变量来存储输入的值
/*
var s=prompt('请输入数字1：');
var a=prompt('请输入数字2：');
if(s==NaN && a==NaN)
{
var sum1=Number(s)+Number(a);//将string类型转化为Number类型，否则输出的是字符串相加
alert('两个数字的和为：'+sum1);
}
else{
	 var sum2=s+a;
	 alert('两个字符相加为：'+sum2);
}
//
*/

var total =42
if(total>=30){
   total -=15;
}
console.log('应付金额'+total);
/*
var age=80;
if(age>60){
	age -=5;
}
console.log('最终年龄是：'+age);
*/
/*
var age=prompt('请输入年龄：');
if(age>60){
	age -=5;
}
alert('最终年龄是：'+age);
*/

var uname='roo';
var uid='123456';
if(uname=='root'&& uid==123456){
		console.log('登录成功');		
}
else 
    console.log('登录失败');

/*
var uname=prompt('请输入用户名：');
var uid=prompt('请输入用户密码：');
if(uname=='root'&& uid==123456){
	alert('登录成功');
}
else{
	alert('登录失败');
}
*/
/*
var age=21;
if(age>=18){
	console.log('成年人');
}

var age=prompt('请输入您的年龄：');
if(age>=18){
	alert('成年了，可以去网吧啦');
}
else 
	alert('不能去网吧');
	*/
if(true)
 console.log(1);
 else
	console.log(2);//1
if(false)
console.log(1);
	 else
	console.log(2);//2
if(1)
console.log(1);
 else
	console.log(2);//1
if(0)
console.log(1);
 else
	console.log(2);//2
if(NaN)
console.log(1);
 else
	console.log(2);//2
if('')
console.log(1);
 else
	console.log(2);//2
	if(null)
console.log(1);
 else
	console.log(2);//2
	if(undefined)
console.log(1);
 else
	console.log(2);//2

/*
//有1、2、3、4，4个数能组成多少个互不相同且无重复的三位数，都是多少;
var a=1;        //11,12,13,14..21,22,23,24..31,32..
var b=2;		//111,112,113,114..
var c=3;
var d=4;
var m=0;
a=a.toString();
b=b.toString();
c=c.toString();
d=d.toString();
for

var a='lingt';
console.log(a.length);
*/
var a='xzx';
if(a!=='xzx'){
	console.log(a);
}
else{
	console.log('这家伙很懒');
}
var b='xz';
b!=='xz'?console.log('这家伙很懒'):console.log(a);

var str='111'
var res=str=='111'? str:''//简写
console.log(res);

//使用提示框分别输入商品的价格和数量，得到结果,判断总价是否满500，满打八折;果果总价足够支付则打印
/*
var pri=prompt('输入商品价格');
var count=prompt('输入商品数量');
var s=pri*count;
alert('总价是：'+s);//alert('两个数字的和为：'+sum1);
if(s>=500){
	s *= 0.8;
	if(s<=600){
		  alert('支付成功,总价为：'+s);
	  }
	 
	  else{	  
		  alert('余额不足，总价为'+s) 
	  }
}
else{
	s=s;
    alert('支付成功,总价为：'+s);
}
*/
var type='党员';
if(type=='群众'){
	console.log('这个人是群众');
}else if (type=='团员')
{
		console.log('这个人是团员');
}else if (type=='党员')
{
		console.log('这个人是党员');
}else{
	console.log('非法人员');
}

var pri=prompt('输入商品价格');
var count=prompt('输入商品数量');
var s=pri*count;//*d会转化成数值型
alert('总价是：'+s);//alert('两个数字的和为：'+sum1);
if(s>=500&&s<=600){
	s *=0.8;
	alert('支付成功，总价是'+s);
}else if(s>600){
	s *=0.8;
	alert('支付失败，余额不足'+s);
}else {
	alert('支付成功'+s);
}
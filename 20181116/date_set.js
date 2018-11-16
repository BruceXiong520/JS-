//本地字符串
/*
var now = new Date();
console.log(now);
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
*/
/*
//设置Date中的信息
var d1=new Date('2018-11-15 12:30:00');
d1.setFullYear(2021);
d1.setMonth(5);//范围0-11
d1.setDate(18);
//不能设置星期
d1.setTime(1000);//针对的是零时区
console.log(d1.toLocaleString());//1970-1-1 08:00:01

var now = new Date();
var target=new Date(2018,11,25,00,00,00);
//var t=now.getTime()-target.getTime();
var d=target-now;
//d=new Date(d);
//d=d.toLocaleString();
//console.log(d);
/*
year=d.getFullYear()-1970;//0
month=d.getMonth();//1
day=d.getDate();//8
hour=d.getHours();//17
minute=d.getMinutes();//35
second=d.getSeconds();//7
console.log('距离圣诞节相差: '+year+'年'+month+'月'+day+'日'+hour+'时'+minute+'分'+second+'秒')
*/
/*
d=Math.floor(d/1000);//距离现在的秒数
var day=Math.floor(d/(60*60*24));
var hour=Math.floor(d%(60*60*24));
var minute=Math.floor(d%(60*60));
var second=d%60;
console.log('距离圣诞节相差: '+day+'日'+hour+'时'+minute+'分'+second+'秒')
*/
///创建一个对象保存员工的入职时间‘2018年-11-16’，3年后到期，
//到期前一个月，续签合同；假如续签时间是周末，提前到周五
//提前一周通知人事准备续签(提醒时间)
var entryTime =new Date('2018/11/16');//入职时间
var expireTime = new Date(entryTime);//到期时间
expireTime.setFullYear(expireTime.getFullYear()+3);
expireTime.setDate(expireTime.getDate());
console.log('入职时间:'+
	entryTime.toLocaleDateString()+
	'\n到期时间:'+expireTime.toLocaleDateString());

var renewTime =new Date(expireTime);//续签时间
//console.log(renewTime);
renewTime.setMonth(renewTime.getMonth()-1);
//console.log(renewTime.toLocaleDateString());

var week=renewTime.getDay();
if(week==6){
	renewTime.setDate(renewTime.getDate()-1);
}
if(week==0){
	renewTime.setDate(renewTime.getDate()-2);
}
console.log('续签时间是：'+renewTime.toLocaleDateString());

var remindTime= new Date(renewTime);//提醒时间
remindTime.setDate(remindTime.getDate()-7);
console.log('提醒时间是：'+remindTime.toLocaleDateString());


//
var now = new Date();
var target = new Date('2018/12/25 00:00:00');
var t=Math.abs(now - target);
t/=1000;
var day=Math.floor(t/(60*60*24));//天
var hour =Math.floor((t%(60*60*24))/(60*60));//时
var minute =Math.floor(((t%(60*60))/60));//分
var second=Math.floor(t%60);//秒
console.log('距离圣诞节：'+day+'天'+hour+'小时'+minute+'分钟'+second+'秒');
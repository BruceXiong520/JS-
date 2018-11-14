//#订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消 
var staus='已取消';
if(staus=='等待付款'){
	console.log('等待付款中');
}else if(staus=='等待发货'){
	console.log('等待发货');
	
}else if(staus=='运输中'){
	console.log('运输中');
	
}else if(staus==''){
	console.log('运输中');
	
}else if(staus=='已签收'){
	console.log('已签收');
	
}else if(staus=='已取消'){
	console.log('已取消');
	
}else{
	console.log('未知情况');
}

//var a= Math.sqrt(9.9);//sqrt小写
//console.log(a);
/*
var x;
for(x=0;x<Number.MAX_VALUE;x++){
var i=parseInt(Math.sqrt(x+100));
var j=parseInt(Math.sqrt(x+100+168));
if(i*i==x+100 && j*j==x+100+168)
console.log(x);
}
*/

var score=100;
if(score>=90){
	console.log('优秀');
}else if(score>=80){
	console.log('良好');
}else if(score>=70){
	console.log('中等');
}else if(score>60){
	console.log('结果');
}else if(score<=60&&score>=0){
	console.log('不及格');
}else {
	console.log('分数有误');
}

//10-100白银客户，100-1000黄金客户，1000以上砖石客户 

var s=100;
if(s>=1000){
	console.log('砖石用户');
}else if(s>=100){
	console.log('黄金用户');
}else if(s>=10){
	console.log('白银用户');
}else{
	console.log('普通用户');
}


var date=new Date();
var year=date.getFullYear();
var month =date.getMonth();
var day =date.getDate()
var day =date.getDay();//星期
var hour =date.getHours();
var minute = date.getMinutes();
var second =date.getSeconds();
console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
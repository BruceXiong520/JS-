//console.log();
//打印1-10之间所有的证书
var i=1;
for(i=1;i<=10;i++){
	console.log(i);
}
/*
var i=2;
var a=[];
var s=3;
var y='';
//console.log(a);
for(i=2;i<=s;i++){
	
	if(s%i!=0 &&i!=1 &&i!=s){
		a.push(s);
	}else if(s%i==0){
		s=s/i;
		var x=i;
		i=2;
		//var y=y+x+'*';
		a.push(x);
	}
}
console.log(a);
*/

//练习：计算1-100的证书和
//打印20-50的奇数
var i=1;
var sum=0;
for(i=1;i<=100;i++){//for(var i=1;sum=0;i<=100;i++)这样写也可以
	sum += i;
}console.log(sum);

var i=20;
for(i=20;i<=50;i++){
	if(i%2!=0){
		console.log(i);
	}
}

var i=80;
for(i=80;i>=50;i-=3){
	console.log(i);
}

var i=1;
var s=1;
for(i=1; i<=10;i++){
	s *= i;
}console.log(s);


//打印本世纪所有的闰年
var year=2000;
for(year=2000;year<=2099;year++){//中间是;;;;;;;;不是,
	if(year%4==0 && year%100!=0 || year%400==0){
		console.log(year);
	}
}
//
var i=0;
var j='';
for(i=0;i<50;i++){
	j=j+'*';
	console.log(j);
}
//乘法表1*1=1
//      1*2=2  
//      1*3=3
//var i=1;
//var j=1;
//for(i=1;i<=9;i++){
//	for(j=1;){}
	
//打印99乘法表地5行
var i=1;//str+=i+'5='  //字符串相加会每个结果会打印在同一行
var k='';
for(i=1;i<=5;i++){
	var y=k+=i+'*5='+i*5+'  ';//k=k+i
	console.log(y);
}


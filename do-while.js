//

var i=1;
do{
	console.log(i);
	i++;
}while(i<=10);//循环条件

//打印50-1的偶数
var i=50;
do{
	console.log(i);
	i -= 2;
}while(i>1);


//打印100,95,90..70;
var i =100;
do{
	console.log(i);
	i -= 5;
}while(i>=70);

//
var i=1;
var sum=0;
do{
	sum += i;
	i++;
}while(i<=100);
console.log(sum);

//1-100能被7整除的数的和

var i=1;
var sum=0;
do{
	if(i%7==0){
		sum += i;	
	}i++;
}while(i<=100);
console.log(sum);

//1-10所有数乘积
//10-20，能被3整除的数的乘积
var i=1;
var x=1;
do{
	x *= i
	i++;
		
}while(i<=10);
console.log(x);

var i=10;
var s=1;
do{
	if(i%3==0){
		s *= i;
	}
	i++;
}while(i<=20);
console.log(s);

/*
var i=2;
var s=40;
var y='';
for(i=2;i<=s;i++){//15=3*5  //3=15/5
	if(s%i==0){
		s=s/i;  
		//if(s%i !=0 && i!=1 && i!=s)
		var x=i
		i=2;
	    var y=y+x+'*';//80=2*2*2*2*5

	}
}
console.log(y);
*/
var i=2;
var a=[];
var s=100;
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
//2,3,5,7,11/2345678910,质数除了1和本省，与其他书取余肯定不==0
//if(num%i !=0 && i!=1 && i!=num)这个数是质数
//一个数质数分解，必然是有质因子构成，也就是有质数构成




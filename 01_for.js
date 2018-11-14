//console.log();

var i=1,sum=0;
for(;i<=10;){//分号不能省略,条件省略的话，在函数体中假如循环，break结束
	sum += i;//for(;;)  if(i<10){break;}
	i++;
}console.log(sum);


for(var i=1,j=5;j<=5,j>0 ;i++,j-=2 )
{
	console.log(i+'  '+j);/123,532
}//如果循环条件中有多个条件，以最后一个条件为准
//i=1,j=5;i=2,j=3
//计算1/10+2/9++++9/2+10/1;
var x=i/j;
for(var i=1,j=10,sum=0;i<10;i++,j--){
	sum += i/j;
}console.log(sum);

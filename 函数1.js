//定义一个函数输出1-100的累加和

/*
var i;
var sum=0;
for(i=1;i<=100;i++)
{
	sum=sum+i;
}

console.log(sum);//5050
*/


var i=0;
var sum=0;
do{
	sum=sum+i;//5050
	i++;
	//i++;输出5051
	//sum=sum+i;
	
}
while(i<=100);
console.log(i,sum);


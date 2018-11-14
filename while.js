/*
//while循环
//打印10次hello
var i=0;
while(i<10){
	i++;
	console.log('hello',i);//再循环体中，让i的值变化起来//cls 清屏
}


//使用while循环，打印11-19之间所有的数字。
var i=11;
while(i<20){
	console.log(i);
	i +=1;
}

//使用while循环，打印1-100所有的奇数，使用if判断是否为奇数，
var i=1;
while(i<100){
		 
		if(i%2 == 1){
			
            console.log(i);

		}
		i++;
			
}

//使用while循环打印20-22-24-28-30

var i = 20;
while(i<=30){
	console.log(i);
	i +=2;
}

//在使用while循环计算1-100之间所有的整数和
var i=1;
var sum=0;
while(i<=100){
	sum += i;
	i++;
}console.log(sum);

//计算1-100之间能被3整除的数字的和
*/
var sum=0;
var i=0;
while(i<=100){
	if(i%3==0){
		sum += i;	
	}
	i++;//一定要在循环体外面
}
console.log(sum);


var i=2;
var s=90;
for(i=2;i<=s;i++){
	if(s%i==0){
		s=s/i;
		console.log(i,s);

	}
}

var i=1;
while(true){//无限循环
	if(i==11){//结束循环
		break;
	}
	console.log(i);
	i++;
}
var i=1;
var x=1;
while(true){
	if(i==11){
		break;
	}
	x *= i;
	i++;
}

console.log(x)
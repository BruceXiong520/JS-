//打印0-1-2-4-5-6
for(var i=0;i<=6;i++){
	if(i==3){
		continue;//跳过循环体剩余的内容，直接执行i的变化；
	}
	console.log(i);
}
//计算1-100之间，所有偶数的和，使用continue；即遇到奇数跳过；
for(var i=1,sum=0;i<=100;i++){
	if(i%2!=0){
		continue;
	}
	sum += i;
	
}console.log(sum);

//打印1-2-5-7-10-11-13-17-..98
//除去所有能被所有能被3、4、整除的数
for(var i=1 ;i<=100;i++){
	if(i%3==0 || i%4==0){
	continue;
	}
	console.log(i);

}

//计算新中国成立后一共有多少了闰年
for(var j=0,i=1949;i<=2018;i++){
	if(i%4==0 && i%100!=0 || i%400==0){
		j +=1;
	}
}console.log(j);
//打印本世纪的前十个闰年
for(var j=0,i=2000;i<=2099;i++){
	if(i%4==0 && i%100!=0 || i%400==0){
		j +=1;
		console.log(i,j)
	}
	if(j==10){
		break;
	}
}



for (var i=1 ,sum=0;i<=100 ; i++){
	sum +=i;
	if(sum>4000){
		break;
	}

}console.log(i,sum);


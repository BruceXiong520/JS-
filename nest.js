//打印4行4列*

for(var j=1;j<=4;j++){
	var str='';
	for(var i=1;i<=5;i++){
	str = str +'*';
	}
	console.log(str);
}

for(var j=1;j<=9;j++){//外循环控制行数
	for(var str='',i=1;i<=j;i++){//内循环控制列
	str  +=i+'*'+j+'='+i*j+'  ';
	}console.log(str);
}

//倒三角*
for(var j=1;j<=9;j++){//行
	for(var str='',i=1;i<=10-j;i++){//列
		
		str = str +'*';
	
	}
	
	console.log(str);
}

//倒三角乘法表1
for(var j=9;j>=0;j--){//行
	for(var str='',i=1;i<=j;i++){//列
		
		str  +=i+'*'+j+'='+i*j+'  ';
	}
	
	console.log(str);
}

//倒三角乘法表
//倒三角乘法表2
for(var j=1;j<=9;j++){//行
	for(var str='',i=1;i<=10-j;i++){//列
		
		str  +=j+'*'+i+'='+i*j+'  ';
	}
	
	console.log(str);
}
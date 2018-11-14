//console.log();

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

//倒三角乘法表
for(var j=1;j<=9;j++){//行
	for(var str='',i=1;i<=10-j;i++){//列
		
		str  +=j+'*'+i+'='+i*j+'  ';
	}
	
	console.log(str);
}
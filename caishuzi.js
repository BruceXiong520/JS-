//猜数字
var a=Math.round(Math.random()*1000);
alert(''+a);
var i=prompt('输入你猜的数字(在1000之间)');
while(true){
	if(i>a){
		alert('big');
		var i=prompt('猜大了，还有机会');
	}else if(i<a){
		alert('small');
		var i=prompt('猜小了，还有机会');
		}else{
			alert('恭喜您猜对了，但没有奖励，哈哈哈');//NaN，输出答对了..用验证解决
			break;
		}

}

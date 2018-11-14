//

function sum(a,b){
	
	return 5;
	
	
}
var res=sum(3,5);
console.log(res);

function getMax(a,b){
	return a>b?a:b;
}
var result=getMax(16,12);
console.log(result);

//传递三个参数，输出最大的
function getMax(a,b,c){
	var t;
	if(a>b){
		t=a;
		a=b;
		b=c;
		c=t;
	}if(a>c){
		t=a;
		a=b;
		b=c;
		c=t;
	}if(b>c){
		t=b;
		b=a;
		a=c;
		c=t;
	}
	return c;

}
var result=getMax(5,6,7);
console.log(result);

function getMax1(a,b){
	if(a>b){
		return a;
	}else {
		return b;
	}
	
}
var result=getMax1(10,100);
console.log(result);

(function(a,b){
	console.log(a+b);
})(100,200);

var add=function(a,b){
	console.log(a+b);
}
add(10,20);
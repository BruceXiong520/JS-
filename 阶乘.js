
function fn(n){
	if(n==1){
		return 1;
	}
    return	n*fn(n-1);

}
console.log(fn(5));

function sum(n){	
	if(n==1){
		return 1;
	}
	return n+sum(n-1);

}
console.log(sum(10));



function fe(n){
	if(n==2||n==1){
		return 1;
		
	}
	return fe(n-1)+fe(n-2);//return 后面直接在返回的值
}
console.log(fe(12));
console.log(fe(9));

var add = function (num1,num2){
	return num1+num2;
}
console.log(add(5,10));//一定要加括号

function ug(num1,num2){

	console.log(num1()+num2());
}
ug(function(){return 1},function(){return 2});

function axe(num1,num2){
	console.log(num1()*num2());
}
axe(function()
{
	return 5
	},
		function(){
		return 6
		});


function fib(n){
	//console.log(arguments.callee);
	if(n==2||n==1){
		return 1;
		
	}
	return arguments.callee(n-1)+arguments.callee(n-2);//return 后面直接在返回的值
}//arguments.callee 函数内部访问函数名称的方法
console.log(fib(12));
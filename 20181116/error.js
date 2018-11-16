/*
console.log(1);

//var a=1；  Invalid or unexpected token
var a=1;
console.log(a);

//console.log(b);引用错误
var b={};
//b();//类型错误，错误的使用了数据类型

//var arr = new Array(-1);//范围错误,参数的使用超出了范围
*/
console.log(1);
try{
	var arr = new Array(-1);
}catch(err){
	//err:捕获的错误信息
	//console.log(err);
	//处理错误的方案;
	var arr =new Array(5);
}
console.log(arr);
console.log(2);


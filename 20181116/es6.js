//块级作用域
{
	let a=1;
}
//console.log(a); a is not defined;

for(let i=0;i<=10;i++){
	
}
//console.log(i);//i is not defined

//箭头函数
var arr=[8,89,5,46];
console.log(arr.sort((a,b)=>b-a));//return 1行代码，可以省略return和{}
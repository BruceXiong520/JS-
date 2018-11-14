/*
var a = 10;
function b(){
    a = 100;  
    console.log(a);//100
    var a;
    console.log(a);//100
}
b();
console.log(a);//10
*/
/*
var a= 100;
function b(){
    console.log(a);//undefined,先找当前作用域，有就继续执行，没有在看上一级作用域域
    var a= 10;
    console.log(a);//10
}
b();
console.log(a);//100

//

var a=11;
function c(){
	console.log(a);
}
c();//11
*/
/*
var a= 100;
function b(){
    console.log(a);//100
    a = 10;
    console.log(a);//10
}
b();
console.log(a);//100
*/
/*
var a = 10;
function b(a){
    //a = 100;  //看看有他没他有什么影响
    console.log(a);//11
    var a;
    console.log(a);//11
}
b(11);
console.log(a);//10
*/
/*
function a(){
    console.log(a);//undefined*******a is a function
    a = 10;//覆盖函数
    console.log(a);//10
}
a();
console.log(a);//a is not defined
*/

/*
function fun() {  
          a = 30;       
          var b = 20;  
}
fun();
console.log("a="+a);//函数执行了，全局变量被赋值30 所以输出30**********
//console.log("b="+b);//b is not defined

*/
/*
var a = 1;
function fun() {  
    console.log("a="+a);//undefined
    a = 2;
}
fun();
console.log(a);//函数被执行了，var a =2,输出1，有a=2,输出2
*/

/*
var a;
function fun() { 
    a = "hehe";
}
console.log(a);//undefined
*/

/*
var a=1;
function fun(){
    var a=2;
    console.log(a);//2
} 
fun();
console.log(a);//1
*/

/*
function fun(){
 for(var i = 0 ; i < 3 ; i++){
   console.log(i);  //0,1,2
 }
 console.log(i);//3
}
fun();
*/

/*
function fn(v){
    if (v==1||v==0){
        return 1;
    }else if (v%2==0){
        return fn(v/2)+2;
    }else{
        return 2;
    }      
};
console.log(fn(8))
//8-- f(4)+2--f(2)+4---f(1)+6=7
*/

function fn(n){
	for(var i=1,sum=0,j;i<=n;i++){
		sum+=JC(n);
	}return sum;
}
function JC(n){
	return n==1?1:n*fn(n-1);
}
var res =JC(5);
console.log(res);
//var res = fn(5);
//console.log(res);
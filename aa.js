/*
//  前面的五个 先看看每个输出都是什么数   变量在哪里出现了  在哪里var了  有什么不一样
//可以自己在建立一个文件   每一组一组复制过去  在node 工具里输出  我起的都是一个名字
//一
var a = 10;
function b(){
    a = 100;  
    console.log(a);
    var a;
    console.log(a);
}
b();
console.log(a);
*/



/*
//二
var a= 100;
function b(){
    console.log(a);//10
    var a= 10;
    console.log(a);//10
}
b();
console.log(a);//100
*/



/*
//三
var a= 100;
function b(){
    console.log(a);
    a = 10;
    console.log(a);
}
b();
console.log(a);
*/



/*
//四
var a = 10;
function b(a){
    //a = 100;  //看看有他没他有什么影响
    console.log(a);
    var a;
    console.log(a);
}
b(11);
console.log(a);
*/

/*
//五
//var a= 100;  //看看有他没他 有什么影响
function a(){
    console.log(a);
    a = 10;
    console.log(a);
}
a();
console.log(a);
*/




//下面的是练习   先不要输出结果 看看你们自己能不能想出来结果
//console.log之后会出什么数据  然后在输出结果  对比着看看哪里想错了
/*

function fun() {  
          a = 30;       
          var b = 20;  
}
fun();
console.log("a="+a);
console.log("b="+b);



var a = 1;
function fun() {  
    console.log("a="+a);
    var a = 2;
}
fun();
console.log(a);



var a;
function fun() { 
    a = "hehe";
}
console.log(a);




var a;
function fun() {
  a = "hehe";
} 
fun();
console.log(a);





var a=1;
function fun(){
    var a=2;
    console.log(a);
} 
fun();
console.log(a);



function fun(){
 for(var i = 0 ; i < 3 ; i++){
   console.log(i);  
 }
 console.log(i);
}
fun();



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
*/





//console.log()
/*
global.console.log(123);//打印消息
global.console.info(1234);//打印消息
global.console.warn(111);//打印警告消息
global.console.error(1233);//打印错误消息
*/
global.console.time('for-loop');
for(var i=0;i<10000000;i++){
	
}
global.console.timeEnd('for-loop');

global.console.time('while');
var i=0;
while(i<10000000){
	i++;
}
global.console.timeEnd('while');

global.console.time('do-while');
var i=0;
do{
	i++;
}while(i<10000000);
global.console.timeEnd('do-while');
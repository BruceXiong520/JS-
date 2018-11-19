/*
console.log(global.parseInt(3.14));
console.log(global.parseFloat(3.14));

//一次性定时器
var timer = setTimeout(()=>{
	console.log('嘭嘭嘭');
},2000);

clearTimeout(timer);

//周期性定时器
var n=0;
var timer=setInterval(()=>{
	if(n==2){
		clearInterval(timer);
	}
	console.log('滴滴滴');
	n++;
},2000);
//清除周期性定时器
*/
/*
console.time('aa');
process.nextTick(()=>{
	console.log('滴答');
});
console.timeEnd('aa');
*/
/*
var timer=setImmediate(()=>{//异步，19年1月1日前
	console.log('嘟嘟');
});
clearImmediate(timer);
/*
console.log(1);

process.nextTick(()=>{//异步，12月31日后
	console.log('滴答');//不能清除
});
*/

//((exports,require,module,__dirname,__filename)=>{
	//当前文件的完整路径或者叫绝对路径
	console.log(__dirname);//C:\xampp\htdocs\bruce\js_BASIC\day01\20181119
	//当前文件的完整路径和文件名称
	console.log(__filename);
	//C:\xampp\htdocs\bruce\js_BASIC\day01\20181119\function.js
//});


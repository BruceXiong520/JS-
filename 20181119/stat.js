/*
const fs =require('fs');
//console.log('....1')
fs.stat('./a.txt',(err,stats)=>{
	//console.log(err);
	//console.log(stats);
	//console.log('....2');
	if(err){
		//throw error;
		return;
	}
	console.log(stats.isFile());//ture
	console.log(stats.isDirectory());//false
});


console.log('.....3');

var res=fs.statSync('./a.txt');
console.log(res);
console.log('....4');
*/
/*
var fs = require('fs');
fs.stat('./myDir',(err,stat)=>{
	if(err){
		//fs.mkdir('./myDir',(err)=>{
		fs.mkdirSync('./myDir');
		//});
	}else{
		console.log(stat);
	}
});
*/
/*
var fs =require('fs');
fs.rmdir('./myDir',(err)=>{
	
});
*/
//var fs = require('fs');
/*fs.readFile('./a.txt',(err,data)=>{
	console.log(data.toString());
});*/
//console.log((fs.readFileSync('./a.txt')).toString());
//查看一个目录的转态，如果不存在就创建，如果存在就打印文件的列表

var fs=require('fs');
/*
fs.stat('./myDir',(err,stats)=>{
	if(err){
		fs.mkdir('./myDir',(err)=>{
			
		});
	}else{
	fs.readdir('./myDir',(err,list)=>{
		console.log(list);
	});
	}
});
*/
//fs.writeFile('./data.txt','world',(err)=>{
//});
//fs.appendFile('./data.txt','hello',(err)=>{});
fs.unlink('./data.txt',(err)=>{});
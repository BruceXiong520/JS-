//const fs =require('fs');

/*
//查询文件状态
fs.stat('./001.txt',(err,stats)=>{
	//err 如果有错误信息，存储到err
	//stats 文件的具体状态信息
	if(err){
		fs.writeFile('./001.txt','',(err)=>{});
	}else{
		console.log(stats);
		fs.appendFileSync('./001.txt','helloworld/n');
		fs.readFile('./001.txt',(err,data)=>{
			console.log(data.toString());
		});
		fs.unlink('./001.txt',(err)=>{});
	}
});
*/
/*
fs.stat('./fs.js',(err,stats)=>{
	if(err){
		throw err;
	}
	console.log(stats.isDirectory());//false
	console.log(stats.isFile());//ture
	
})

var res=fs.statSync('./fs.js');//Sync同步阻塞
console.log(res);
*/
/*
fs.mkdir('./mydir',(err)=>{
	if(err){
		throw err;
	}else{
		console.log('mydir目录创建成功');
	}
});
*/
/*
var res=fs.mkdirSync('./mydir');
console.log(res);//undefined
console.log(123);

fs.rmdir('./mydir',(err)=>{
	if(err) throw err;
	console.log('删除成功');
});
*/
/*
fs.readdir('./05',(err,files)=>{
	if(err){
		throw err;
	}
	console.log(files);
});

var res=fs.readdirSync('./05');
console.log(res);
*/
/*
//练习创建目录hello，读取03_2下所有文件
//删除目录hello
const fs = require('fs');
/*
fs.mkdir('./hello',(err)=>{
	if(err){
		throw err;
	}
	console.log('创建目录hello成功');
});
*/
/*
fs.readdir('./03_2',(err,flist)=>{
	if(err){
		throw err;
	}
	console.log(flist);
});
fs.rmdir('./hello',(err)=>{});
*/
//创建目录mydir。在该目录下创建1.txt,写入1；
//创建文件2.txt,写入2；读取mydir下所有的文件；删除mydir。
//整个过程全部使用同步方法
//预习http协议 
//const fs = require('fs');
//fs.mkdirSync('./mydir');
//console.log(res);
//fs.writeFileSync('./mydir/1.txt','');
//fs.writeFileSync('./mydir/1.txt','1');
//fs.writeFileSync('./2.txt','2');
//var res=fs.readdirSync('./mydir');
//console.log(res);
//fs.unlinkSync('./mydir/1.txt');
//fs.unlinkSync('./mydir/2.txt');
//fs.rmdirSync('./mydir');
/*
fs.rmdir('./mydir',(err)=>{
	if(err){
		throw err;
	}
	console.log('mydir已经删除')
});
*/
/*
var res = fs.existsSync('./2.txt');
if(res){
	fs.unlinkSync('./2.txt');
}
console.log(res);
*/
/*
const fs=require('fs');
//判断文件是否存在，不存在则创建
var path='./num.txt';
var res=fs.existsSync(path);
if(!res){
	fs.writeFileSync(path,0);
}
fs.readFile(path,(err,data)=>{
			//console.log(++data.toString());
			var num=data.toString();
			num++;
			fs.writeFileSync(path,num);
		});
/*
fs.stat(path,(err,stats)=>{
	if(err){
		fs.writeFileSync(path,0);
	}
		fs.readFile(path,(err,data)=>{
			console.log(data.toString);
		});
});
*/
/*
const fs =require('fs');
fs.appendFile('1.txt','hello world\n',(err)=>{
	if(err) throw err;
});
*/
const fs = require('fs');
var obj={
	uid:1,
	uname:'tom',
	upwd:'123456'
}
for(var proName in obj){
	fs.appendFileSync('./user.txt',obj[proName]+'\t');
}
//每次写完一组数据，再写入一个换行符
fs.appendFileSync('user.txt','\n');
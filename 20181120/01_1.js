/*
//以客户端的形式发送请求
const http = require('http');
var req=http.get({
			hostname:'127.0.0.1',
			port:3000,
			path:'/'
},(res)=>{
	console.log(res.statusCode);
	console.log(res.headers);
	res.on('data',(myData)=>{
		console.log(myData.toString());
	});
});
req.setTimeout(3000,()=>{
	console.log('请求超时');
	req.about();//终止请求
});
*/
//
/*
const fs=require('fs');
fs.stat('./data.txt',(err,stat)=>{
	if(err){
		fs.writeFile('./data.txt','',(err)=>{});
	}else{
		fs.writeFileSync('./data.txt','hello word');
		fs.readFile('./data.txt',(err,data)=>{
			console.log(data.toString());
		});
		fs.unlink('./data.txt',(err)=>{});
	}
	

	//console.log((fs.readFileSync('./data.txt')).toString());
});
*/


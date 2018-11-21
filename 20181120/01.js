/*
const qs =require('querystring');
var str='name=tom&age=20&sex=1';
//转成对象
console.log(qs.parse(str));
var obj={
	lid:2,
	pname:'dell'
}
console.log(qs.stringify(obj));
*/
/*
const qs=require('querystring');
const url=require('url');
var urlStr ='http://www.tmooc.cn/course/web/detail/+index.html?pno=2&name=nodejs#second';
var obj=url.parse(urlStr);
//console.log(obj);//转化成对象
//console.log(obj.query);

//console.log(qs.parse(obj.query));

//console.log(qs.stringify(obj));
console.log(url.format(obj));
*/
/*
const fs=require('fs');
fs.stat('./01.txt',(err,stat)=>{
	if(err){
		//fs.writeFile('./01.txt','hello,world',(err)=>{});
		fs.appendFile('./01.txt','hello, world',(err)=>{});
	}
	//console.log(stat)
});
fs.readFile('./01.txt',(err,data)=>{
				console.log(data);
				});
*/
/*
//以客户端的形式发送请求
const http = require('http');
var req=http.get({
			hostname:'www.tmooc.cn',
			port:80,
			path:'/'
},(res)=>{
	console.log(res.statusCode);
	console.log(res.headers);
	res.on('data',(myData)=>{
		console.log(myData.toString());
	});
});
req.setTimeout(3000,()={
	console.log('请求超时');
	req.about();//终止请求
});
*/
//创建服务器
const http = require('http');
var server = http.createServer((req,res)=>{
	console.log('有一个用户访问了');
});
//使用哪个端口
server.listen(3000);
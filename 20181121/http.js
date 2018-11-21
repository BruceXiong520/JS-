/*
//引入http模块
const http = require('http');
//模拟浏览器向服务器发请求
//使用请求的方法和请求的URL
http.get('http://www.codeboy.com',(res)=>{
	//res 服务器端响应的对象
	console.log(res.statusCode);//查看响应的状态码
	
	//事件：当有数据传输的时候回执行这个事件
	res.on('data',(data)=>{
		console.log(data.toString());
	});
});
*/
/*
const http=require('http');
http.get('http://www.weather.com.cn/data/sk/101010100.html',(res)=>{
	res.on('data',(data)=>{
		console.log(res.statusCode);
		console.log(data.toString());
		//JSON parse
	});
});
*/
/*
//引入http模块
const http = require('http');
//创建服务器
var server=http.createServer();
//使用3000端口
//监听3000端口
server.listen(3000,()=>{
	console.log('服务器已经启动...');
});
//接受浏览器的请求
//当有请求进来
server.on('request',(req,res)=>{
	//console.log('有一个请求过来了');
	//请求的对象
	//console.log(req.url);
	//console.log(req.method);
	//console.log(req.headers);
	//响应的对象
	//res.write('This is home page');
	//res.write('hello world');
	//响应结束
	//响应重定向
	res.writeHead(302,{Location:'http://www.codeboy.com'});
	res.end();
	
});

/*
const http =require('http');
var server =http.createServer();
server.listen(3001,()=>{
	console.log('服务器已经启动...');
});
server.on('request',(req,res)=>{
	console.log(req.url);
	console.log(req.method);
});
*/
const http = require('http');
var server = http.createServer();
server.listen(3000,()=>{
	console.log('服务器已经启动...');
});
server.on('request',(req,res)=>{
	switch(req.url){
		case '/login':res.write('This is login page');
		break;
		case '/member':res.write('This is member page');
		break;
		case '/':res.writeHead(302,{Location:'http://127.0.0.1:3000/member'});
        break;
		default:res.writeHead(404);
		//default:res.write('404 not found');
}
	
	res.end();
});
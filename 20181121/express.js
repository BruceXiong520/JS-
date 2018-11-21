/*
const qs = require('querystring');
const express = require('express');
var server=express();
server.listen(3000,()=>{
	console.log('服务器已经启动');
});
*/
//接受浏览器的请求(url+method)
//根据请求的url和请求的方法method，来做出响应
//————路由
//请求的URL：/login,请求的方法：get
//
/*
server.get('/login',(req,res)=>{
	res.send('This is login page');
});
*/
/*
server.get('/search',(req,res)=>{
	res.sendFile(__dirname+'/search.html');
});
server.get('/list',(req,res)=>{
	//req.on('data',(mydata)=>{
	//	console.log(qs.parse(mydata.toString()));
	//})
	console.log(req.query);
	res.send('列表页');
});

/*
server.get('/index',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});

/*
server.post('/login',(req,res)=>{
	res.send('这是登录');
});

server.get('/detail',(req,res)=>{
	res.send('这是详情');
	res.send('第二个详情');
});
*/
/*
server.get('/',(req,res)=>{
	res.redirect('/index');
});

*/
/*
const express = require('express');
var server = express();
server.listen(3000,(req,res)=>{
	console.log('服务器启动成功..');
});
server.get('/index/:lid/:name',(req,res)=>{
	console.log(req.params);//获取客户端传递的参数
	res.send('This is index page');
});
*/
const express = require('express');
var server = express();
server.listen(3000,(req,res)=>{
	console.log('服务器启动成功...');
});
server.get('/index',(req,res)=>{
	res.send('这是首页');
});
server.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});
server.get('/register',(req,res)=>{
	res.sendFile(__dirname+'/register.html');
});
server.post('/registers',(req,res)=>{
	res.send('注册成功');
});
server.get('/',(req,res)=>{
	res.redirect('/index');
});

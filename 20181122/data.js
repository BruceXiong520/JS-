
const express = require('express');
var server = express();
server.listen(3000);
server.get('/detail',(req,res)=>{
	console.log(req.method);
	console.log(req.headers);
	console.log(req.query);
	res.send('This is detail page');
});
//请求方法：get 请求的url login.html,,响应文件
server.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});
server.get('/mylogin',(req,res)=>{
	res.send('post');
	console.log(req.query);
//http://127.0.0.1:3000/mylogin?uname=23123&upwd=123123
//req.query获取url其中的参数。post请求时没有？..所以用
//这种方法显示{}，只能使用req.on()..或者其他方法
});

/*
const express = require('express');
const qs = require('querystring');
var server = express();
server.listen(3000);

server.get('/reg',(req,res)=>{
	res.sendFile(__dirname+'/reg.html');
})
server.post('/register',(req,res)=>{
	res.send('注册成功');
	//console.log(req.query);
	req.on('data',(data)=>{
		console.log(qs.parse(data.toString()));
	});
});
*/
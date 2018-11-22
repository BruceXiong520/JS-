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
});
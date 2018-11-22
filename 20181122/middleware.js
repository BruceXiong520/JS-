//中间件是express下的一个功能
const express = require('express');
var server =  express();
server.listen(3000);
//创建中间件
//拦截浏览器的请求，也可以做出响应
//拦截所有的
server.use((req,res,next)=>{
	console.log('验证了是否为空');
	//res.send('验证失败');
	next();
});
server.get('/register',(req,res,next)=>{
	res.send('注册成功');
	next();
});
server.get('/login',(req,res,next)=>{
	res.send('登录成功');
	next();
});
//创建一个中间件
server.use((req,res,next)=>{
	console.log('将数据存储到数据库中');

});

//创建web服务器
const express = require('express');
var server = express();
server.listen(3000);
/*
//拦截特定的路由
//拦截请求的url为/detail的路由
server.use('/detail',(req,res,next)=>{
	console.log('查询是否存在');
	next();
});
server.get('/detail',(req,res)=>{
	res.send('this is detail');
});
*/
var count=0;
server.use('/view',(req,res,next)=>{
	count++;
	next();
});
server.get('/view',(req,res)=>{
	res.send(count.toString());
});



















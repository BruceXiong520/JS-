/*
//1.基于http,让express作为请求处理的函数
const http=require('http');
const express=require('express');

var app=express();
http.createServer(app).listen(3000);
*/
//2直接使用express
const express=require('express');
var app=express();
app.listen(3000,()=>{
	console.log('服务器已经启动');
})
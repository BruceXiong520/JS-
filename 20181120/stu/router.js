/*
const express=require('express');
var app=express();
var server=app.listen(3000,()=>{
	console.log('服务器启动成功');
});

app.get('/home',(req,res)=>{
	//req..request
	//res..respond
	res.send('This is home page');
});
app.get('/',(req,res)=>{
	res.redirect('/home');//响应的重定向
});
app.get('/login',(req,res)=>{
	//res.send('This is login page');
	res.status(200);
	res.sendFile(__dirname+'/login.html');
});
app.get('/detail',(req,res)=>{
	console.log(req.query);//获取查询字符串{ lid: '30', name: 'dell' }
	res.send('This is detail page');
});
*/
const express=require('express');
var app=express();
var server=app.listen(3000,()=>{
	console.log('服务器创建成功')
});
app.get('/list',(req,res)=>{
	res.send('This is list page');
});
app.get('/detail',(req,res)=>{
	res.send('This is detail page');
});
app.post('/register',(req,res)=>{
	res.send('login sucess');
});
app.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});
//提交，显示登陆成功
app.post('/register',(req,res)=>{
	res.send('login sucess');
});

app.get('/',(req,res)=>{
	res.redirect('/list');
});
const express=require('express');
const member =require('./');
var app=express();
//console.log(typeof app);//function
var server=app.listen(3000,()=>{
	console.log('服务器已经启动...');
});
/*
app.use((req,res,next)=>{
	console.log('中间件调用了');
	//交给下一道工序
	next();
});
app.use('/user',(req,res,next)=>{
	console.log('调用user第二个中间件');
	next();
});
app.get('/user',(req,res,next)=>{
	res.send('This is user page');
	console.log('user第一次');
	next();
});
app.get('/user',(req,res)=>{
	//res.send('This is user page');
	console.log('第二次');
});
*/
app.use(express.static('static'));
/*
var counter = 0;
app.use('/user',(req,res,next)=>{
	counter++;
	next();
});
//
app.get('/user',(req,res,next)=>{
	res.send(counter.toString());
});
*/
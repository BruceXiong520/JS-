//创建web服务器，托管静态文件，
//点击查询服务器端获取输入的身份证号（中间件），
//截取出生的年月日和性别；在路由中响应给浏览器
const express = require('express');
var server = express();
server.listen(3000);
server.use(express.static('static'));
server.use('/sucess',(req,res,next)=>{
	var id=req.query.id;
	console.log(id);
	var year=id.slice(6,10);
	var month=id.slice(10,12);
	var date=id.slice(12,14);
	var sex=id.slice(16,17);
	sex=sex%2==0?'女':'男';
	res.send(year+'年'+month+'月'+date+'日'+'  性别：'+sex);
	next();
});


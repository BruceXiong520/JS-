const express = require('express');
const member = require('./router/member.js');
const bodyParser = require('body-parser');

var server = express();
server.listen(3000,(req,res)=>{
	console.log('服务器已经启动..');
});
//托管静态资源
server.use(express.static('static'));
server.use('./member',member);
//第三方的中间件npmjs.com
//使用body-parser中间件，来获取数据
//使用原始的querystring的原始模块
server.use(bodyParser.urlencoded({extended:false}));
server.post('/admin',(req,res)=>{
	//获取表单数据
	console.log(req.body);
	//req.on('data',(mydata)=>{
	//	console.log(mydata);
	//});
});


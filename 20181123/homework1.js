const express = require('express');
const qs = require('querystring');
var server = express();
server.listen(3000,()=>{
	console.log('服务器已经启动');
});
var year;//在外面声明变量，后面才能都引用他
var month;
var date;
var sex;
server.use(express.static('static'));
server.use('/sucess',(req,res,next)=>{
	req.on('data',(buf)=>{
		var obj = qs.parse(buf.toString());
		id=obj.id;
		year = id.substr(6,4);
		month = id.substr(10,2);
		date = id.substr(12,2);
		sex = id.substr(-2,1);
	});
	next();
});

server.post('/sucess',(req,res)=>{
	//console.log(`${year}年${month}月${date}日,性别:${sex%2==0?'女':'男'}`);
	res.send(`${year}年${month}月${date}日,性别:${sex%2==0?'女':'男'}`);
});

//创建web服务器，托管静态资源add.html
//点击提交按钮，想服务器端发送请求
//(/add,post)
const express = require('express');
const bodyParser = require('body-parser');
const mysql= require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'db',
	connectionLimit:20
});
var server = express();
server.listen(3000);
server.use(express.static('static'));
server.use(bodyParser.urlencoded({extended:false}));
var obj;
server.post('/add',(req,res)=>{
	obj=req.body;
	pool.query('insert into dept set ?',[obj],(err,result)=>{
	if(err) throw err;
	//console.log(result);
	if(result.affectedRows>0){
		res.send({code:200,msg:'add sucess'});
		}
	});
});



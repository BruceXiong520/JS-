const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
var server = express();
server.listen(3000);
var pool = mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'db',
	connectionLimit:'20'
});
//中间件引入之后要使用
server.use(express.static('static'));
server.use(bodyParser.urlencoded({extended:false}));
server.post('/emp',(req,res)=>{
	//res.send('.....');
	var obj = req.body;
	//console.log(obj);
	var $ename = obj.ename;
	var $sex = obj.sex;
	var $birthday = obj.birthday;
	var $salary = obj.salary;
	var $deptid = obj.deptid;
	if(!$ename){
		res.send({code:401,msg:'ename is required'});
		return;
	}else if(!$sex){
		res.send({code:401,msg:'sex is required'});
		return;
	}else if(!$birthday){
		res.send({code:401,msg:'birthday is required'});
		return;
	}else if(!$salary){
		res.send({code:401,msg:'salary is required'});
		return;
	}else if(!$deptid){
		res.send({code:401,msg:'deptid is required'});
		return;
	}else{
		pool.query('INSERT INTO emp SET ?',[obj],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
			res.send({code:200,msg:'sucess'});
			}
		});
	}
});



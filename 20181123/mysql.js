//const express = require('express');
const mysql =require('mysql');
//普通连接
//创建连接对象
/*
var conn = mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'db',
	charset:'utf8'
});
//执行连接
conn.connect();
conn.query('select * from emp',(err,result)=>{
	if(err) throw err;
	console.log(result);
});
//关闭连接
conn.end();
*/
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'db',
	connectionLimit:20
});
/*
pool.query('select * from emp where eid=5',(err,result)=>{
	if(err) throw err;
	console.log(result);
});
*/
//返回对象中的affectedRow属性表示是否成功删除，
//如果大于0,有数据删除，否则没有删除任何数据
/*
pool.query('delete from emp where eid=5',(err,result)=>{
	if(err) throw err;
	console.log(result);
});
pool.query('update emp set ename=?,birthday=? where eid=?',['李四','1985-1-1',7],(err,result)=>{
	if(err) throw err;
	console.log(result);
});
*/
/*
pool.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',
	[null,'Peter',1,'1997-2-28',8000,20],(err,result)=>{
	if(err) throw err;
	console.log(result);
});

pool.query('select * from emp where eid=1 or 1=1',(err,result)=>{
	if(err) throw err;
	console.log(result);
});
*/
var person={
	eid:null,
	ename:'tomma',
	sex:1,
	birthday:'1999-1-2',
	salary:6000,
	deptid:10
};
pool.query('INSERT INTO emp SET ?',[person],(err,result)=>{
	if(err) throw err;
	console.log(result);
});


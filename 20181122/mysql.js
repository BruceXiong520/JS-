const mysql = require('mysql');
/*
mysql.createConnection({
	host:'127.0.0.1',
	post:3036,
	user:'root',
	password:'',
	database:'moban',
	charset:'utf-8'
		
});
*/
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:10
});
//
/*
pool.query('select * from dept',(err,result)=>{
	if(err) throw err;
	console.log(result);//返回数组
});
*/
//
pool.getConnection((err,conn)=>{
	conn.query('select * from dept',(err,result)=>{
		console.log(result);
	});
	conn.release();//需要手动释放
});
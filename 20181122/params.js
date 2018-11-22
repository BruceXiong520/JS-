const express = require('express');
var server = express();
server.listen(3000);
server.get('/detail/:lid/:name',(req,res)=>{
	res.send('这是商品详情');
	//console.log(req.query);?
	//req.on('data',(buf)=>{
		//console.log(buf.toString());
	//});
	console.log(req.params);
});
server.get('/shopping/:price/:sname',(req,res)=>{
	res.send('这是购物车');
	console.log(req.params);
});

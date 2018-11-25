const express = require('express');
const bodyParser =require('body-parser');
var server = express();
server.listen(3001);
server.use(express.static('static'));
//false不适用扩展的qs，使用核心模块querystring
server.use(bodyParser.urlencoded({
	extended:false
	}));
server.post('/mylogin',(req,res)=>{
	res.send(req.body)
	console.log(req.body)
});
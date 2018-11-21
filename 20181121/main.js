const express = require('express');
var product =require('./router/product.js');
var cart = require('./router/cart.js');
var member = require('./router/member.js');
var server = express();
server.listen(3000,(req,res)=>{
	console.log('服务器启动成功..');
});
//用到所有路由
//在/product使用
///product/list  ..
server.use('/product',product);
server.use('/cart',cart);
server.use('/member',member);

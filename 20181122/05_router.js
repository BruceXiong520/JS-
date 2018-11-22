const express=require('express');
var userRouter = require('./user.js');
var productRouter = require('./product.js');
var server = express();
server.listen(3000);
server.use('/user',userRouter);
server.use('/product',productRouter);
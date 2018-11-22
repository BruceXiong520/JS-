const express = require('express');
var router = express.Router();
router.get('/list',(req,res)=>{
	res.send('这是商品列表页');
});
router.get('/delete',(req,res)=>{
	res.send('这是商品删除');
});
router.get('/add',(req,res)=>{
	res.send('这是商品添加');
});
module.exports = router;


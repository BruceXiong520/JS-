//商品路由器
const express = require('express');
var router = express.Router();
router.get('/list',(req,res)=>{
	res.send('This is product list');
});
router.get('/detail',(req,res)=>{
	res.send('This is prodect detail');
});
router.get('/detail2',(req,res)=>{
	res.send('detail2');
});
module.exports=router;
const express = require('express');
var router = express.Router();
router.get('/list',(req,res)=>{
	res.send('用户列表');
});
router.get('/user',(req,res)=>{
	res.send('用户首页');
});
router.get('/delete',(req,res)=>{
	res.send('删除成功');
});
//router.get('/',()=>{});
module.exports = router;

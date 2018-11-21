const express = require('express');
const router = express.Router();
router.get('/receive',(req,res)=>{
	res.send('This is receive page');
});
router.get('/order',(req,res)=>{
	res.send('This is order page');
});
router.get('/pay',(req,res)=>{
	res.send('This is pay page');
});
module.exports = router;
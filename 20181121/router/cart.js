const express = require('express');
const router = express.Router();
router.get('/cart',(req,res)=>{
	res.send('This is cart page');
});
module.exports = router;
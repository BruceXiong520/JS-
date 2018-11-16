var qs = require('querystring');//把....转化为对象
var str= 'lid=27&name=dell&age=20';
var obj = qs.parse(str);
console.log(obj);
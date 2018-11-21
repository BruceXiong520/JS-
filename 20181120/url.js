/*
const url=require('url');
var urlStr='http://www.codeboy.com:80/list/details.html?lid=5&pname=dell';
var obj=url.parse(urlStr);
console.log(obj);
console.log(url.format(obj));

var obj1={
		protocol:'http',
		hostname:'www.codeboy.con',
		port:8080,
		pathname:'/course/100037.html',
		//query:'lid=5&pname=dell'
		query:{
			lid:5,
				pname:'dell'
		}
}
console.log(url.format(obj1));
//http://www.codeboy.con:8080/course/100037.html
//http://www.codeboy.con:8080/course/100037.html?lid=5&pname=dell
*/
//
const url = require('url');
const qs = require('querystring');
var urlStr='https://www.tmooc.cn:3000/web/1810.html?sid=10&name=tom';
var obj=url.parse(urlStr);
//console.log(obj);
var obj1=qs.parse(obj.query);
//console.log(obj1.sid,obj1.name);

console.log(`sid:${obj1.sid}  name:${obj1.name}`);



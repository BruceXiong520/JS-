console.log('01_1.js')
var a=1;
function fn(){
	console.log(123);
}
module.exports.fn=fn;
console.log(module.exports===exports);//true
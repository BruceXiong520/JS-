//创建mainjs,创建circle.js
//在功能模块中创建两个函数，分别
//是获取圆的周长(getLength)和面积（getArea）
//导出这两个函数，在主模块中引入功能模块，
//调用两个方法
function getLength(r){
	return (Math.PI*r*2).toFixed(2);
}
function getArea(r){
	return (Math.PI*r*r).toFixed(2);
}
module.exports.getLength=getLength;
module.exports.getArea=getArea;
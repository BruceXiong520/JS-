function getArea(r){
	return Math.round(Math.PI*r*r);
}
function getL(r){
	return Math.round(Math.PI*2*r);
}
module.exports.getArea=getArea;
module.exports.getL=getL;
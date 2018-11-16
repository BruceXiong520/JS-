/*
var str='aBncb';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.length);
console.log(str.charAt(2));
console.log(str.charCodeAt());

console.log(str.slice(1,2));
//console.log(str.splice(0,1));splice不能再字符串中使用
console.log(str.substr(1,2));

console.log(str.indexOf('B'));
console.log(str.lastIndexOf('b'))

console.log(str.replace(/b/ig,'C'));
console.log(str.match(/b/ig));
console.log(str.search(/b/i));

console.log(Math.PI);
console.log(Math.abs(-11));
console.log(Math.pow(2,10));
console.log(Math.floor(Math.PI));
console.log(Math.floor(Math.random()*20));
console.log(Math.ceil(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.max(1,2,1,22));
console.log(Math.min(2,5,5,8,7));

console.log('a'.charCodeAt());//97
console.log('z'.charCodeAt());//122
console.log('A'.charCodeAt());//65
console.log('Z'.charCodeAt());//90
*/
//console.log(String.fromCharCode(65));
var arr=[];
for(i=65;i<=122;i++){
	arr.push(String.fromCharCode(i));
}
//console.log(arr);
arr.splice(26,6);
//console.log(arr);
for(var i=0;i<=9;i++){
	arr.push(i);
}
//console.log(arr);
var newArr=[];
for(var i=0;i<=3;i++){
	newArr.push(arr[Math.floor(Math.random()*arr.length)]);
}
console.log(newArr);


//1-33-6,1-16-1
var arr=[];
var arr1=[];
var newArr=[];
for(var i=1;i<=33;i++){
	arr.push(i);
}

for(var i=1;i<=16;i++){
	arr1.push(i);
}

for(var i=0;i<=5;i++){
	var index=Math.floor(Math.random()*arr.length);
	newArr.push(arr[index]);
	arr.splice(index,1);
}
newArr.sort((a,b)=>a-b);
newArr.push(arr1[Math.floor(Math.random()*arr1.length)]);
console.log(newArr);








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
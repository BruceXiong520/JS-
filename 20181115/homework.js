//倒叙和排序
var arr =[88,72,93,96,11,22,55,15,85,56,67,32,48,69,1111,189,298,321];
for(var i=0,max;i<arr.length;i++){
	for(var j=0;j<arr.length-1;j++){
		if(arr[j]>arr[j+1]){
			max=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=max;
		}
	}
}
console.log(arr);

//冒泡排序
//比较相邻的两个元素，如果前一个比后一个大，则交换位置==>内层循环
//第一次结束，最后一个数最大，循环arr.length-1,就得出结果==>外层循环n+arr.length-1
console.time('run-time');
var arr=[15,58,23,14,155,128,1,8,6,67,85,34,97];
for(var i=0;i<arr.length-1;i++){//外层循环
	for(var j=0;j<arr.length-i;j++){//内层循环，
		if(arr[j]>arr[j+1]){
			var t=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=t;
		}
	}
}
console.log(arr);
console.timeEnd('run-time');
//快速排序
//取中间的一个值num，分别与之比较大小
//小的在左边left[]，num，大的在右边right[]
//再用递归，得出结果
console.time('run1-time');
function paixu(arr){
	if(arr.length<=1){
		return arr;
	}
	var left=[];
	var right=[];
	var key=Math.floor(arr.length/2);  
	var num=arr.splice(key,1)[0];//得用splice删除，得到两个新的数组
	for(var i=0;i<arr.length;i++){
		if(arr[i]>num){
			right.push(arr[i]);	
		}else{
			left.push(arr[i]);		
		}
	}
	 return paixu(left).concat([num],paixu(right));
}
var arr=[15,58,23,14,155,128,1,8,6,67,85,34,97];
console.log(paixu(arr));
console.timeEnd('run1-time');
//

var arr=['a','b','c','d','e','f'];//dcba
for(var t,i=0;i<arr.length/2;i++){
	t=arr[i];
	arr[i]=arr[arr.length-1-i];//i+ x=arr.length-1
	arr[arr.length-1-i]=t;
}
console.log(arr);

var arr=['a','b','c','d'];
var newArr=[];
var j;
for(var i=0;i<arr.length;i++){
	j=arr.length-1-i;
	newArr[j]=arr[i];
}
console.log(newArr);

/*
//将数组中的元素转成字符串
var arr=['推荐','热点','娱乐','财经'];
//将数组中的元素转为字符串,数组中元素默认使用逗号分隔
console.log(arr.toString());
//按照指定的字符分隔数组中的元素,将数组中的元素转化为字符串
console.log(arr.join('|'));
//拼接数组
var arr2 =['汽车','体育'];
console.log(arr.concat(arr2));
var arr3=['tom','jack','alex'];
console.log(arr.concat(arr2,arr3));

var name=['tom'];
var name1=['jack'];
var name2=['alex'];
console.log(name.concat(name1,name2));
arr=arr.concat(arr2);
console.log(arr);
console.log(arr.slice(1,3));//两个都表示数组下标，从1开始，截取到3-1
console.log(arr.slice(2));
console.log(arr.slice(-3));//-表示倒数
console.log(arr.slice(-3,-1));//截取倒数第三个和倒数第2个

//创建数组保存a-h,每个元素存储一个字母
//截取bc，ef，在把两个数组拼接成一个新数组
var arr=['a','b','c','d','e','f','g','h'];
var arr1=arr.slice(1,3);
var arr2=arr.slice(4,6);
console.log(arr1.concat(arr2));	
*/
/*
var arr=['a','b','c','d','e','f','g','h'];
var arr1=[];
var arr2=[];
for(var key in arr){
	if(arr[key]=='b'){
		arr1=arr.slice(key,key+2);
		}
	if(arr[key]=='c'){
		arr1=arr.slice(key,key+2);
	}

	if(arr[key]=='e'){
		arr2=arr.slice(key,key+1);
	}
	if(arr[key]=='f'){
		arr2=arr.slice(key,key+1);
	}
	
}
console.log(arr1);
console.log(arr2);
console.log(arr1.concat(arr2));
*/
/*
var arr=['推荐','热点','娱乐','财经','汽车','财经'];
console.log(arr.splice(2,3));//[ '娱乐', '财经', '汽车' ],第一个表示下标，第二个表示数量
console.log(arr);//[ '推荐', '热点', '财经' ]
console.log(arr.splice(-2));//[ '热点', '财经' ]
console.log(arr);//[ '推荐' ]
*/
/*
//创建数组：包含a-h,每个元素存储1个字母：删除de，替换f为m，在下标为1的位置插入z
var arr=['a','b','c','d','e','f','g','h'];
console.log(arr.splice(3,2));
console.log(arr);
arr[3]='m';
console.log(arr);
//var arr1=arr.splice(1);
//arr[1]='z';
//arr=arr.concat(arr1);
//console.log(arr);
console.log(arr.splice(1,0,'z'));
*/

//console.log(arr.reverse());
//
//var arr=[]
/*

//console.log(arr.sort());
/*
for(var max,i=0;i<arr.length;i++){
	if(arr[i]>arr[i+1]){
			max=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=max;
	}
}
*/
/*
//console.log(arr);
console.log(arr.sort());
console.log(arr.sort(function(a,b){
	return b-a;
	}));

var arr=['a','b','c','d'];
var arr1=[];
for(var i=3;i>=0;i--){
	for(var j=0;j<=arr.length;j++){
		arr1[j]=arr[i];
		console.log(arr1);

	}
		
}
//console.log(arr1);
*/
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

var arr=['a','b','c','d','e','f'];//dcba
for(var t,i=0;i<arr.length/2;i++){
	t=arr[i];
	arr[i]=arr[arr.length-1-i];//i+ x=arr.length-1
	arr[arr.length-1-i]=t;
}
console.log(arr);



/*
//var arr=[1,5,6,7,3,11,55,22,66,1,44,5,6,7,7,9,9,3,5]
//var hash={};
//console.log(hash);
//输出下面的情况   就是（“1”出现了2次 ， “3”出现了2次。。。。）
//没事的时候可以想象  不行就算了 不要太纠结 我会讲
// //{ '1': 2,'3': 2,'5': 3,'6': 2,'7': 3,'9': 2,'11': 1,'22': 1,'44': 1,'55': 1,'66': 1 }

//function fn(n){
//	return {};
//}

//
var i=1;
var abc=function(){
	i=i;
	return abc;
}
abc.toString=function(){
	return i;
}
function fun(a){
	i=a;
	return abc;
}
console.log(fun(1)(2));
*/
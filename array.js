//数组
//var personObj={};
/*
var a=[];//定义空数组
var names=['Tom','Jack','熊兆祥'];//数组自变量，用的值[]
var ar=new Array();//空数组,()可以省略
var arr =new Array('Steve','Anta','Bob');//构造函数/方法形式，构造数组，用的是(),不是方括号
console.log(names);
console.log(arr);
console.log(a);
console.log(ar);
var abc=[20,'abc',true,null,undefined];
console.log(abc);

var arr = new Array(3);//返回3 empty items，创建数组，初始化大小为3，值为空；
var ar =[3];//返回[3]
console.log(arr);
console.log(ar);

var country1 =new Array('美国','中国','英国','日本','韩国');
var country2 =['美国','中国','英国','日本','韩国'];
var country3=new Array(5);//创建一个数组，初始化大小为5，值为空
country3[0]='美国';//为数组添加值,写法的[[[数组的名字[]='']]];,注意不要写成Array[]='';
country3[1]='中国';
country3[2]='英国';
country3[3]='日本';
country3[4]='韩国';
console.log(country1);
console.log(country2);
console.log(country3);
console.log(country1[0]);
console.log(country1.length);//计算数组的大小
country1[country1.length]='加拿大';//给数组添加数据
console.log(country1);
*/
/*
var names=new Array();
while(true){
	var str=prompt('请输入员工姓名');//这句话需要放在if前面，不然，也会打印出exit
	if(str=='exit'){
		break;
		}
		names[names.length]=str;//放在if后面，不然，exit也会打印
		console.log(names);
	
}
	


var names =[];
do{
	var str = prompt('输入员工姓名');//这句话需要放在if前面，不然，也会打印出exit
	if(str=='exit'){
		break;
	}
	names[names.length]=str;
	console.log(names);
}while(true);
*/
/*
var names =[];
do{
	var str = prompt('输入员工姓名');//这句话需要放在if前面，不然，也会打印出exit
	if(str!='exit'){
	names[names.length]=str;
	//console.log(names);
	alert(names);
	}
}while(str!='exit');

//数组也是一个对象，遍历一个数组，可以用遍历对象的方法
var num=[1,2,3,4,5,6,7,8,9];
for(var i=num.length-1;i>=0;i--){
	console.log(i+'......'+num[i]);
}

for(var proName in num){
	console.log(proName+'....'+num[proName]);
}

var arr= new Array(5);
arr[0]='name';
arr[1]='age';
arr[2]='id';
arr[3]='phone';
arr['dept']='销售部';


for(var i in arr){
	console.log(i+'....'+arr[i]);
}
*/
/*
//创建一个函数，在函数中传递参数，实参是一个数组，求获取该数组的最大值
function getMax(arr){

	
	for(var i=0,Max=arr[0];i<arr.length;i++){
			//Max=arr[0];不能再此定义
		if(arr[i]>Max){
			Max=arr[i];
		}
	}
	console.log(Max);
}
getMax([20,32,57,24,35,7,89,11,1]);

function getMin(arr){
	for(var i=1,min=arr[0];i<arr.length;i++){
		if(arr[i]<min){
			min=arr[i];
		}
	}
	return min;
}
var result =getMin([20,32,57,24,35,7,89,11,1,88,55]);
console.log(result);
*/
/*
//查找数据的位置
var names=['刘备','关羽','张飞','诸葛亮'];
for(var i in names){
	if(names[i]=='张飞'){
		console.log(i);
	}
}
*/
/*
//jion与concat连接数组
var names=['刘备','关羽','张飞','诸葛亮'];
console.log(names.toString());
console.log(names.join('-'));
var names1=['tom'];
var arr=names.concat(50,names1);
console.log(arr);
console.log(arr.slice(1,3));//截取数组中的一段，Obj.slice(start,end);不包括Obj[end]
console.log(arr.splice(2,3,'jion','jack','熊兆祥'));//Obj.splice(start,count),count个数,
													//返回删除数组内的数据，再删除的位置，补充新的数据
console.log(arr);//返回删除后的数组
console.log(names);
console.log(names.reverse());//翻转数组，颠倒数组中元素的顺序
console.log(names);

var num =[20,32,57,24,35,7,89,11,1];
console.log(num);
//sort 从大到小排列
console.log(num.sort());//[ 1, 11, 20, 24, 32, 35, 57, 7, 89 ]
console.log(names.sort());//[ '关羽', '刘备', '张飞', '诸葛亮' ]
						//默认按照Unicode码排序

var num1=num.sort(function(a,b){
	//return a-b;  //按照十进制进行排序，从小到大[ 1, 7, 11, 20, 24, 32, 35, 57, 89 ]
	return b-a;    //从大到小排列[ 89, 57, 35, 32, 24, 20, 11, 7, 1 ]
});
console.log(num1);
*/
/*
//push进栈,pop出栈，先进后出，后进先出,shift,unshift
var names=['刘备','关羽','张飞','诸葛亮'];
names.push('熊兆祥');//[ '刘备', '关羽', '张飞', '诸葛亮', '熊兆祥' ]
console.log(names);
names.pop();//[ '刘备', '关羽', '张飞', '诸葛亮' ]
console.log(names);
names.unshift('熊兆祥');//从头添加

console.log(names);//[ '熊兆祥', '刘备', '关羽', '张飞', '诸葛亮' ]

names.shift();//从头删除
console.log(names);//[ '刘备', '关羽', '张飞', '诸葛亮' ]
*/
//二位数组
var num =[
	[1,2,3,4,5],
	[3,1,4,6,7],
	[2,3,5,7,8]
];
//console.log(num[1]);
//console.log(num[1][1]);
/*
for(var i=0;i<num.length;i++){
	
	for(var j=0;j<num[i].length;j++){
	console.log(num[i][j]);
	}
	console.log(num[i]);
}
*/
/*
for(var i in num){
	console.log(num[i]);
		for(var j in num[i]){
	console.log(num[i][j]);
	}
	//console.log(num[i]);
}
*/

for(var i=0;i<num.length;i++){
	
	for(var j=0,str='';j<num[i].length;j++){//添加str='',时num[i][j]结果打印在一行 
											//var str='',需要提前声明，不能写在内在循环的里面
		str+=num[i][j]+' ';
		
	}console.log(str);
	console.log(num[i]);
}
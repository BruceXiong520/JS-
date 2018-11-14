/*
var emp=['tom','jerry',20,true,undefined,null];
console.log(emp);
//
//var car = new Array('大众');
//console.log(car);
//使用内置构造函数，创建数组
var car = new Array(3);
//往数组中添加元素-使用下标
car[0]='大众';
car[1]=='奥迪';
car[2]=='宝马';
console.log(car);
*/
/*
//
var d=new Array(5);
d[0]='语文';
d[1]='数学';
d[2]='英语';
d[3]='化学';
d[4]='物理';
d[5]='历史';

var name=['张珊','李四','王五','李留','王麻子'];
console.log(d);
console.log(name);
*/
/*
var emp=new Array('tom','jack','david','jones','jerry');
console.log(emp);

//查看数组中元素的个数
console.log(emp.length);
emp.push('熊兆祥');
console.log(emp);
emp.pop();
console.log(emp);
emp[5]='bruce';
emp[8]='alex';
console.log(emp);
emp[emp.length]='aaaaa';
console.log(emp);

var country = new Array();
country[country.length]='美国';
country[country.length]='中国';
country[country.length]='韩国';
country[country.length]='日本';
country[country.length]='泰国';
console.log(country);

console.log(country[5]);//找不存在的元素，返回undefined
*/
/*
//创建关联数组
var arr=[];
arr['eid']=1;
arr['ename']='tom';
arr[0]=20;
console.log(arr);

//遍历数组中的元素
var d=new Array(5);
d[0]='语文';
d[1]='数学';
d[2]='英语';
d[3]='化学';
d[4]='物理';
d[5]='历史';
for(var i=0;i<d.length;i++){
	console.log(d[i]);
}

for(var key in arr){
	console.log(arr[key]);
}

var score=[85,72,95,42,86,11];
for(var i=0;i<score.length;i++){
	console.log(i+'......'+score[i]);
}

var salary=[2000,3000,5000,8000,9000];
for(var sum=0,avg=0,i=0;i<salary.length;i++){
		sum+=salary[i];
}
avg=sum/salary.length;
console.log(avg);

//
var car = ['宝马','奔驰','大众','奇瑞','法拉第'];
for(var i=0;i<car.length;i++){
	if(car[i]=='宝马'){
		car[i]='BMW';
	}
}
console.log(car);
*/
/*
var num=1;
function fn(){
	return 'asda';
}
console.log(num);
console.log(global.num);
console.log(fn());
//console.log(global.fn());
console.log(123);
console.info(123);
console.warn(123);
console.error(123);

console.time('1111');
for(var i=0;i<100000000;i++){}
console.timeEnd('1111');

console.time('run-time');
for(var i=0,sum=0;i<=1000000000;i++){
	sum+=i;
}console.log(sum);//1556.939ms
console.timeEnd('run-time');

console.time('run-time2');
var sum=0,i=1;
while(i<=1000000000){
		sum+=i;
		i++;
}console.log(sum);
console.timeEnd('run-time2');//1533.987ms
*/
/*
var book=[];
//添加元素
book['id']=113;
book['title']='水浒传';
book['price']=223;
book['pubTime']='2001-10-1';

console.log(book);
for(var proName in book){
	console.log(proName+'----'+book[proName]);
}
console.log(typeof(book));//Object
console.log(process.arch);

//
var arr=['推荐','热点','娱乐','财经'];
for(var i=0;i<arr.length;i++){
	console.log(i+'----'+arr[i]);
}

for(var proName in arr){
	console.log(proName+'---'+arr[proName]);
}
console.log(process.platform);

//创建一个函数需要传递两个参数（数组，字符串）
function getIndex(a,b){
	console.log(a);
	console.log(b);
	for(var proName in a){
	//for(var proName=0;proName<a.length;proName++){
		console.log(proName+'---'+a[proName]);
		if(a[proName]==b){
			return proName;
		}
	}
		return -1;	//一定要在循环外面加return -1;不然逻辑就有问题	
		
}
console.log(getIndex(['a','b','c','d'],'c'));

//创建函数getAvg,要求传递一个参数（数组），返回平均值
function getAvg(arr){
	var sum=0;
	for(var key in arr){
		sum+=arr[key];
	}
	return sum/arr.length;
}
console.log(getAvg([2055,3000,50000,8000,9000]));

//global.setTimeout(function(){console.log('setTimeout')},2000);//定时器，2000ms后输出结果
//global.setTimeout(()=>{console.log('settimeout')},2000);//node.js下的全局函数
*/
//创建函数getCount，传递两个参数（数组，字符串），返回字符创在数组元素中出现的次数
function getCount(arr,str){
	var i=0;
	for(var key in arr){
		if(arr[key]==str){
			i++;
		}
	}
	return i;
}
console.log(getCount(['tom','jerry','tom','david'],'tom'));

/*
var timer =null;
var i=0;
setInterval(()=>{
	n++;
	console.log('setInterval')},2000);

clearInterval(timer);
*/
//找数组中的最大数
function getMax(num){
	var max;
	max=num[0];
	for(var key in num){
		if(num[key]>max){	
			max=num[key];
		}
	}
	return max;
}

console.log(getMax([88,72,93,96]));	

var arr =[88,72,93,96];
//console.log(arr.sort());
for(var max,i=0;i<arr.length;i++){
	if(arr[i]>arr[i+1]){
			max=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=max;
	}
}
console.log(arr);



























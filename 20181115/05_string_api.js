/*
var str ='WelCome To China';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

var code='PasS';
while(true){
	var str=prompt('请输入4位字符，不区分大小写');
	if(code.toUpperCase()==str.toUpperCase()){
		alert('输入正确');
		break;	
	}
}
*/
/*
var str ='你好world';
console.log(str.length);
console.log(str.charAt(0));//获得下标为0的字符
console.log(str.charAt(str.length-1));
console.log(str.charCodeAt(0));

//javescript a的个数
/*
var str ='javascript';
var count=0;
for(var i in str){
	if(str[i]=='a'){
		count++;
	}	
}
console.log(count);
*/
/*
var str ='javascript';
for(var i=0,count=0;i<str.length;i++){
	if(str.charAt(i)=='a'){
		count++;
	}
}
console.log(count);

var str='javascript';
console.log(str.indexOf('a',6));//查看下标的位置，查不到返回-1，顺着找，不能倒着找
console.log(str.lastIndexOf('a',2));//查看下表的位置，查不到返回-1，倒着找
/*
var str='773868723@qq.com';
for(var i=0;i<str.length;i++){
	if(str.charAt(i)=='@'){
		console.log('是邮箱')
	}else{
			console.log('不是邮箱');
		}
}
*/
/*
var str='773868723@qq.com';
if(str.indexOf('@')>=0){
	console.log('是邮箱')
}

var str='340223199209158111';
console.log(str.slice(6,14));
console.log(str.slice(-2,-1));
console.log(str);
if(str.slice(-1)%2==0){
	console.log(str.slice(6,10)+'年'+str.slice(10,12)+'月'+str.slice(12,14)+'日'+' 女');
}else{
	console.log(str.slice(6,10)+'年'+str.slice(10,12)+'月'+str.slice(12,14)+'日'+' 男');
}

var arr=[12,111,32,65,52];
console.log(arr.sort((a,b)=>{return a-b}));
console.log(arr);
console.log(arr.reverse());
console.log(arr);
console.log(arr.toString());
console.log(arr);
console.log(arr.join('|'));
console.log(arr);
console.log(arr.slice(1,3));
console.log(arr);
console.log(arr.splice(0,1));
console.log(arr);
console.log(arr.push(27));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.unshift(89));
console.log(arr);
console.log(arr.shift());
console.log(arr);



var str='773868723@qq.com';
var index=str.indexOf('@');
console.log(str.slice(0,index));
console.log(str);
console.log(str.slice(index+1));

var str='aBcD'
console.log(str.toUpperCase());
console.log(str);

var str='javascript';
console.log(str.substr(4,3));
console.log(str.substr(-3,2));
console.log(str.substr(4));
console.log(str);

var str='hello'
var str1=str.substr(0,1).toUpperCase();
var str2=str.substr(1).toLowerCase();
console.log(str1+str2);

console.log(str.substring(2,4));//ll

var arr=['a','b','c'];
console.log(arr.join('--'));

var str='a|b|c';
console.log(str.split('|'));

var str ='773868723@qq.com';
arr=str.split('@');
console.log('用户名:\t'+arr[0]+'\n域名:\t'+arr[1]);
*/
var str='im a boy she is a girl it is a dog';
var newArr=[];
//console.log(str.split());
arr=str.split(' ');
//console.log(arr);

for(var index=0;index<arr.length;index++){
	var str1=arr[index].toString().substr(0,1).toUpperCase();
	var str2=arr[index].toString().substr(1).toLowerCase();
	var str3=str1+str2;
	newArr[index]=str3.split();
}
var res = newArr.join(' ');
console.log(res);

var arr=['are'];
console.log(typeof(arr[0]));//string
console.log(typeof(arr[0].substr(0,1)));//string
















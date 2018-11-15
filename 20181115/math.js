//Math对象
console.log(Math.PI);
console.log(Math.abs(-5));//absolute
console.log(Math.round(Math.PI));
console.log(parseInt(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.max(9,23,45,1,89));
console.log(Math.min(1,0,11,111,28,21,99,-1/0));
console.log(Math.pow(10,2));//x^y
console.log(Math.floor(Math.random()*21));//random取得到0，取不到1，这里去0-20之间的整数
										//不能用向上取整，因为这样会使0出现的概率极小
										//用向下取整，保证0-20之间每个整数出现的概率一致。

//1、创建数组，存储若干个员工姓名，每次运行随机取出1个员工的姓名打印出来
//2、创建数组，包含a-z,0-9,A-Z,元素，在数组中随机取4个字符，放到一个新的数组中
var arr = ['tom','jack','alex','bruce','rock','david','frank','god'];
var i=Math.floor(Math.random()*arr.length);
console.log(arr[i]);

var arr=['a','b','c','d','e','f','g','h','i','j','k'
		,'l','m','n','o','p','q','r','s','t','u'
		,'v','w','x','y','z','A','B','C','D','E'
		,'F','G','H','I','J','K','L','M','N','O'
		,'P','Q','R','S','T','U','V','W','X','Y'
		,'Z',1,2,3,4,5,6,7,8,9,0];
var newArr=[];
for(var i=0;i<4;i++){
	newArr.push(arr[Math.floor(Math.random()*arr.length)]);
}
console.log(newArr);
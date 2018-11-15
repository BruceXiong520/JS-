var str = 'China是世界上人口最多的国家,china的互联网高度发达,CHINA有好多程序员，China是一个伟大的国家';
//查找所有的china，变替换成中国
console.log(str.replace('china','中国'));
//使用正则表达式的方式查找
//i-->ignore(忽略大小写)
//g-->global(全局查找)
console.log(str.replace(/china/ig,'中国'));

console.log(str.match(/china/ig));//返回一个数组，类型是Object
console.log(str.search(/chinese/i));//返回下标，只查找第一个符合要求的下标,找不到返回-1


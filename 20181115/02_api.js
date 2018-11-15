//
var arr=['推荐','热点','娱乐'];
arr[arr.length]='新闻';
console.log(arr);//[ '推荐', '热点', '娱乐', '新闻' ]

console.log(arr.push('汽车'));//5,往数组末尾添加元素，返回数组长度

console.log(arr);      //[ '推荐', '热点', '娱乐', '新闻', '汽车' ]
console.log(arr.pop());//汽车 删除数组末尾的元素，返回删除的元素
console.log(arr);      //[ '推荐', '热点', '娱乐', '新闻' ]
console.log(arr.unshift('渣打'));  //5,向数组的开头添加元素，返回数组长度
console.log(arr);                  //[ '渣打', '推荐', '热点', '娱乐', '新闻' ]
console.log(arr.shift());          //渣打，删除数组开头的元素，返回删除的元素
console.log(arr);                  //[ '推荐', '热点', '娱乐', '新闻' ]

var obj =new Object('jack','taa');
obj['name']='tom';
obj.id=15;
console.log(obj);
for(var proName in obj){
	console.log(proName+'----'+obj[proName]);
}

toString()
join('')
concat()
slice
splice
push
pop
unshift
shift


var person1={
	name:'tom',
	age:18,
}
var person2=person1;
console.log(person2);
person2.name='jack';
console.log(person1.name);//jack

var a=1;
var b=a;
a=3;
console.log(b);//1
//对象属于引用类型，存储在堆内存中，
//会生成一个16进制的地址，把地址存在person1中，
//复制person1的地址给person2.
//所以无论使用哪一个变量改变对象中的属性值，另一个也会发生变化


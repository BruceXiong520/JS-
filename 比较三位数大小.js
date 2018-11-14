//输入三个整数xyz，请把这三个数由大到小排列
var x=prompt('请输入数据x：');
var y=prompt('请插入数据y：');
var z=prompt('请插入数据z：');
var t=0;

if(x<y){
	t=x;//如果x<y,xy交换值，就编程x大于y
	x=y;
	y=t;
}
if(x<z){
	t=x;//如果x<z,xz交换值，就变成x大于z
	x=z;
	z=t;
}
if(y<z){
	t=y;//如果y<z,yz交换值就编程y大于z
	y=z;
	z=t;
}
alert('三个数由大到小排列：' +x+'>'+y+'>'+z);//最大的是x，最小的是z

//有1、2、3、4，4个数能组成多少个互不相同且无重复的三位数，都是多少;
var i;
var j;
var k;
for(i=1;i<=4;i++)
{ 
	for(j=1;j<=4;j++){
		for(k=1;k<=4;k++){
			if(i!=j && i!=k && j!=k){

			console.log(Number(i.toString()+j.toString()+k.toString()));
			}
		}
	}
}
//一个数加上100后是一个完全平方数，再加上168后又是一个完全平方数，这个数是多少
//var a= Math.sqrt(9);//sqrt小写
//console.log(a);
var x;
for(x=0;x<Number.MAX_VALUE;x++){
var i=parseInt(Math.sqrt(x+100));
var j=parseInt(Math.sqrt(x+100+168));
if(i*i==x+100 && j*j==x+100+168)
console.log(x);
}
//输入某年某月某日，判断这一天是这一年的第几天;
//1-31,2-28/29,3-31,4-30,5-31,6-30,7-31,8-31,9-30,10-31,11-30,12-31


function getdays(year,month,day){
	
	var ar=[31,28,31,30,31,30,31,31,30,31,30,31];
	var i;
    for(i=0;i<month-1;i++){
		day =day+ar[i];
	}
	if(month>=2 && isRn(year)){
		day++;
	}
	//console.log(day);
	alert('是这一年的第'+day+'天');
}
function isRn(year){
	if(year%4==0 && year%100!=0 || year%400==0){
		return true;
	}else {
		return false;
	}
}
 

//getdays(2000,3,8);
getdays(parseInt(prompt('请输入年份:')),parseInt(prompt('请输入月份:')),parseInt(prompt('请输入日:')));


//输入三个整数xyz，请把这三个数由大到小排列
var x=prompt('请输入数据x：');
var y=prompt('请插入数据y：');
var z=prompt('请插入数据z：');
var t;
if(x<y){
	t=x;
	x=y;
	y=t;
}else if(x<z){
	t=x;
	x=z;
	z=t;
}else(y<z){
	t=y;
	y=z;
	z=t;
}
alert('三个数由大到小排列：'+x'>'+y+'>'+z);

//用*输出字母C的图案
//将一个正整数分解质因数例如：输入90，打印出90=2*3*3*5;
//输出9*9口诀
//判断101-200之间有多少个素数，并输出所有素数
//输入一行字符，分别统计统计出其中英文字母
//输出九宫格
//输入两个正整数，求其最大公约数和最小公倍数
//求s=a+aa+aaa+aaaa+a...a的值其中a是一个数字s=2+22+222+2222+22222
//求1！+2！+3！+4！+...+20！的和
//利用递归将输入的5个字符一相反的顺序打印出来
//Math.pow(10,4);
function getSum(a,n){
	return n==1?1:(2*Math.pow(10,n-1)+getSum(2,n-1) );
}
var res = getSum(2,5);

function fn(n){
	for(var i=1,sum=0;i<=n;i++){
	    sum+=(n==1?1:n*f(n-1));
		return sum;
	 }
}
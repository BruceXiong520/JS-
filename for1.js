//有一张0.0001米的纸，对折多少次可以达到8848；
var i=0.0001;
var count=0;
do{
	if(i>8848){
		break;
	}
	i=i*2;
	count++;
}while(i<=8848);
console.log(count,i);//27 ,13421.7728


//括号内填加减符号，使等式成立；有几种情况；(可以把加减符号转换成加+1和-1   
//比如12-34就是 12+（-1*34）)  12+34就是 12+（1*34）)
//12(i)34(j)56(k)78(x)9=59


for(var i=-1,count=0;i<3;i=i+2){
	for(var j=-1;j<3;j=j+2){
		for(var k=-1;k<3;k=k+2){
			for(var x=-1;x<3;x=x+2){
				if(12+34*i+56*j+78*k+9*x==59){
					count++;
					console.log(i,j,k,x);//1种可能，+ - + -
				}
			}
		} 
	}
}
console.log(count);

//羽毛球拍15元，球3元，水2元。200元每种至少一个，有多少可能

	
	for(var i=1,count=0;i<=13;i++){
		for(var j=1;j<=66;j++){
			for(var k=100;k>=1;k--){
				if(15*i+3*j+2*k==200){
					
					//console.log('15*'+i+'+3*'+j+'+2*'+k+'=200');
					count++;
					}
			}
		}	
		
	}
	console.log(count);//205种
	







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
	console.log(day);
}

function isRn(year){
	if(year%4==0 && year%100!=0 || year%400==0){
		return true;
	}else {
		return false;
	}
}
getdays(2000,3,2);

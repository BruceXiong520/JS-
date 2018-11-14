//getdays(year,month,day)=prompt('请输入年月日');


function getdays(year,month,day){

	 if(day>31){
		alert('shuruyoucuo');
		return;
	} 
	 if(month>12){
		alert('shuruyoucuo');
		return;
	} 
	
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
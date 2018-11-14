//switch,//#订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消 

var status=3;
switch(status){
	case 1: //用status变量和1进行比较,用的是===全等
		console.log('待付款');
		break;
	case 2:
		console.log('待发货');
		break;
	case 3:
		console.log('已发货');
		break;
	case 4:
		console.log('已签收');
		break;
	case 4:
		console.log('已取消');
		break;
	default:
		console.log('非法的转态');
}

//声明变量保存星期的值，星期日-星期六 0-6
var week=2;
switch(week){
	case 0:
		console.log('星期日');
		break;
	case 1:
		console.log('星期一');
		break;
	case 2:
		console.log('星期二');
		break;
	case 3:
		console.log('星期三');
		break;
	case 4:
		console.log('星期四');
		break;
	case 5:
		console.log('星期五');
		break;
	case 6:
		console.log('星期六');
		break;
	default:
		console.log('cuol');
}

var score=89;
score=parseInt(score/10);
switch(score){
	case 0: 
		console.log('不及格');
		break;
	case 1:
		console.log('不及格');
		break;
	case 2:
		console.log('不及格');
		break;
	case 3:
		console.log('不及格');
		break;
	case 4:
		console.log('不及格');
		break;
	case 5:
		console.log('不及格');
		break;
	case 6:
		console.log('及格');
		break;
	case 7:
		console.log('中等');
		break;
	case 8:
		console.log('良好');
		break;
	case 9:
		console.log('优秀');
		break;
	case 10:
		console.log('非常优秀');
		break;
	default:
		console.log('成绩有误');

}



var date=new Date();
var year=date.getFullYear();
var month =date.getMonth()+1;
var day =date.getDate()
var week =date.getDay();//星期
var hour =date.getHours();
var minute = date.getMinutes();
var second =date.getSeconds();
console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(week);
console.log(hour);
console.log(minute);
console.log(second);




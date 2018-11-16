//创建Date对象，东八区比零时区早8小时
var d1=new Date('2018/11/11 10:20:30');
console.log(d1);//2018-11-11T02:20:30.000Z,
var d2=new Date(2018,15,11,10,20,30);//2019-01-11T02:20:30.000Z，这种写法，月份的范围从0-11，超过多少加多少
console.log(d2);
var d3 = new Date();//当前的时间
console.log(d3);
var d4=new Date(1000*60);//计算机元年1970-01-01T00:01:00.000Z
console.log(d4);

//(1)创建Date对象
console.time('run-time');
//获取具体的时间信息，年月日星期
var d1=new Date('2018/11/16 10:40:30');
//获取年份
var year =d1.getFullYear();//getYear()获取2000年之前年份的后两位，已经废弃
console.log(year);
var month =d1.getMonth();//获取month-1
console.log(month);
var day =d1.getDate();
console.log(day);
var week =d1.getDay();
console.log(week);
var hour =d1.getHours();//存几点，获取几点
console.log(hour);
//getMinutes/getSeconds/getMilliseconds
console.timeEnd('run-time');

//
var d = new Date();
var year=d.getFullYear();
var month=d.getMonth()+1;
var day=d.getDate();
var week=d.getDay();
var hour=d.getHours();
var minute=d.getMinutes();
var seconds=d.getSeconds();
var ms=d.getMilliseconds();	
var arr=['星期天','星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
console.log(year+'年'+month+'月'+day+'日 '+
			hour+'时'+minute+'分'+seconds+'秒 '+
			arr[week]+'\t'+(hour>12?'下午':'上午'));
//获取距离计算机元年的毫秒数
console.log(d.getTime());//1542339345754,1万5千多亿毫秒
//

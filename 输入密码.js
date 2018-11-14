//声明一个变量保存密码，使用循环弹出提示框，输入密码
//如果输入正确，给警示框登录成功,并且结束循环
//不是再谈一次提示框输入密码
var psw='pppp';
var a=prompt('请输入密码');

do{
	var a=prompt('请输入密码')
		if(a==psw){
		alert('登录成功');
		break;
	}
}while(true);

/*
if(a!=psw){
	alert('你输入的密码不对');
	var a=prompt('请输入密码')
}else if(a==psw){
		alert('输入正确');
		
	}
	*/
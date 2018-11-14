var i=0;
function fn(){
	alert('从前有座山，山里有座庙，庙里有个老和尚');
	i++;
	console.log(i);
	if(i<3){
	fn();
	}
}
fn();


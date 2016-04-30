


var serialPort = require("serialport") 
var task = require('../controllers/task.js');
var Query = require('../models/query.js');

var portname=""
var baudrate=9600;
var device="Arduino__www.arduino.cc_";
var vendorId="0x0x1022";
var str="";
var separator="!";


module.exports=function(){

//find port
if(sp==null){

serialPort.list(function(err,ports){
ports.forEach(function(port){
if(port.manufacturer==device){
 portname=port.comName;
 
sp = new serialPort.SerialPort(portname,{  baudrate : baudrate, });
Query.create_data();

sp.on('open',function(err){ 

console.log("Serial port open :  "+port.comName+"  baudrate: "+baudrate);

sp.on('data',function(data)
{
str+=data;
if(str.indexOf(separator,0)>0){
message=str.substring(0,str.indexOf(separator));
console.log(message);
str="";

}
});



});





sp.on('disconnect',function(){ console.log("SerialPort "+port.comName+" closed" ); sp=null; });

}

});
}); 
}}


var check= function(data){
var str="";
str+=data;
console.log(str);

}
















// 0 : light_liv 1 : light_bat 2 : light_kit 3 : light_out 4 : gas 5 : window 6 : cutton
// 5 open , close  // 6, up  , down // 4 on , off // 0~3 on / off
// 7
 
// A led  // B gas // C cutton // D window
/*
 strArr = str.split('/');
	device= strArr[0];
	 temp = strArr[1];
	 humi = strArr[2];
	 illu = strArr[3];
	 uv = strArr[4];
	 rain = strArr[5];

if(device=="weather"){
value=temp+"/"+humi+"/"+illu+"/"+uv+"/"+rain+"/"
Query.update_data(7,value);

}

if(str.charAt(0)=="A")
{
//all	
if(str.charAt(1)==1){
	if(str.charAt(3)==1)
console.log("LED ALL ON");
//on
	if(str.charAt(3)==0)
console.log("LED ALL OFF");
//off

	}



	if(str.charAt(2)==1){

			if(str.charAt(3)==1){
		console.log("LED BATH ON");
			Query.update_data(1,on);}
			if(str.charAt(3)==0)
		{console.log("LED BATH OFF");
			Query.update_data(1,off);}
}
	if(str.charAt(2)==2){

			if(str.charAt(3)==1){
		console.log("LED KIT ON");
			Query.update_data(2,on);}
		}
			if(str.charAt(3)==0){
		console.log("LED KIT OFF");
}			Query.update_data(2,off);}

	if(str.charAt(2)==3){

			if(str.charAt(3)==1){
		console.log("LED LIV ON");
			Query.update_data(0,on);}
			if(str.charAt(3)==0){
		console.log("LED LIV OFF");
			Query.update_data(0,off);}
}
	if(str.charAt(2)==4){

			if(str.charAt(3)==1){
		console.log("LED OUT ON");
			Query.update_data(3,on);}
			if(str.charAt(3)==0){
		console.log("LED OUT OFF");
			Query.update_data(3,off);}

}
//gas
if(str.charAt(0)=="B"){
	if(str.charAt(3)=="0")
	Query.update_data(4,"off");
	if(str.charAt(3)=="1")
	Query.update_data(4,"on");
}
//cutton
 if(str.charAt(0)=="C"){
	if(str.charAt(3)=="0")
	Query.update_data(6,"OFF");
	if(str.charAt(3)=="1")
	Query.update_data(6,"ON");


}
//window
 if(str.charAt(0)=="D"){	
	if(str.charAt(3)=="0")
	Query.update_data(5,"OFF");
	if(str.charAt(3)=="1")
	Query.update_data(5,"ON");

}
 
//weather
 if(str.charAt(0)=="D"){	
	if(str.charAt(3)=="0")
	Query.update_data(5,"OFF");
	if(str.charAt(3)=="1")
	Query.update_data(5,"ON");

}


*/ 

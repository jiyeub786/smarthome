
var liv_off="A030!",
liv_on="A031!",
 kit_on ='A021!',
kit_off='A020!',

bat_on='A011!',
bat_off='A010!',

out_on='A041!',
out_off='A040!',

all_on='A101!',
all_off='A100!',

windows_open='D001!',
windows_close='D000!',

cutton_up='C001!',
cutton_down='C000!',

gas_off='B000!',
gas_on='B001!',

weather="E000!"



;



var success="{value:1}";
var fail="{value:0}";

var OFF="off";
var ON="on";
var CLOSED="close";
var OPEN="open";
var UP="up";
var DOWN="down";

exports.SerialWrite=function(location,value){

if( location =="liv"){
if(value==OFF){sp.write(liv_off);return success;;}
if(value==ON){sp.write(liv_on);return success;;}
}


else if( location =="kit"){
if(value==OFF){sp.write(kit_off);return success;;}
if(value==ON){sp.write(kit_on);return success;;}
}


else if( location =="bat"){
if(value==OFF){sp.write(bat_off);return success;;}
if(value==ON){sp.write(bat_on);return success;;}
}
else if( location =="out")
{
if(value==OFF){sp.write(out_off);return success;}
if(value==ON){sp.write(out_on);return success;}
}


else if( location =="all")
{
if(value==OFF){sp.write(all_off);return success;}
if(value==ON){sp.write(all_on);return success;}
}

//gas
if(location=="gas"){
if(value==OPEN){sp.write(gas_on);return success;;}
if(value==CLOSED){sp.write(gas_off);return success;;}
}
//weather controll
if(location=="weather"){sp.write(weather);return success;;}
//window controll
if(location=="window"){
if(value==OPEN){sp.write(windows_open);return success;}
if(value==CLOSED){sp.write(windows_close);return success;}
}
//cutton contoll
if(location=="cutton"){
if(value==UP){sp.write(cutton_up);return success;;}
if(value==DOWN){sp.write(cutton_down);return success;;}
};

};

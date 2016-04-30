
<!--command -->
var ON="on";
var OFF="off";
var OPEN="open";
var CLOSE="close";
var UP="up";
var DOWN="down";

var none="null";
var time;



$(document).ready(function(){

<!-- CSS -->
$(".page").css( {'background-color': 'white ', color:'white' } ); 

$(".footer").css( {'background-color': '#ffa000 ', color:'#757575' } ); 
$(".header").css( {'background-color': '#ffa000 ', color:'#757575' } ); 
$("a").css( {'background-color': '#ffa000', color:'black' } );
$("em").css( {'background-color': '#6482B9', color:'#F0FFF0' } );
 $("h3").css( {'background-color': '#7986cb', color:'#ffa000' } ); 
$(".table").css( {'background-color': '#ffd54f', color:'black' } );


<!-- operate once -->
get_all_state(); 
refresh_time();

<!-- refresh state -->

self.setInterval(refresh_time,60000);
self.setInterval(refresh,6000);


    
   
    $("#dive").css( {'background-color': '#FFFF99', color:'black' } );
    


   
<!-- led button event-->

$('#btn_weather').click(function(){post_weather();});

     
   
<!-- led button event-->
$('#btn_liv_on').click(function(){post_light("liv",ON);});
$('#btn_liv_off').click(function(){post_light("liv",OFF);});

$('#btn_bat_on').click(function(){post_light("bat",ON);});
$('#btn_bat_off').click(function(){post_light("bat",OFF);});

$('#btn_kit_on').click(function(){post_light("kit",ON);});
$('#btn_kit_off').click(function(){post_light("kit",OFF);});

$('#btn_out_off').click(function(){post_light("out",OFF);});
$('#btn_out_on').click(function(){post_light("out",ON);});

$('#btn_all_on').click(function(){post_light("all",ON);});
$('#btn_all_off').click(function(){post_light("all",OFF);});

<!-- cutton button event-->
$('#btn_cutton_up').click(function(){post_cutton(UP);});
$('#btn_cutton_down').click(function(){post_cutton(DOWN);});



<!--  window button  event-->
$('#btn_window_open').click(function(){post_window(OPEN);});
$('#btn_window_close').click(function(){post_window(CLOSE);});



<!-- gas button event-->
$('#btn_gas_open').click(function(){post_gas(OPEN);});$('#btn_gas_close').click(function(){post_gas(CLOSE);});

 });
<!--send light command -->


 



<!--get states -->

<!--get all state -->
function get_all_state(){
get_state();
}



<!-- refresh states -->

var refresh_time=function(){

time=new Date();
$('#time').text(time.getFullYear()+"년 "+(time.getMonth()+1)+"월 "+time.getDate()+"일 "+time.getHours()+"시 "+time.getMinutes()+"분");
}


var refresh=function(){
//post_weather();
get_all_state();
}





function get_state(){


$.ajax({

  type: "GET",
dataType: "jsonp",
  url: url()+'connect',
crossDomain:true,

    success: function(data){



console.log(data);
$('#board_liv').text(data.light_bath);
$('#board_bat').text(data.light_liv);
$('#board_kit').text(data.light_kit);
$('#board_out').text(data.light_out);
 

$('#board_temp').text(data.temp);
$('#board_uv').text(data.uv);
$('#board_humi').text(data.humi);
$('#board_illu').text(data.illu);


$('#board_window').text(data.values);
$('#board_cutton').text(data.values);
$('#board_gas').text(data.values);
 

},
error: function(){
alert("connection fail");
}

});
}


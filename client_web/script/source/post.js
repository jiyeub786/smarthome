
function post_light(data,value){

console.log("post_light()");

$.ajax({
  type: "POST",
  url: url()+'light/'+data+'/'+value




});
}

<!--send weather command -->
function post_weather(){

console.log("post_weather()");

$.ajax({
    type: 'POST',
    url: url()+'weather'
   
});
}

<!--send window command -->
function post_window(value){

console.log("post_window()");

$.ajax({
    type: 'POST',
    url: url()+'window/'+value
   
});
}
<!--send cutton command -->
function post_cutton(value){

console.log("post_cutton()");

$.ajax({
    type: 'POST',
    url: url()+'cutton/'+value
   
});
}


<!--send gas command -->

function post_gas(value){

console.log("post_gas()");
$.ajax({
    type: 'POST',
    url: url()+'gas/'+value
   
});
}


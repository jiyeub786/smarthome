var State=require('./state.js');


// db find

exports.find_data=function(key,value,callback){
 if(key=="_id")
State.find({_id: value},function(err,task){

 callback(task);
});
 if(value=="light")
State.find({device: /light/},function(err,task){

 callback(task);
});



 
};
//db update

exports.update_data =function(data,value){

var State=require('../models/state.js'); //mode

State.find({ _id : data }, function(err, tasks) {
          if (tasks.length>0){

//업데이트할때 id 값을 넘버로 받고 id값을 기준으로 update 진행

        State.update({_id : data },{ 'values' : value },function(err, numberAffected, raw) {
            if ( err )
                 throw err;
            
console.log(tasks);
        });
}
	 

});




}





/* db안에 자료 생성 */


exports.create_data = function(err,result){

var device=["light_liv","light_bat","light_kit","light_out","gas","window","cutton",'weather','box_pw',"box"];


for(var i=0;i<9;i++)
{
State({_id : i, "device" :device[i],"values":"OFF" }).save();


}


}




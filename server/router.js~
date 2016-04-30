var task = require('./controllers/task.js');
 

exports.route =function(app){

app.get('/connect',task.state);

//light
	app.get('/light',task.light_get);
	app.post('/light/:location/:value',task.light_post);

//window
	app.get('/window',task.window_get);
	app.post('/window/:value',task.window_post);
//cutton
	app.get('/cutton',task.cutton_get);
	app.post('/cutton/:value',task.cutton_post);
//weather
	app.get('/weather',task.weather_get);
	app.post('/weather',task.weather_post);

//gas
	app.post('/gas/:value',task.gas_post);
	app.get('/gas',task.gas_get);


/*
//box 


//app.post('/bpx/:value',task.box_post);
//	app.get('/box',task.box_get);
*/


};

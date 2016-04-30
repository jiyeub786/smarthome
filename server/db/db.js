/**
 * New node file
 */
var mongoose = require('mongoose');

var dbURL = 'mongodb://localhost/device';

exports.connect = function(){
	mongoose.connect(dbURL);
	
	mongoose.connection.on('connected',function(){
		console.log('successs connect db' + dbURL);
			});
	
	mongoose.connection.on('error',function(){
		console.log('fail connect db err is : ' + err);
	});
	mongoose.connection.on('disconnectd ',function(){
		console.log('db connection is disconnected   ');
	});
	
	
	
	process.on('SIGINT',function(){
		mongoose.connection.close(function(){
			console.log('Application process is going down, disconnect database connection... ' );
		process.exit(0);
		});
		});
		
}

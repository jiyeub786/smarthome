
/**
 * Module dependencies.
 */
// -> serial setting  

require('./global.js')();

var  serial_module=require('./Serial/SerialRead.js');

  setInterval(serial_module,1000);

  //setInterval(require('./state.js'),1000);

// <- end serial setting


// - > start express
var express = require('express')
    , http = require('http')
  , path = require('path');


var app = express();



//app default setting
app.configure(function() {
app.set('port', process.env.PORT || 8208);
//app.set('views', __dirname + '/views');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
});

// development only
app.configure('development', function() {
 
  app.use(express.errorHandler())});
//routing setting
require('./router.js').route(app);


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//db setting
require('./db/db.js').connect();




 //<-end express
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

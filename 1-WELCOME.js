// FIRST PROGRAM

var express = require('express');  
var app = express();  
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('get');
    console.log("redirected");
});

  
app.listen(8080);
console.log("running....");

//OR
/*
var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
  res.send('Welcome to Express.js');  
});  
var server = app.listen(8080, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  
*/
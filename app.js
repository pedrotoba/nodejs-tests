
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var socket = require('socket.io')(server);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var esp = require('./esp_functions');


var exito = {function:"exito"};
var error = {function:"error"};

app.use(express.static('www'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/www/" + "index.html" );
})

app.post('/process_data', urlencodedParser, function(req, res) {
	response = {
      com_port:req.body.COM,
   	};
	console.log(response);
	res.type('text/plain');
	res.json(exito);
	console.log("Petición recibida");
});

var servidor = server.listen(8081, function(){
	console.log("Server start port 8081");
});

esp.download_firmware();



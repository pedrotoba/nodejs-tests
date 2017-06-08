var express = require('express');
var app = express();
//var exec = require('exec');
var exec = require('child_process').exec;
 
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var exito = {function:"exito"};
var error = {function:"error"};

app.use(express.static('www'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/www/" + "index.html" );
})

app.post('/process_data', urlencodedParser, function(req, res) {
	response = {
      com_port:req.body.COM,
      file_name:req.body.FILE_NAME
   	};
	console.log(response);
	res.type('text/plain');
	res.json(exito);
	console.log("Petición recibida");
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server start at port 8081", host, port)
})

/*exec('ls -la', function(error, stdout, stderr) {
    console.log(stdout);
});*/
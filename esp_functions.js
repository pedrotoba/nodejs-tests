var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var http = require('http');
var fs = require('fs');

module.exports = {
  install_esptool: function () {
    exec('pip install esptool', function(error, stdout, stderr) {
    	console.log(stdout.indexOf("Requirement already satisfied"));
	});
  },
  download_firmware: function() {
  	var file = fs.createWriteStream("./firmware/firmware.bin");
	var request = http.get("http://micropython.org/resources/firmware/esp8266-20170526-v1.9.bin", function(response) {
  		response.pipe(file);
	});
  },
  erase_flash: function(){
  	console.log("TODO");
  },
  write_firmware: function(){
  	console.log("TODO");
  }
};
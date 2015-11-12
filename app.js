var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var net = require('net');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var server2 = net.createServer();
server2.listen(9999);
console.log('Server2 listening on ' + server2.address().address +':'+ server2.address().port);
server2.on('connection', function (socket) {
	app
	.get('/', function(req, res) {
		res.sendFile(express.static(__dirname + '/static/index.html'));
	})
	.post('/', function(req, res) {
		var data_row = req.body.data_row;
		res.send(data_row);

		socket.write(data_row + '\r\n');
	});
});



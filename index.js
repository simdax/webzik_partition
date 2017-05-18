var express = require('express');
var app = express();
var http = require('http');
// server
var server = http.Server(app);

var User = require('./socketIO/User');
//SOCKET IO
io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log("nouveau user !");
  bob = new User(socket,io);
});

var port = process.env.PORT || 3000;
server.listen(port);
app.set('port', port);

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index.html')
});


app.use('/dist', express.static(__dirname +'/dist'));
// require('./dev')(app);
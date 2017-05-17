var express = require('express');
var app = express();
var http = require('http');




// server
var server = http.Server(app);
var port = normalizePort(process.env.PORT || '3050');
app.set('port', port);
server.listen(port);
// server.on('listening', onListening);


//SOCKET IO
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index.html')
});
app.use('/dist', express.static(__dirname +'/dist'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
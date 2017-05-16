var express = require('express');
var app = express();
var http = require('http');


// server
var server = http.Server(app);
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
server.listen(port);
// server.on('listening', onListening);

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

// function onListening() {
//   var addr = server.address();
//   var bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;
//   // debug('Listening on ' + bind);
// }

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index.html')
});
app.use('/dist', express.static(__dirname +'/dist'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
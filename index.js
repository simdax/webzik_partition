//express
var express = require('express');
var app = express();
// server
var server = app.listen(3000, function(){
  console.log("starting on :3000");
});
//io
var io = require('socket.io').listen(server);
        // io.set('transports', ['websocket']);

io.on('connection', function(socket){
  console.log("coucou");

  socket.on('pingServer',(arf)=>console.log(arf))
  socket.on('disconnect',()=>{
    console.log('bye !');
  });

})




app.get('/', function (req, res) {
  // res.send("ta mere");
  res.sendFile( __dirname + '/index.html')
});
app.use('/dist', express.static(__dirname +'/dist'));

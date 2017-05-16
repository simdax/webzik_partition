var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);


app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index.html')
});
app.use('/dist', express.static(__dirname +'/dist'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
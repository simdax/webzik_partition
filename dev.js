
var io =function (app) {
    
 // webpack

var webpack = require('webpack');
var config = require('./webpack.config.js');
var compiler = webpack(config);

console.log('Enabling webpack dev middleware.');
app.use(require('webpack-dev-middleware')(compiler, {
  lazy: false,
  noInfo: true,
  publicPath: config.output.publicPath,
  quiet: false,
}));

app.use(require('webpack-hot-middleware')(compiler));

//vantage 
var Vantage = require("vantage");

var vantage
  , delimiter = 'svr:5000~$'
  , port = 5000
  , serverV
  ;

/**
 * Firing up a Vantage server.
 */

serverV = Vantage()
 .delimiter(delimiter)
 .listen(app, port)
 .show();


}

  module.exports = io;

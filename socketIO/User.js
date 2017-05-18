(function(){

  "use strict";

  var callbacks = {
    newMsg:function (msg) {
      this.io.emit('newMsg',msg)
    }
  };

  var User = function(socket,io){
    this.socket = socket;
    this.io = io;
    for(var k in callbacks){
      this.socket.on(k,callbacks[k].bind(this))
    }
  };


  module.exports = User;


}())
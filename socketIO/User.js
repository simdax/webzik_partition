(function(){

  "use strict";

  var callbacks = {
    newMsg:function (msg) {
      console.log("reçu un niou message");
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
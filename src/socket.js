
let cbacks={
  newMsg(msg){
    this.discussion.push(msg)
    if (this.discussion.length > 10) {
      this.discussion.splice(0,1)
    }
  }
}

export var callbacks=function(vue){
    for (var k in cbacks){
      vue.$options.sockets[k] = cbacks[k].bind(vue);
    }
  }
export var socketObj=function(vue){
    return {
      connect() {
        // Fired when the socket connects.
        vue.isConnected = true;
        },
        disconnect() {
         vue.isConnected = false;
        },
        // Fired when the server sends something on the "messageChannel" channel.
        messageChannel(data) {
          vue.socketMessage = data
        }
    }
  }
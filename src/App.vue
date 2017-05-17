<template>
  <div id="app">
  <div v-if="isConnected">
    T'es connecté !
  </div>
  <button @click="pingServer">PING</button>
    <musique></musique>
    <musique></musique>
    <musique></musique>
    <musique></musique>
    <div class="chat">
      <textarea v-model="msg"></textarea>
      <input type="button" v-model="msg" @submit="submit">
      <div class="result"></div>      
    </div>
  </div>
</template>

<script>

  import musique from './components/musique.vue';

  export default {
    components: {musique},
    name: 'app',
    methods:{
      submit(){
        console.log(this.msg);
        io.$emit('newMsg',this.msg);
      }
    },
    data(){
      return {
        msg: "",
        isConnected: false
      }
    },
    socket: {
      connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data
    }
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('pingServer', 'PING!')
    }
  }
}
</script>

<style lang="sass">

  .chat
    background-color: rgba(0,0,0,0.1)

  #app 
    display: flex
    flex-wrap: wrap
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

</style>
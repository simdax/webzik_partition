<template>
  <div id="app">
  <header>
    <div v-if="isConnected">
      T'es connecté !
    </div>
  </header>
    <div class="musique">
      <musique></musique>
      <musique></musique>
      <musique></musique>
      <musique></musique>      
    </div>
    <div class="chat">
      <textarea @keydown.13="submit" v-model="msg" placeholder="poutre du texte"></textarea>
      <div class="discussion">
        <ul>
          <li v-for="msg in discussion" v-text='msg'></li>
        </ul>
      </div>      
    </div>
  </div>
</template>

<script>

  import musique from './components/musique.vue';
  import {callbacks,socketObj} from './socket.js';

  export default {
    components: {musique},
    name: 'pa',
    data(){
      return {
        msg: "",
        discussion: [],
        isConnected: false
      }
    },
    socket: socketObj(this),
    created(){
      callbacks(this);
    },
    methods: {
      submit(){
        if (this.msg.length > 0) {
          this.$socket.emit('newMsg', this.msg)
          this.msg = '';
        }
      }
    }
}
</script>

<style lang="sass">

.dicussion
  overflow: scroll

.chat
  display: flex
  background-color: rgba(0,0,0,0.1)

main
  display: flex
  flex-wrap: wrap

#app 
  display: flex
  flex-direction: column
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
<template>
  <div id="app">
    <header>
      <h1>Go go Zi Zik</h1>
     <addBoiteZik @add="nb=nb+1"></addBoiteZik>
    </header>
    <main>
      <musique v-for='n in nb' :key='n' :i="n.toString()"></musique>
    </main>
    <footer>
      <chat ref="chat"></chat>  
    </footer>
  </div>
</template>

<script>

  import musique from './components/musique/main.vue';
  import chat from  './components/chat.vue';
  import addBoiteZik from  './components/header.vue';
  import {callbacks,socketObj} from './socket.js';

  export default {
    components: {musique, addBoiteZik, chat},
    name: 'app',
    data(){
      return {
        nb: 2,
        isConnected: false,
        discussion:[],
      }
    },
    socket: socketObj(this),
    created(){
      callbacks(this);
      this.$on('addZizik',()=> console.log("456"))
    },
  }
</script>

<style lang="sass">

  @import url("//fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400")

  body  
    font-family: 'Roboto'

  header  
    background-color: rgba(blue, 0.1)
    h1
      text-align: center
      font-size: 2rem
      font-family: 'Montserrat'
      

  main
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    font-size: 0.5rem

  footer:not(.modal-footer)  
    position: fixed
    bottom: 0
    width: 100vw

  #app 
    display: flex
    flex-direction: column
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

</style>
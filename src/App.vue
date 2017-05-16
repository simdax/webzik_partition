<template>
  <div id="app">
    <musique></musique>
    <musique></musique>
    <musique></musique>
    <musique></musique>
  </div>
</template>

<script>
  import musique from './components/musique.vue';
  import Tone from 'tone';
  Tone.Transport.start();
  export default {
    components: {musique},
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

  body{
    width: 100%;
    height: 100%;  
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }


</style>

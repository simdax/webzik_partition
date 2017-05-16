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

input[type=button]{
  display: inline-block;
  margin: auto;
  width: 120px;
  height: 120px;
}

#app {

  width: 100%;
  height: 100%;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}


</style>

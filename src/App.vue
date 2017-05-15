<template>
  <div id="app">
    <musique>

    </musique>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}


</style>

import Vue from 'vue'
import App from './App.vue'
import bs from 'bootstrap-vue'

Vue.use(bs);


new Vue({
  el: '#app',
  render: h => h(App)
})



import Tone from 'tone';
Tone.Transport.start();

import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import bs from 'bootstrap-vue';
Vue.use(bs);

import VueSocketIO from 'vue-socket.io';
export const SocketInstance = io();
Vue.use(VueSocketIO, SocketInstance);

import routerVue from 'vue-router';
Vue.use(routerVue);
import router from './router'

new Vue({
  el: '#app',
  router,
  // render: h => h(App),
})

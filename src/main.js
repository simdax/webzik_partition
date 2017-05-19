

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

new Vue({
  el: '#app',
  render: h => h(App),
})

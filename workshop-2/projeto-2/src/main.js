/**
 * Arquivo: main.js
 * Data: 16/12/2018
 * Descrição: arquivo responsável por lidar com toda a lógica de execução da app.
 * Author: Glaucia Lemos
 */
import Vue from 'vue';
import router from '@/middlewares/router';
import App from './App';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

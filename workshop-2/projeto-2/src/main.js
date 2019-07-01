// @ts-nocheck
/**
 * Arquivo: main.js
 * Data: 01/07/2019
 * Descrição: arquivo responsável por lidar com toda a lógica de execução da app.
 * Author: Glaucia Lemos
 */

import Vue from 'vue';
import router from './middlewares/router';
import App from './App';

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
});

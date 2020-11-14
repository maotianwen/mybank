import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/rem.js';
import './reset/reset.css';
import api from './utils/api';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './icons';
import Loading from './components/Loading.vue';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$AP = window.ap;
Vue.component('Loading', Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

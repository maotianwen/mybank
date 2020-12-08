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
import Header from './components/Header.vue';
import ContentTitle from './components/ContentTitle.vue';
// import AmapVue from '@amap/amap-vue';

// AmapVue.config.key = '75593ddd6a0038082579e6e189d9173b';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$AP = window.ap;
Vue.prototype.$showAlertToast = function() {
  console.log(this.$AP);
  this.$AP.showToast({
    content: '暂不支持此功能',
    duration: 1000
  });
};
Vue.component('Loading', Loading);
Vue.component('Header', Header);
Vue.component('ContentTitle', ContentTitle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

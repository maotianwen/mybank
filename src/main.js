import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/rem.js";
import "./reset/reset.css";
import api from "./utils/api";
import "mand-mobile/lib/mand-mobile.css";
import mandMobile from "mand-mobile";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(mandMobile);
Vue.prototype.api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

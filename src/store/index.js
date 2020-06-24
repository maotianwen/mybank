import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showWelcomePage: true
  },
  mutations: {
    haveWelcomed(state) {
      state.showWelcomePage = false;
    }
  },
  actions: {},
  modules: {}
});

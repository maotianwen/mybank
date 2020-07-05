import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showWelcomePage: true,
    isLogined: false,
    mainMenuIndex: 0
  },
  mutations: {
    haveWelcomed(state) {
      state.showWelcomePage = false;
    },
    login(state) {
      state.isLogined = true;
    },
    logout(state) {
      state.isLogined = false;
    },
    changeIndex(state, index) {
      state.mainMenuIndex = index;
    }
  },
  actions: {},
  modules: {}
});

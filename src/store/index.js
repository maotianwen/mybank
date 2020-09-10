import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showWelcomePage: true,
    isLogined: false,
    menuIndex: 4, //4代表在引导页
    customMenu: [
      { name: '网点服务', url: '', icon: 'bank-service', id: 0 },
      { name: '黄金', url: 'gold', icon: 'gold', id: 1 },
      { name: '贷款', url: '', icon: 'loan', id: 2 },
      { name: '基金', url: '', icon: 'fund', id: 3 },
      { name: '保险', url: '', icon: 'insurance', id: 4 },
      { name: '信用卡', url: '', icon: 'credit-card', id: 5 },
      { name: '债券', url: '', icon: 'debenture', id: 6 },
      { name: '跨境金融', url: '', icon: 'aboard-finance', id: 7 },
      { name: '热门活动', url: '', icon: 'popular-activity', id: 8 }
    ]
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
      state.menuIndex = index;
    }
  },
  actions: {},
  modules: {}
});

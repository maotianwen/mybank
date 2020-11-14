import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const arr = [
  {
    text: '理财推荐',
    url: 'gold/000216',
    id: 1,
    keywords: ['理', '财', '理财']
  },
  {
    text: '基金推荐',
    url: 'gold/160632',
    id: 2,
    keywords: ['基', '金', '基金']
  },
  {
    text: '黄金详情',
    url: 'gold/000216',
    id: 3,
    keywords: ['黄', '金', '黄金']
  },
  {
    text: '登录/注册',
    url: 'login',
    id: 4,
    keywords: ['注', '册', '注册', '登', '录', '登录']
  },
  {
    text: '查看我的消息',
    url: 'message',
    id: 5,
    keywords: ['我', '的', '消', '息', '我的', '消息', '我的消息']
  }
];

export default new Vuex.Store({
  state: {
    showWelcomePage: true,
    isLoading: false,
    isLogined: false,
    menuIndex: 4, //4代表在引导页
    customMenu: [
      { name: '网点服务', url: '', icon: 'bank-service', id: 0 },
      { name: '黄金', url: 'gold/000216', icon: 'gold', id: 1 },
      { name: '贷款', url: '', icon: 'loan', id: 2 },
      { name: '基金', url: '', icon: 'fund', id: 3 },
      { name: '保险', url: '', icon: 'insurance', id: 4 },
      { name: '信用卡', url: '', icon: 'credit-card', id: 5 },
      { name: '债券', url: '', icon: 'debenture', id: 6 },
      { name: '跨境金融', url: '', icon: 'aboard-finance', id: 7 },
      { name: '热门活动', url: '', icon: 'popular-activity', id: 8 }
    ],
    searchList: arr
  },
  mutations: {
    haveWelcomed(state) {
      state.showWelcomePage = false;
    },
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    login(state) {
      state.isLogined = true;
    },
    logout(state) {
      state.isLogined = false;
    },
    changeIndex(state, index) {
      state.menuIndex = index;
    },
    editMenu(state, newMenu) {
      state.customMenu = newMenu;
    }
  },
  actions: {},
  modules: {}
});

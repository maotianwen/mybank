import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Message from '../views/Message.vue';
import Search from '../views/Search.vue';
import About from '../views/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/gold/:id',
    component: () => import(/* webpackChunkName: "gold" */ '../views/Gold.vue')
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/transfermoney',
    component: () =>
      import(/* webpackChunkName: "transfer" */ '../views/TransferMoney.vue')
  },
  {
    path: '/all',
    component: () => {
      return import(/* webpackChunkName: "about" */ '../views/All.vue');
    }
  },
  {
    path: '/suggestion',
    component: () =>
      import(/* webpackChunkName: "suggestion" */ '../views/Suggestion.vue')
  },
  {
    path: '/mybankcard',
    component: () =>
      import(/* webpackChunkName: "bankcard" */ '../views/MyBankCard.vue')
  },
  {
    path: '/incomerecord',
    component: () =>
      import(/* webpackChunkName: "incomerecord" */ '../views/IncomeRecord.vue')
  },
  {
    path: '/nearbybank',
    component: () =>
      import(/* webpackChunkName: "nearbybank" */ '../views/NearbyBank.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;

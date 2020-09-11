import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Message from '../views/Message.vue';
import Search from '../views/Search.vue';
import TransferMoney from '../views/TransferMoney';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
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
    component: TransferMoney
  },
  {
    path: '/all',
    component: () => {
      console.log('alasd');
      return import(/* webpackChunkName: "about" */ '../views/All.vue');
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;

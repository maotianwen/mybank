import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Message from '../views/Message.vue';

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
    path: '/about/cash',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cash.vue')
  },
  {
    path: '/all',
    component: () => import(/* webpackChunkName: "about" */ '../views/All.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;

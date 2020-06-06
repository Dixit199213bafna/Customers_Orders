import Vue from 'vue';
import Router from 'vue-router';
import Customers from '../component/Customers/Customers';
import Orders from '../component/Orders/Orders';
import Auth from '../component/Auth/Auth';
import store from '../store/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next('/');
        }
      },
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next('/');
        }
      },
    },
    {
      path: '/',
      name: 'auth',
      component: Auth,
    },
    { path: '*', name: 'redirect', redirect: '/' },
  ],
});

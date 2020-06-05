import Vue from 'vue'
import Router from 'vue-router'
import Customers from '../component/Customers/Customers';
import Orders from '../component/Orders/Orders';
import Auth from "../component/Auth/Auth";
import store from "../store/store";
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/customers',
      component: Customers,
      beforeEnter (to, from, next) {
        if(store.state.auth.token) {
          next()
        } else {
          next('/');
        }
      }
    },
    {
      path: '/orders',
      component: Orders,
      beforeEnter (to, from, next) {
        if(store.state.auth.token) {
          next()
        } else {
          next('/');
        }
      }
    },
    {
      path: '/',
      component: Auth
    },
    { path: '*', redirect: '/' }
  ]
})

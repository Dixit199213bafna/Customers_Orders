import Vue from 'vue';
import Vuex from 'vuex';
import customers from "./modules/customer/customers";
import orders from "./modules/Orders/orders";
import auth from "./modules/Auth/Auth";
import * as actions from './actions'
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    customers,
    orders,
    auth
  }
})

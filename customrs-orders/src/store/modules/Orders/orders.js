/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  orders: [],
  orderDetail: null,
};

const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = [...orders];
  },
  SET_ORDER_DETAIL(state, orderDetail) {
    state.orderDetail = orderDetail;
  },
};

const actions = {
  setOrders: ({ commit }, orders) => {
    commit('SET_ORDERS', orders);
  },
};

const getters = {
  getOrders: state => state.orders,
  gorderDetail: state => state.orderDetail,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

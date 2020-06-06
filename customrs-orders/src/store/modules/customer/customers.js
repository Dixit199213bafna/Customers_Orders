/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  customers: [],
};

const mutations = {
  SET_CUSTOMERS(state, customers) {
    state.customers = customers;
  },
};

const actions = {
  setCustomers: ({ commit }, customers) => {
    commit('SET_CUSTOMERS', customers);
  },
};

const getters = {
  getCustomers: state => state.customers,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

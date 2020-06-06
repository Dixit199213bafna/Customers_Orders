import axios from 'axios';

export const loadCustomer = ({ commit }) => {
  axios.get('http://northwind.netcore.io/customers?format=json')
    .then((response) => {
      commit('SET_CUSTOMERS', response.data.customers);
    });
};

export const loadOrders = ({ commit }) => {
  axios.get('http://northwind.netcore.io/orders?format=json')
    .then((response) => {
      commit('SET_ORDERS', response.data.results);
    });
};

export const signIn = ({ commit }, userDetails) => {
  axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxFgCa7TeIBRri0g0KI5psi2oN_vsHrNc', userDetails)
    .then((response) => {
      commit('SET_TOKEN', response.data.idToken);
      window.localStorage.setItem('token', response.data.idToken);
    }).catch((e) => {
      commit('SET_ERROR', e.response.data.error.message);
    });
};

export const signUp = ({ commit }, userDetails) => {
  axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxFgCa7TeIBRri0g0KI5psi2oN_vsHrNc', userDetails)
    .then((response) => {
      commit('SET_TOKEN', response.data.idToken);
    }).catch((e) => {
      commit('SET_ERROR', e.response.data.error.message);
    });
};

export const fetchOrderDetail = ({ commit }, id) => {
  axios.get(`http://northwind.netcore.io/query/orders?Id=${id}&include=Total&format=json`)
    .then((response) => {
      commit('SET_ORDER_DETAIL', response.data.results[0]);
    });
};

import Vue from 'vue'
export const loadCustomer = ({ commit }) => {
  Vue.http.get('http://northwind.netcore.io/customers?format=json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        commit('SET_CUSTOMERS', data.customers);
      }
    })
};

export const loadOrders = ({ commit }) => {
  Vue.http.get('http://northwind.netcore.io/orders?format=json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        commit('SET_ORDERS', data.results);
      }
    })
};

export const signIn = ({ commit }, userDetails ) => {
  Vue.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxFgCa7TeIBRri0g0KI5psi2oN_vsHrNc', userDetails)
    .then(response => response.json())
    .then(data => {
      if (data) {
        commit('SET_TOKEN', data.idToken);
        localStorage.setItem('token', data.idToken)
      }
    }).catch(e => {
      commit('SET_ERROR', e.body.error.message);
  })
  console.log(userDetails);
}

export const signUp = ({ commit }, userDetails ) => {
  console.log(userDetails);
  Vue.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxFgCa7TeIBRri0g0KI5psi2oN_vsHrNc', userDetails)
    .then(response => response.json())
    .then(data => {
      if (data) {
        commit('SET_ORDERS', data.results);
      }
    })
}

export const fetchOrderDetail =({ commit }, id) => {
  Vue.http.get(`http://northwind.netcore.io/query/orders?Id=${id}&include=Total&format=json`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        commit('SET_ORDER_DETAIL', data.results[0]);
      }
    })
}

const state = {
  token : null,
  error: null,
}

const mutations = {
  'SET_TOKEN' (state, token) {
    state.error = null;
    state.token = token;
  },
  'SET_ERROR' (state, msg) {
    state.error = msg;
  }
}

const actions = {
  setToken: ({ commit }, token) => {
    commit('SET_TOKEN', token);
  }
}

const getters = {
  getToken : state => state.token,
  getErrorMsg: state => state.error,
}

export default {
  state,
  mutations,
  actions,
  getters
}

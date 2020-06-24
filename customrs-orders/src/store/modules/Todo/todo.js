/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  todoList: [],
};

const mutations = {
  CREATE_TODO(state, todo) {
    state.todoList = state.todoList.concat(todo);
  },
  EDIT_TODO(state, todo) {
    const todoList = [...state.todoList];
    todoList[todo.index].description = todo.description;
    state.todoList = [...todoList];
  },
  DELETE_TODO(state, index) {
    state.todoList = [...state.todoList.filter((_, id) => id !== index)];
  },
  SET_TODO(state, todoList) {
    state.todoList = [...todoList];
  },
};

const actions = {
  createTodo: ({ commit }, todo) => {
    debugger;
    commit('CREATE_TODO', todo);
  },
  editTodo: ({ commit }, todo) => {
    commit('EDIT_TODO', todo);
  },
  deleteTodo: ({ commit }, index) => {
    commit('DELETE_TODO', index);
  },
  setTodo: ({ commit }, todoList) => {
    commit('SET_TODO', todoList);
  },
};

const getters = {
  getTodoList: state => state.todoList,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

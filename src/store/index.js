import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, todo) {
      let index = state.todos.findIndex((item) => item.id === todo.id);
      state.todos[index] = todo;
    },
  },
  actions: {
    addTodo(context, todo) {
      context.commit("addTodo", todo);
    },
    updateTodo(context, todo) {
      context.commit("updateTodo", todo);
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  modules: {},
});

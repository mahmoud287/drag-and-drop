export const state = () => ({
  todos_list: [],
});

export const mutations = {
  RESET_TODOS(state) {
    state.todos_list = [];
  },
  SET_TODOS(state, todos_list) {
    state.todos_list.push(...todos_list);
  },
};

export const actions = {
  async fetch_todos_list({ commit }, page) {
    await this.$axios
      .get(`https://jsonplaceholder.typicode.com/comments?_page=${page}`)
      .then((response) => {
        commit("SET_TODOS", response.data);
      });
  },
};

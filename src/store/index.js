import { createStore } from 'vuex';

export default createStore({
  state: {
    msg: [],
  },
  mutations: {
    setMsg(state, payload) {
      state.msg.unshift(payload);
    },
  },
  actions: {
  },
  modules: {
  },
});

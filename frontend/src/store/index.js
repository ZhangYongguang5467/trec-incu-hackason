import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Define your state here
      user: null,
      isLoggedIn: false,
      token: ''
    };
  },
  mutations: {
    // Define methods to modify state (synchronous)
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    }
  },
  actions: {
    // Define async operations or complex logic
    loginUser({ commit }, userData) {
      // async operation, e.g., send login request
      commit('setUser', userData);
    }
  },
  getters: {
    // Define computed properties
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    currentUser(state) {
      return state.user;
    },
    accessToken(state) {
      return state.token;
    }
  }
});

export default store;

// stores/user.js
import { defineStore } from 'pinia';
export * from './user';
export * from './search';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    logout() {
      this.user = null;
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
  }
});

import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchResults: [],
    query: ''
  }),
  actions: {
    setSearchResults(results) {
      this.searchResults = results;
    },
    setQuery(query) {
      this.query = query;
    }
  }
});

<template>
    <div class="search-container">
      <input v-model="query" @keyup.enter="searchMovies" placeholder="Пошук за назвою..." class="search-input" />
      <select v-model="type" class="search-select">
        <option value="">Все</option>
        <option value="movie">Фільм</option>
        <option value="series">Серіал</option>
        <option value="episode">Епізод</option>
      </select>
      <input v-model="year" type="number" placeholder="Рік випуску" class="search-input" />
      <Button @click="searchMovies" label="Знайти" icon="pi pi-search" class="search-button" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useSearchStore } from '../stores/search';
  import Button from 'primevue/button';
  import { useRouter } from 'vue-router';
  
  export default {
components: {
    Button
  },
    data() {
      return {
        query: '',
        type: '',
        year: '',
        page: 1
      };
    },
    methods: {
      async searchMovies() {
        if (this.query) {
          try {
            const params = {
              s: this.query,
              type: this.type,
              y: this.year,
              r: 'json',
              page: this.page,
              apikey: 'e5d82999'
            };
  
            Object.keys(params).forEach(key => {
              if (!params[key]) {
                delete params[key];
              }
            });
  
            const response = await axios.get('http://www.omdbapi.com/', { params });
            console.log(response.data);
            if (response.data.Response === "True") {
              const searchResults = await Promise.all(response.data.Search.map(async (movie) => {
                const movieDetails = await axios.get('http://www.omdbapi.com/', {
                  params: {
                    i: movie.imdbID,
                    apikey: 'e5d82999'
                  }
                });
                return {
                  ...movie,
                  Director: movieDetails.data.Director
                };
              }));
  
              const searchStore = useSearchStore();
              searchStore.setSearchResults(searchResults);
              this.$router.push('/results');
            } else {
              console.error('No results found');
            }
          } catch (error) {
            console.error('Error fetching data from API', error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
  }
  
  .search-input,
  .search-select {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
  }
  
  .search-input:focus,
  .search-select:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .search-button {
    width: 100%;
    max-width: 400px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  </style>
  
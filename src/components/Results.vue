<template>
    <div class="results-container">
      <h1 class="results-title">Результат пошуку за запитом</h1>
      <div v-if="searchResults.length > 0" class="results-grid">
        <div v-for="movie in searchResults" :key="movie.imdbID" class="movie-card">
          <img :src="movie.Poster" alt="Poster" class="movie-poster" />
          <h2 class="movie-title">{{ movie.Title }}</h2>
          <p class="movie-director"><strong>Director:</strong> {{ movie.Director }}</p>
          <p class="movie-year"><strong>Year:</strong> {{ movie.Year }}</p>
        </div>
      </div>
      <div v-else class="no-results">
        <p>Фільм не знайдено</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useSearchStore } from '../stores/search';
  
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: []
      };
    },
    created() {
      const searchStore = useSearchStore();
      this.searchResults = searchStore.searchResults;
      this.searchQuery = searchStore.query || ''; 
    }
  };
  </script>
  
  <style scoped>
  .results-container {
    padding: 30px;
  }
  
  .results-title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .results-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
  
  .movie-card {
    width: 200px;
    padding: 10px;
    margin: 9px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .movie-poster {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .movie-title {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .movie-director,
  .movie-year {
    margin: 5px 0;
  }
  
  .no-results {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: red;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    .movie-card {
        width: 100%;
    }
}
  </style>
  
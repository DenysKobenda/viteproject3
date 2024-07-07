<template>
  <div class="details-container">
    <div v-if="movie">
      <h1>{{ movie.Title }}</h1>
      <img :src="movie.Poster" alt="Poster" class="movie-poster" />
      <p><strong>Director:</strong> {{ movie.Director }}</p>
      <p><strong>Year:</strong> {{ movie.Year }}</p>
      <p><strong>Genre:</strong> {{ movie.Genre }}</p>
    </div>
    <div v-else>
      <p>Завантаження...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null
    };
  },
  created() {
    this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      const movieId = this.$route.params.id;
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=e5d82999`);
        const data = await response.json();
        this.movie = data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
  }
};
</script>

<style scoped>
.details-container {
  padding: 30px;
}

.movie-poster {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}

p {
  margin: 5px 0;
}
</style>

<template>
<div class="sidebar_container">
    <div class="sidebar">
      <h2>Пошук</h2>
      <Search /> 
    </div>
      <div class="sidebar">
        <h2>Новини</h2>
        <span>12.01.2024</span>
        <p>Ми запустили розширений пошук!</p>
        <router-link to="#">читати</router-link>
      </div>
      <div class="sidebar">
        <h2>Рейтинг фільмів</h2>
        <ul>
          <li><router-link to="/interstellar">Інтерстеллар</router-link><span class="rating_sidebar">8.1</span></li>
          <li><router-link to="/matrix">Матриця</router-link><span class="rating_sidebar">8.0</span></li>
          <li><router-link to="/max">Шалений Макс</router-link><span class="rating_sidebar">7.5</span></li>
          <li><router-link to="/cloud">Хмарний атлас</router-link><span class="rating_sidebar">7.4</span></li>
        </ul>
      </div>
      <div class="sidebar">
        <h2>Рейтинг серіалів</h2>
        <ul>
          <li><router-link to="/got">Ігра престолів</router-link><span class="rating_sidebar">9.5</span></li>
          <li><router-link to="/sherlok">Шерлок</router-link><span class="rating_sidebar">9.2</span></li>
          <li><router-link to="/haus">Доктор Хаус</router-link><span class="rating_sidebar">8.7</span></li>
          <li><router-link to="/supernatural">Надприроднє</router-link><span class="rating_sidebar">8.6</span></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
import Search from './Search.vue';

export default {
  name: 'Sidebar',
  components: {
    Search
  }
};
  </script>
  
  <style scoped>
  </style>
  

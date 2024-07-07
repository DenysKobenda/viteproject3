<template>
    <div class="site_content">
      <Sidebar />
      <div class="content">
        <h1 class="search">Пошук кіно та серіалів</h1>
        <Search />
        <h1>Нові фільми</h1>
        <div class="films_block">
          <router-link to="/matrix"><img src="./img/matrix.png" alt="Matrix"></router-link>
          <router-link to="/max"><img src="./img/max.png" alt="Max"></router-link>
          <router-link to="/interstellar"><img src="./img/inter.png" alt="Interstellar"></router-link>
          <router-link to="/cloud"><img src="./img/cloud.png" alt="Cloud Atlas"></router-link>
        </div>
        <h1>Топ серіали</h1>
        <div class="serial_block">
          <router-link to="/got"><img src="./img/1.png" alt="Game of Thrones"></router-link>
          <router-link to="/haus"><img src="./img/2.png" alt="House"></router-link>
          <router-link to="/sherlok"><img src="./img/3.png" alt="Sherlock"></router-link>
          <router-link to="/supernatural"><img src="./img/4.png" alt="Supernatural"></router-link>
        </div>
        <div class="posts">
          <hr>
          <h2><router-link to="#">Як знімали Інтерстеллар</router-link></h2>
          <div class="posts_content">
            <p>45 років виповнилося Крістофору Нолану – одному з найуспішніших режисерів нашого часу, чиї роботи однаково улюблені як вимогливими критиками, так і простими глядачами. Фільмом спочатку займалася студія Paramount. Коли Крістофер Нолан посів місце режисера, студія Warner Bros., яка випускала його останні фільми, досягла участі в проекті.</p>
          </div>
          <p><router-link to="#">читати</router-link></p>
          <hr>
          <h2><router-link to="#">Актор Том Хенкс поділився враженнями про фестиваль</router-link></h2>
          <div class="posts_content">
            <p>16 лютого в Лондоні відбулася 67 церемонія вручення нагород Британської кіноакадемії. Леонардо ДіКапріо, Бред Пітт, Анджеліна Джолі, Кейт Блакшетт, Хелен Міррен, Емі Адамс, Крістіан Бейл, Альфонсо Куарон та інші гості та переможці премії – у нашому репортажі.</p>
          </div>
          <p><router-link to="#">читати</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';
  import Search from '../components/Search.vue';
  
  export default {
    components: {
      Sidebar,
      Search
    }
  };
  </script>
  
  <style scoped>
    .search-container {
        display: none;
    }
    .search {
        display: none;
    }
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    .search-container {
        display: block;
        width: 100%;
        text-align: center;
        padding: 0px 20px 20px 20px;
    }
    .search {
        display:block;
    }
}
  </style>
  
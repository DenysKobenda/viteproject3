<template>
    <div class="footer">
      <p>
        <router-link to="/">Головна</router-link> |
        <router-link to="/films">Фільми</router-link> |
        <router-link to="/series">Серіали</router-link> |
        <router-link to="/rating">Рейтинг фільмів</router-link> |
        <router-link to="/contacts">Контакти</router-link> |
        <router-link to="/register">Реєстрація</router-link> 
      </p>
      <p>wh-db.com 2024</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
    @media only screen and (max-width: 900px) {
    .footer {
        width: 100%;
        height: auto;
    }
    .footer p {
        margin-inline: 10px;
    }
  }
  </style>
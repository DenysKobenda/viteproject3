<template>
    <div class="header">
      <div class="logo">
        <div class="logo_text">
          <h1>MovieFinder</h1>
          <h2>Кіно - наша пристрасть!</h2>
        </div>
      </div>
      <div class="menubar">
        <div class="burger-menu" @click="toggleMenu">
          <div class="burger"></div>
          <div class="burger"></div>
          <div class="burger"></div>
        </div>
        <ul class="menu" :class="{ 'active': menuOpen }">
          <li><router-link to="/" @click.native="closeMenu">Головна</router-link></li>
          <li><router-link to="/films" @click.native="closeMenu">Фільми</router-link></li>
          <li><router-link to="/series" @click.native="closeMenu">Серіали</router-link></li>
          <li><router-link to="/rating" @click.native="closeMenu">Рейтинг фільмів</router-link></li>
          <li><router-link to="/contacts" @click.native="closeMenu">Контакти</router-link></li>
          <li><router-link to="/register" @click.native="closeMenu">Реєстрація</router-link></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      closeMenu() {
        this.menuOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #254e32;
    height: 185px;
    font-size: 0.8em;
    margin-left: 0px;
    margin-right: 0px;
    position: relative; 
  }
  
  .logo {
    width: 880px;
    padding-bottom: 40px;
  }
  
  .logo h1,
  .logo h2 {
    font: normal 300% 'century gothic', arial, sans-serif;
    margin: 0;
    color: #fff;
  }
  
  .logo h2 {
    font-size: 0.9em;
    color: #999;
  }
  
  .menubar {
    width: 100%;
    max-width: 900px; 
    margin: 0 auto; 
  }
  
  .burger-menu {
    cursor: pointer;
    position: absolute; 
    top: 20px; 
    right: 20px; 
  }
  
  .burger {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    transition: transform 0.3s ease;
  }
  
  .menu {
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: #254e32;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  
  .menu.active {
    display: flex;
    transform: translateY(0); 
    margin-top: 30px;
  }
  
  .menu li {
    padding: 10px 0;
  }
  
  .menu router-link {
    font: normal 100% 'trebuchet ms', sans-serif;
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
  }
  
  .menu router-link:hover {
    color: #e4ec04;
  }
  
  .router-link-active {
    color: #e4ec04;
  }
  
  @media only screen and (min-width: 601px) {
    .burger-menu {
      display: none; 
    }
  
    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: static;
      transform: translateY(0);
      background-color: transparent;
      width: auto;
    }
  
    .menu.active {
      display: flex;
    }
  }
  
  @media only screen and (max-width: 600px) {
    .header {
      height: auto;
    }
  
    .menubar {
      width: 100%;
    }
  
    .logo {
      width: 100%;
      padding-bottom: 20px;
      padding-top: 20px;
    }
  
    .burger-menu {
      display: block; 
    }
  
    .menu {
      display: none;
    }
  }
  </style>
  

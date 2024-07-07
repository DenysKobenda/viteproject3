<template>
    <div class="site_content">
    <Sidebar />
        <div class="content">
            <div class="info_film">
                <img src="./img/1.png">
                <h2>Гра престолів</h2>
                <p>Дії серіалу відбуваються на тлі політичних інтриг та боротьби за владу. Король Семи Королівств, Роберт Баратіон, просить свого друга Еддарда Старка стати десницею короля - головним його радником. Він погоджується на цю посаду і підозрює, що його попередника було вбито.</p>
                <div class="button"><router-link to="/got">Дивитися</router-link></div>
                <div class="genre" hidden>Фентезі</div>
                <div class="year" hidden>2011</div>
                <div class="rating" hidden>9.5</div>
            </div>
            <div class="info_film">
                <img src="./img/2.png">
                <h2>Доктор Хаус</h2>
                <p>Серіал Доктор Хаус розповідає нам про команду лікарів, які мають поставити правильний діагноз пацієнтові та врятувати йому життя. Сам серіал за жанром є медичним детективом з елементами драми.</p>
                <div class="button"><router-link to="/haus">Дивитися</router-link></div>
                <div class="genre" hidden>Драма</div>
                <div class="year" hidden>2004</div>
                <div class="rating" hidden>8.8</div>
            </div>
            <div class="info_film">
                <img src="./img/3.png">
                <h2>Шерлок</h2>
                <p>Знаменитий детектив з Бейкер Стріт не любить сидіти, склавши руки. Допомагає Шерлоку Холмсу вірний товариш, лікар за освітою та письменник за покликанням – Ватсон. Водночас ця парочка розкриває гучні злочини, підтримуючи спокійне життя у Лондоні.</p>
                <div class="button"><router-link to="/sherlok">Дивитися</router-link></div>
                <div class="genre" hidden>Детектив</div>
                <div class="year" hidden>2010</div>
                <div class="rating" hidden>9.2</div>
            </div>
            <div class="info_film">
                <img src="./img/4.png">
                <h2>Надприродне</h2>
                <p>Це історія про двох братів Сема і Діна, які подорожують на своєму чорному автомобілі Chevrolet Impala США розслідуючи різні паранормальні явища і борючись з породженням зла, такими як примари або демони.</p>
                <div class="button"><router-link to="/supernatural">Дивитися</router-link></div>
                <div class="genre" hidden>Драма</div>
                <div class="year" hidden>2005</div>
                <div class="rating" hidden>8.6</div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';
  
  export default {
    components: {
      Sidebar
    }
  };
  </script>
  
  <style scoped>
    .info_film .button {
    background-color: #7268ad;
    color: white;
    border-radius: 5px;
    float: right;
    clear: both;
    font-size: 0.8em;
    padding: 10px;
    margin-top: 0px;
    }
  </style>
  
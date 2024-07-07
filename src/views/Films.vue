<template>
    <div class="site_content">
    <Sidebar />
        <div class="content">
            <div class="info_film">
                <img src="./img/inter.png">
                <h2>Інтерстеллар</h2>
                <p>Коли посуха приводить людство до продовольчої кризи, колектив дослідників і вчених вирушає крізь чортовину (яка імовірно з'єднує області простору-часу через велику відстань) у подорож, щоб перевершити колишні обмеження для космічних подорожей людини і переселити людство на іншу.</p>
                <div class="button"><router-link to="/interstellar">Дивитися</router-link></div>
                <div class="genre" hidden>Фантастика</div>
                <div class="year" hidden>2014</div>
                <div class="rating" hidden>8.1</div>
            </div>
            <div class="info_film">
                <img src="./img/max.png">
                <h2>Шалений Макс</h2>
                <p>У недалекому майбутньому, після великої катастрофи, що вразила нашу урбаністичну цивілізацію, все життя зосередилося вздовж численних магістралей. Дорога стала способом існування. І дала багатьом можливість виявляти свої найжорстокіші інстинкти. Банда байкерів на потужних мотоциклах, бажаючи розрахуватись за свого вбитого товариша, переслідує молодого поліцейського Макса.</p>
                <div class="button"><router-link to="/max">Дивитися</router-link></div>
                <div class="genre" hidden>Пригоди</div>
                <div class="year" hidden>2015</div>
                <div class="rating" hidden>7.5</div>
            </div>
            <div class="info_film">
                <img src="./img/matrix.png">
                <h2>Матриця</h2>
                <p>Неймовірний фантастичний бойовик, у якому суперкінематографічне сімейство Вачовські нарешті розповіло нам, як ми живемо насправді. Отже, чи ти здатний вибрати червону таблетку, можна дізнатися, якщо подивитися «Матрицю» онлайн. Ця картина не така проста, як здається. Тут і вічні біблійні алюзії, ідеї Вільяма Гібсона і Артура Кларка, і індійський епос, круто перемішані з японськими коміксами манга і бойовиками Джона Ву.</p>
                <div class="button"><router-link to="/matrix">Дивитися</router-link></div>
                <div class="genre" hidden>Бойовик</div>
                <div class="year" hidden>2004</div>
                <div class="rating" hidden>8</div>
            </div>
            <div class="info_film">
                <img src="./img/cloud.png">
                <h2>Хмарний атлас</h2>
                <p>Шість історій, які таємниче пов'язані одна з одною. Всі вони про шість реінкарнацій однієї душі, народженої в нашому світі в різні часові відрізки.</p>
                <div class="button"><router-link to="/cloud">Дивитися</router-link></div>
                <div class="genre" hidden>Історичний</div>
                <div class="year" hidden>2012</div>
                <div class="rating" hidden>7.4</div>
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
  